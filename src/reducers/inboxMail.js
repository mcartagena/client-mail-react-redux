import {RECEIVE_INBOX_DATA} from "../actions/inboxMail.js"

export default (state={},{type,inboxData}) => {
  switch(type){
    case RECEIVE_INBOX_DATA:
      let newState = {
         id: inboxData.id,
         from: inboxData.from,
         to: inboxData.to,
         subject: inboxData.subject,
         time: inboxData.time,
         body: inboxData.body
      }

      return { 
        ...state,
        ...newState
      };
    default:
      return state;
  }
};