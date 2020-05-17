import { STORE_COMPOSE_MAIL } from "../actions/compose.js";

let initialState = {};
initialState.data = {
  id: "",
  from: "user@tcs.com",
  to: "",
  subject: "",
  time: "",
  body: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_COMPOSE_MAIL:
      console.log("STORE_COMPOSE_MAIL");
      if (action.payload) {
        let compose = {
            ...state,
            data: {
              id: action.payload.id,
              from: action.payload.from,
              to: action.payload.to,
              subject: action.payload.subject,
              time: action.payload.time,
              body: action.payload.body
            }
        };

        return compose;
      } else {
        return initialState;
      }
    default:
      return null;
  }
}; 