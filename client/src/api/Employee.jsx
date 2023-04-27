import axios from 'axios';

const URL = "http://localhost:8080/api/employees"
export const getListEmployee = async () => {
    return await axios.get("http://localhost:8080/api/employees")
        .then((res) => res.data)
        .catch((err) => alert('Failure!!!', err));
}

export const createEmployee = async (props) => {
    return await axios.post(`${URL}`,props)
    .then((res) => res)
    .catch(function (error) {
    console.log(error);
    });
}

export const getEmployeeById = async (id) => {
    return await axios.get(`http://localhost:8080/api/employees/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err))
}

export const updateEmployee = async (id,employee) => {
    await axios.put(`http://localhost:8080/api/employees/${id}`,employee).then((res) => res).catch((err) => console.log(err))
}

export const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/employees/${id}`)
}

export const loginAsEmployee = async (props) => {
    return await axios.post(`${URL}/loginAsEmployee`,props).then(res => res).catch(err => console.log(err))
}