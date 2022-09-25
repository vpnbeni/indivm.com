import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsApp } from '@fortawesome/free-solid-svg-icons'

export default function WhatsAppBtn() {
  return (
    <div className='whatsAppBtn'>
      <a href="https://wa.me/+919518220044" target={'_blank'}>
        <img src={require('../img/WhatsApp.svg.png')} alt="WhatsApp Icon" />
      </a>
    </div>
  )
}
