import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import BtnCloseMenu from '@public/assets/btnCloseMenu.svg'
import LogoMobile from '@public/assets/logoMobile.svg'

type Props = {
  onClose: () => void
}

const MobileMenu = ({ onClose }: Props) => {
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
      onClose()
    }
  }, [])

  const handleClose = () => {
    setCloseAnimation(true)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  const wrapperStyles = cn(styles.wrapper, {
    [styles.closing]: closeAnimation,
  })

  const clickToJumbotron = () => {
    handleClose()
    const jumbotronElement = document.getElementById('jumbotron')
    jumbotronElement!.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  const clickToAboutUs = () => {
    handleClose()
    const aboutAsElement = document.getElementById('aboutUs')
    aboutAsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const clickToJobs = () => {
    handleClose()
    const jobsElement = document.getElementById('jobs')
    jobsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const clickToContacts = () => {
    handleClose()
    const contactsElement = document.getElementById('contacts')
    contactsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <div className={wrapperStyles}>
      <div className={styles.head}>
        <LogoMobile />
        <div className={styles.btnMenu} onClick={handleClose}>
          <BtnCloseMenu />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.item}>
          <a onClick={clickToJumbotron}>Главная</a>
        </div>
        <div className={styles.item}>
          <a onClick={clickToAboutUs}>О нас</a>
        </div>
        <div className={styles.item}>
          <a onClick={clickToJobs}>Наша работа </a>
        </div>
        <div className={styles.item}>
          <a onClick={clickToContacts}>Контакты</a>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.item}>
          <h3>Приёмная</h3>
          <a href={'tel:+7 (800) 555-30-53'}>+7 (800) 555-30-53</a>
        </div>
        <div className={styles.item}>
          <h3>Менеджер</h3>
          <a href={'mailto:tn@reliab.tech'}>tn@reliab.tech</a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
