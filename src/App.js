import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="w-full min-h-screen bg-black-light flex flex-col font-gemunu place-items-center">
      <Header/>
      <Routes>
        {
          routes.map(route => {
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