import React from 'react'
import "../map/map.css"
const Map = () => {
  return (
    <section className='map'>
      <div className="container">
      <div className="map_holder">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5699.154545977166!2d69.199668!3d41.289032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1716796780194!5m2!1sen!2sus"
         allowfullscreen="" loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </section>
  )
}

export default Map
