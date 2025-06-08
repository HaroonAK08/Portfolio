import styled from "@emotion/styled";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  display: flex;
  align-items: center;
  background: var(--darker);
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--light);
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: var(--gradient);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  color: var(--gray);
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }
`;

const SkillsList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  background: rgba(108, 99, 255, 0.15);
  padding: 2rem 2.5rem;
  border-radius: 18px;
  backdrop-filter: blur(18px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 12px 40px 0 rgba(108, 99, 255, 0.18);
  }

  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: 600;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem 1.2rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  @media (max-width: 900px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--light);
  font-weight: 500;
  font-size: 1rem;
  background: rgba(108, 99, 255, 0.08);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;

  &::before {
    content: "▹";
    color: var(--primary);
    margin-right: 10px;
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(108, 99, 255, 0.18);
    transform: translateY(-2px) scale(1.04);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        <AboutGrid>
          <AboutText
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I am Haroon Ahmad Khan, a passionate software developer with
              expertise in web development and programming. I specialize in
              creating modern, responsive, and user-friendly applications using
              cutting-edge technologies.
            </p>
            <p>
              With a strong foundation in both front-end and back-end
              development, I strive to build efficient and scalable solutions
              that solve real-world problems. I am constantly learning and
              adapting to new technologies to stay at the forefront of software
              development.
            </p>
          </AboutText>
          <SkillsList
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Skills</h3>
            <ul>
              <SkillItem>React.js</SkillItem>
              <SkillItem>Next.js</SkillItem>
              <SkillItem>MERN Stack</SkillItem>
              <SkillItem>Express.js</SkillItem>
              <SkillItem>Git & GitHub</SkillItem>
              <SkillItem>TypeScript</SkillItem>
              <SkillItem>Responsive Web Designs</SkillItem>
              <SkillItem>UI and UX Designs</SkillItem>
              <SkillItem>React Native Mobile App Developer</SkillItem>
            </ul>
          </SkillsList>
        </AboutGrid>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
