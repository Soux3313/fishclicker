import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Constructor from "./constructor";

document.title = "Fish Clicker";
function App() {

    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/fishclicker" element={<Constructor/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
