import React, { Component } from 'react';
import kitchenOne from './16kitchen.jpg';
export default class Kitchen extends Component{

  render(){
    return(
    <div className = 'Kitchen'>
    <h2 className='pageTitle'>Kitchen</h2>
    <img className ="roomImage" src={kitchenOne} alt = "Kitchen and bar with bar chairs"/>
    <div className="wrapper">
    <h3 className = "sectionTitle">What's in here?</h3>
    <div className="InfoBlock">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat, nisi a vulputate pretium, metus nisi elementum felis, vitae malesuada sapien libero vitae nisl. Suspendisse non arcu nulla. Nulla posuere nulla enim, sed consectetur felis condimentum ac. Donec arcu purus, aliquam at lobortis a, malesuada sed ex. Integer vestibulum odio ac mi vestibulum, id tincidunt sapien semper. Praesent ultrices dignissim nunc. Integer sagittis auctor viverra. Pellentesque in neque mattis, lobortis elit quis, luctus lectus. Ut eget malesuada ipsum. Pellentesque aliquam nulla orci, ac consectetur eros tincidunt sit amet. Sed sodales gravida lobortis. Pellentesque laoreet libero felis, tempus elementum nibh cursus ac. Donec gravida libero sed ligula porttitor, a vehicula dui laoreet. Nulla eget massa sit amet odio elementum condimentum vitae sit amet tortor. Fusce a convallis ipsum, vitae vestibulum nisl.</p>
    </div>
  </div>
  </div>
  );
  }
}
