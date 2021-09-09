package com.projectdavi.dmvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.projectdavi.dmvendas.dto.SaleSuccessDTO;
import com.projectdavi.dmvendas.dto.SaleSumDTO;
import com.projectdavi.dmvendas.entities.Sale;

public interface SaleRepository extends JpaRepository <Sale, Long> {

	@Query("SELECT new com.projectdavi.dmvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.projectdavi.dmvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller ")
	List<SaleSuccessDTO> successGroupedBySeller();
}
