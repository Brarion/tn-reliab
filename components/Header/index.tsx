import Image from 'next/image'

import styles from './styles.module.scss'
import useResize from '../../utils/useResize'
import React, { useEffect, useState } from 'react'
import MobileMenu from '@components/MobileMenu'

const Header = () => {
  const width = useResize()
  const [openedMenu, setOpenedMenu] = useState<boolean>(false)

  const openMenu = () => {
    setOpenedMenu(true)
  }

  const closeMenu = () => {
    setOpenedMenu(false)
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
                <a href={'/main'}>Главная</a>
              </li>
              <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
              <li>
                <a href={'/about-as'}>О нас</a>
              </li>
              <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
              <li>
                <a href={'/jobs'}>Наша работа </a>
              </li>
              <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
              <li>
                <a href={'/contacts'}>Контакты</a>
              </li>
            </ul>
          )}
          {width <= 768 && !openedMenu && (
            <div className={styles.btnMenu} onClick={openMenu}>
              <Image loading={'eager'} src={'/assets/btnOpenMenu.svg'} alt={''} width={25} height={25} />
            </div>
          )}
        </header>
      </div>
    </>
  )
}

export default Header
