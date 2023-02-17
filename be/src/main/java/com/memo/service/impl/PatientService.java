package com.memo.service.impl;

import com.memo.model.Patient;
import com.memo.repository.IPatientRepository;
import com.memo.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService implements IPatientService {

    @Autowired
    private IPatientRepository patientRepository;

    @Override
    public List<Patient> getAll() {
        return patientRepository.getAll();
    }
}
