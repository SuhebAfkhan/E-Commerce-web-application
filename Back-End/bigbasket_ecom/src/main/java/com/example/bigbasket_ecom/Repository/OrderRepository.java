package com.example.bigbasket_ecom.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bigbasket_ecom.Model.Order;

public interface OrderRepository extends JpaRepository<Order,Integer> {
    
}