import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <div style={{width: '100px'}}>
        <CloudinaryContext
          cloudName={siteConfig.customFields.cloud_name}
          uploadPreset={siteConfig.customFields.cloud_name}
        >
          <Image publicId="kubi_logo_default_icon.png" dpr="auto" responsive width="auto" crop="scale" secure="true" loading="lazy" alt="Kubi logo" />
        </CloudinaryContext>
        </div>
        <div>
        <p>Kubi is a command line tool for setting up a Shopify project, whether bespoke or theming in an opinionated way to. This is done by integrating Gulp, Theme Kit and Webpack. It is designed to assist your development workflow and speed up the process of developing, testing, and deploying themes to Shopify. It has taken inspiration from Shopify Slate but has applied more team related functionalities such as Git.</p>

<p>Kubi not only provides a more customisable Shopify development solution but also allows for better compiling, css cleaning, optimising and code standards checking. The project uses a number of different packages to achieve this, such as Node Themekit, Stylelint, Prettier and eslinting. Kubi also gives more customisation options in the style of coding you may want to use, to develop for Shopify. However to keep consitancy Kubi uses Shopify standards in both SCSS and JS so that coding standards are still met with these customisations.</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`Hello from ${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
      <Head>
        <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        <meta name="cloudinary_cloud_name" content="kubix-media-ltd" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
