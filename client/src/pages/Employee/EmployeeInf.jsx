import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Form, Table } from 'react-bootstrap';
import { getAllManager, getListTasksById } from '../../api/Task';
import { getEmployeeById } from '../../api/Employee';
import HeaderComponent from '../../components/Header';

const EmployeeInf = () => {
    const [tasks, setTasks] = useState([])
    const [data, setData] = useState([])
  
    useEffect(() => {
        getAllManager().then(res => setTasks(res.data)).catch(err => console.log(err))
    },[])
    const row = tasks.map((task,index) => (
        <tr key={index}>
            <th>{task.system}</th>
            <th>{task.productline}</th>
            <th>{task.model}</th>
            <th>{task.type}</th>
            <th>{task.vapacity}</th>
            <th>{task.ratedcoolingcap}</th>
            <th>{task.dimension}</th>
            <th>{task.runingcurrent}</th>
            <th>{task.ratedpowerinput}</th>
            <th>{task.powersupply}</th>
            <th>{task.airflow}</th>
            <th>{task.extstaticpressure}</th>
            <th>{task.ratedCOP}</th>
            <th>{task.refriger}</th>
            <th>{task.noise}</th>
            <th>{task.weight}</th>
            <th>{task.liquidpipe}</th>
            <th>{task.gaspipe}</th>
        </tr>
    )) 
    return (
        <>
            <HeaderComponent />
        <Container>
           
            <h1 className='text-center'>Task</h1>
            <Table>
                <thead>
                    <tr>
                        <th>System</th>
                        <th>Product Line</th>
                        <th>Model</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Rated Cooling Cap.at 19 CWB (kW)</th>
                        <th>Dimension (HxWxD) (mm)</th>
                        <th>Running Current (A)</th>
                        <th>Rated Power Input (kW)</th>
                        <th>Power Supply (V/Ph/Hz)</th>
                        <th>Air Flow (m3/h)</th>
                        <th>Ext.Static Pressure (Pa)</th>
                        <th>Rated COP</th>
                        <th>Refrigerant</th>
                        <th>Noise dB(A)</th>
                        <th>Weight (kg)</th>
                        <th>Liquid Pipe</th>
                        <th>Gas Pipe</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </Table>
        </Container>
        </>
    );
};

export default EmployeeInf;