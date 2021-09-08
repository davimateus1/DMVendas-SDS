package com.projectdavi.dmvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdavi.dmvendas.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long> {

}
