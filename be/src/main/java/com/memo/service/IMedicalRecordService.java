package com.memo.service;

import com.memo.model.MedicalRecord;

import java.util.List;

public interface IMedicalRecordService {
    List<MedicalRecord> showList();

    void deleteMedicalRecord(Integer id);

    void add(String code, String startDay, String endDay, String reason, String treatmentOption, String doctor, Integer patientId);

    MedicalRecord findMedicalRecord(Integer id);

    void updateMedicalRecord(String startDay, String endDay, String reason, String treatmentOption, String doctor, Integer id);
}
