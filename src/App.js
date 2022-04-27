import { useState } from 'react';
import './App.css';
import Navigation from './components/nav/nav';
import Resume from "./components/resume/resume";
import DarkModeToggle from "./components/utils/darkModeToggle";

function App() {
  const [openResumeBuilder, setopenResumeBuilder] = useState(false)
  return (
    <div className="App bg-white dark:bg-black min-h-ful">
      <Navigation onCreateResume={()=>setopenResumeBuilder(true)}/>
      <div className="container mx-auto px-4 min-h-ful py-4">
        <DarkModeToggle />
        <Resume openResume={openResumeBuilder}/>
      </div>
    </div>
  );
}

export default App;
