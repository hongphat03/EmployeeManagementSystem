import axios from "axios"

const URL = "http://localhost:8080/api/tasks"
export const createTask = (props) => {
    return axios.post(`${URL}`,props).then(res => console.log(res)).catch(err => console.log(err))
}
export const getListTasks = () => {
    return axios.get(`${URL}`).then(res => res).catch(err => console.log(err))
}
export const searchTask = (query) => {
    return axios.get(`${URL}/search?query=${query}`).then(res => res).catch(err => console.log(err))
}
export const getListTasksById = (id) => {
    return axios.get(`${URL}/${id}`).then(res => res).catch(err => console.log(err))
}

export const getAllManager = () => {
    return axios.get(`${URL}/manager`).then(res => res).catch(err => console.log(err))
}