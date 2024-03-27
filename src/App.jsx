import './App.css'
import { Etusivu } from './pages/Etusivu'
import { FAQ } from './pages/FAQ'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Urheilu } from './pages/AiTools/Urheilu'
import { TekoTeksi } from './pages/AiTools/TekoTeksi'
import { TekoTaide } from './pages/AiTools/TekoTaide'
import { Markkinointi } from './pages/AiTools/Markkinointi'
import { Audio } from './pages/AiTools/Audio'

function App() {

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Etusivu />}></Route>
				<Route path="/faq" element={<FAQ />}></Route>
				<Route path="/urheilu" element={<Urheilu />}></Route>
				<Route path="/tekoteksti" element={<TekoTeksi />}></Route>
				<Route path="/tekotaide" element={<TekoTaide />}></Route>
				<Route path="/markkinointi" element={<Markkinointi />}></Route>
				<Route path="/audio" element={<Audio />}></Route>
			</Routes>
		</div>
	)
}

export default App
