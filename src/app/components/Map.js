import React from 'react'
const Map = () => {
  return (
    <section className="py-14 lg:py-20 2xl:py-100 text-center bg-[#FFF2CE] bg-opacity-25">
    <div className="">
      <div>
        <h2 className="mb-4">
        Praxis für Psychotherapie Dr. Marhenke: unsere Standorte in Köln
        </h2>
        <span className="w-28 h-1 bg-yellow block mx-auto"></span>
      </div>
      <iframe
        className="aspect-[2.88/1] w-full  mt-16 grayscale"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19564.80647973232!2d11.635575924729926!3d52.196128438246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47af5eb301f0b9a5%3A0x5236659f807e400!2s39126%20Magdeburg-Gewerbegebiet%20Nord%2C%20Germany!5e0!3m2!1sen!2sin!4v1736155302899!5m2!1sen!2sin"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
  )
}
export default Map