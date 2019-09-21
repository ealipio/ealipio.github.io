// import Header from '../src/components/Header';

import { Card, Layout, Menu, Col, Row } from 'antd';
import './index.less';

const Index = () => (
  <Layout>
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Card>
          <p className="title">Eisson Alipio</p>
          <span className="subtitle">Software Developer</span>
          <Menu
            className="menu-container"
            selectedKeys={['/about']}
            mode="horizontal"
          >
            <Menu.Item key="about" className="menu-item">
              About
            </Menu.Item>
            <Menu.Item key="skills" className="menu-item">
              Skills
            </Menu.Item>
            <Menu.Item key="experience" className="menu-item">
              Experience
            </Menu.Item>
            <Menu.Item key="education" className="menu-item">
              Education
            </Menu.Item>
            <Menu.Item key="contact" className="menu-item">
              Contact
            </Menu.Item>
          </Menu>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default Index;
