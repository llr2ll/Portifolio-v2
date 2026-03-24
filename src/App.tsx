import { Profile, Contact, Nav, Certificates, Skills, Language, About } from './components';
import { useState } from 'react';

function App() {
  const [ language, setLanguage ] = useState(0)

  return <main>
    <Nav/>
    <Language language={language} setLanguage={setLanguage}/>
    <Profile/>
    <About language={language}/>
    <Certificates language={language}/>
    <Skills language={language}/>
    <Contact language={language}/>
  </main>
};

export default App