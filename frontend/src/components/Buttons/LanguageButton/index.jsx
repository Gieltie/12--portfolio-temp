import { useTranslation } from 'react-i18next'
import './index.scss'

export default function LanguageButton() {
  const { i18n } = useTranslation("global")

  return (
    <div className='language-btn'>
      <button className='btn' onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button className='btn' onClick={() => i18n.changeLanguage("fr")}>FR</button>
    </div>
  )
}