import axios from 'axios';

// Add new projects
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILED = 'ADD_PROJECT_FAILED';

export const addProject = (project) => dispatch => {
  const authHeader = 'Bearer ' + JSON.parse(localStorage.getItem('admin')).token
  const formData = new FormData()
  for(let key in project) {
    formData.append(key, project[key])
  }
  axios.post(
    '/api/projects/new',
    formData,
    { headers: { Authorization: authHeader}})
    .then(newProject => {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: newProject
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_PROJECT_FAILED,
        payload: err.response.data
      })
    })
}

// Fetch all projects
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILED = 'GET_PROJECTS_FAILED';

export const getProjects = () => dispatch => {
  axios.get('/api/projects/all')
  .then(projects => {
    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: projects
    })
  })
  .catch(err => {
    dispatch({
      type: GET_PROJECTS_FAILED,
      payload: err,
    })
  })
}