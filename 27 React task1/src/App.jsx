/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/header/index.jsx'
import Nav from "./components/Nav/index.jsx" 
import Button from "./components/Button/index.jsx" 
import About from "./components/About/index.jsx" 
import Footer from "./components/Footer/index.jsx" 
import Students from "./components/Students/index.jsx"

function App() {
  // console.log(students);
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Footer/>
      <Students/>
      <Button/>
    </>
  )
}

export default App
