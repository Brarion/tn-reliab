import Image from 'next/image'
import Contact from '@components/Contact'
import React from 'react'
import useResize from '../../../../utils/useResize'
import styles from './styles.module.scss'

const Contacts = () => {
  const width = useResize()
  return (
    <div id={'contacts'} className={styles.wrapper}>
      <div className={styles.imgWrapper1}>
        <Image src={'/assets/background5.svg'} alt={''} width={175} height={175} />
      </div>
      <div className={styles.imgWrapper2}>
        <Image src={'/assets/background6.svg'} alt={''} width={176} height={176} />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>Хотите получить самый быстрый ответ?</h2>
          <p>
            Мы проверяем почту кажый час и с радостью ответим на любой Ваш вопрос. Наш менеджер свяжется со
            специалистами, чтобы вы получили самый компетентный ответ
          </p>
          {width >= 915 && (
            <div className={styles.maps}>
              <a
                className={styles.item}
                href={'https://goo.gl/maps/VUyGjbXkc4zgT8c46'}
                rel="noreferrer"
                target="_blank"
              >
                <Image src={'/assets/map1.svg'} alt={'Google Maps'} width={110} height={23} />
              </a>
              <a className={styles.item} href={'https://go.2gis.com/5z7ask'} rel="noreferrer" target="_blank">
                <Image src={'/assets/map2.svg'} alt={'2GIS'} width={54} height={23} />
              </a>
            </div>
          )}
        </div>
        <div className={styles.right}>
          <Contact />
        </div>
        {width < 915 && (
          <div className={styles.maps}>
            <a className={styles.item} href={'https://goo.gl/maps/VUyGjbXkc4zgT8c46'} rel="noreferrer" target="_blank">
              <Image src={'/assets/map1.svg'} alt={'Google Maps'} width={184} height={38} />
            </a>
            <a className={styles.item} href={'https://go.2gis.com/5z7ask'} rel="noreferrer" target="_blank">
              <Image src={'/assets/map2.svg'} alt={'2GIS'} width={89} height={38} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contacts
