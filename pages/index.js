import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../static/css/main.css";
import MasonryLayout from "react-masonry-layout";
import sites from "../static/sites.json";
import {
  Grid,
  Image,
  GridRow,
  GridColumn,
  Header,
  Card,
  CardHeader,
  CardContent,
  Icon,
  Container
} from "semantic-ui-react";
import Link from "next/link";
import Head from "next/head";
const masonryOptions = {
  transitionDuration: 0
};
const Index = () => {
  //console.log(sites);
  return (
    <React.Fragment>
    <Head>
       <meta charset="utf-8" />    
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Sajid Badi-uz-zaman - sajidzaman.com" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
    <meta name="theme-color" content="#222222" />
    <title> Sajid Badi-uz-zaman - Experienced Web Developer - PHP Development, Laravel Develpment, ReactJS Development - sajidzaman.com</title>
<meta name="description" content="Development in PHP, Laravel, CakePHP, Javascript, React, React Native, Next.js, VueJS2, MySQL, Elasticsearch, MongoDB, Docker, Amazon Web Services (S3, EC2), Redis " />
<meta itemprop="name" content="Sajid Badi-uz-zaman - Experienced Web Developer - PHP Development, Laravel Develpment, ReactJS Development - sajidzaman.com" />
<meta itemprop="description" content="Development in PHP, Laravel, CakePHP, Javascript, React, React Native, Next.js, VueJS2, MySQL, Elasticsearch, MongoDB, Docker, Amazon Web Services (S3, EC2), Redis " />
<meta itemprop="image" content="http://sajidzaman.com/static/images/sajid.zaman.png" />
<meta name="twitter:card" content="Sajid Badi-uz-zaman - Experienced Web Developer - PHP Development, Laravel Develpment, ReactJS Development - sajidzaman.com" />
<meta name="twitter:site" content="sajidzaman.com" />
<meta name="twitter:title" content="Sajid Badi-uz-zaman - Experienced Web Developer - PHP Development, Laravel Develpment, ReactJS Development - sajidzaman.com" />
<meta name="twitter:description" content="Development in PHP, Laravel, CakePHP, Javascript, React, React Native, Next.js, VueJS2, MySQL, Elasticsearch, MongoDB, Docker, Amazon Web Services (S3, EC2), Redis " />
<meta name="twitter:creator" content="Sajid Badi-uz-zaman" />
<meta name="twitter:image:src" content="http://sajidzaman.com/static/images/sajid.zaman.png" />
<meta property="og:title" content="Sajid Badi-uz-zaman - Experienced Web Developer - PHP Development, Laravel Develpment, ReactJS Development - sajidzaman.com" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.sajidzaman.com" />
<meta property="og:image" content="http://sajidzaman.com/static/images/sajid.zaman.png" />
<meta property="og:description" content="Discover nearby museums and galleries, Access copyright free Images - No Charge, Buy & Sell Art - No Commission Fee" />
<meta property="og:site_name" content="sajidzaman.com" />
<link href="/favicon.ico" type="image/x-icon" rel="icon" />
<link href="/favicon.ico" type="image/x-icon" rel="shortcut icon" />
    </Head>
    <Container style={{ marginTop: 50 }}>
      <Grid>
        <GridRow className="border-shadow">
          <GridColumn width={3}>
            <Image
              src="/static/images/sajid.zaman.png"
              size="medium"
              circular
            />
            <br />
            <Link href="skype://sajidzaman79">
              <a>
                <Icon name="skype" className="large iconmargin" />
              </a>
            </Link>
            <Link href="https://github.com/sajidzaman">
              <a>
                <Icon name="github" className="large iconmargin" />
              </a>
            </Link>
            <Link href="https://twitter.com/sajidzaman">
              <a>
                <Icon name="twitter" className="large iconmargin" />
              </a>
            </Link>
            <Link href="mailto:sajidzaman@live.com">
              <a>
                <Icon name="envelope" className="large iconmargin" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/sajid-badi-uz-zaman-aa8aa58/">
              <a>
                <Icon name="linkedin" className="large iconmargin" />
              </a>
            </Link>
            <Link href="https://profiles.wordpress.org/sajidzaman">
              <a>
                <Icon name="wordpress" className="large iconmargin" />
              </a>
            </Link>
          </GridColumn>
          <GridColumn width={13}>
            I am <Header as="h2">SAJID BADI UZ ZAMAN</Header>
            <Header.Subheader>
              With more than 17 years of Experience of Web Development. <br />
              <br />
              I can work in PHP, Laravel, CakePHP, Javascript, React, React
              Native, Next.js, VueJS2, MySQL, Elasticsearch, MongoDB, Docker,
              Amazon Web Services (S3, EC2), Redis <br /> <br />I am proeficient
              with Bootstrap 3, 4, Semantic UI and other css frameworks.
              <br />
            </Header.Subheader>
          </GridColumn>
        </GridRow>
        <GridRow className="masonry">
          <MasonryLayout
            id="masonry-layout"
            sizes={[
              { columns: 2, gutter: 20 },
              { mq: "768px", columns: 3, gutter: 20 },
              { mq: "1024px", columns: 4, gutter: 20 }
            ]}
          >
            {sites.map(site => {
              return (
                <GridColumn width={4} key={site.id}>
                  <Card raised>
                    <a href={site.url} target="_blank">
                      <Image src={site.image} size="medium" />
                    </a>
                    <CardContent>
                      <a href={site.url} target="_blank">
                        <CardHeader>{site.name}</CardHeader>
                      </a>
                      <Card.Meta>
                        <span className="date">{site.subtitle}</span>
                      </Card.Meta>
                    </CardContent>
                    <Card.Content extra>{site.description}</Card.Content>
                  </Card>
                </GridColumn>
              );
            })}
          </MasonryLayout>
        </GridRow>
      </Grid>
    </Container>
    </React.Fragment>
  );
};

export default Index;
