package com.memo.service.impl;

import com.memo.model.MedicalRecord;
import com.memo.repository.IMedicalRecordRepository;
import com.memo.service.IMedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalRecordService implements IMedicalRecordService {

    @Autowired
    private IMedicalRecordRepository medicalRecordRepository;

    @Override
    public Page<List<MedicalRecord>> showList(String search, Pageable pageable) {
        return medicalRecordRepository.showList(search, pageable);
    }

    @Override
    public void deleteMedicalRecord(Integer id) {
        medicalRecordRepository.deleteMedicalRecord(id);
    }

    @Override
    public void add(String code, String startDay, String endDay, String reason, String treatmentOption, String doctor, Integer patientId) {
        medicalRecordRepository.add(code, startDay, endDay, reason, treatmentOption, doctor, patientId);
    }

    @Override
    public MedicalRecord findMedicalRecord(Integer id) {
        return medicalRecordRepository.findMedicalRecord(id);
    }

    @Override
    public void updateMedicalRecord(String startDay, String endDay, String reason, String treatmentOption, String doctor, Integer id) {
        medicalRecordRepository.updateMedicalRecord(startDay, endDay, reason, treatmentOption, doctor, id);
    }
}
