import { Link } from 'react-router-dom'
import './index.scss'
import { useTranslation } from 'react-i18next'

export default function WorkButton() {
  const { t } = useTranslation("global")
  return (<Link to="/#work" className="btn">{t("skills.workBtn")}</Link>)
}