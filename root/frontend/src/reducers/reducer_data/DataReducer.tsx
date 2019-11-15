import {Data} from './Data';
import {DataActionTypes} from './Actions';
import {FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, FETCH_CITIES_BEGIN, FETCH_CITIES_ERROR, FETCH_CITIES_SUCCESS} from './Actions';

const DataReducerDefaultState: Data={
    Advertisements:null,
    isFetching :false,
    Cities: null
}

const DataReducer = (
    state = DataReducerDefaultState,
    action: DataActionTypes): Data => {
    switch (action.type) {
        case FETCH_DATA_BEGIN:
            return {...state, isFetching:true}
        case FETCH_DATA_SUCCESS:
          
            return {...state, Advertisements:action.advertisements, isFetching:false}
        case FETCH_DATA_ERROR:
            return {...state, isFetching:false}
        case FETCH_CITIES_BEGIN:
            return state
        case FETCH_CITIES_SUCCESS:
            return {...state, Cities: action.cities }
        case FETCH_CITIES_ERROR:
            return state
        
        default:
            return state
    }
}

export { DataReducer }
