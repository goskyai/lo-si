import CheckableTag from 'antd/lib/tag/CheckableTag';

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

declare module 'antd' {
  interface TagType
    extends React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement>> {
    CheckableTag: typeof CheckableTag;
  }

  const Tag: TagType;
}
