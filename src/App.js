import logo from './logo.svg';
import './App.css';
// import Chat from './chatApp/chat';
// import Hello from './hello';
// import './hello.css'
// import './chatApp/chat.css';
import NewChat from './NewChatApp/NewChat';
import './NewChatApp/NewChat.css';

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

    //for ChatApp
    // <>
    //  <h1 class="main-head-chat">ChatAPP</h1>
    // <Chat name="sikun"  desc="Hi..How are you." />
    // <Chat name="Sradha" desc="I am Fine.. What about you" />
    // <Chat name="SWEETY" desc="I am also good" />
    // <Chat name="Sankar" desc="hi sweety..!" />
    // </>

    //for NewChatApp
    <>
     <NewChat name="Sikun" time="7.00 PM" text="How are you?" />
     <NewChat name="Chandan" time="7.15 PM" text="I am good.." />
     <NewChat name="Sikun" time="7.29 PM" text="Good.." />
     <NewChat name="Chandan" time="7.35 PM" text="What about you.." />
    </>

    // <Hello />
  );
}

export default App;
