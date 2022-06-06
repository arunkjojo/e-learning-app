import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LayoutOutlined, ApiOutlined, TableOutlined } from "@ant-design/icons";
import Responsive from "./components/grid/Responsive";

import AxiosApi from './components/api/axiosApis/AxiosApi'
import FetchApi from './components/api/fetchApis/FetchApi'
import CrudTable from './components/crud/CrudTable'

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  let location = useLocation();
  
  const [collapsed, setCollapsed] = useState(false);
  const [menuSelect, setMenuSelect] = useState('');

  useEffect(()=>{
    setMenuSelect(location.pathname.slice(1))
  },[location]);

  return (
    <Layout>
      <Sider
        style={{maxWidth: 'fit-content'}}
        className="sider"
        collapsible={true}
        reverseArrow={false}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">Learning App</div>
        <Menu
          theme="dark"
          mode="inline"
          selectable={true}
          defaultSelectedKeys={['responsive']}
          selectedKeys={[`${menuSelect}`]}
        >
          <Menu.SubMenu key="grid" title="Grid" icon={<LayoutOutlined />}>
            <Link to="/">
              <Menu.Item onClick={()=>setMenuSelect('responsive')} className={menuSelect === 'responsive' ? 'ant-menu-item-selected' : null} key="responsive">Responsive</Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="api" title="API" icon={<ApiOutlined />}>
            <Link to="/axios">
              <Menu.Item onClick={()=>setMenuSelect('axios')} className={menuSelect === 'axios' ? 'ant-menu-item-selected' : null} key="axios">Axios API</Menu.Item>
            </Link>

            <Link to="/fetch">
              <Menu.Item onClick={()=>setMenuSelect('fetch')} className={menuSelect === 'fetch' ? 'ant-menu-item-selected' : null} key="fetch">Fetch API</Menu.Item>
            </Link>

          </Menu.SubMenu>

            <Link to="/crud">
              <Menu.Item onClick={()=>setMenuSelect('crud')} className={menuSelect === 'crud' ? 'ant-menu-item-selected' : null} key="crud" icon={<TableOutlined />}>CRUD Oparations</Menu.Item>
            </Link>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
        ></Header>
        <Content
          style={{
            margin: "24px 16px 0",
            minHeight:`calc(100vh - 160px)`
          }}
        >
          <div
            className="site-layout-background"
          >
            <Routes>
              <Route path="/" element={<Responsive />} />

              <Route path="/axios" element={<AxiosApi />} />

              <Route path="/fetch" element={<FetchApi />} />

              <Route path="/crud" element={<CrudTable />} />

              <Route path="/docs" element={<CrudTable />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center"
          }}
        >
          This application develop for learing by Arun Jojo @2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
