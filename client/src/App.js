import './App.css';
import {Navigate, BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <div className="app">
          <Routes>
              {routes.map((route, index) => {
                const Page = route.component
                  return <Route key={index} path={route.path} element={<Page />} />;
              })}
          <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
