import Image from 'next/image'
import styles from './styles.module.scss'
import { ReactNode } from 'react'
import useResize from '../../../../../../utils/useResize'

type Props = {
  image: string
  header: string
  text: string
  countEmployees: number
  countProjects: number
  textEmployees: string
  textProjects: string
  openModal: () => void
}

const Company = (props: Props) => {
  const { image, header, text, countEmployees, countProjects, textEmployees, textProjects, openModal } = props

  const width = useResize()

  const getTextAndAdditionalInfo = (): ReactNode => {
    return (
      <>
        <p>{text}</p>
        <div className={styles.additionalInfo}>
          <button onClick={openModal}>СВЯЗАТЬСЯ</button>
          <div className={styles.line} />
          <div className={styles.stuff}>
            <Image src={'/assets/stuff.svg'} alt={''} width={14} height={15} />
            <p>
              {countEmployees} {textEmployees}
            </p>
          </div>
          <div className={styles.projects}>
            <Image src={'/assets/project.svg'} alt={''} width={14} height={15} />
            <p>
              {countProjects} {textProjects}
            </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <article className={styles.company}>
        <Image src={image} alt={header} width={77} height={77} />
        <div className={styles.companyInfo}>
          <h2>{header}</h2>
          {width > 768 && getTextAndAdditionalInfo()}
        </div>
      </article>
      {width <= 768 && getTextAndAdditionalInfo()}
    </>
  )
}

export default Company
