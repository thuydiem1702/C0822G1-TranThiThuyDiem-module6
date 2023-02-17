package com.memo.repository;

import com.memo.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IPatientRepository extends JpaRepository<Patient, Integer> {

    @Query(value = "select * from patient", nativeQuery = true)
    List<Patient> getAll();
}
