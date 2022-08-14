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
    <h2>Made with ❤️ BY <a href="https://mohd-naim.github.io/mohdnaim.github.io/" target="_blank" rel="noopener noreferrer">Mohammad Naim</a></h2>
    <h3>All right reserved &copy; 2022-23</h3>
  </div>
 </>
}


export default App
