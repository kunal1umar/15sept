import { Website_main } from "./Website/Website_main";
import { Website_modules } from "./Website/Website_modules";
import { Website_signin } from "./Website/Website_signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
                 <Route exact path='/' element={< Website_main />}></Route>
                 <Route exact path='/about' element={< Website_signin />}></Route>
          </Routes>
  </BrowserRouter>
  );
}

export default App;
