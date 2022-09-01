import './App.css'
import { AccountProvider } from './components/account/_state/provider'
import Bootstrap from './components/bootstrap'

window.location.replace('https://wpshop.io/account')

function App() {
	return (
		<AccountProvider>
			<Bootstrap />
		</AccountProvider>
	)
}

export default App
