import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:query/:startIndex" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;