import LogIn from "./pages/logInPage";
import Notes from "./pages/notes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
        <Routes>
          <Route index element={<Notes />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
