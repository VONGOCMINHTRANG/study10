interface Information {
  email: string;
  password: string;
  phone?: string;
  birthDay?: string;
  gender?: number;
  fullName?: string;
  createdAt?: any;
}

enum IconDialog {
  ERROR = 'error_outline',
  WARNING = 'warning',
  SUCCESS = 'check_circle_outline',
}

export { Information, IconDialog };
