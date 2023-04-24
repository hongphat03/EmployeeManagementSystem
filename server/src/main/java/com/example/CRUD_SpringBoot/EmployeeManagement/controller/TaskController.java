package com.example.CRUD_SpringBoot.EmployeeManagement.controller;

import com.example.CRUD_SpringBoot.EmployeeManagement.model.Task;
import com.example.CRUD_SpringBoot.EmployeeManagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;
    @PostMapping()
    public ResponseEntity<Task> saveTask(@RequestBody Task task){
        return new ResponseEntity<>(taskService.saveTask(task), HttpStatus.OK);
    }
    @GetMapping()
    public List<Task> getListTask(){
        return taskService.getListTask();
    }
    @GetMapping("/{id}")
    public List<Task> getTaskId(@PathVariable("id") long id){
        List<Task> res = taskService.getTaskId(id);
        System.out.println(res);
        return res;
    }
    @GetMapping("/search")
    public List<Task> search(@RequestParam("query") String keyword){
        return taskService.search(keyword);
    }
}
