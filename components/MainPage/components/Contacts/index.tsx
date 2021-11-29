import Image from 'next/image'
import styles from './styles.module.scss'
import Contact from '@components/Contact'

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>Хотите получить самый быстрый ответ?</h2>
          <p>
            Мы проверяем почту кажый час и с радостью ответим на любой Ваш вопрос. Наш менеджер свяжется со
            специалистами, чтобы вы получили самый компетентный ответ
          </p>
          <div className={styles.maps}>
            <a className={styles.item} href={'https://goo.gl/maps/VUyGjbXkc4zgT8c46'} rel="noreferrer" target="_blank">
              <Image src={'/assets/map1.svg'} alt={'Google Maps'} width={110} height={23} />
            </a>
            <a className={styles.item} href={'https://go.2gis.com/5z7ask'} rel="noreferrer" target="_blank">
              <Image src={'/assets/map2.svg'} alt={'2GIS'} width={54} height={23} />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Contacts
