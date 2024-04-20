import React from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const {t} =useTranslation()
  const{i18n} = useTranslation()


  const language =[
    {code:"en",lang:"English"},
    {code:"fr",lang:"French"},
    {code:"hi",lang:"hindi"}
  ]
  return (
    <div className='pl'>
      {language?.map((lng)=>{
        return <button onClick={()=>i18n.changeLanguage(lng?.code) }>{lng?.lang}</button>
      })}
      <h1>{t("greeting")} </h1>
      <h1>{t("love")} </h1>
    </div>
  )
}

export default App

