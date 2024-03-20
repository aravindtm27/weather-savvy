import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchPage from './pages/SearchPage/page'
import DetailsPage from './pages/DetailsPage/page'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<SearchPage />} />
          <Route path='details' element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
