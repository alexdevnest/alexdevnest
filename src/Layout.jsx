import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";


const Layout = ({ children }) => (
  <section>
    <Navbar />
    <Sidebar />
    <main>
      { children }
    </main>
    <Footer />
  </section>
);


export default Layout;