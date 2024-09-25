package com.example.CRUD_SpringBoot.EmployeeManagement.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="manager")
public class Manager {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

    @Column(name = "system2")
    private String system;

    @Column(name = "product_line")
    private String productline;

    @Column(name = "model")
    private String model;
    @Column(name = "type")
    private String type;

    @Column(name = "capacity")
    private float capacity;

    @Column(name = "rated_cooling_cap")
    private String ratedcoolingcap;

    @Column(name = "dimension")
    private String dimension;

    @Column(name = "running_current")
    private String runingcurrent;

    @Column(name = "rated_power_input")
    private String ratedpowerinput;
    @Column(name = "power_supply")
    private String powersupply;

    @Column(name = "air_flow")
    private String airflow;

    @Column(name = "ext_static_pressure")
    private String extstaticpressure;

    @Column(name = "rated_cop")
    private String ratedCOP;

    @Column(name = "refrigerant")
    private String refrigerant;

    @Column(name = "noise_db")
    private String noise;

    @Column(name = "weight")
    private String weight;

    @Column(name = "liquid_pipe")
    private String liquidpipe;

    @Column(name = "gas_pipe2")
    private String gaspipe;

    @Column(name = "accessory")
    private String accessory;
}
