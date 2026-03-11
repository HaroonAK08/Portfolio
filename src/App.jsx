import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-dark);
  color: var(--text-primary);
  position: relative;
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${(props) => (props.scrolled ? "0.8rem 2rem" : "1.2rem 2rem")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.scrolled ? "rgba(11, 13, 23, 0.92)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(20px)" : "none")};
  border-bottom: ${(props) =>
    props.scrolled ? "1px solid var(--border-subtle)" : "none"};
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Logo = styled(motion.a)`
  font-size: 1.4rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  position: relative;

  &:hover {
    color: var(--text-primary);
    background: rgba(108, 99, 255, 0.08);
  }
`;

const CTAButton = styled(motion.a)`
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--primary);
  transition: var(--transition);
  margin-left: 0.5rem;

  &:hover {
    background: rgba(108, 99, 255, 0.1);
    box-shadow: 0 0 20px rgba(108, 99, 255, 0.15);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);

  &:hover {
    background: rgba(108, 99, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 13, 23, 0.97);
  backdrop-filter: blur(30px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const MobileNavLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: var(--radius-md);
  transition: var(--transition);

  &:hover {
    background: rgba(108, 99, 255, 0.1);
    color: var(--primary);
  }
`;

const MainContent = styled.main``;

const Footer = styled.footer`
  text-align: center;
  padding: 2.5rem 2rem;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.85rem;

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <AppContainer>
      <Nav
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Logo href="#home">HAK</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <CTAButton href="#contact" whileHover={{ scale: 1.03 }}>
            Hire Me
          </CTAButton>
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <MobileNavLink
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>

      <MainContent>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MainContent>

      <Footer>
        Built with passion by <span>Haroon Ahmad Khan</span> &copy;{" "}
        {new Date().getFullYear()}
      </Footer>
    </AppContainer>
  );
}

export default App;
