package com.example.bigbasket_ecom.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.bigbasket_ecom.Model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

    List<Product> findAllBycategoryId(int categoryId);
    
}
