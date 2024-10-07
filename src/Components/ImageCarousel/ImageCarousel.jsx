import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ImageCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div class="max-w-full ps-16 pe-16 h-60 pt-10 ">
        <Carousel responsive={responsive}>
          <div className=''><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div className=''><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
          <div><img src="https://dummyimage.com/160x160/#D9D9D/0011ff.png" alt="" /></div>
        </Carousel>
      </div>
    </>
  )
}

export default ImageCarousel;