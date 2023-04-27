import axios from 'axios';
import React, { useEffect } from 'react';

const testApi = () => {
    const getEmployeeById = async () => {
        return (await axios.get(`http://localhost:8080/api/employees`))
        .then((res) =>console.log(res.data))
        .catch((err) => alert(err))
    }
    
    return (
        <div>
            {}
        </div>
    );
};

export default testApi;