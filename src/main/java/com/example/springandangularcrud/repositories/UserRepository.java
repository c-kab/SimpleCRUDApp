package com.example.springandangularcrud.repositories;

import com.example.springandangularcrud.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
