import CodeIcon from '@site/static/svg/code.svg';
import styles from './styles.module.scss'

export default function CodeLink({href}): JSX.Element {
  return (
    <a className={styles['code-link']} href={href} target="_blank" aria-label="Source Code">
      <CodeIcon />
    </a>
  )
}