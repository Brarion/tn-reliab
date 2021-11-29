import styles from './styles.module.scss'

type Props = {
  text: string
  className: string
  onClick: () => void
  type: 'submit' | 'reset' | 'button' | undefined
}

const Button = ({ text, className, onClick, type }: Props) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button
