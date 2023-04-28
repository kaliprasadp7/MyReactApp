import logo from './logo.svg';
import './App.css';
import Chat from './chatApp/chat';
import Hello from './hello';
import './hello.css'
import './chatApp/chat.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
     <h1 class="main-head-chat">ChatAPP</h1>
    <Chat name="sikun"  desc="Hi..How are you." />
    <Chat name="Sradha" desc="I am Fine.. What about you" />
    <Chat name="SWEETY" desc="I am also good" />

    </>

    // <Hello />
  );
}

export default App;
