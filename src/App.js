import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
function App() {
   return (
      <div className="App">
         <Router>
            <div>
               {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
               <Routes>
                  <Route path="/" element={<Page1 />} />

                  <Route path="/page2" element={<Page2 />} />
               </Routes>
            </div>
         </Router>
      </div>
   );
}

export default App;
