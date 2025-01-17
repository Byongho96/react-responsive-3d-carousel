import Layout from "@theme/Layout";
import LayoutEditor from "@site/src/features/layout-editor/components";
import styles from './styles.module.scss'

export default function LayoutEditorPage(): JSX.Element {
  return (
    <Layout
      title="Layout Editor"
      description="Effortlessly arrange your carousel using a 3D editor tool.">
      <main className={styles['wrapper']}>
        <h1>Custom Layout Editor</h1>
        <ul>
          <li>
            Effortlessly arrange your carousel using a 3D editor tool. You can generate custom layout data that can be passed as props for full control over your design.
          </li>
          <li>
            Supports all unit types, including px, pt, em, rem, and %. Note that pt, em, and rem are converted based on a 16px reference.
          </li>
        </ul>
        <LayoutEditor/>
      </main>
    </Layout>
  )
}

