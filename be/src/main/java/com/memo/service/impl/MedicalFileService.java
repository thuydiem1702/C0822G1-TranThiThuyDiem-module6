package com.memo.service.impl;

import com.memo.model.MedicalFile;
import com.memo.repository.IMedicalFileRepository;
import com.memo.service.IMedicalFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalFileService implements IMedicalFileService {
    @Autowired
    private IMedicalFileRepository iMedicalFileRepository;

    @Override
    public List<MedicalFile> getAll() {
        return iMedicalFileRepository.getAll();
    }
}