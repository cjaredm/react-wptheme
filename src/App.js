import * as React from 'react';
import axios from 'axios';
import xss from 'xss';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    const getStuff = async () => {
      const {data} = await axios.get('http://react-wptheme:8888/wp-json/wp/v2/pages/2');
      setState(data);
      console.log(data);
    };
    getStuff();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div dangerouslySetInnerHTML={{__html: state && xss(state.content.rendered)}} />
      </header>
    </div>
  );
}

export default App;
