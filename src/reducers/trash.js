import {
  READ_TRASH_MAIL,
  STORE_TRASH_MAIL,
  RESTORE_TRASH_MAIL
} from "../actions/delete.js";

let initialState = {};
initialState.id = 3001;
initialState.data = [
  {
    id: 3000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Trash mail",
    folder: "sent",
    folderId: "2",
    time: "2018-01-23T18:25",
    body: "you can restore this"
  }
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_TRASH_MAIL:

      if (state.data) {
        return state;
      } else {
        return initialState;
      }
    case STORE_TRASH_MAIL:
      /*
      if (action.payload.folder == "inbox") {
          
          var found = false;
          for (var i = 0; i < initialState.data.length; i++) {
            if (
              initialState.data[i].folderId == action.payload.folderId &&
              initialState.data[i].folder == "inbox"
            ) {
              found = true;
              console.log(initialState.data[i].folderId);
              break;
            }
          }
          if (!found) { */
      let newElement = [];
      if(state.data){
        newElement = state.data;
      }
      newElement = [
        ...newElement,        
        {
          id: state.id?state.id:initialState.id,
          from: action.payload.from,
          to: action.payload.to,
          subject: action.payload.subject,
          folder: action.payload.folder,
          folderId: action.payload.folderId,
          time: action.payload.time,
          body: action.payload.body
        }];
      return {
        ...state,
        id:state.id?parseInt(state.id)+1:parseInt(initialState.id)+1,  
        data: newElement
      };
    /*
            }
          } else {
            
            return initialState;
            break;
          }  */

    case RESTORE_TRASH_MAIL:

      let newStateRestored = state.data;
      newStateRestored = newStateRestored.filter((el, index, arr) => { 
        return el.id != action.payload; }
        );
      
      return {
        ...state,
        id:state.id?parseInt(state.id)+1:parseInt(initialState.id)+1,
        data: newStateRestored
      };
    default:
      return state;
  }
};