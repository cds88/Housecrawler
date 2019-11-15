import scrapy
from scrapy.crawler import CrawlerProcess
from backend.models import Advertisement, City
 

class OlxSpider(scrapy.Spider):
    name = 'olx'
    allowed_domains = ['olx.pl']
    start_urls = [x.url() for x in City.objects.all()]

    def parse(self, response): 
        ab = response.request.url

        ab = ab.split('/')[-2]
        ab = ab.capitalize()
        
        urls = response.css(
            'tr.wrap a.marginright5.link.linkWithHash::attr(href)').extract()
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse_details, meta={'location':ab} )
        next_link = response.css(
            'span.fbold.next>a.link::attr(href)').extract_first()
        if not next_link:   
            yield scrapy.Request(url=next_link, callback=self.parse, dont_filter=True)

    def parse_details(self, response):
        name = response.css('div.offer-titlebox>h1::text').extract_first()
        price = response.css('div.price-label>strong::text').extract_first()
        description = "".join(response.css('div#textContent::text').extract())
        gallery = response.css('div.photo-glow>img::attr(src)').extract()
        gallery = str(gallery)
        gallery = gallery.replace("'","")
        gallery = gallery.replace("]","")
        gallery = gallery.replace("[","")
    
        main_image = response.css(
            'div#photo-gallery-opener>img::attr(src)').extract_first()
        adress = "".join(response.css('address')[0].css('::text').extract())
        adress = adress.replace('Pokaż na mapie', '')
        adress = adress.replace('\n', '')
        results = []
         
        id_olx = response.css('em>small::text').extract_first()
        id_olx = id_olx.replace('ID ogłoszenia:', '')
        id_olx = id_olx.replace(' ', '')
        views = response.css(
            'div.pdingtop10>strong::text').extract_first()
        for i in response.css('td.col'):
            temp = i.css('::text').extract()
            temp = map(lambda x: x+' ', temp)
            temp = "".join(temp)
            temp = temp.replace('\n', '')
            temp = temp.replace('\t', '')
            results.append(temp)
        seller = results[0].replace('Oferta od', '')
        level = results[1].replace('Poziom', '')
        furnished = results[2].replace('Umeblowane', '')
        construction_type = results[3].replace('Rodzaj zabudowy', '')
        size = results[4].replace('Powierzchnia', '')
        room_count = results[5].replace('Liczba pokoi', '')
        price = int(''.join(i for i in price if i.isdigit()))
        rent = results[6].replace('Czynsz (dodatkowo)', '')
        rent = int(''.join(i for i in rent if i.isdigit()))
        date_added = ("".join(response.css(
            '.offer-titlebox__details em::text').extract())).split(',')[1]
        url = response.request.url
    
        city = City.objects.get(title=response.meta['location'])
        content = Advertisement(city=city, title=name, price=price, description=description,
                                thumb=main_image, gallery=gallery, size=size, adress=adress)
        content.save()

  


def startCrawler():
    process = CrawlerProcess({
        'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
    })

    process.crawl(OlxSpider)
    process.start()

