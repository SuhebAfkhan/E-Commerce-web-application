package com.example.bigbasket_ecom.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bigbasket_ecom.Model.Cart;
import com.example.bigbasket_ecom.Model.Product;

public interface CartRepository extends JpaRepository<Cart,Integer> {
    List<Product> findAllProductsByCustId(int custId);
}
