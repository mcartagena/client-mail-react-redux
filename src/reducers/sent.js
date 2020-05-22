import { READ_SENT_MAIL } from "../actions/sentMail.js";
import { STORE_SENT_MAIL, DELETE_SENT_MAIL } from "../actions/sentMail.js";

let initialState = {};
initialState.id = 1001;
initialState.data = [
  {
    id: 1000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "This is a sent mail",
    time: "2018-01-23T18:25",
    body: "All your mails that are successfullly sent will be listed here"
  }
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_SENT_MAIL:
      return state;
    case STORE_SENT_MAIL:
      let newElement = [];
      if (state.data) {
        newElement = state.data;
      }
      newElement = [
        ...newElement,
        {
          id: initialState.id,
          from: action.payload.from,
          to: action.payload.to,
          subject: action.payload.subject,
          time: action.payload.time==""?new Date().toUTCString():action.payload.time,
          body: action.payload.body
        }];
      return {
        ...state,
        id:parseInt(initialState.id)+1,
        data: newElement
      };
    case DELETE_SENT_MAIL:

      let newStateDeleted = state.data;
      newStateDeleted = newStateDeleted.filter((el, index, arr) => {
        return el.id != action.payload;
      }
      );

      return {
        ...state,
        id:parseInt(initialState.id)+1,
        data: newStateDeleted
      };

    default:
      return state;
  }
};