package com.example.CRUD_SpringBoot.EmployeeManagement.repository;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ManagerRepository extends JpaRepository<Manager,Long> {
    Manager findByEmailAndPassword(String email, String password);

    @Query("SELECT t FROM Manager t WHERE t.name LIKE CONCAT('%',?1, '%')"
            + "OR t.system  LIKE CONCAT('%',?1, '%')"
            + "OR t.productline  LIKE CONCAT('%',?1, '%')"
            + "OR t.model  LIKE CONCAT('%',?1, '%')"
            + "OR t.type  LIKE CONCAT('%',?1, '%')"
            + "OR t.capacity  LIKE CONCAT('%',?1, '%')"
            + "OR t.ratedcoolingcap  LIKE CONCAT('%',?1, '%')"
            + "OR t.dimension  LIKE CONCAT('%',?1, '%')"
            + "OR t.runingcurrent  LIKE CONCAT('%',?1, '%')"
            + "OR t.ratedpowerinput  LIKE CONCAT('%',?1, '%')"
            + "OR t.airflow  LIKE CONCAT('%',?1, '%')"
            + "OR t.extstaticpressure  LIKE CONCAT('%',?1, '%')"
            + "OR t.ratedCOP  LIKE CONCAT('%',?1, '%')"
            + "OR t.refrigerant  LIKE CONCAT('%',?1, '%')"
            + "OR t.noise  LIKE CONCAT('%',?1, '%')"
            + "OR t.weight  LIKE CONCAT('%',?1, '%')"
            + "OR t.liquidpipe  LIKE CONCAT('%',?1, '%')"
            + "OR t.gaspipe  LIKE CONCAT('%',?1, '%')")
    List<Manager> search(String keyword);
}
