import styles from './styles.module.scss'

type Props = {
  header: string
  items: Array<string>
  opened: Boolean
  onClick: (jobId: number) => void
  id: number
}

const OpeningList = (props: Props) => {
  const { header, items, opened, onClick, id } = props
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.header} ${opened ? styles.opening : ''}`} onClick={() => onClick(id)}>
        <h1>{header}</h1>
        <button aria-label={'opening'}>
          <div />
          <div />
        </button>
      </div>
      <div className={styles.horizontalLine} />
      <ul className={opened ? styles.opening : ''} id={id.toString()}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <div className={styles.horizontalLine} />
      </ul>
    </div>
  )
}

export default OpeningList
