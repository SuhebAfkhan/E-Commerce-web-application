package com.example.bigbasket_ecom.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bigbasket_ecom.Model.Category;
import com.example.bigbasket_ecom.Repository.CategoryRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/createCategory")
    public boolean addCategory(@RequestBody Category category) {

        categoryRepository.save(category);
        return true;
    }

    @GetMapping("/getCategoryById/{Id}")
    public Optional<Category> getCategoryById(@PathVariable int Id) {
        return categoryRepository.findById(Id);
    }

    @GetMapping("/getAllCategory")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> data = categoryRepository.findAll();
        return ResponseEntity.ok(data);
    }

    @DeleteMapping("/deleteCategoryById/{Id}")
    public boolean deleteProductById(@PathVariable int Id) {
        categoryRepository.deleteById(Id);
        return true;
    }

    @PutMapping("/updateCategory/{id}")
    public Category update(@RequestBody Category pd, @PathVariable int id) {
        Category updatedCategory = categoryRepository.findById(id).get();
        if (updatedCategory != null) {

            updatedCategory.setCategoryName(pd.getCategoryName());

            return categoryRepository.save(updatedCategory);
        } else
            return updatedCategory;

    }

}