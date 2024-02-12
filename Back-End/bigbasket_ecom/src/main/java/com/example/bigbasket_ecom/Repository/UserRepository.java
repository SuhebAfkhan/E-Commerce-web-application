package com.example.bigbasket_ecom.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bigbasket_ecom.Model.User;

public interface UserRepository extends JpaRepository<User,Integer>  {
    //User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
}
