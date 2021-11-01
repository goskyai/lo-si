import { CSSProp, DefaultTheme } from 'styled-components';
declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp<DefaultTheme>;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<DefaultTheme>;
    }
  }

  interface Window {
    extAsyncInit?: () => void;
    MessengerExtensions?: IMessengerExtensions;
  }
}

declare module 'react-hot-toast' {
  interface ToasterProps {
    position?: ToastPosition;
    toastOptions?: DefaultToastOptions;
    reverseOrder?: boolean;
    gutter?: number;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    children?: (toast: Toast) => JSX.Element;
  }
}
