import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Status from './components/Status'
import StatusEditor from './components/StatusEditor'

function App() {
const [currentStatus, setCurrentStatus] = useState("Feeling like it's time to Code!")

  return (
    <div className="App">
      <Navbar />
      <Status status={currentStatus}/>
      <StatusEditor setCurrentStatus={setCurrentStatus}/>

      <header className="App-header">
        <Post 
        date="6/22"
        title="Hello World"
        content="This is the content"
        />
        <Post
        date="6/23"
        title="Hello World"
        content="This is the content"
        />
      </header>
    </div>
  );
}

export default App;