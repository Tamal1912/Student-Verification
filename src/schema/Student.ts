import { Transaction } from "./Transaction";

export interface Student {
    id: string;
    name: string;
    degree: string;
    dateOfBirth: string;
    studentId: string;
    credentialHash: string;
    credentialExpiry: Date;
    isValid: boolean;
    uploadDate: Date;
    transactions: Transaction[];
  }
  