import React, { Fragment } from "react";
import left from "./img/left.svg";
import right from "./img/right.svg";
import './timelineStyle.css';
import {Card} from 'react-bootstrap';



const Timeline = () => (
 <div className="container">
  <div className="row">
       <div className="col-md-6">
       <div class="row">
                   
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>

                   <div class="col-md-6 col-lg-2 col-xlg-3">
                       <div class="card card-hover">
                           <div class="box bg-info text-center">
                               <h4 class="font-light text-white">React-js</h4>
                               <h6 class="text-white">jkl</h6>
                           </div>
                       </div>
                   </div>

                   <div class="col-md-6 col-lg-2 col-xlg-3">
                       <div class="card card-hover">
                           <div class="box bg-info text-center">
                               <h4 class="font-light text-white">Bootstrap</h4>
                               <h6 class="text-white">jkl</h6>
                           </div>
                       </div>
                   </div>

                   <div class="col-md-6 col-lg-2 col-xlg-3">
                       <div class="card card-hover">
                           <div class="box bg-info text-center">
                               <h4 class="font-light text-white">CSS</h4>
                               <h6 class="text-white">jkl</h6>
                           </div>
                       </div>
                   </div>

                   <div class="col-md-6 col-lg-2 col-xlg-3">
                       <div class="card card-hover">
                           <div class="box bg-info text-center">
                               <h4 class="font-light text-white">HTML</h4>
                               <h6 class="text-white">jkl</h6>
                           </div>
                       </div>
                   </div>
                   
               </div>
       </div>
       <div className="col-md-6">
        <div class="timeline" >

               <div class="containerT right">
                 <div class="content">
                   <h2>2012</h2>
                   <p>2nd year</p>
                 </div>
               </div>

               <div class="containerT left">
                 <div class="content">
                   <h2>2015</h2>
                   <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                 </div>
               </div>
               <div class="containerT right">
                 <div class="content">
                   <h2>2012</h2>
                   <p>2nd year</p>
                 </div>
               </div>
               <div class="containerT left">
                 <div class="content">
                   <h2>2011</h2>
                   <p>class 12</p>
                 </div>
               </div>
               <div class="containerT right">
                 <div class="content">
                   <h2>2007</h2>
                   <p>class 10</p>
                 </div>
               </div>
               </div>
</div>


  </div>
  
  

  </div>

);


export default Timeline;