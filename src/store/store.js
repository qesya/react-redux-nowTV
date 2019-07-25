import { combineReducers, createStore } from 'redux'

const SET_MEMBERS_ACTION = 'SET_MEMBERS';
const SET_MESSAGES_ACTION = 'SET_MESSAGES';
const INITIAL_MEMBERS_DATA = {
  data: []
};
const INITIAL_MESSAGES_DATA = {
  data: []
};

export const setMembersActionCreator = payload => ({
  type: SET_MEMBERS_ACTION,
  payload
});

export const setMessagesActionCreator = payload => ({
  type: SET_MESSAGES_ACTION,
  payload
});

export const selectMessages = state => state.messages;
export const selectMembers = state => state.members;

const members = (state = INITIAL_MEMBERS_DATA, action) => {
  switch (action.type) {
    case SET_MEMBERS_ACTION:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

const messages = (state = INITIAL_MESSAGES_DATA, action) => {
  switch (action.type) {
    case SET_MESSAGES_ACTION:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state
  }

};

const store = createStore(
  combineReducers({ members, messages }));

export default store
