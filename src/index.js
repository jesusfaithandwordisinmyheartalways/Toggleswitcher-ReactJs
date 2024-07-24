import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContext, MainThemeProvider } from './pages/theme.js';
import { useContext } from 'react';
import Sun from './images/sunimage.png';
import Moon from './images/darkicon.png';



    const SwitchTheme = () => {
        const { toggle, ToggleMode } = useContext(ThemeContext);
        return (
          <>
            <div className={`header ${toggle}`}>
               <nav className={'nav-container'}>
                <div className={'nav-wrapper'}>
                 
                    <div className={'button-content'}>
                      <button>Home</button>
                      <button>About</button>
                      <button>Contact</button>
                    </div>
               

                  <div className={'image-content'}>
                      <div id='sun-image' onClick={ToggleMode} className={'sun-image'}><div><img src={Sun}></img></div></div>
                    </div>


                </div>
                  
                 
                 

               </nav>
            </div>
          </>
        )
    }


    function App () {
        return (
          <>
            <MainThemeProvider>

              <SwitchTheme />

            </MainThemeProvider>


          </>
        )
    }






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);


