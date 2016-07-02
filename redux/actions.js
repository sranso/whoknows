export const ADD_CONVERSATION = 'ADD_CONVERSATION';

export function addConversation(conversation) {
  return {
    type: ADD_CONVERSATION,
    payload: conversation
  }
}
