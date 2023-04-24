package com.example.CRUD_SpringBoot.EmployeeManagement.service.impl;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import com.example.CRUD_SpringBoot.EmployeeManagement.repository.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TaskService implements com.example.CRUD_SpringBoot.EmployeeManagement.service.TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getListTask() {
        return taskRepository.findAll();
    }

    @Override
    public List<Task> getTaskId(long id) {
        List<Task> res =  taskRepository.findByEmployeeId(id);
        System.out.println(res);
        return res;
    }
}
