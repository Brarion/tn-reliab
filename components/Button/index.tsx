import styles from './styles.module.scss'

type Props = {
  text: string
  className: string
}

const Button = ({ text, className }: Props) => {
  return <button className={`${styles.button} ${className}`}>{text}</button>
}

export default Button
