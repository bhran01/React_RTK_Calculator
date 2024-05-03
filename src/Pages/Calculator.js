import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageDropDown from '../Components/LanguageDropdown';
import i18n from '../i18n';

export default function Calculator() {
  const {t} = useTranslation();

  useEffect(()=>{
    var cl =localStorage.getItem('curLng');
    i18n.changeLanguage(cl)
},[])
  //2.Function Def area

  //3.Return area
  return (
    <>
      <LanguageDropDown/>
      <div>
        <h1>Calculator Design Using HTML Layout</h1>
        <div className="container">
          <div className="header">{t('calculator')}</div>
          <input type="text" className="result" />
          <div className="first-row">
            <input type="button" name defaultValue="√" className="global" />
            <input type="button" name defaultValue="(" className="global" />
            <input type="button" name defaultValue=")" className="global" />
            <input type="button" name defaultValue="%" className="global" />
          </div>
          <div className="second-row">
            <input type="button" name defaultValue={7} className="global" />
            <input type="button" name defaultValue={8} className="global" />
            <input type="button" name defaultValue={9} className="global" />
            <input type="button" name defaultValue="/" className="global" />
          </div>
          <div className="third-row">
            <input type="button" name defaultValue={4} className="global" />
            <input type="button" name defaultValue={5} className="global" />
            <input type="button" name defaultValue={6} className="global" />
            <input type="button" name defaultValue="X" className="global" />
          </div>
          <div className="fourth-row">
            <input type="button" name defaultValue={1} className="global" />
            <input type="button" name defaultValue={2} className="global" />
            <input type="button" name defaultValue={3} className="global" />
            <input type="button" name defaultValue="-" className="global" />
          </div>
          <div className="conflict">
            <div className="left">
              <input type="button" name defaultValue={0} className=" big" />
              <input type="button" name defaultValue="." className=" small" />
              <input type="button" name defaultValue="Del" className=" red small white-text top-margin" />
              <input type="button" name defaultValue="=" className=" green white-text big top-margin" />
            </div>
            <div className="right">
              <input type="button" name defaultValue="+" className="global grey plus" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
