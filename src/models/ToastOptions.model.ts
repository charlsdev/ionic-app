import { AnimationBuilder, IonicSafeString } from '@ionic/angular';

interface ToastOptions {
   header?: string;
   message?: string | IonicSafeString;
   cssClass?: string | string[];
   duration?: number;
   buttons?: (ToastButton | string)[];
   position?: 'top' | 'bottom' | 'middle';
   translucent?: boolean;
   animated?: boolean;
   icon?: string;
   htmlAttributes?: { [key: string]: any };

   color?: Color;
   mode?: Mode;
   keyboardClose?: boolean;
   id?: string;

   enterAnimation?: AnimationBuilder;
   leaveAnimation?: AnimationBuilder;
}
