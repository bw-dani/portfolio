import React  from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './Views/Main';

import { ThemeContext, themes } from './components/Theme/Theme';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      
      {/* Theme toggle */}
      <ThemeContext.Consumer>
        {({ toggleTheme }) => (
          <div className='toggle'>
            <button onClick={() => {
              setDarkMode(!darkMode);
              toggleTheme(darkMode ? themes.light : themes.dark);
            }}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
      
    </>
  );
}