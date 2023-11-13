/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/header'
import Nav from "./components/Nav" 
import Button from "./components/Button" 
import About from "./components/About" 
import Footer from "./components/Footer" 
import Students from "./components/Students"

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
