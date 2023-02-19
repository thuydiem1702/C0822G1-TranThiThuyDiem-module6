package com.memo.service;

import com.memo.model.MedicalRecord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMedicalRecordService {
    Page<List<MedicalRecord>> showList(String search, Pageable pageable);

    void deleteMedicalRecord(Integer id);

    void add(String code, String startDay, String endDay, String reason, String treatmentOption, String doctor, Integer patientId);

    MedicalRecord findMedicalRecord(Integer id);

    void updateMedicalRecord(String startDay, String endDay, String reason, String treatmentOption, String doctor, Integer id);
}
