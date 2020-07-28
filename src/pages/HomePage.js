import React, { Fragment } from "react";
import left from "./img/left.svg";
import right from "./img/right.svg";
import './stylePages.css';
import Timeline from "./Timeline";



const HomePage = () => (
  
<Fragment className="row" style={{ width:100 , height:480}}>
   <div class="container">
      <div class="row">
          <div class="col-md-4">
          <div class="typewriter">
          <div class="typewriter-text"><code>Hi there,</code></div>
          <br></br>
          <div class="typewriter-text-two" style={{}}><code>This is Swarali Purandare.</code></div>
          </div>
          </div>
          <div class="col-md-4"></div>

          <div class="col-md-4">
          <div className="imgClass"><center><span><a href="#LeftSide" target="_self" >
          <img src={left} alt="bl"  style={{ height: 100, width:100 }}/>
          </a></span>
          <span><a href="#RightPage" target="_self" >
          <img src={right} alt="bl"  style={{ height: 100, width:100 }}/>
          </a></span></center>
          </div>
          </div>
  
         
  </div>
      </div>

      
      <Timeline/>

  </Fragment>
  
  
  
);

export default HomePage;
