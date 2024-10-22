export interface Transaction {
    txHash: string;
    timestamp: Date;
    type: 'Upload' | 'Verification' | 'Revocation';
    studentId: string;
    verifierId?: string;
  }
  