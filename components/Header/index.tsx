import Image from 'next/image'

import styles from './styles.module.scss'
import useResize from '../../utils/useResize'

const Header = () => {
  const width = useResize()

  return (
    <div className={styles.wrapper}>
      <header>
        <Image src={'/assets/logo.svg'} alt={'Технологии надежности'} width={128} height={40} />
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
              <a href={'/blog'}>Блог</a>
            </li>
            <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
            <li>
              <a href={'/contacts'}>Контакты</a>
            </li>
            <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
            <li>
              <a href={'/vacancy'}>Вакансии</a>
            </li>
          </ul>
        )}
        {width <= 768 && <div className={styles.menu}></div>}
      </header>
    </div>
  )
}

export default Header
