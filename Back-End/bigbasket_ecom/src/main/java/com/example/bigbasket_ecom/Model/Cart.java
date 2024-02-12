package com.example.bigbasket_ecom.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartid;

    private int productId;
    private int custId;
    private int quantity;
    private String addedDate;
    public int getCartid() {
        return cartid;
    }
    public void setCartid(int cartid) {
        this.cartid = cartid;
    }
    public int getProductId() {
        return productId;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }
    public int getCustId() {
        return custId;
    }
    public void setCustId(int custId) {
        this.custId = custId;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getAddedDate() {
        return addedDate;
    }
    public void setAddedDate(String addedDate) {
        this.addedDate = addedDate;
    }
    @Override
    public String toString() {
        return "Cart [cartid=" + cartid + ", productId=" + productId + ", custId=" + custId + ", quantity=" + quantity
                + ", addedDate=" + addedDate + "]";
    }
    
    
        
}
