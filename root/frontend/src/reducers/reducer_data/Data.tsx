 
export interface Data{
    Advertisements:Advertisement[];
    
    isFetching: boolean;
    Cities: City[]
}


export interface Advertisement{
    id: number;
    city_name: string;
    title: string;
    price: string;
    description: string;
    thumb: string;
    gallery: string;
    size: string;
    adress: string;
    dateCreated: string;


}


export interface City{
    id:number;
    title: string;
    size?: string;
    population?:string;
    density?:string;
}