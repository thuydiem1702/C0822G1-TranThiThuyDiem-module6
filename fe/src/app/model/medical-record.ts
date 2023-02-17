export interface MedicalRecord {
  id?: number;
  medicalRecordCode?: string;
  patientName?: string;
  hospitalizedDay?: string;
  hospitalDischargeDate?: string;
  reason?: string;
  treatments?: string;
  doctor?: string;
  patientCode?: string;
  flag?: boolean;
}
