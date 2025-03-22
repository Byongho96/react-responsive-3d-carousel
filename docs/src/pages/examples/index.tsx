import Layout from "@theme/Layout";
import styles from './styles.module.scss'
import Link from '@docusaurus/Link';

export default function ExamplesPage(): JSX.Element {
  return (
    <Layout
      title="Layout Editor"
      description="Effortlessly arrange your carousel using a 3D editor tool.">
      <main>
        <ul className={styles['examples-list']}>
          <li>
            <article>
              <Link to="/examples/rotating-albums">
                <h2>Rotating Albums</h2>
                <p>Effortlessly arrange your carousel using a 3D editor tool. You can generate custom layout data that can be passed as props for full control over your design.</p>
              </Link>
            </article>
          </li>
        </ul>
      </main>
    </Layout>
  )
}

