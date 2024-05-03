import React from 'react'
import { Dropdown } from 'react-bootstrap'
import i18n from '../i18n';

export default function LanguageDropDown() {

  //2.2
  let changeLanguage = (l)=>{
    localStorage.setItem('curLng',l);
    i18n.changeLanguage(l)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Lanagauge
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{ changeLanguage('en'); }}>English</Dropdown.Item>
        <Dropdown.Item onClick={()=>{ changeLanguage('hi'); }}>Hindi</Dropdown.Item>
        <Dropdown.Item onClick={()=>{ changeLanguage('fr'); }}>French</Dropdown.Item>
        <Dropdown.Item onClick={()=>{ changeLanguage('nl'); }}>Dutch</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}