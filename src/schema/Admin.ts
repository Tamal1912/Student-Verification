export interface Admin {
    adminId: string;
    name: string;
    role: 'Admin';
    email: string;
    password: string;
    permissions: string[];
  }
  