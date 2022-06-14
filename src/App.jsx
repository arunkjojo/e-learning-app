import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  LayoutOutlined,
  ApiOutlined,
  TableOutlined,
  BookOutlined,
  BranchesOutlined,
  BugOutlined,
  BuildOutlined,
  DeliveredProcedureOutlined,
  CiCircleOutlined,
  FunctionOutlined,
  SwapOutlined,
  SketchOutlined,
  FormOutlined,
} from "@ant-design/icons";
import Responsive from "./components/grid/Responsive";

import AxiosApi from "./components/api/axiosApis/AxiosApi";
import FetchApi from "./components/api/fetchApis/FetchApi";
import CrudTable from "./components/crud/CrudTable";
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
import ClassBasedCounter from "./components/classes/counter/ClassBasedCounter";
import FunctionalBasedCounter from "./components/functions/counter/FunctionalBasedCounter";
import FunctionalaBasedStateManagement from "./components/functions/stateManagement/FunctionalaBasedStateManagement";
import ClassBasedStateManagement from "./components/classes/stateManagment/ClassBasedStateManagement";
import ClassLifeCycle from "./components/classes/stateManagment/ClassLifeCycle";
import ClassBasedCrud from "./components/classes/stateManagment/ClassBasedCrud";
import BasicHooks from "./components/functions/hooks/BasicHooks";
import CustomHooks from "./components/functions/hooks/CustomHooks";
import HooksContext from "./components/functions/hooks/ContextHooks";
import HooksCallback from "./components/functions/hooks/CallbackHooks";
import HooksMemo from "./components/functions/hooks/MemoHooks";
import HooksRef from "./components/functions/hooks/RefHooks";
import HooksReducer from "./components/functions/hooks/ReducerHooks";
import Refs from "./components/classes/refs/Refs";
import RenderProps from "./components/classes/renderProps/RenderProps";
import HigherOrderComponent from "./components/classes/hoc/HigherOrderComponent";
import UserAccount from "./components/context/UserAccount";
import EditUserAccount from "./components/context/EditUserAccount";

