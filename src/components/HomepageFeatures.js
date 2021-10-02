import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    //Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Clanny is designed to be easy to setup and get working. If it doesn't work on your first try,
        there are simple commands that will help you.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Clanny lets you focus on the important work while Clanny does the xp based promotions and database management
      </>
    ),
  },
  {
    title: 'Free for all',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Clanny will always be free, no matter how big or small your group is.
        But support on <a href='https://www.patreon.com/clannysystems'>Patreon</a> is always appreciated
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
