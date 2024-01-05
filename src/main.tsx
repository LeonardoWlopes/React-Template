import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from '@styles/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { THEME } from '@styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={THEME}>
			<App />
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>,
)
