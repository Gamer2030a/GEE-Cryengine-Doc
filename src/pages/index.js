import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <video autoPlay loop muted className='Cryengine_Hero_Video'>
          <source src='video/hero-bg-home.webm' type='video/webm' />
        </video>
      <div class="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`${siteConfig.title}`}
    description="CryDoc is your go-to resource for community-driven documentation on CryEngine. Whether you're a seasoned developer or just starting out, CryDoc provides comprehensive guides, tutorials, and reference materials to help you navigate the intricacies of CryEngine. With contributions from passionate enthusiasts and experienced professionals alike, CryDoc ensures that knowledge is shared, problems are solved, and creativity thrives within the CryEngine community. Dive in, explore, and let CryDoc be your companion on your journey to mastering CryEngine.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
    
  );
}
