/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native'
import { THEME } from './src/styles/theme'

declare module 'styled-components/native' {
	type ThemeType = typeof THEME

	export interface DefaultTheme extends ThemeType {}
}
