import * as React from "react";
import * as ReactDOM from "react-dom";

class HelloMessage extends React.Component<HelloWorldProps,NoState> {
  render() {
    return <div>Hello {this.props.name} from TypeScript</div>;
  }
};
var contentDOM = document.getElementById('React-Content');
ReactDOM.render(
  <HelloMessage name="New World" />,
  contentDOM
);