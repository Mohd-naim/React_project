import React from 'react'
import Restorent from "./component/basics/Restorent";
import "./footer.css"
const App = () => {
  return <>
  <Restorent/>
  <Footer/>
  </>

}
const Footer =()=>{
  
 return<>
  <div className="footer">
    <h2>Made By <a href="http://" target="_blank" rel="noopener noreferrer">Mohd Naim</a> with ❤️</h2>
    <h3>All right reserved &copy; 2022-23</h3>
  </div>
 </>
}


export default App
