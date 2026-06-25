import { Route, Routes } from "react-router-dom";
import Layout from "@pages/Layout";
import Home from "@pages/Home";
import Projects from "@pages/Projects";


export default function App () {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={ <Projects /> }
      />
    </Routes>
  );
}