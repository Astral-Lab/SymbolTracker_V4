import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import { useState } from 'react';

function App() {
  // Can I make use of this?
  const history = createBrowserHistory();

  // Does useMemo prevent App from re-rendering or something? 
  const [selected, setSelected] = useState({ current: -1, symbols: []});
  const value = { selected, setSelected };
  
  return (
    <div className="w-full min-h-screen bg-black-light flex flex-col font-gemunu">
      <Header/>
      <Routes>
        {
          routes.map(route => {
            console.log(route)
            return (
              <Route
                path={route.path}
                exact={route.exact}
                key={route.name}
                element={<route.page {...route.props} />}
              />
            )
          })
        }
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;