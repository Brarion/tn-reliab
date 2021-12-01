import Image from 'next/image'

import styles from './styles.module.scss'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <footer>
        <div className={styles.content}>
          <h2>
            <span>Группа компаний&nbsp;</span>
            <span>«Технологии надёжности»</span>
          </h2>
          <div className={styles.mainPart}>
            <div className={styles.info}>
              <div className={styles.item}>
                <Image src={'/assets/pirsbw.svg'} alt={'Пирс'} width={29} height={30} />
                <p>Пирс</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/skypowerbw.svg'} alt={'Skypower'} width={30} height={30} />
                <p>Skypower</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/kvantabw.svg'} alt={'KVANTA'} width={25} height={30} />
                <p>KVANTA</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/elementbw.svg'} alt={'Пятый элемент'} width={30} height={30} />
                <p>Пятый элемент</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/expertChoicebw.svg'} alt={'Expert Choice CIS'} width={22} height={30} />
                <p>Expert Choice CIS</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/geoexpertbw.svg'} alt={'Geoexpert'} width={29} height={30} />
                <p>Geoexpert</p>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.item}>
                <a href={'https://vk.com/reliab.tech'} rel="noreferrer" target="_blank">
                  Вконтакте
                </a>
              </div>
              <div className={styles.item}>
                <a href={'https://instagram.com/reliab_tech?utm_medium=copy_link'} rel="noreferrer" target="_blank">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.underfoot}>
          <span>© «Технологии надежности» 2021.&nbsp;</span>
          <span>Все права защищены</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
