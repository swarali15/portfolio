(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/left.6b6aef7d.svg"},14:function(e,t,a){e.exports=a.p+"static/media/right.ed5b64d9.svg"},29:function(e,t,a){e.exports=a(44)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a(2),i=a(8),o=(a(34),a(20)),s=a(21),m=a(28),d=a(27),p=a(22);function u(){var e=Object(p.a)(["\n  width: 100%;\n  border-bottom: 5px solid #222;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 100px 0;\n  height: 80px;\n  margin-bottom: 60px;\n  background: #f8f8f8;\n\n  .logo {\n      border-color:white;\n      border-width:10px;\n      border-style:solid;\n      border-radius:50%;\n      \n      font-size: 40px;\n      background-color:black;\n      color:white;\n      size:20px;\n      font-style: normal;\n     \n      font-family: 'Courier New', Courier, monospace;\n    }\n   \n  \n  .gray {\n    color: #ccc;\n  }\n  a {\n    color: #222;\n    opacity: 0.55;\n    transition: all 0.6s;\n    color: #222;\n    font-size: 1em;\n  }\n  a:hover {\n    opacity: 1;\n  }\n  .fa-bars {\n    display: none;\n    color: #222;\n    font-size: 2rem;\n  }\n  nav {\n    ul {\n      display: flex;\n      justify-content: space-between;\n    }\n    li {\n      margin: 0 15px;\n      justify-content: space-between;\n      font-size: 1em;\n      list-style: none;\n    }\n    a {\n      font-size: 1em;\n      text-decoration: none;\n      .active {\n        color: tomato;\n      }\n    }\n    a.active {\n      color: #222;\n    }\n  }\n\n  @media only screen and (max-width: 800px) {\n    padding: 0px;\n    .logo {\n      padding-left: 15px;\n      padding-top: 0px !important;\n    }\n  }\n  @media only screen and (max-width: 600px) {\n    height: auto;\n    min-height: 50px;\n    display: block;\n    position: relative;\n    .logo {\n      \n      \n      padding-top: 20px;\n      margin: 0px;\n      margin-left: -5px;\n      a {\n        padding: 20px 0px;\n      }\n    }\n    .fa-bars {\n      display: inline-block;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      cursor: pointer;\n    }\n    ul.collapsed {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      flex-wrap: wrap;\n\n      overflow: hidden;\n      max-height: 0;\n      \n      &.is-expanded {\n        overflow: hidden;\n        max-height: 500px; /* approximate max height */\n        \n      }\n      li {\n        padding: 15px 10px;\n        margin: 0px 0px;\n        \n      }\n    }\n  }\n"]);return u=function(){return e},e}var E=a(23).a.header(u()),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isExpanded:!1},n}return Object(s.a)(a,[{key:"handleToggle",value:function(e){e.preventDefault(),this.setState({isExpanded:!this.state.isExpanded})}},{key:"render",value:function(){var e=this,t=this.state.isExpanded;return l.a.createElement(E,null,l.a.createElement("div",{className:"logol"},l.a.createElement(i.b,{to:"/"},l.a.createElement("p",{className:"logo"},"SP"))),l.a.createElement("nav",{className:"nav"},l.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true",onClick:function(t){return e.handleToggle(t)}}),l.a.createElement("ul",{className:"collapsed ".concat(t?"is-expanded":"")},l.a.createElement(i.c,{activeClassName:"active",to:"/"},l.a.createElement("li",null,l.a.createElement("code",null,"home"))),l.a.createElement(i.c,{activeClassName:"active",to:"/about"},l.a.createElement("li",null,l.a.createElement("code",null,"about"))),l.a.createElement(i.c,{activeClassName:"active",to:"/contact"},l.a.createElement("li",null,l.a.createElement("code",null,"contact"))))))}}]),a}(n.Component),x=a(13),v=a.n(x),g=a(14),f=a.n(g),b=(a(41),a(42),a(46)),w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{class:"row"},l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:"holder.js/100px180"}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Card Title"),l.a.createElement(b.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),l.a.createElement("div",{class:"col-md-6 col-lg-2 col-xlg-3"},l.a.createElement("div",{class:"card card-hover"},l.a.createElement("div",{class:"box bg-info text-center"},l.a.createElement("h4",{class:"font-light text-white"},"React-js"),l.a.createElement("h6",{class:"text-white"},"jkl")))),l.a.createElement("div",{class:"col-md-6 col-lg-2 col-xlg-3"},l.a.createElement("div",{class:"card card-hover"},l.a.createElement("div",{class:"box bg-info text-center"},l.a.createElement("h4",{class:"font-light text-white"},"Bootstrap"),l.a.createElement("h6",{class:"text-white"},"jkl")))),l.a.createElement("div",{class:"col-md-6 col-lg-2 col-xlg-3"},l.a.createElement("div",{class:"card card-hover"},l.a.createElement("div",{class:"box bg-info text-center"},l.a.createElement("h4",{class:"font-light text-white"},"CSS"),l.a.createElement("h6",{class:"text-white"},"jkl")))),l.a.createElement("div",{class:"col-md-6 col-lg-2 col-xlg-3"},l.a.createElement("div",{class:"card card-hover"},l.a.createElement("div",{class:"box bg-info text-center"},l.a.createElement("h4",{class:"font-light text-white"},"HTML"),l.a.createElement("h6",{class:"text-white"},"jkl")))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{class:"timeline"},l.a.createElement("div",{class:"containerT right"},l.a.createElement("div",{class:"content"},l.a.createElement("h2",null,"2012"),l.a.createElement("p",null,"2nd year"))),l.a.createElement("div",{class:"containerT left"},l.a.createElement("div",{class:"content"},l.a.createElement("h2",null,"2015"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."))),l.a.createElement("div",{class:"containerT right"},l.a.createElement("div",{class:"content"},l.a.createElement("h2",null,"2012"),l.a.createElement("p",null,"2nd year"))),l.a.createElement("div",{class:"containerT left"},l.a.createElement("div",{class:"content"},l.a.createElement("h2",null,"2011"),l.a.createElement("p",null,"class 12"))),l.a.createElement("div",{class:"containerT right"},l.a.createElement("div",{class:"content"},l.a.createElement("h2",null,"2007"),l.a.createElement("p",null,"class 10")))))))},y=function(){return l.a.createElement(n.Fragment,{className:"row",style:{width:100,height:480}},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",{class:"typewriter"},l.a.createElement("div",{class:"typewriter-text"},l.a.createElement("code",null,"Hi there,")),l.a.createElement("br",null),l.a.createElement("div",{class:"typewriter-text-two",style:{}},l.a.createElement("code",null,"This is Swarali Purandare.")))),l.a.createElement("div",{class:"col-md-4"}),l.a.createElement("div",{class:"col-md-4"},l.a.createElement("div",{className:"imgClass"},l.a.createElement("center",null,l.a.createElement("span",null,l.a.createElement("a",{href:"#LeftSide",target:"_self"},l.a.createElement("img",{src:v.a,alt:"bl",style:{height:100,width:100}}))),l.a.createElement("span",null,l.a.createElement("a",{href:"#RightPage",target:"_self"},l.a.createElement("img",{src:f.a,alt:"bl",style:{height:100,width:100}})))))))),l.a.createElement(w,null))},k=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"About"))},j=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Contact"))},N=(a(43),function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:""},l.a.createElement(r.a,{exact:!0,path:"/",component:y}),l.a.createElement(r.a,{exaxt:!0,path:"/about",component:k}),l.a.createElement(r.a,{exact:!0,path:"/contact",component:j})))});Object(c.render)(l.a.createElement(i.a,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9bc8f3b8.chunk.js.map