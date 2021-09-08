package com.projectdavi.dmvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projectdavi.dmvendas.entities.Seller;

public interface SellerRepository extends JpaRepository <Seller, Long> {

}
