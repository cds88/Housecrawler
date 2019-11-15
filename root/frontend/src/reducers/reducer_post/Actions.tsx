export const POST_ADD_SELECT_BEGIN="POST_ADD_SELECT_BEGIN"
export const POST_ADD_SELECT_SUCCESS = "POST_ADD_SELECT_SUCCESS"
export const POST_ADD_SELECT_ERROR = "POST_ADD_SELECT_ERROR"


export interface PostAddSelectBegin{
    type: typeof POST_ADD_SELECT_BEGIN
}

export interface PostAddSelectSuccess{
    type: typeof POST_ADD_SELECT_SUCCESS
}

export interface PostAddSelectError{
    type: typeof POST_ADD_SELECT_ERROR
}



export type PostActionTypes=
    | PostAddSelectBegin
    | PostAddSelectSuccess
    | PostAddSelectError

export type AppActions = PostActionTypes;