package com.memo.controller;

import com.memo.model.MedicalFile;
import com.memo.service.impl.MedicalFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class RestHospitalController {
    @Autowired
    private MedicalFileService medicalFileService;
    @GetMapping(value = "/list")
    public ResponseEntity<List<MedicalFile>> listMedicalFile() {
        List<MedicalFile> medicalFileList = medicalFileService.getAll();
        if (medicalFileList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalFileList, HttpStatus.OK);
    }
}
