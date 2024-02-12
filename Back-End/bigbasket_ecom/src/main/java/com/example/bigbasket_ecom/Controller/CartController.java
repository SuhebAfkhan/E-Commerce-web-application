package com.example.bigbasket_ecom.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bigbasket_ecom.Model.Cart;
import com.example.bigbasket_ecom.Model.Product;
import com.example.bigbasket_ecom.Repository.CartRepository;
import com.example.bigbasket_ecom.Repository.ProductRepository;

@RestController
//@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/addProductToCart")
    public boolean addProduct(@RequestBody Cart cart) {
  
        cartRepository.save(cart);
       return true;
    }

    @GetMapping("/getAllCartProducts")
    public List<Cart> index(Model model){
        
        return cartRepository.findAll();
    }

    @GetMapping("/getCartProductsByCustomerId/{custId}")
    public List<Product> getCartProductsByCustomerId(@PathVariable int custId) {
        return cartRepository.findAllProductsByCustId(custId);
    }
}