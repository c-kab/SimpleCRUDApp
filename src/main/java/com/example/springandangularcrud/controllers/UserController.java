package com.example.springandangularcrud.controllers;


import com.example.springandangularcrud.entities.User;
import com.example.springandangularcrud.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserRepository userRepository ;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping("/users")
    public List<User> getUsers(){
        return  userRepository.findAll() ;
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long  id){

        if (userRepository.findById(id).isPresent()){
            return userRepository.findById(id).get() ;
        }else {
            return null;
        }
    }

    @DeleteMapping("/user/{id}")
    public boolean deleteUser(@PathVariable Long id ){
        userRepository.deleteById(id);
        return true ;
    }

    @PostMapping ("/user")
    public User createUser( User user){
        return userRepository.save(user);

    }

    @PutMapping ("/user")
    public User updateUser( User user){
        return userRepository.save(user);

    }
}
