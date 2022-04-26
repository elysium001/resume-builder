import './App.css';
import Resume from "./components/resume/resume";
import DarkModeToggle from "./components/utils/darkModeToggle";

function App() {
  return (
    <div className="App bg-white dark:bg-black min-h-ful">
      <div className="container mx-auto px-4 min-h-ful">
        <DarkModeToggle />
        <Resume />
      </div>
    </div>
  );
}

export default App;
