import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LayoutOutlined, ApiOutlined } from "@ant-design/icons";
import Responsive from "./components/grid/Responsive";

import AxiosApi from './components/api/axiosApis/AxiosApi'
import FetchApi from './components/api/fetchApis/FetchApi'

// import AxiosGetAll from "./components/api/axiosApis/getApis/GetAllData";
// import AxiosGetSingle from "./components/api/axiosApis/getApis/GetSingleData";
// import AxiosGetLimit from "./components/api/axiosApis/getApis/GetLimitedData";
// import AxiosGetSort from "./components/api/axiosApis/getApis/GetSortedData";

// import FetchGetAll from "./components/api/fetchApis/getApis/GetAllData";
// import FetchGetSingle from "./components/api/fetchApis/getApis/GetSingleData";
// import FetchGetLimit from "./components/api/fetchApis/getApis/GetLimitedData";
// import FetchGetSort from "./components/api/fetchApis/getApis/GetSortedData";

const { Header, Content, Footer, Sider } = Layout;

// const sliderMenuItems = [
//   {
//     key: `grid`,
//     label: `Grid`,
//     children: [
//       {
//         key: "responsive",
//         label: `Responsive`,
//         link: "/"
//       }
//     ]
//   },
//   {
//     key: `api`,
//     label: `API`,
//     children: [
//       {
//         key: "axiosapi",
//         label: `Axios`,
//         link: "/axios"
//       },
//       {
//         key: "fetchapi",
//         label: `Fetch`,
//         link: "/fetch"
//       }
//     ]
//   }
// ];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

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
        >
          <Menu.SubMenu key="grid" title="Grid" icon={<LayoutOutlined />}>
            <Link to="/">
              <Menu.Item key={"responsive"}>Responsive</Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="api" title="API" icon={<ApiOutlined />}>
            <Link to="/axios">
              <Menu.Item key="axios">Axios API</Menu.Item>
            </Link>

            <Link to="/fetch">
              <Menu.Item key="fetch">Fetch API</Menu.Item>
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
            minHeight:`calc(100vh - 160px)`
          }}
        >
          <div
            className="site-layout-background"
          >
            <Routes>
              <Route path="/" exact element={<Responsive />} />

              <Route path="/axios" element={<AxiosApi />} />

              <Route path="/fetch" element={<FetchApi />} />
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
