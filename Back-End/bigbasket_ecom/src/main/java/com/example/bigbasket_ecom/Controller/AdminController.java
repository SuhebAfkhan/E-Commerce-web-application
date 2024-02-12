package com.example.bigbasket_ecom.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.bigbasket_ecom.Model.Product;

import com.example.bigbasket_ecom.Repository.ProductRepository;


@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private ProductRepository productRepository;

    // @Autowired
    // private CategoryRepository categoryRepository;

    @PostMapping("/createProduct")
    public boolean addProduct(@RequestBody Product product) {

        productRepository.save(product);
        return true;
    }

    @GetMapping("/getProductById/{Id}")
    public Optional<Product> getProductById(@PathVariable int Id) {
        return productRepository.findById(Id);
    }

    @GetMapping("/getAllProducts")
    public List<Product> index(Model model) {

        return productRepository.findAll();
    }

    @GetMapping("/addToCart")
    public List<Product> index1(Model model) {

        return productRepository.findAll();
    }

    @GetMapping("/GetAllProductsByCategoryId/{categoryId}")
    public List<Product> getAllProductsByCategoryId(@PathVariable int categoryId) {
        return productRepository.findAllBycategoryId(categoryId);
    }

    @DeleteMapping("/deleteProductById/{Id}")
    public boolean deleteProductById(@PathVariable int Id) {
        productRepository.deleteById(Id);
        return true;
    }

    @PutMapping("/updateProduct/{id}")
    public Product update(@RequestBody Product pd, @PathVariable int id) {
        // TODO Auto-generated method stub
        Product updatedProduct = productRepository.findById(id).get();

        if (updatedProduct != null) {

            updatedProduct.setProductName(pd.getProductName());
            updatedProduct.setProductShortName(pd.getProductShortName());
            updatedProduct.setProductDescription(pd.getProductDescription());
            updatedProduct.setCreatedDate(pd.getCreatedDate());
            updatedProduct.setDeliveryTimeSpan(pd.getDeliveryTimeSpan());
            updatedProduct.setProductImageUrl(pd.getProductImageUrl());
            updatedProduct.setProductPrice(pd.getProductPrice());
            updatedProduct.setCategoryId(pd.getCategoryId());

            return productRepository.save(updatedProduct);
        }

        else
            return updatedProduct;

    }

    // @GetMapping("/search/{query}")
    // public ResponseEntity<?> search(@PathVariable("query") String query, Principal principal) {
    //     System.out.println(query);
    //     Product product = this.productRepository.getUserByUserName(principal.getName());
    //     List<Category> contacts = this.categoryRepository.findByNameContainingAndUser(query, product);
    // }

}
