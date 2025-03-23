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
                <img src={require('@site/static/screenshots/rotating-albums.jpg').default} alt="Rotating Albums Screenshot"/>
              </Link>
            </article>
          </li>
          <li>
            <article>
              <Link to="/examples/puppy-days">
                <h2>Puppy Days</h2>
                <img src={require('@site/static/screenshots/puppy-days.jpg').default} alt="Puppy Days Screenshot"/>
              </Link>
            </article>
          </li>
        </ul>
      </main>
    </Layout>
  )
}

