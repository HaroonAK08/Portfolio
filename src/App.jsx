import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a192f;
  color: #ccd6f6;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #64ffda;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 25, 47, 0.95);
    padding: 2rem;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ccd6f6;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MainContent = styled.main`
  padding-top: 80px;
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppContainer>
      <Nav>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          HAROON AK
        </Logo>
        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink href="#home" onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink href="#about" onClick={handleNavClick}>
            About
          </NavLink>
          <NavLink href="#projects" onClick={handleNavClick}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={handleNavClick}>
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      <MainContent>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </MainContent>
    </AppContainer>
  );
}

export default App;
