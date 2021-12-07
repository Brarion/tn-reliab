import cn from 'classnames'

import styles from './styles.module.scss'

type Props = {
  text: string
  className: string
  onClick: () => void
  type: 'submit' | 'reset' | 'button' | undefined
}

const Button = ({ text, className, onClick, type }: Props) => {
  const buttonStyles = cn(styles.defaultButton, {
    [className as string]: className,
  })

  return (
    <button className={buttonStyles} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button
