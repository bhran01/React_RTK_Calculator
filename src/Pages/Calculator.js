import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageDropDown from '../Components/LanguageDropdown';
import i18n from '../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, number, addition, substraction, multiplication, division, result, clear } from '../features/calculator/calculatorSlice';

export default function Calculator() {
  const state=useSelector(selectCount);
  const dispatch=useDispatch();
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
          <input type="text" value={state} className="result" />
          <div className="first-row">
            <input type="button" name defaultValue="√" className="global" />
            <input type="button" name defaultValue="(" className="global" />
            <input type="button" name defaultValue=")" className="global" />
            <input type="button" name defaultValue="%" className="global" />
          </div>
          <div className="second-row">
            <input type="button" name defaultValue={t('seven')} className="global" onClick={()=>{dispatch(number(7))}}/>
            <input type="button" name defaultValue={t("eight")} className="global" onClick={()=>{dispatch(number(8))}}/>
            <input type="button" name defaultValue={t('nine')} className="global" onClick={()=>{dispatch(number(9))}}/>
            <input type="button" name defaultValue="/" className="global" onClick={()=>dispatch(division())}/>
          </div>
          <div className="third-row">
            <input type="button" name defaultValue={t('four')} className="global" onClick={()=>{dispatch(number(4))}}/>
            <input type="button" name defaultValue={t('five')} className="global" onClick={()=>{dispatch(number(5))}}/>
            <input type="button" name defaultValue={t('six')} className="global" onClick={()=>{dispatch(number(6))}}/>
            <input type="button" name defaultValue="X" className="global" onClick={()=>dispatch(multiplication())}/>
          </div>
          <div className="fourth-row">
            <input type="button" name defaultValue={t('one')} className="global" onClick={()=>{dispatch(number(1))}}/>
            <input type="button" name defaultValue={t('two')} className="global" onClick={()=>{dispatch(number(2))}}/>
            <input type="button" name defaultValue={t('three')} className="global" onClick={()=>{dispatch(number(3))}}/>
            <input type="button" name defaultValue="-" className="global" onClick={()=>dispatch(substraction())}/>
          </div>
          <div className="conflict">
            <div className="left">
              <input type="button" name defaultValue={0} className=" big" />
              <input type="button" name defaultValue="." className=" small" />
              <input type="button" name defaultValue="Del" className=" red small white-text top-margin" onClick={()=>{dispatch(clear())}}/>
              <input type="button" name defaultValue="=" className=" green white-text big top-margin" onClick={()=>{dispatch(result())}}/>
            </div>
            <div className="right">
              <input type="button" name defaultValue="+" className="global grey plus" onClick={()=>dispatch(addition())}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
