package com.memo.repository;

import com.memo.model.MedicalRecord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IMedicalRecordRepository extends JpaRepository<MedicalRecord, Integer> {
    @Query(value = "select m.* from medical_record m inner join patient p on m.patient_id = p.id where p.name like concat('%', :search , '%')",
            countQuery = "select count(*) from (select m.* from medical_record m inner join patient p on m.patient_id = p.id where p.name like concat('%', :search , '%')) as diem"
            , nativeQuery = true)
    Page<List<MedicalRecord>> showList(@Param("search") String search, Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "delete from medical_record where id = :id", nativeQuery = true)
    void deleteMedicalRecord(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "insert into medical_record(code, start_day, end_day, reason, treatment_option, doctor, patient_id) value(:code, :startDay, :endDay, :reason, :treatmentOption, :doctor, :patientId)", nativeQuery = true)
    void add(@Param("code") String code, @Param("startDay") String startDay, @Param("endDay") String endDay, @Param("reason") String reason, @Param("treatmentOption") String treatmentOption, @Param("doctor") String doctor, @Param("patientId") Integer patientId);


    @Query(value = "select * from medical_record where id = :id", nativeQuery = true)
    MedicalRecord findMedicalRecord(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update medical_record set start_day = :startDay, end_day = :endDay, reason = :reason, treatment_option = :treatmentOption, doctor = :doctor where id = :id", nativeQuery = true)
    void updateMedicalRecord(@Param("startDay") String startDay, @Param("endDay") String endDay, @Param("reason") String reason, @Param("treatmentOption") String treatmentOption, @Param("doctor") String doctor, @Param("id") Integer id);
}
