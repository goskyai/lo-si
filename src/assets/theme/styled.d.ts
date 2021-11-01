import { GlobalThemeType } from './global';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends GlobalThemeType {}
}
