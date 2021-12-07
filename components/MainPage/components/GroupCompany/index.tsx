import React from 'react'
import Image from 'next/image'

import Company from '@components/MainPage/components/GroupCompany/components/Company'
import ContactForm from '@components/ContactForm'
import Modal from '@components/Modal'

import COMPANIES from '@projectTypes/companies'

import styles from './styles.module.scss'

const GroupCompany = () => {
  const [openedCompany, setOpenedCompany] = React.useState<COMPANIES | null>(null)

  const openModal = (company: COMPANIES) => {
    setOpenedCompany(company)
  }

  const closeModal = () => {
    setOpenedCompany(null)
  }

  return (
    <>
      <Modal opened={!!openedCompany} onClose={closeModal}>
        <div className={styles.modalContent}>
          <h2>Мы свяжемся с Вами</h2>
          <p>Оставьте свои контактные данные и наш специалист ответит Вам в кратчайшие сроки</p>
          <ContactForm company={openedCompany as COMPANIES} />
        </div>
      </Modal>

      <div id={'aboutUs'} className={styles.wrapper}>
        <div className={styles.imgWrapper1}>
          <Image src={'/assets/background3.svg'} alt={''} width={466} height={466} />
        </div>
        <div className={styles.imgWrapper2}>
          <Image src={'/assets/background4.svg'} alt={''} width={704} height={704} />
        </div>
        <div className={styles.imgWrapper3}>
          <Image src={'/assets/background3.svg'} alt={''} width={210} height={210} />
        </div>
        <div className={styles.imgWrapper4}>
          <Image src={'/assets/background7.svg'} alt={''} width={198} height={198} />
        </div>
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
            image={'/assets/pirs.svg'}
            header={COMPANIES.PIRS}
            text={'Разработка программных и технических систем, комплексов для бизнеса'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.verticalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={'/assets/geoexpert.svg'}
            header={COMPANIES.GEOEXPERT}
            text={'Георадиолокация и радарные системы для подповерхностного зондирования и навигации'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.horizontalLine} />
          <div className={styles.emptyBlock} />
          <div className={styles.horizontalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={'/assets/kvanta.svg'}
            header={COMPANIES.KVANTA}
            text={'Разработка электроники'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.verticalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={'/assets/element.svg'}
            header={COMPANIES.FIVE_ELEMENT}
            text={'Разработка и поддержка программного обеспечения'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.horizontalLine} />
          <div className={styles.emptyBlock} />
          <div className={styles.horizontalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={'/assets/expertChoice.svg'}
            header={COMPANIES.EXPERT_CHOICE_CIS}
            text={'Аудит и автоматизация бизнеса'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.verticalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={'/assets/skypower.svg'}
            header={COMPANIES.SKYPOWER}
            text={'Беспилотные технологии'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
        </div>
      </div>
    </>
  )
}

export default GroupCompany
