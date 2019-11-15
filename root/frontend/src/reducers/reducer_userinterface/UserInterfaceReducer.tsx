
import {InterfaceActionTypes} from './Actions';
import {UserInterface} from './UserInterface';
import {DEBUG_ACTION, TOGGLE_NAVTOP, OPEN_MODAL, CLOSE_MODAL} from './Actions';

const InterfaceReducerDefaultState: UserInterface={
     content: "",
     isNavtopOpened: true, 
     isModalOpened: false,
     modalImages: null,
};

const InterfaceReducer=(
state=InterfaceReducerDefaultState,
action:InterfaceActionTypes):UserInterface=>{
switch(action.type){
     case TOGGLE_NAVTOP:
          return {...state, isNavtopOpened:!state.isNavtopOpened}
     case DEBUG_ACTION:
         
          return state
     case OPEN_MODAL:
          return {...state, modalImages:action.images, isModalOpened:true}
     case CLOSE_MODAL:
          return {...state, modalImages:null, isModalOpened:false}
     default:
          return state
     }
}

export {InterfaceReducer}
