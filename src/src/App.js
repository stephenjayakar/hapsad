import React, { Component } from 'react';
import NewPost from './components/NewPost';

class App extends Component {
  render() {
    return (
      <NewPost />
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ''
//     };
//   }

//   textChanged = (event) => {
//     const value = event.target.value;
//     this.setState({text: value});
//   }
  
//   render() {
//     const text = this.state.text;
//     const textChanged = this.textChanged;
    
//     return (
//       <div>
// 	<input
// 	  type="text"
// 	  onChange={textChanged}
// 	/>
// 	<p>{this.state.text}</p>
//       </div>
//     );
//   };
// }

export default App;
