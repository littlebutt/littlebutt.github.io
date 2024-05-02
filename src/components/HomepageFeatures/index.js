import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '收录',
    Svg: require('@site/static/img/planet.svg').default,
    description: (
      <>
        站点收录了自计算机发明以来富有历史意义的“古董”软件，包括操作系统、编译器、文本编辑器和专业软件等。
      </>
    ),
  },
  {
    title: '体验',
    Svg: require('@site/static/img/computer.svg').default,
    description: (
      <>
        被收录软件会以可执行文件的方式保存在本站点以供访问者体验。如果无法提供某些软件的可运行环境，站点会提供源码以供参考。
      </>
    ),
  },
  {
    title: '资料',
    Svg: require('@site/static/img/books.svg').default,
    description: (
      <>
        本站点会提供被收录软件的相关资料，包括操作手册、图片和设计文档等。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
