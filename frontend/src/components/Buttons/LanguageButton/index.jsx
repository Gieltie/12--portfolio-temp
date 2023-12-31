import { useTranslation } from 'react-i18next'
import './index.scss'

export default function LanguageButton() {
  const { i18n } = useTranslation("global")

  return (
    <div className='language-btn'>
      <div className='btn' onClick={() => i18n.changeLanguage("fr")}>FR</div>
      <div className='btn' onClick={() => i18n.changeLanguage("en")}>EN</div>
      <div className='btn' onClick={() => i18n.changeLanguage("nl")}>NL</div>
    </div>
  )
}