import { Context } from "./components/context/Context";
import JsonToUi from "./components/jsonUi/JsonToUi";
import ReactRouter from "./components/routes/ReactRouter";
import ReachRouter from "./components/routes/ReachRouter";
import ReactForm from "./components/form/ReactForm";
import ReactFormik from "./components/form/ReactFormik";
import FinalForm from "./components/form/FinalForm";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  let location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [menuSelect, setMenuSelect] = useState("");

  useEffect(() => {
    setMenuSelect(location.pathname.slice(1));
  }, [location]);

  const [context, setContext] = useState({
    name:'Arun K Jojo',
    email: 'arunkjojo@gmail.com'
  });

  return (
    <Layout>
      <Sider
        style={{ maxWidth: "fit-content" }}
        className="sider"
        collapsible={true}
        reverseArrow={false}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <Link to="/" className="logo">Learning App</Link></div>
        <Menu
          theme="dark"
          mode="inline"
          selectable={true}
          defaultSelectedKeys={["responsive"]}
          selectedKeys={[`${menuSelect}`]}
        >
          <Menu.SubMenu key="grid" title="Grid" icon={<LayoutOutlined />}>
            <Link to="/">
              <Menu.Item
                onClick={() => setMenuSelect("responsive")}
                className={
                  menuSelect === "responsive" ? "ant-menu-item-selected" : null
                }
                key="responsive"
              >
                Responsive
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="api" title="API" icon={<ApiOutlined />}>
            <Link to="/axios">
              <Menu.Item
                onClick={() => setMenuSelect("axios")}
                className={
                  menuSelect === "axios" ? "ant-menu-item-selected" : null
                }
                key="axios"
              >
                Axios API
              </Menu.Item>
            </Link>

            <Link to="/fetch">
              <Menu.Item
                onClick={() => setMenuSelect("fetch")}
                className={
                  menuSelect === "fetch" ? "ant-menu-item-selected" : null
                }
                key="fetch"
              >
                Fetch API
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="crud-op"
            title="CRUD Oparations"
            icon={<TableOutlined />}
          >
            <Link to="/crud">
              <Menu.Item
                onClick={() => setMenuSelect("crud")}
                className={
                  menuSelect === "crud" ? "ant-menu-item-selected" : null
                }
                key="crud"
              >
                CRUD in AntD
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="dom-manipulation"
            title="Dom Manupulation"
            icon={<BranchesOutlined />}
          >
            <Link to="/dom-write">
              <Menu.Item
                onClick={() => setMenuSelect("dom-write")}
                className={
                  menuSelect === "dom-write" ? "ant-menu-item-selected" : null
                }
                key="dom-write"
              >
                Dom Manipulate
              </Menu.Item>
            </Link>

            <Link to="/dom-xss">
              <Menu.Item
                onClick={() => setMenuSelect("dom-xss")}
                className={
                  menuSelect === "dom-xss" ? "ant-menu-item-selected" : null
                }
                key="dom-xss"
              >
                XSS Dom Manipulation
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="error" title="Error" icon={<BugOutlined />}>
            <Link to="/error-boundary">
              <Menu.Item
                onClick={() => setMenuSelect("error-boundary")}
                className={
                  menuSelect === "error-boundary"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="error-boundary"
              >
                Error Boundaries
              </Menu.Item>
            </Link>

            <Link to="/try-catch">
              <Menu.Item
                onClick={() => setMenuSelect("try-catch")}
                className={
                  menuSelect === "try-catch" ? "ant-menu-item-selected" : null
                }
                key="try-catch"
              >
                Try Catch
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="css" title="CSS" icon={<BuildOutlined />}>
            <Link to="/inline-css">
              <Menu.Item
                onClick={() => setMenuSelect("inline-css")}
                className={
                  menuSelect === "inline-css" ? "ant-menu-item-selected" : null
                }
                key="inline-css"
              >
                Inline Style
              </Menu.Item>
            </Link>

            <Link to="/inside-css">
              <Menu.Item
                onClick={() => setMenuSelect("inside-css")}
                className={
                  menuSelect === "inside-css" ? "ant-menu-item-selected" : null
                }
                key="inside-css"
              >
                Inside Component Style
              </Menu.Item>
            </Link>

            <Link to="/importing-css">
              <Menu.Item
                onClick={() => setMenuSelect("importing-css")}
                className={
                  menuSelect === "importing-css"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="importing-css"
              >
                Import External Style
              </Menu.Item>
            </Link>

            <Link to="/component-css">
              <Menu.Item
                onClick={() => setMenuSelect("component-css")}
                className={
                  menuSelect === "component-css"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="component-css"
              >
                Styled Component
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="classes"
            title="Classes"
            icon={<CiCircleOutlined />}
          >
            <Link to="/class-counter">
              <Menu.Item
                onClick={() => setMenuSelect("class-counter")}
                className={
                  menuSelect === "class-counter"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="class-counter"
              >
                Counter
              </Menu.Item>
            </Link>
            <Link to="/class-state">
              <Menu.Item
                onClick={() => setMenuSelect("class-state")}
                className={
                  menuSelect === "class-state" ? "ant-menu-item-selected" : null
                }
                key="class-state"
              >
                State Management
              </Menu.Item>
            </Link>

            <Link to="/class-crud">
              <Menu.Item
                onClick={() => setMenuSelect("class-crud")}
                className={
                  menuSelect === "class-crud" ? "ant-menu-item-selected" : null
                }
                key="class-crud"
              >
                CRUD-Class
              </Menu.Item>
            </Link>

            <Link to="/class-lifecycle">
              <Menu.Item
                onClick={() => setMenuSelect("class-lifecycle")}
                className={
                  menuSelect === "class-lifecycle"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="class-lifecycle"
              >
                Life Cycle Explain
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="functional"
            title="Functional"
            icon={<FunctionOutlined />}
          >
            <Link to="/function-counter">
              <Menu.Item
                onClick={() => setMenuSelect("function-counter")}
                className={
                  menuSelect === "function-counter"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="function-counter"
              >
                Counter
              </Menu.Item>
            </Link>
            <Link to="/function-state">
              <Menu.Item
                onClick={() => setMenuSelect("function-state")}
                className={
                  menuSelect === "function-state"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="function-state"
              >
                State Management
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu key="hooks" title="Hooks" icon={<SwapOutlined />}>
            <Link to="/basic">
              <Menu.Item
                onClick={() => setMenuSelect("basic")}
                className={
                  menuSelect === "basic" ? "ant-menu-item-selected" : null
                }
                key="basic"
              >
                Basic Hooks
              </Menu.Item>
            </Link>
            <Link to="/ref">
              <Menu.Item
                onClick={() => setMenuSelect("ref")}
                className={
                  menuSelect === "ref" ? "ant-menu-item-selected" : null
                }
                key="ref"
              >
                useRef Hooks
              </Menu.Item>
            </Link>
            <Link to="/callback">
              <Menu.Item
                onClick={() => setMenuSelect("callback")}
                className={
                  menuSelect === "callback" ? "ant-menu-item-selected" : null
                }
                key="callback"
              >
                useCallback Hooks
              </Menu.Item>
            </Link>
            <Link to="/memo">
              <Menu.Item
                onClick={() => setMenuSelect("memo")}
                className={
                  menuSelect === "memo" ? "ant-menu-item-selected" : null
                }
                key="memo"
              >
                useMemo Hooks
              </Menu.Item>
            </Link>
            <Link to="/context">
              <Menu.Item
                onClick={() => setMenuSelect("context")}
                className={
                  menuSelect === "context" ? "ant-menu-item-selected" : null
                }
                key="context"
              >
                useContext Hooks
              </Menu.Item>
            </Link>
            <Link to="/reducer">
              <Menu.Item
                onClick={() => setMenuSelect("reducer")}
                className={
                  menuSelect === "reducer" ? "ant-menu-item-selected" : null
                }
                key="reducer"
              >
                useReducer Hooks
              </Menu.Item>
            </Link>

            <Link to="/custom-hook">
              <Menu.Item
                onClick={() => setMenuSelect("custom-hook")}
                className={
                  menuSelect === "custom-hook" ? "ant-menu-item-selected" : null
                }
                key="custom-hook"
              >
                Custom Hooks
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="ref-class"
            title="Ref in Class"
            icon={<SketchOutlined />}
          >
            <Link to="/refs">
              <Menu.Item
                onClick={() => setMenuSelect("refs")}
                className={
                  menuSelect === "refs" ? "ant-menu-item-selected" : null
                }
                key="refs"
              >
                Refs
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="renderProps-class"
            title="Render Props in Class"
            icon={<SketchOutlined />}
          >
            <Link to="/render-props">
              <Menu.Item
                onClick={() => setMenuSelect("render-props")}
                className={
                  menuSelect === "render-props"
                    ? "ant-menu-item-selected"
                    : null
                }
                key="render-props"
              >
                Render props
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="higher-order"
            title="Higher Order"
            icon={<SketchOutlined />}
          >
            <Link to="/hoc">
              <Menu.Item
                onClick={() => setMenuSelect("hoc")}
                className={
                  menuSelect === "hoc" ? "ant-menu-item-selected" : null
                }
                key="hoc"
              >
                Higher Order Component
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="nav"
            title="Router Navigation"
            icon={<DeliveredProcedureOutlined />}
          >
            <Link to="/react-routes">
              <Menu.Item
                onClick={() => setMenuSelect("routes")}
                className={
                  menuSelect === "react-routes" ? "ant-menu-item-selected" : null
                }
                key="react-routes"
              >
                React Router
              </Menu.Item>
            </Link>
            <Link to="/reach-routes">
              <Menu.Item
                onClick={() => setMenuSelect("routes")}
                className={
                  menuSelect === "reach-routes" ? "ant-menu-item-selected" : null
                }
                key="reach-routes"
              >
                Reach Router
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="forms"
            title="Forms"
            icon={<FormOutlined />}
          >
            <Link to="/react-form">
              <Menu.Item
                onClick={() => setMenuSelect("react-form")}
                className={
                  menuSelect === "react-form" ? "ant-menu-item-selected" : null
                }
                key="react-form"
              >
                React Form
              </Menu.Item>
            </Link>
            <Link to="/formik">
              <Menu.Item
                onClick={() => setMenuSelect("formik")}
                className={
                  menuSelect === "formik" ? "ant-menu-item-selected" : null
                }
                key="formik"
              >
                React Formik
              </Menu.Item>
            </Link>
            <Link to="/final-form">
              <Menu.Item
                onClick={() => setMenuSelect("final-form")}
                className={
                  menuSelect === "final-form" ? "ant-menu-item-selected" : null
                }
                key="final-form"
              >
                Final Form
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="docs"
            title="Documantation"
            icon={<BookOutlined />}
          >
            <Link to="/button-docs">
              <Menu.Item
                onClick={() => setMenuSelect("button-docs")}
                className={
                  menuSelect === "button-docs" ? "ant-menu-item-selected" : null
                }
                key="button-docs"
              >
                Button Docs
              </Menu.Item>
            </Link>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="json"
            title="JSON"
            icon={<BookOutlined />}
          >
            <Link to="/json-ui">
              <Menu.Item
                onClick={() => setMenuSelect("json-ui")}
                className={
                  menuSelect === "json-ui" ? "ant-menu-item-selected" : null
                }
                key="json-ui"
              >
                JSON UI
              </Menu.Item>
            </Link>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ color: "white", textAlign: "center" }}
        >
          <Context.Provider value={[context, setContext]}>
            <UserAccount />
          </Context.Provider>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            minHeight: `calc(100vh - 160px)`,
          }}
        >
          <div className="site-layout-background">
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
              <Route
                path="/error-boundary"
                element={
                  <>
                    <h3>Without Error Boundary when count is 3, error occured</h3>
                    <ErrorOccuredComponent />
                    <ErrorOccuredComponent />
                    <ErrorOccuredComponent />
                    <h3>Added Error Boundary when count is 3, error occured</h3>
                    <ErrorBoundary>
                      <ErrorOccuredComponent />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <ErrorOccuredComponent />
                    </ErrorBoundary>
                  </>
                }
              />

              <Route path="/try-catch" element={<ErrorTryCatch />} />

              {/* Styles types */}
              <Route path="/inline-css" element={<InlineStyle />} />

              <Route path="/inside-css" element={<InComponentStyle />} />

              <Route path="/importing-css" element={<ExternalStyle />} />

              <Route path="/component-css" element={<StyledComponents />} />

              {/* Class Based */}
              <Route path="/class-counter" element={<ClassBasedCounter />} />

              <Route
                path="/class-state"
                element={<ClassBasedStateManagement />}
              />

              <Route path="/class-lifecycle" element={<ClassLifeCycle />} />

              <Route path="/class-crud" element={<ClassBasedCrud />} />

              {/* Functional Based */}
              <Route
                path="/function-counter"
                element={<FunctionalBasedCounter />}
              />

              <Route
                path="/function-state"
                element={<FunctionalaBasedStateManagement />}
              />

              {/* Hooks */}
              <Route path="/basic" element={<BasicHooks />} />

              <Route path="/ref" element={<HooksRef />} />

              <Route path="/context" element={<HooksContext />} />

              <Route path="/callback" element={<HooksCallback />} />

              <Route path="/memo" element={<HooksMemo />} />

              <Route path="/reducer" element={<HooksReducer />} />

              <Route path="/custom-hook" element={<CustomHooks />} />

              {/* Refs */}
              <Route path="/refs" element={<Refs />} />

              {/* RenderProps */}
              <Route path="/render-props" element={<RenderProps />} />

              {/* HOC */}
              <Route path="/hoc" element={<HigherOrderComponent />} />

              {/* Documentations */}
              <Route path="/button-docs" element={<ButtonDocs />} />

              {/* User Eidt */}
              <Route path="/edit-user" element={
                <Context.Provider value={[context, setContext]}>
                  <EditUserAccount />
                </Context.Provider>
              } />

              {/* json-ui */}
              <Route path="/json-ui" element={<JsonToUi />} />

              {/* json-ui */}
              <Route path="/react-routes" element={<ReactRouter />} />
              <Route path="/reach-routes" element={<ReachRouter />} />

              {/* forms */}
              <Route path="/react-form" element={<ReactForm />} />
              <Route path="/formik" element={<ReactFormik />} />
              <Route path="/final-form" element={<FinalForm />} />

            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          This application develop for learing by Arun Jojo @2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
