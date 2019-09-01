import React from "react";
//import { Carousel } from "react-responsive-carousel";
import { Carousel } from "react-bootstrap";
import { relative } from "path";


export default () => (
  <div className='pt-3 pl-5 pr-5'>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1566224107055-367b8b94d12a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
       style={{width:20, height:800}}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1563170423-18f482d82cc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80/800x400"
      style={{width:300, height: 400}}

      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1563170423-741125661ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
       style={{width:300, height: 400}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  // <Carousel autoPlay>
     
  //  <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt='pisat'/>
  //     <p className="legend">Legend 1</p>
  //   </div> 
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"  alt='pisate'/>
  //     <p className="legend">Legend 2</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"alt='vasyer' />
  //     <p className="legend">Legend 3</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"alt='traser' />
  //     <p className="legend">Legend 4</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" alt='vasjw'/>
  //     <p className="legend">Legend 5</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" alt='balle' />
  //     <p className="legend">Legend 6</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" alt='pass'/>
  //     <p className="legend">Legend 7</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" alt='last'/>
  //     <p className="legend">Legend 8</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" alt='aswa'/>
  //     <p className="legend">Legend 9</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" alt='wase'/>
  //     <p className="legend">Legend 10</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" alt='dsae'/>
  //     <p className="legend">Legend 11</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" alt='gone'/>
  //     <p className="legend">Legend 12</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" alt='fast'/>
  //     <p className="legend">Legend 13</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" alt='dsae' />
  //     <p className="legend">Legend 14</p>
  //   </div>
  // </Carousel>

);
