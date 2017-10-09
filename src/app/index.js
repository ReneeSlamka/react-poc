import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>Hello, worlffdzzfffddz!</h1>,
//   document.getElementById('thingy-wrapper')
// );

// var HelloComponent = React.createClass({
//     render: function() {
//         return {
//             <h2>Hai gais</h2>
//         };
//     }
//
// });
// ReactDOM.render(<HelloComponent />, document.getElementById('thingy-wrapper'));
// const element = (
//   <h1>
//     Hello, Blababab!
//   </h1>
// );
//
// ReactDOM.render(element, document.getElementById('thingy-wrapper'));
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('thingy-wrapper')
);
