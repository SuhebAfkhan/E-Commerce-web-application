package com.example.bigbasket_ecom.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bigbasket_ecom.Model.Product;
import com.example.bigbasket_ecom.Model.User;
import com.example.bigbasket_ecom.Repository.UserRepository;
import com.example.bigbasket_ecom.Service.UserService;

@RestController
//@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/registerUser")
    public boolean addProduct(@RequestBody User user) {
  
        userRepository.save(user);
       return true;
    }

    // @PostMapping("/check_user/{email}/{password}")
    // public boolean login(@RequestParam String email, @RequestParam String password, Model model) {
    //     // Call the service to authenticate the user
    //     boolean isAuthenticated = userService.authenticateUser(email, password);

    //     if (isAuthenticated) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    @PostMapping("/check_user")
    public boolean validateLogin(@RequestBody User userModel){
        String email = userModel.getEmail();
        String password = userModel.getPassword();

        User user = userService.findByEmailAndPassword(email,password);
        //Admin admin = adminService.findByEmailAndPassword(email, password);
        if (user != null && email.equals(user.getEmail())&& password.equals(user.getPassword())){
            return true;
        }
        // else if (admin!=null && email.equals(admin.getEmail())&& password.equals(admin.getPassword()))
        // {
        //     //model.addAttribute("admin", admin);
        //     return "redirect:admin/dashboard";
        // }
        else{
            //model.addAttribute("error", "Invalid Email ID or Password");
            //return "userlogin";
            return false;
        }
        
        }
    


}

