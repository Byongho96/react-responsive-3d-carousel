import Editor from "./Editor";
import Output from "./Output";
import styles from './styles.module.scss'
import LayoutContextProvider from "../context/LayoutContext";

export default function LayoutEditor(): JSX.Element {

  return (
    <LayoutContextProvider>
      <div className={styles['container']}>
        <Editor />
        <Output />
      </div>
    </LayoutContextProvider>
  )
}

