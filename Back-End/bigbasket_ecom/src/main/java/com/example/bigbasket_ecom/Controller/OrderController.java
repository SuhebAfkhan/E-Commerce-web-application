package com.example.bigbasket_ecom.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bigbasket_ecom.Model.Order;
import com.example.bigbasket_ecom.Repository.OrderRepository;

@RestController
//@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/AddOrder")
    public boolean addProduct(@RequestBody Order order) {
  
        orderRepository.save(order);
        return true;
    }
}