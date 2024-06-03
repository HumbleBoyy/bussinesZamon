import React, { useState } from 'react'
import "../Form/form.css"
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Form = () => {
  const {t, i18n} = useTranslation();
  const notify = () => toast();


  const sendMessage = (event) => {  
    event.preventDefault();
    const token = "6920420854:AAFr1y1--MfC5xnpEijVk4L8M69JlUneSEE";
    const chat_id = 7020035048;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phonenum = document.getElementById("number").value;
    const date = document.getElementById("date").value;
    const messageContent = `"Mijoz haqida"\n
    Name: ${name}\n
    Number: ${phonenum} \n
    Date: ${date} \n
    `
    axios({
      url:url,
      method:"POST",
      data:{
        "chat_id":chat_id,
        "text":messageContent,
      }
    }).then((res)=>{
      toast('Successfully added!')
    }).catch((error)=> {
      toast("Something went wrong!", error)
    })
  }
  return (
    <section className='fill_form' id='fill_form'>
      <div className="container">
        <div className="title_form">
           <h2>{t("formResrvation")}</h2>
        </div>
        <form id='myForm' onSubmit={sendMessage}>
          <div className="coreMessage">
             <div className='direction'>
             <label htmlFor="#">{t("formname")}</label>
            <input type="text" placeholder='Jerry Tom' id='name'
              required
            />
            </div>
           <div className='direction'>
           <label htmlFor="phone">{t("yourPhone")}</label>
           <input type="tel" placeholder='Number: +xxx xxx xxx'  id="number"
             required
           />
           </div>
          </div>
          <div className="div_date">
            <div>
            <label htmlFor="#">{t("Nguests")}</label>
              <select className='formSelect' id='guest'>
                  <option value="#">About, 3</option>
                  <option value="#">1</option>
                  <option value="#">2</option>
                  <option value="#">3</option>
                  <option value="#">4+</option>
              </select>
            </div>
            <div>
            <label htmlFor="#">{t("checkdate")}</label>
              <input type="date"  id='date'/>
            </div>
          </div>
          <div className="choseCountry">
            <div>
               <label htmlFor="#">{t("Choose")}</label>
               <select name="#" id="city" className='formSelect longer_select'>
                <option value="#">{t("city")}</option>
                <option value="#">{t("istanbul")}</option>
                <option value="#">{t("dubai")}</option>
                <option value="#">{t("London")}</option>
                <option value="#">{t("Cairo")}</option>
               </select>
            </div>
            <div>
               <label htmlFor="#">{t("VisaSupport")}</label>
               <select name="#" id="country" className='formSelect longer_select'>
                <option value="#">{t("uae")}</option>
                <option value="#">{t("japan")}</option>
                <option value="#">{t("usa")}</option>
                <option value="#">{t("egypt")}</option>
                <option value="#">{t("canada")}</option>
               </select>
            </div>
          </div>
          <button type='submit' onClick={notify} className='form_btn'
          >Submit</button>
           <ToastContainer />
        </form>
        </div>
    </section>
  )
}

export default Form
