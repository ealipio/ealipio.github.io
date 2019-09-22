import Menu from '../src/components/Menu';
import Arrow from '../src/components/Arrow';

import { Avatar, Card, Icon, Layout, Col, Row } from 'antd';
import './index.less';

const Index = () => (
  <Layout>
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card>
          <p className="title">Eisson Alipio</p>
          <span className="subtitle">Software Developer</span>
          <Menu />
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card>
          <Arrow text="About Me" />
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={4}>
        <Card>
          <ul className="about-list">
            <li>
              <span className="about-item">Web</span> ealipio.dev
            </li>
            <li>
              <span className="about-item">skype</span> eisson.alipio
            </li>
            <li>
              <span className="about-item">Phone</span> +51983516088
            </li>
          </ul>

          <div className="about-media">
            <a
              href="https://github.com/ealipio"
              target="_blank"
              className="media-item"
            >
              <Icon type="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ealipio"
              target="_blank"
              className="media-item"
            >
              <Icon type="linkedin" />
            </a>
            <a
              href="skype:eisson.alipio?call"
              target="_blank"
              className="media-item"
            >
              <Icon type="skype" />
            </a>
          </div>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={4}>
        <Card style={{textAlign:'center'}}>
          <Avatar
            size={'large'}
            src="static/ealipio.jpeg"
            style={{ width: '150px', height: '150px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={16}>
        <Card>
          <div className='about-description'>
            <p>
              Software developer with more than 8 years of experience in
              frontend and backend technologies. strong front-end development
              skills. Passionate about new technologies and constantly looking
              for new challenges.
            </p>
            <p>
              Talk to me about: Web Development, Angular, Node JS, Serverless,
              Docker and GNU/Linux.
            </p>
          </div>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card>
          <Arrow text="Skills" />
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default Index;
