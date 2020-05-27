import React from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import styles from './Registry.module.scss';

const Registry = () => (
  <Grid fluid>
    <Col sm={12} md={10} mdOffset={1} lg={8} lgOffset={2} className={styles.Matte}>
      <p className={styles.Intro}> Thank you for thinking of us as we start our lives as newlyweds.
        We can&apos;t wait to celebrate with you, and your presence is present enough.
        However, if you are so inclined to buy us a gift, we are very appreciative.
      </p>
      <hr className={styles.divider} />
      <div>
        <Row center="md">
          <Col smOffset={2} mdOffset={0} sm={8} md={6}>
            <a href="https://smile.amazon.com/wedding/daniel-schepers-eileen-mclaughlin-la-grange-june-2022/registry/2XPOVLIDNF528">
              <img alt="amazon" className={styles.registryImage} src="https://lh3.googleusercontent.com/proxy/10PXFmKsTjOXzvgfR6AsxqvXTwkpqtu_nd12qwLMCMCgmqZyg4Wl1UhWjlepkXqicXgfZcOZI3-JBw2Jenix95wklv6PF_QSX0mtrpLwhClg8PHkWrJs4r58buItFy1nnu6qIY6VDpXTZ4FbbwIuYGSbWf9-kaA" />
            </a>
          </Col>
          <Col smOffset={2} mdOffset={0} sm={8} md={6}>
            <a href="https://www.crateandbarrel.com/gift-registry/eileen-mclaughlin-and-dan-schepers/r6049948">
              <img alt="crate and barrel" className={styles.cnb} src="https://images.crateandbarrel.com/is/image/Crate/cb_BR_Pages_575x350_201803_v2" />
            </a>
          </Col>
        </Row>
      </div>
    </Col>
  </Grid>
);

export default Registry;
