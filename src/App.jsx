import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LayoutOutlined, ApiOutlined } from "@ant-design/icons";
import Responsive from "./components/grid/Responsive";

import AxiosGetAll from "./components/api/axiosApis/GetAllData";
import AxiosGetSingle from "./components/api/axiosApis/GetSingleData";
import AxiosGetLimit from "./components/api/axiosApis/GetLimitedData";
import AxiosGetSort from "./components/api/axiosApis/GetSortedData";

import FetchGetAll from "./components/api/fetchApis/GetAllData";
import FetchGetSingle from "./components/api/fetchApis/GetSingleData";
import FetchGetLimit from "./components/api/fetchApis/GetLimitedData";
import FetchGetSort from "./components/api/fetchApis/GetSortedData";

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
          defaultSelectedKeys={["responsive"]}
        >
          <Menu.SubMenu key="grid" title="Grid" icon={<LayoutOutlined />}>
            <Link to="/">
              <Menu.Item key="responsive">Responsive</Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="api" title="API" icon={<ApiOutlined />}>
            
            <Menu.SubMenu key="axios" title="AXIOS">
              <Link to="/axios_get_all">
                <Menu.Item key="axios_get_all">All Data</Menu.Item>
              </Link>

              <Link to="/axios_get_single/1">
                <Menu.Item key="axios_get_single">Single Data</Menu.Item>
              </Link>

              <Link to="/axios_get_limit/10">
                <Menu.Item key="axios_get_limit">Limited Data</Menu.Item>
              </Link>

              <Link to="/axios_get_sort/desc">
                <Menu.Item key="axios_get_sort">Sorted Data</Menu.Item>
              </Link>
            </Menu.SubMenu>

            <Menu.SubMenu key="fetch" title="FETCH">
              <Link to="/fetch_get_all">
                <Menu.Item key="fetch_get_all">All Data</Menu.Item>
              </Link>

              <Link to="/fetch_get_single/2">
                <Menu.Item key="fetch_get_single">Single Data</Menu.Item>
              </Link>

              <Link to="/fetch_get_limit/5">
                <Menu.Item key="fetch_get_limit">Limited Data</Menu.Item>
              </Link>

              <Link to="/fetch_get_sort/asc">
                <Menu.Item key="fetch_get_sort">Sorted Data</Menu.Item>
              </Link>
            </Menu.SubMenu>

          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
        ></Header>
        <Content
          style={{
            margin: "24px 16px 0"
          }}
        >
          <div
            className="site-layout-background"
          >
            <Routes>
              <Route path="/" exact element={<Responsive />} />
              <Route path="/axios_get_all" element={<AxiosGetAll />} />
              <Route path="/axios_get_single/:id" element={<AxiosGetSingle />} />
              <Route path="/axios_get_limit/:limit" element={<AxiosGetLimit />} />
              <Route path="/axios_get_sort/:sort" element={<AxiosGetSort />} />
              

              <Route path="/fetch_get_all" element={<FetchGetAll />} />
              <Route path="/fetch_get_single/:id" element={<FetchGetSingle />} />
              <Route path="/fetch_get_limit/:limit" element={<FetchGetLimit />} />
              <Route path="/fetch_get_sort/:sort" element={<FetchGetSort />} />
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
