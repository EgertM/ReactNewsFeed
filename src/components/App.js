import React from 'react';
import Navbar from './navbar';
import Feed from './Feed';

/*class App extends Component {
  render() {
    return (
      <>
        Hello, world!
      </>
    );
  }
}*/

const App = () => {
    return (
        <>
            <Navbar title="DAILY NEWS"/>
            <Feed/>
        </>
    );
};

export default App;
