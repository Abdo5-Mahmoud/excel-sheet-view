import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import Main from "./pages/Main";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";
import Table from "./ui/Table";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route element={<Main />} path="/" />
          <Route
            element={
              <Authentication>
                <Page />
              </Authentication>
            }
            path="/:workBook"
          />
          <Route
            element={
              <Authentication>
                <Table />
              </Authentication>
            }
            path="/:workBook/:sheet"
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
