import { useState } from "react";
import "./App.css";
import About from "./componant/About";
import Navbar from "./componant/Navbar";
import Textform from "./componant/Textform";
import Alert from "./componant/Alert";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = `#042743`;
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try Textutils - Word counter,character counter"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
