package com.example.springandangularcrud;

import com.example.springandangularcrud.entities.User;
import com.example.springandangularcrud.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringAndAngularCrudApplication implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository ;




    public static void main(String[] args) {
        SpringApplication.run(SpringAndAngularCrudApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        userRepository.save(new User("First", "I am the first here")) ;
        userRepository.save(new User("Second", "I am the second")) ;
        userRepository.save(new User("Third", "I am the third")) ;
        userRepository.save(new User("Fourth", "I am the fourth")) ;
        userRepository.save(new User("Fifth", "I am the fifth")) ;

        System.out.println("Hello here boys");


    }
}
