import { fetchWrapper } from '../helpers/fetchWrapper'

// const baseUrl = 'http://localhost:4000/dish'
const baseUrl = 'https://frozen-wildwood-78660.herokuapp.com/dish'

export const dishService = {
  getAll,
  getById,
  create,
  update,
  delete: del
}

function getAll () {
  return fetchWrapper.get(baseUrl)
}

function getById (id) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}

function create (params) {
  return fetchWrapper.post(baseUrl, params)
}

function update (id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
}

function del (id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
}
