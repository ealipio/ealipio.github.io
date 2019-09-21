import { Menu } from 'antd';

import '../styles/styles.less';

export default () => (
  <Menu className="menu-container" selectedKeys={['/about']} mode="horizontal">
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
);
