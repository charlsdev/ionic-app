interface ToastButton {
   text?: string;
   icon?: string;
   side?: 'start' | 'end';
   role?: 'cancel' | string;
   cssClass?: string | string[];
   handler?: () => boolean | void | Promise<boolean | void>;
}
