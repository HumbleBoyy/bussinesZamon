import React from 'react'
import "./contact.css"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import Map from './map/Map';
import Form from './Form/Form';
import { ToastContainer } from 'react-toastify';
import Forms from './Form/Form';
const Contact = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <section className='contact' id='contact'>
        <div className="container">
          <div className="contact_image">
             <div className="contact_title">
                 <h3>{t("contactSec")}</h3>
                 <h2>{t("makeReservation")}</h2>
             </div>
             <a href="#fill_form"><button className='contact_btn'>{t("explore")}</button></a>
          </div>

          <div className="contact_cards">
             <div className="cards_contact">
                <div className="card">
                  <div className="circle_phone">
                    <FontAwesomeIcon icon={faPhone} className="contact_icons" />
                  </div>
                  <h3>{t("phoneNumber")}</h3>
                    <p>+998 99 299 99 96</p>
                </div>
             </div>
             <div className="cards_contact">
                <div className="card">
                  <div className="circle_phone">
                    <FontAwesomeIcon icon={faEnvelope} className="contact_icons" />
                  </div>
                  <h3>{t("contactVia")}</h3>
                    <p>zamonbiznestour@mail.ru</p>
                </div>
             </div>
             <div className="cards_contact">
                <div className="card">
                  <div className="circle_phone">
                    <FontAwesomeIcon icon={faLocation} className="contact_icons" />
                  </div>
                  <h3>{t("Visit")}</h3>
                    <p>15/25, Chilanzar - 9, Tashkent city</p>
                </div>
             </div>
          </div>
          </div>
      </section>
      <Map/>
      <Forms/>
    </>
  )
}

export default Contact
