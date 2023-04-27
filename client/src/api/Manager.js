import axios from "axios"

const URL = "http://localhost:8080/api/manager"
export const loginAsManager = async (props) => {
    return await axios.post(`${URL}/loginAsManager`,props).then(res => res).catch(err => console.log(err))
}