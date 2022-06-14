import React from "react";
import { Col, Divider, Row } from "antd";

const ReachRouter = () => {
  var ReachRouterDocs = "import { Router, Link } from '@reach/router';\n";

  ReachRouterDocs +=
    "\nconst Home = () => <h1>Home</h1>; \nconst About = () => <h1>About</h1>; \nconst Reports = () => <h1>Reports</h1>;\n";

  ReachRouterDocs += "\nconst App = () => (\n<>\n";
  ReachRouterDocs += "<h1>Select your route</h1>\n";

  ReachRouterDocs += "<ul>\n";

  ReachRouterDocs += "<li> <Link to='/'>Home</Link> </li>\n";
  ReachRouterDocs += "<li> <Link to='/about'>About</Link> </li>\n";
  ReachRouterDocs += "<li> <Link to='/reports'>Reports</Link> </li>\n";
  ReachRouterDocs += "</ul>\n";

  ReachRouterDocs += "<Router>\n";
  ReachRouterDocs += "<Home path='/' />\n";
  ReachRouterDocs += "<About path='/about' />\n";
  ReachRouterDocs += "<Reports path='/reports' />\n";
  ReachRouterDocs += "</Router>\n";

  ReachRouterDocs += "</>\n)\n";

  return (
    <>
      <Divider orientation="center">Reach Router</Divider>
      <Row wrap>
        <Col>
          <pre>
            <code>{ReachRouterDocs}</code>
          </pre>
        </Col>
        <Col>
          <p>
            Reach Router only need to use "Router" and "Link" component. You
            also don’t need to wrap your "Link" component inside the "Router"
            component.
          </p>
          <p>
            Instead of using "Route", you can just pass the component you want
            to render as the child of "Router". Don’t forget to add the path
            props so that your application will render accordingly.
          </p>
          <p>
            In Reach Router, there is no API to help you order and prioritize
            your routes like the "Routes" component. Instead of letting you
            figure out the right way to render your components, Reach provides a
            smart path ranking system to prioritize the route it will render.
            That’s why it knows when to render just the “right” component based
            on your current URL.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default ReachRouter;
