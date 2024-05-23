// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          route.children ? (
            <Route key={index} path={route.path} element={route.element}>
              {route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
            </Route>
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        ))}
      </Routes>
    </Router>
  );
}

export default App;
