import { RECEIVE_API_DATA, DELETE_INBOX_MAIL } from "../actions/inbox.js"

let initialState = {};

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:

      let newState = action.payload.map(el => (
        {
          id: el.id,
          from: el.from,
          to: el.to,
          subject: el.subject,
          time: el.time
        }
      ));

      console.log("reducer ...", newState);

      return {
        ...state,
        data: newState
      };

    case DELETE_INBOX_MAIL:


      return initialState;
      break;



    default:
      return state;
  }
};