import Company from '@components/MainPage/components/GroupCompany/Company'
import styles from './styles.module.scss'
import pirs from '@public/assets/pirs.svg'
import geoexpert from '@public/assets/geoexpert.svg'
import kvanta from '@public/assets/kvanta.svg'
import element from '@public/assets/element.svg'
import expertChoice from '@public/assets/expertChoice.svg'
import skypower from '@public/assets/skypower.svg'

const GroupCompany = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <span className={styles.text1}>Группа компаний ТН </span>
        <span className={styles.text2}>
          <span>- это объединение </span>
          <span>IT-специалистов</span>
          <span> из самых разных областей информационного пространства</span>
        </span>
      </div>
      <div className={styles.information}>
        <Company
          image={pirs}
          header={'Пирс'}
          text={'Разработка программных и технических систем, комплексов для бизнеса'}
          countEmployees={44}
          countProjects={20}
          textEmployees={'сотрудника'}
          textProjects={'проектов'}
        />
        <div className={styles.verticalLine} />
        <Company
          image={geoexpert}
          header={'Geoexpert'}
          text={'Георадиолокация и радарные системы для подповерхностного зондирования и навигации'}
          countEmployees={44}
          countProjects={20}
          textEmployees={'сотрудника'}
          textProjects={'проектов'}
        />
        <div className={styles.horizontalLine} />
        <div />
        <div className={styles.horizontalLine} />
        <Company
          image={kvanta}
          header={'KVANTA'}
          text={'Разработка электроники'}
          countEmployees={44}
          countProjects={20}
          textEmployees={'сотрудника'}
          textProjects={'проектов'}
        />
        <div className={styles.verticalLine} />
        <Company
          image={element}
          header={'Пятый элемент'}
          text={'Разработка и поддержка программного обеспечения'}
          countEmployees={44}
          countProjects={20}
          textEmployees={'сотрудника'}
          textProjects={'проектов'}
        />
        <div className={styles.horizontalLine} />
        <div />
        <div className={styles.horizontalLine} />
        <Company
          image={expertChoice}
          header={'Expert Choice CIS'}
          text={'Аудит и автоматизация бизнеса'}
          countEmployees={44}
          countProjects={20}
          textEmployees={'сотрудника'}
          textProjects={'проектов'}
        />
        <div className={styles.verticalLine} />
        <Company
          image={skypower}
          header={'Skypower'}
          text={'Беспилотные технологии'}
          countEmployees={44}
          countProjects={20}
          textEmployees={'сотрудника'}
          textProjects={'проектов'}
        />
      </div>
    </div>
  )
}

export default GroupCompany
