package com.memo.repository;

import com.memo.model.MedicalFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IMedicalFileRepository extends JpaRepository<MedicalFile, Integer> {
    @Query(value = "select * from medical_file where flag= false", nativeQuery = true)
    List<MedicalFile> getAll();
}
