import {PostTypes} from './PostTypes';
import {PostActionTypes} from './Actions';
import {POST_ADD_SELECT_BEGIN, POST_ADD_SELECT_SUCCESS, POST_ADD_SELECT_ERROR} from './Actions';


const PostReducerDefaultState: PostTypes={

}

const PostReducer =(
    state = PostReducerDefaultState,
    action: PostActionTypes): PostTypes=>{
        switch(action.type){
            case POST_ADD_SELECT_BEGIN:
                return state
            case POST_ADD_SELECT_SUCCESS:
                return state
            case POST_ADD_SELECT_ERROR:
                return state

            default:
                return state
        }

    }


export {PostReducer}