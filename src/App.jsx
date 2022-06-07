import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LayoutOutlined, ApiOutlined, TableOutlined, BookOutlined, BranchesOutlined, BugOutlined, BuildOutlined, DeliveredProcedureOutlined } from "@ant-design/icons";
import Responsive from "./components/grid/Responsive";

import AxiosApi from './components/api/axiosApis/AxiosApi'
import FetchApi from './components/api/fetchApis/FetchApi'
import CrudTable from './components/crud/CrudTable'
import ButtonDocs from "./documents/general/button/ButtonDocs";
import DomManipulate from "./components/dom/DomManipulate";
import DomWithXSS from "./components/dom/DomWithXSS";
import ErrorBoundary from "./components/error/ErrorBoundary";
import ErrorTryCatch from "./components/error/ErrorTryCatch";
import InlineStyle from "./components/styles/InlineStyle";
import InComponentStyle from "./components/styles/InComponentStyle";
import ExternalStyle from "./components/styles/ExternalStyle";
import StyledComponents from "./components/styles/StyledComponents";
import ErrorOccuredComponent from "./components/error/ErrorOccuredComponent";
import ErrorWithoutComponent from "./components/error/ErrorWithoutComponent";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  let location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [menuSelect, setMenuSelect] = useState('');

  useEffect(() => {
    setMenuSelect(location.pathname.slice(1))
  }, [location]);

  return (
    <Layout>
      <Sider
        style={{ maxWidth: 'fit-content' }}
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
              <Menu.Item onClick={() => setMenuSelect('responsive')} className={menuSelect === 'responsive' ? 'ant-menu-item-selected' : null} key="responsive">Responsive</Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="api" title="API" icon={<ApiOutlined />}>
            <Link to="/axios">
              <Menu.Item onClick={() => setMenuSelect('axios')} className={menuSelect === 'axios' ? 'ant-menu-item-selected' : null} key="axios">Axios API</Menu.Item>
            </Link>

            <Link to="/fetch">
              <Menu.Item onClick={() => setMenuSelect('fetch')} className={menuSelect === 'fetch' ? 'ant-menu-item-selected' : null} key="fetch">Fetch API</Menu.Item>
            </Link>

          </Menu.SubMenu>

          <Menu.SubMenu key="nav" title="Router Navigation" icon={<DeliveredProcedureOutlined />}>
            <Link to="/routes">
              <Menu.Item onClick={() => setMenuSelect('routes')} className={menuSelect === 'routes' ? 'ant-menu-item-selected' : null} key="routes">React Router</Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="crud-op" title="CRUD Oparations" icon={<TableOutlined />}>
            <Link to="/crud">
              <Menu.Item onClick={() => setMenuSelect('crud')} className={menuSelect === 'crud' ? 'ant-menu-item-selected' : null} key="crud">CRUD in AntD</Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="dom-manipulation" title="Dom Manupulation" icon={<BranchesOutlined />}>
            <Link to="/dom-write">
              <Menu.Item onClick={() => setMenuSelect('dom-write')} className={menuSelect === 'dom-write' ? 'ant-menu-item-selected' : null} key="dom-write">Dom Manipulate</Menu.Item>
            </Link>

            <Link to="/dom-xss">
              <Menu.Item onClick={() => setMenuSelect('dom-xss')} className={menuSelect === 'dom-xss' ? 'ant-menu-item-selected' : null} key="dom-xss">XSS Dom Manipulation</Menu.Item>
            </Link>

          </Menu.SubMenu>

          <Menu.SubMenu key="error" title="Error" icon={<BugOutlined />}>
            <Link to="/error-boundary">
              <Menu.Item onClick={() => setMenuSelect('error-boundary')} className={menuSelect === 'error-boundary' ? 'ant-menu-item-selected' : null} key="error-boundary">Error Boundaries</Menu.Item>
            </Link>

            <Link to="/try-catch">
              <Menu.Item onClick={() => setMenuSelect('try-catch')} className={menuSelect === 'try-catch' ? 'ant-menu-item-selected' : null} key="try-catch">Try Catch</Menu.Item>
            </Link>

          </Menu.SubMenu>

          <Menu.SubMenu key="css" title="CSS" icon={<BuildOutlined />}>
            <Link to="/inline-css">
              <Menu.Item onClick={() => setMenuSelect('inline-css')} className={menuSelect === 'inline-css' ? 'ant-menu-item-selected' : null} key="inline-css">Inline Style</Menu.Item>
            </Link>

            <Link to="/inside-css">
              <Menu.Item onClick={() => setMenuSelect('inside-css')} className={menuSelect === 'inside-css' ? 'ant-menu-item-selected' : null} key="inside-css">Inside Component Style</Menu.Item>
            </Link>

            <Link to="/importing-css">
              <Menu.Item onClick={() => setMenuSelect('importing-css')} className={menuSelect === 'importing-css' ? 'ant-menu-item-selected' : null} key="importing-css">Import External Style</Menu.Item>
            </Link>

            <Link to="/component-css">
              <Menu.Item onClick={() => setMenuSelect('component-css')} className={menuSelect === 'component-css' ? 'ant-menu-item-selected' : null} key="component-css">Styled Component</Menu.Item>
            </Link>

          </Menu.SubMenu>

          <Menu.SubMenu key="docs" title="Documantation" icon={<BookOutlined />}>
            <Link to="/button-docs">
              <Menu.Item onClick={() => setMenuSelect('button-docs')} className={menuSelect === 'button-docs' ? 'ant-menu-item-selected' : null} key="button-docs">Button Docs</Menu.Item>
            </Link>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
        ></Header>
        <Content
          style={{
            margin: "24px 16px 0",
            minHeight: `calc(100vh - 160px)`
          }}
        >
          <div
            className="site-layout-background"
          >
            <Routes>

              {/* Grid route */}
              <Route path="/" element={<Responsive />} />

              {/* API route */}
              <Route path="/axios" element={<AxiosApi />} />

              <Route path="/fetch" element={<FetchApi />} />

              {/* CRUD operation in  table */}
              <Route path="/crud" element={<CrudTable />} />

              {/* Dom Manipulation */}
              <Route path="/dom-write" element={<DomManipulate />} />

              <Route path="/dom-xss" element={<DomWithXSS />} />

              {/* Error Checking */}
              <Route path="/error-boundary" element={
                <ErrorBoundary>
                  <ErrorOccuredComponent />
                </ErrorBoundary>
              } />

              <Route path="/try-catch" element={<ErrorTryCatch />} />

              {/* Styles types */}
              <Route path="/inline-css" element={<InlineStyle />} />

              <Route path="/inside-css" element={<InComponentStyle />} />

              <Route path="/importing-css" element={<ExternalStyle />} />

              <Route path="/component-css" element={<StyledComponents />} />

              {/* Documentations */}
              <Route path="/button-docs" element={<ButtonDocs />} />
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
