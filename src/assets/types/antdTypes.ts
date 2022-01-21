import { BreadcrumbProps } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import BreadcrumbSeparator from 'antd/lib/breadcrumb/BreadcrumbSeparator';

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

declare module 'antd' {
  interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
    Item: typeof BreadcrumbItem;
    Separator: typeof BreadcrumbSeparator;
  }
  const Breadcrumb: BreadcrumbInterface;
}
