import { useState, useEffect } from "react";
import { SECTIONS_IDS } from "@constants";
import { Toaster } from "@ui/sonner"
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";


export default function Layout ({ children }) {
  const [ activeSection, setActiveSection ] = useState("hero");

  useEffect(() => {
    const sections = SECTIONS_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const active = [...visibleSections.values()]
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          )[0];

        if (active && active.target.id !== activeSection) {
          setActiveSection(active.target.id);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-72px 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeSection]);


  return (
    <section id="layout">
      <Toaster />
      <Navbar />
      <Sidebar activeSection={activeSection} />
      <section id="main-container">

        { children }

        <Footer />
      </section>
    </section>
  )
}