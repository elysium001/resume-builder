import { useState } from 'react';
import './App.css';
import Navigation from './components/nav/nav';
import Resume from "./components/resume/resume";
import DarkModeToggle from "./components/utils/darkModeToggle";
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/resume/topdf';

function App() {
  const [resumeObject, setResumeObject] = useState({});
  const [openResumeBuilder, setopenResumeBuilder] = useState(false)
  const [showPDF, setShowPDF] = useState(false)
  return (
    <div className="App bg-gray-100 dark:bg-black min-h-ful">
      <Navigation 
        downloadPDF={()=>setShowPDF(true)}
        onCreateResume={()=>setopenResumeBuilder(!openResumeBuilder)}/>
      <div className="container mx-auto px-4 min-h-ful py-4">
        <DarkModeToggle />
        {!showPDF && <Resume openResume={openResumeBuilder} onLoadResume={(resume)=>setResumeObject(resume)} />}
        {showPDF && <PDFViewer className='pdf-viewer'>
          <MyDocument resume={resumeObject}/>
        </PDFViewer>}
      </div>
    </div>
  );
}

export default App;
