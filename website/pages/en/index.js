/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {

  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo"/>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const StarMe = props => (
      <div>
        <a
          className="github-button"
          href={props.repoUrl}
          data-icon="octicon-star"
          data-count-href="ticktok-io/ticktok.io"
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star this project on GitHub">
          Star
        </a>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/*<Logo img_src={`${baseUrl}img/undraw_monitor.svg`}/>*/}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig}/>
          <StarMe repoUrl={siteConfig.repoUrl}/>
          <PromoSection>
            <Button href={docUrl('overview.html')}>Get Started</Button>
            {/*  <Button href={docUrl('doc1.html')}>Example Link</Button>*/}
            {/*  <Button href={docUrl('doc2.html')}>Example Link 2</Button>*/}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn" background="light">
        {[
          {
            content: 'Scheduling with Ticktok.io is done programmatically, using an SDK will hide any technology ' +
              'complexity. Our scheduling language is both easy to understand and powerful for any scheduling needs.',
            image: `${baseUrl}img/clock-circular-outline.png`,
            imageAlign: 'top',
            title: 'SCHEDULE',
          },
          {
            content: 'Monitoring is important and Ticktok.io doesn\'t fall short. Whether you want to monitor ticks accuracy, debug ' +
              'missing events or get alerts if something goes wrong. Ticktok.io will deliver.',
            image: `${baseUrl}img/pie-chart.png`,
            imageAlign: 'top',
            title: 'MONITOR',
          },
          {
            content: 'Ticktok.io is built to scale from the get go, so even at a large scale it will provide a fast and accurate ' +
              'ticks. ' +
              'It\'s also self managed, so there\'s no need for extra maintenance overhead.',
            image: `${baseUrl}img/settings-gears.png`,
            imageAlign: 'top',
            title: 'SCALE',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((
        siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption}/>
          </a>
        ));

      const pageUrl = page => baseUrl + (
        language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language}/>
        <div className="mainContainer">
          <Features/>
          {/*<FeatureCallout/>*/}
          {/*<LearnHow/>*/}
          {/*<TryOut/>*/}
          {/*<Description/>*/}
          {/*<Showcase/>*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;