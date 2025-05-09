import 'styled-components';
import { darkTheme } from '../styles/theme/default';

type ThemeType = typeof darkTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}