import { useState, useEffect } from "react";
import { SECTIONS_IDS } from "@constants";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";


export default function Layout ({ children }) {
  const [ activeSection, setActiveSection ] = useState("hero");

  useEffect(() => {
    const sections = SECTIONS_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])


  return (
    <section id="layout">
      <Navbar />
      <Sidebar activeSection={activeSection} />
      <section id="main-container">

        { children }

        <Footer />
      </section>
    </section>
  )
}