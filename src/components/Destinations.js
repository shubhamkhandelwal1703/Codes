import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'


const Destinations = () => {

  return (
    <section className='destinations'>
      <h3>Now available in your city!</h3>
      
      <div className='grid'>
        <div className='main'>
          <img src={image1} alt='destination-1' />
          <h3>Reuse  Reduce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>

        <div className='main'>
          <img src={image2} alt='destination-2' />
          <h3>Recycle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>

        
        <div className='main'>
          <img src={image2} alt='destination-3' />
          <h3>Refurnish</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ab nesciunt? Molestias rem qui sequi!
          </p>
        </div>

        
      </div>
     
    </section>
  )
}

export default Destinations
