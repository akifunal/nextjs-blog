import GlobalCSS from '../styles/global.css.js'
const App = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalCSS />
			<Component {...pageProps} />
		</>
	)
}

export default App
