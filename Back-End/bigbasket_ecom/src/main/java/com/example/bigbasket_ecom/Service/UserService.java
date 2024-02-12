package com.example.bigbasket_ecom.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bigbasket_ecom.Model.User;
import com.example.bigbasket_ecom.Repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    // public boolean authenticateUser(String email, String password) {
    //     // Find user by email
    //     User user = userRepository.findByEmail(email);

    //     // Check if the user exists and the password matches
    //     return user != null && user.getPassword().equals(password);
    // }

    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email,password);
    }

}