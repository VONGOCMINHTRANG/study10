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

enum ColorNotice {
  ERROR = 'rgb(220, 20, 60)',
  WARNING = 'rgb(255, 166, 0)',
  SUCCESS = 'rgb(76, 187, 23)',
}

export { Information, IconDialog, ColorNotice };
