import CurrentLayout from "./CurrentLayout";
import SavedLayoutList from "./SavedLayoutList";
import styles from './styles.module.scss'

export default function Output(): JSX.Element {
  return (
    <div className={styles['container']}>
      <CurrentLayout />
      <SavedLayoutList />
    </div>
  )
}



