import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { getEmployeeById } from '../../api/Employee';
import HeaderComponent from '../../components/Header';
import { searchTask } from '../../api/Manager';
import { getAllManager } from '../../api/Task';
import CreateTask from '../CreateTask';

var constTask

const EmployeeInf = () => {
    const [tasks, setTasks] = useState([])
    
    const [key, setKey] = useState([])
    const [query, setQuery] = useState("");

    const getData = async () => {
        return await searchTask(query, key)
        .then(res => {
            setTasks(res.data)
            constTask = res.data
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getData();
    },[query])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        getAllManager().then(res => setTasks(res.data)).catch(err => console.log(err))
    },[])

    const handleSearchSystem = (e) => {
        const input = e.target.value;

        const filteredTasks = tasks.filter(task => {
            if (!task.system) return false; 
            const systemValue = task.system.toLowerCase();
            return systemValue === input.toLowerCase() || systemValue.startsWith(input.toLowerCase(),0);
        });

        constTask = filteredTasks
        console.log(constTask)
        setTasks(filteredTasks);
    }

    const handleSearchPL = (e) => {
        const input = e.target.value;

        const filteredTasks = tasks.filter(task => {
            if (!task.productline) return false; 
            const systemValue = task.productline.toLowerCase();
            return systemValue === input.toLowerCase() || systemValue.includes(input.toLowerCase());
        });

        constTask = filteredTasks
        setTasks(filteredTasks);
    }

    const handleSearchModel = (e) => {
        const input = e.target.value;

        const filteredTasks = tasks.filter(task => {
            if (!task.model) return false; 
            const systemValue = task.model.toLowerCase();
            return systemValue === input.toLowerCase() || systemValue.startsWith(input.toLowerCase(),0);
        });

        constTask = filteredTasks
        setTasks(filteredTasks);
    }

    const handleSearchType = (e) => {
        const input = e.target.value;

        const filteredTasks = tasks.filter(task => {
            if (!task.type) return false; 
            const systemValue = task.type.toLowerCase();
            return systemValue === input.toLowerCase() || systemValue.startsWith(input.toLowerCase(),0);
        });

        constTask = filteredTasks
        setTasks(filteredTasks);
    }

    const handleSearchCapacity = (e) => {
        console.log(constTask)
        const inputValue = parseFloat(e.target.value);
    
        if (isNaN(inputValue)) {
            console.log(tasks)
            return;
        }
    
        const filtered = constTask.filter(task => task.capacity > inputValue);
    
        // Find the closest larger capacity
        const closestLargerTask = filtered.reduce((closest, task) => {
            if (!closest || task.capacity < closest.capacity) {
                return task;
            }
            return closest;
        }, null);
    
        const listFiltered = filtered.filter(task => task.capacity == closestLargerTask.capacity);
    
    
        setTasks(listFiltered);
    }

    const handleClearFilter = (e) => {
        window.location.reload();
    }

    const row = tasks.map((task,index) => (
        <tr key={index}>
            <th>{task.system}</th>
            <th>{task.productline}</th>
            <th>{task.model}</th>
            <th>{task.type}</th>
            <th>{task.capacity}</th>
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
            <th>{task.accessory}</th>
        </tr>
    )) 
    return (
        <>
    <HeaderComponent />
    <Container style={{ alignItems: 'center', marginLeft: 100 }}>
    <h1 style={{ marginLeft: 300 }} className='text-center'>Panasonic Devices</h1>

        <Container style={{ alignItems: 'center', marginLeft: 130 }}>
            {/* <Form style={{ marginLeft: 200 }}>
                <Form.Control type='text' onChange={handleChange} style={{ width: '100%' }} />
            </Form> */}
            <div className="row"  style={{ paddingTop: 10 }}>
                <div className="col-auto">
                    <h3>Search</h3>
                </div>
                <div className="col"  style={{ marginLeft: 94 }}>
                    <Form.Control type='text' onChange={handleChange} style={{ width: '100%' }} />
                </div>
            </div>


            <div className="row"  style={{ paddingTop: 10 }}>
                <div className="col-auto">
                    <h3>System</h3>
                </div>
                <div className="col"  style={{ marginLeft: 85 }}>
                    <Form.Control type='text' onChange={handleSearchSystem} style={{ width: '100%' }} />
                </div>
            </div>

            <div className="row" style={{ paddingTop: 10 }}>
                <div className="col-auto">
                    <h3>Product Line</h3>
                </div>
                <div className="col" style={{ marginLeft: 15 }}>
                    <Form.Control type='text' onChange={handleSearchPL} style={{ width: '100%' }} />
                </div>
            </div>

            <div className="row" style={{ paddingTop: 10 }}>
                <div className="col-auto">
                    <h3>Model</h3>
                </div>
                <div className="col" style={{ marginLeft: 93 }}>
                    <Form.Control type='text' onChange={handleSearchModel} style={{ width: '100%' }} />
                </div>
            </div>

            <div className="row" style={{ paddingTop: 10 }}>
                <div className="col-auto">
                    <h3>Type</h3>
                </div>
                <div className="col" style={{ marginLeft: 115 }}>
                    <Form.Control type='text' onChange={handleSearchType} style={{ width: '100%' }} />
                </div>
            </div>

            <div className="row" style={{ paddingTop: 10 }}>
                <div className="col-auto">
                    <h3>Capacity</h3>
                </div>
                <div className="col" style={{ marginLeft: 67 }}>
                    <Form.Control type='text' onChange={handleSearchCapacity} style={{ width: '100%' }} />
                </div>
            </div>

            <Button onClick={handleClearFilter} style={{ marginRight: 2 }}>Clear Filter</Button>
            <CreateTask/> 
        </Container>
        <Container style={{ alignItems: 'center', marginLeft: -65 }}>
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
                    <th>Accessory</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </Table>
        </Container>
    </Container>
</>

    );
};

export default EmployeeInf;