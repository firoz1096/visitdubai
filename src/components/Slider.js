import React from 'react';
import { RiArrowDownSLine } from "react-icons/ri";


export default function Slider() {


  //typing animation
//   var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// }

////typing animation ends


  return (
    <>
<div className="heroSlider"> 
<div className="d-flex align-items-center h-100">

<div className="container text-center">

<div className="row">
<div className="col-12">


<h1 className="text-white mb-5">Discover the world's tallest building.</h1>

  {/* <h1 className="typewrite text-white mb-5" data-period="2000" data-type='[ "tallest building.", "largest natural flower garden.", "fastest roller coaster.", "only seven-star hotel." ]'>
    <span className="wrap"></span>

</h1> */}



<a className="updown" href="#explore-top-destination"> <RiArrowDownSLine /></a>


</div>



</div>



</div>





</div>

</div>
</>

  )
}
