export interface Credential {
    studentId: string;
    degree: string;
    institution: string;
    issueDate: Date;
    expiryDate?: Date;
    credentialHash: string;
    status: 'Valid' | 'Revoked';
    lastUpdated: Date;
  }
  