import marked from "https://cdn.skypack.dev/marked@1.2.7";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class App extends React.Component
{

  constructor(props)
  {
    super(props);

    this.updatePreview = this.updatePreview.bind(this);

    this.state = { text: ' # Header' };
  }



  updatePreview(event)
  {
    const name = event.target;
    this.setState({ text: event.target.value });
    console.log(name);
  }


  rawMarkup()
  {

    let rawMarkup = marked(this.state.text, { sanitize: true }); // stores the state text and using marked build function converts  markdown
    return { __html: rawMarkup }; // stores the rresulting html  and converts it to html 
  }

  render()
  {
    let { text } = this.state;

    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", placeholder: text, onChange: this.updatePreview })), /*#__PURE__*/


      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/

      React.createElement("p", { style: { float: 'right' }, id: "preview", dangerouslySetInnerHTML: this.rawMarkup() }),
      console.log(this.props))));





  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('editor'));