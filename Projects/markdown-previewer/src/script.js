import marked  from "https://cdn.skypack.dev/marked@1.2.7";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class  App extends React.Component 
{
  
    constructor(props) 
   {
      super(props);
      
      this.updatePreview =this.updatePreview.bind(this);

      this.state = { text : ' # Header' }
    }
   
  

 updatePreview(event)
 {
   const name = event.target
   this.setState({text: event.target.value});
 console.log(name);
 }


rawMarkup()
{
  
  let rawMarkup = marked(this.state.text, {sanitize: true}); // stores the state text and using marked build function converts  markdown
  return { __html: rawMarkup};  // stores the rresulting html  and converts it to html 
}

  render() 
  { 
    let { text } = this.state

    return (    
  <React.Fragment>
   <div>
    <textarea  id  = "editor" placeholder = {text}  onChange = {this.updatePreview } />
      {/*<input onChange = {this.updatePreview} /> */} 
    </div>
<br />
<div> 
  {/* using html from rawMarkup  sets the inner html of the element  */}
  <p  style = {{ float : 'right' }} id = "preview" dangerouslySetInnerHTML = { this.rawMarkup()} />  
  {console.log(this.props)}
  
</div>
</React.Fragment>

  );
  }
}


ReactDOM.render(<App />, document.getElementById('editor'));