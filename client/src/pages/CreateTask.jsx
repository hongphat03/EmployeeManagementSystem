import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { createTask } from '../api/Task';
import { insertTask } from '../api/Manager';

const CreateTask = () => {
    const managerName = useParams();
    const [show, setShow] = useState(false);
    
    // State to hold form data
    const [formData, setFormData] = useState({
        system: '',
        productline: '',
        model: '',
        type: '',
        capacity: '',
        ratedcoolingcap: '',
        dimension: '',
        runingcurrent: '',
        ratedpowerinput: '',
        powersupply: '',
        airflow: '',
        extstaticpressure: '',
        ratedCOP: '',
        refriger: '',
        noise: '',
        weight: '',
        liquidpipe: '',
        gaspipe: '',
        accessory: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Ensure capacity is a number
        const task = {
            ...formData,
            capacity: parseFloat(formData.capacity),
        };

        try {
            console.log("dev",task)
            await insertTask(task); // Call the API to create a task
            alert('Device created successfully!'); // Show success message
            setShow(false); // Close the modal
            window.location.reload();
            setFormData({ // Reset form data
                system: '',
                productline: '',
                model: '',
                type: '',
                capacity: '',
                ratedcoolingcap: '',
                dimension: '',
                runingcurrent: '',
                ratedpowerinput: '',
                powersupply: '',
                airflow: '',
                extstaticpressure: '',
                ratedCOP: '',
                refriger: '',
                noise: '',
                weight: '',
                liquidpipe: '',
                gaspipe: '',
                accessory: '',
            });
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create device.'); // Show error message
        }
    };

    return (
        <>
            <Button onClick={() => setShow(true)}>Create Device</Button>
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>System</Form.Label>
                            <Form.Control id="system" type="text" value={formData.system} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Product Line</Form.Label>
                            <Form.Control id="productline" type="text" value={formData.productline} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Model</Form.Label>
                            <Form.Control id="model" type="text" value={formData.model} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control id="type" type="text" value={formData.type} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control id="capacity" type="number" value={formData.capacity} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rated Cooling Capacity</Form.Label>
                            <Form.Control id="ratedcoolingcap" type="text" value={formData.ratedcoolingcap} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dimension</Form.Label>
                            <Form.Control id="dimension" type="text" value={formData.dimension} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Running Current</Form.Label>
                            <Form.Control id="runingcurrent" type="text" value={formData.runingcurrent} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rated Power Input</Form.Label>
                            <Form.Control id="ratedpowerinput" type="text" value={formData.ratedpowerinput} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Power Supply</Form.Label>
                            <Form.Control id="powersupply" type="text" value={formData.powersupply} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Air Flow</Form.Label>
                            <Form.Control id="airflow" type="text" value={formData.airflow} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>External Static Pressure</Form.Label>
                            <Form.Control id="extstaticpressure" type="text" value={formData.extstaticpressure} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rated COP</Form.Label>
                            <Form.Control id="ratedCOP" type="text" value={formData.ratedCOP} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Refrigerant</Form.Label>
                            <Form.Control id="refriger" type="text" value={formData.refriger} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Noise</Form.Label>
                            <Form.Control id="noise" type="text" value={formData.noise} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control id="weight" type="text" value={formData.weight} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Liquid Pipe</Form.Label>
                            <Form.Control id="liquidpipe" type="text" value={formData.liquidpipe} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Gas Pipe</Form.Label>
                            <Form.Control id="gaspipe" type="text" value={formData.gaspipe} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Accessory</Form.Label>
                            <Form.Control id="accessory" type="text" value={formData.accessory} onChange={handleInputChange} />
                        </Form.Group>
                        <Button type="submit" className="my-2">Insert</Button>
                        <Button className="my-2 mx-2" onClick={() => setShow(false)}>Cancel</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateTask;
