import { READ_DRAFT_MAIL, STORE_DRAFT_MAIL, DELETE_DRAFT_MAIL, RESTORE_DRAFT_MAIL } from "../actions/draft.js";

let initialState = {};
initialState.id = 2001;
initialState.data = [
  {
    id: 2000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Draft mail",
    time: "2018-01-23T18:25",
    body: "you can edit this"
  }
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_DRAFT_MAIL:
      return state;
    case STORE_DRAFT_MAIL:

      /* var found = false;
      for (var i = 0; i < initialState.data.length; i++) {
        if (initialState.data[i].id == action.payload.id) {
          initialState.data[i] = action.payload
          found = true;
          break;
        }
      }
      if (!found) { }

      return initialState;
      break; */

      let newElement = [];
      if (state.data) {
        newElement = state.data;
      }
      newElement = [
        ...newElement,
        {
          id: action.payload.id,
          from: action.payload.from,
          to: action.payload.to,
          subject: action.payload.subject,
          folder: action.payload.folder,
          folderId: action.payload.folderId,
          time: action.payload.time,
          body: action.payload.body
        }];
      console.log("STORE_DRAFT_MAIL ****", state);
      return {
        ...state,
        data: newElement
      };

    case DELETE_DRAFT_MAIL:

      let newStateDeleted = state.data;
      newStateDeleted = newStateDeleted.filter((el, index, arr) => {
        return el.id != action.payload;
      }
      );

      return {
        ...state,
        data: newStateDeleted
      };

    case RESTORE_DRAFT_MAIL:

      let newRefactor = [];
      if (state.data) {
        newRefactor = state.data;
      }
      newRefactor = [
        ...newRefactor,
        {
          id: action.payload.id,
          from: action.payload.from,
          to: action.payload.to,
          subject: action.payload.subject,
          folder: action.payload.folder,
          folderId: action.payload.folderId,
          time: action.payload.time,
          body: action.payload.body
        }];
      console.log("RESTORE_DRAFT_MAIL ****", newRefactor);
      return {
        ...state,
        data: newRefactor
      };

    default:
      return state;
  }
};