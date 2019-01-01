import {
  ADD_PROJECT_SUCCESS,
  GET_PROJECTS_SUCCESS,
} from '../actions/projects';

const initialState = {
  projects: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        newProject: action.payload
      }
    case GET_PROJECTS_SUCCESS:
      return action.payload
    default:
      return state;
  }
}