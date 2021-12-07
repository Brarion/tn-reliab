import React, { useState } from 'react'
import Image from 'next/image'

import MobileMenu from '@components/MobileMenu'

import ButtonOpenMenu from '@public/assets/btnOpenMenu.svg'

import useResize from '@utils/useResize'

import styles from './styles.module.scss'

const Header = () => {
  const width = useResize()
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)

  const openMenu = () => {
    setOpenedMenu(true)
  }

  const closeMenu = () => {
    setOpenedMenu(false)
  }

  const clickToJumbotron = () => {
    const jumbotronElement = document.getElementById('jumbotron')
    jumbotronElement!.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  const clickToAboutUs = () => {
    const aboutAsElement = document.getElementById('aboutUs')
    aboutAsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const clickToJobs = () => {
    const jobsElement = document.getElementById('jobs')
    jobsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const clickToContacts = () => {
    const contactsElement = document.getElementById('contacts')
    contactsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <>
      {openedMenu && width <= 768 && <MobileMenu onClose={closeMenu} />}
      <div className={styles.wrapper}>
        <header>
          <div className={styles.imgLogoWrapper}>
            <Image loading={'eager'} src={'/assets/logo.svg'} alt={'Технологии надежности'} width={128} height={40} />
          </div>
          {width > 768 && (
            <ul>
              <li>
                <a onClick={clickToJumbotron}>
                  Главная
                  <div className={styles.afterLine} />
                </a>
              </li>
              <div className={styles.ellipse} />
              <li>
                <a onClick={clickToAboutUs}>
                  О нас
                  <div className={styles.afterLine} />
                </a>
              </li>
              <div className={styles.ellipse} />
              <li>
                <a onClick={clickToJobs}>
                  Наша работа
                  <div className={styles.afterLine} />
                </a>
              </li>
              <div className={styles.ellipse} />
              <li>
                <a onClick={clickToContacts}>
                  Контакты
                  <div className={styles.afterLine} />
                </a>
              </li>
            </ul>
          )}
          {width <= 768 && (
            <div className={styles.btnMenu} onClick={openMenu}>
              <ButtonOpenMenu />
            </div>
          )}
        </header>
      </div>
    </>
  )
}

export default Header
