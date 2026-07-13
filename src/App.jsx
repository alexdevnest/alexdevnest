import { Route, Routes } from "react-router-dom";
import Layout from "@pages/Layout";
import Home from "@pages/Home";
import Projects from "@pages/Projects";
import Meeting from "@pages/Meeting";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import LegalNotice from "@pages/LegalNotice";
import ProjectDetails from "@pages/ProjectDetails";
import { ScrollToTop } from "@components/ScrollTop";


export default function App () {
  return (
    <>
      <ScrollToTop />

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
          path="/projects/:id"
          element={ <ProjectDetails /> }
        />
        <Route
          path="/schedule-meeting"
          element={ <Meeting /> }
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
    </>
  );
}