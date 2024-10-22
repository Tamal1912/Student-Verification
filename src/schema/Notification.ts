export interface Notification {
    notificationId: string;
    recipientId: string;
    message: string;
    dateSent: Date;
    read: boolean;
    type: 'Upload' | 'Revocation' | 'Verification';
  }
  