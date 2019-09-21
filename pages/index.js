import Menu from '../src/components/Menu';

import { Avatar, Card, Descriptions, Icon, Layout, Col, Row } from 'antd';
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
          <div className="item-title">
            <span className="item-content">About Me</span>
          </div>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card>
          <Descriptions layout="vertical">
            <Descriptions.Item label="Web">ealipio.dev</Descriptions.Item>
            <Descriptions.Item label="skype">eisson.alipio</Descriptions.Item>
            <Descriptions.Item label="Phone">+51983516088</Descriptions.Item>
          </Descriptions>
          <div className="about-media">
            <a href="" target="_blank" className='media-item'>
              <Icon type="github" />
            </a>
            <a href="" target="_blank" className='media-item'>
              <Icon type="linkedin" />
            </a>
            <a href="" target="_blank" className='media-item'>
              <Icon type="skype" />
            </a>
            <a href="" target="_blank" className='media-item'>
              <Icon type="twitter" />
            </a>
          </div>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <Card>
          <Avatar
            size={'large'}
            src="static/ealipio.jpeg"
            style={{ width: '150px', height: '150px' }}
          />
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default Index;
