import './App.css'
import FrontPage from './pages/FrontPage'
import ReactDOM from "react-dom/client";
import { Contact } from './components/Contact';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<FrontPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
