import React from "react";
import { Divider, Row, Col } from "antd";

const ReactRouter = () => {
  var ReactRouterDocs =
    "import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';\n";

  ReactRouterDocs +=
    "\nconst Home = () => <h1>Home</h1>; \nconst About = () => <h1>About</h1>; \n";

  ReactRouterDocs += "const Reports = () => ( \n<> \n";
  ReactRouterDocs += "<h1>Reports</h1> \n";
  ReactRouterDocs += "<ul> \n";
  ReactRouterDocs += "<li> <Link to='/reports/invoice'>Invoice</Link> </li>\n";
  ReactRouterDocs += "<li> <Link to='/reports/billing'>Billing</Link> </li>\n";
  ReactRouterDocs += "<li> <Link to='/reports/101'>101</Link> </li>\n";
  ReactRouterDocs += "<li> <Link to='/reports/201'>201</Link> </li>\n";
  ReactRouterDocs += "</ul>\n";
  ReactRouterDocs += "<Routes>\n";
  ReactRouterDocs += "<Route path='/reports/invoice' component={Invoice} />\n";
  ReactRouterDocs += "<Route path='/reports/billing' component={Billing} />\n";
  ReactRouterDocs += "<Route path='/reports/:reportId' component={Report} />\n";
  ReactRouterDocs += "</Routes>\n";
  ReactRouterDocs += "</>\n)\n";

  ReactRouterDocs +=
    "\nconst Report = props => <h1>Report number: {props.match.params.reportId}</h1>; \nconst Invoice = () => <h1>Invoice</h1>; \nconst Billing = () => <h1>Billing</h1>;\n";

  ReactRouterDocs += "\nconst App = () => ( <>\n";
  ReactRouterDocs += "<h1>Select your route</h1>\n";

  ReactRouterDocs += "<BrowserRouter>\n";

  ReactRouterDocs += "<ul>\n";

  ReactRouterDocs += "<li> <Link to='/'>Home</Link> </li>\n";
  ReactRouterDocs += "<li> <Link to='/about'>About</Link> </li>\n";
  ReactRouterDocs += "<li> <Link to='/reports'>Reports</Link> </li>\n";
  ReactRouterDocs += "</ul>\n";

  ReactRouterDocs += "<Routes>\n";
  ReactRouterDocs += "<Route exact path='/' component={Home} />\n";
  ReactRouterDocs += "<Route path='/about' component={About} />\n";
  ReactRouterDocs += "<Route path='/reports' component={Reports} />\n";
  ReactRouterDocs += "</Routes>\n";

  ReactRouterDocs += "</BrowserRouter>\n";

  ReactRouterDocs += "</> )\n";

  return (
    <>
      <Divider orientation="center">React Router</Divider>
      <Row wrap>
        <Col>
          <pre>
            <code>{ReactRouterDocs}</code>
          </pre>
        </Col>
        <Col>
          <p>
            In React Router, the "BrowserRouter" component serves as the core of
            your React application. This component will be responsible for
            keeping your UI in sync with the URL
          </p>
          <p>
            To change your application’s route, you need to use the "Link"
            component, which is responsible for updating the current route
            according to its to prop:
          </p>
          <p>
            After the "Link" component, we will need to put route matching
            components into your application so that it can actually render the
            right component according to the current route.
            <br />
            React Router has many route matching components, but only two of
            them are used in the example: "Routes" and "Route" components.
          </p>
          <p>
            The "Route" component will render its component props if its path
            props match the current URL. However, the "Route" component renders
            component inclusively, meaning that your application can render two
            Routes at the same time. <br />
            For example, the URL http://localhost/about matches both / and
            /about path. To prevent this, you need to use "Routes" component,
            which will render the Route exclusively by rendering only the first
            Route that matches the URL and ignores the rest.
            <br />
            To fix this issue, we need to use the "exact" props, which makes the
            Route component gets rendered only when the URL exactly matches the
            path specified.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default ReactRouter;
