import { fetchWrapper } from '../helpers/fetchWrapper'

// const baseUrl = `${import.meta.env.VITE_BASE_URL}/dish`
const baseUrl = 'http://localhost:4000/dish'

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
