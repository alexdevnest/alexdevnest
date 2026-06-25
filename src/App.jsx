import { Route, Routes } from "react-router-dom";
import Layout from "@pages/Layout";
import Home from "@pages/Home";
import Projects from "@pages/Projects";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import LegalNotice from "@pages/LegalNotice";


export default function App () {
  return (
    <Routes>
      <Route
        index
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
      <Route
        path="/privacy"
        element={ <PrivacyPolicy /> }
      />
      <Route
        path="/legal-notice"
        element={ <LegalNotice /> }
      />
    </Routes>
  );
}