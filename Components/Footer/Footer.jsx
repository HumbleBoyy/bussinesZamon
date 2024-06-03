import React from 'react'
import "../Footer/footer.css"
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const {t, i18n} = useTranslation();
  return (
    <section className='footer'>
      <div className="container">
       <div className="footer_items">
         <div className="footer_text">
            <h2>{t("footer")}</h2>
            <p>{t("makeIt")}</p>
         </div>
         <a href="#fill_form"><button className='footer_btn'>{t("Yours")}</button></a>
       </div>
       </div>
       <div className="last_footer">
        <div className="container">
       <p>Copyright © 2024 <a href="#">Zamon Business Tour.</a>All rights reserved. 
            </p>
       </div>
       </div>
       
    </section>
  )
}

export default Footer
