import { InterfaceActionTypes} from '../reducer_userinterface/Actions';
import {AuthorizationActionTypes} from '../reducer_authorization/Actions';
import {DataActionTypes} from '../reducer_data/Actions';
import {PostActionTypes} from '../reducer_post/Actions'; 
export type AllActionTypes =
        | InterfaceActionTypes
        | AuthorizationActionTypes
        | DataActionTypes
        | PostActionTypes


export type AllAppActions = AllActionTypes

