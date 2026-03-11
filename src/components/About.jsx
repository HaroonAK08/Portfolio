import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";

const AboutSection = styled.section`
  padding: 100px 10%;
  position: relative;
  background: var(--bg-card);
  border-top: 1px solid var(--border-subtle);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled(motion.div)`
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 3rem;
  letter-spacing: -1px;
  line-height: 1.2;

  span {
    color: var(--primary);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const BioText = styled(motion.div)`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.9;
  max-width: 900px;

  p {
    margin-bottom: 1.2rem;
  }
`;

const StrengthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const StrengthCard = styled(motion.div)`
  background: var(--bg-dark);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--border-hover);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }
`;

const StrengthIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: rgba(43, 90, 77, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--primary);
  font-size: 1.1rem;
`;

const StrengthTitle = styled.h4`
  color: var(--text-primary);
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.4;
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const strengths = [
  { icon: <FaLaptopCode />, title: "Full-Stack Web & Mobile Development" },
  { icon: <FaMobileAlt />, title: "Cross-Platform Mobile Apps (iOS & Android)" },
  { icon: <FaServer />, title: "Scalable Backend Systems & REST APIs" },
  { icon: <FaPaintBrush />, title: "Pixel-Perfect UI & Responsive Design" },
  { icon: <FaUsers />, title: "Agile Development & Remote Collaboration" },
];

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Passionate about building <span>digital products</span> that matter
        </SectionTitle>

        <AboutGrid>
          <BioText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hi, I&apos;m Haroon Ahmad Khan — a creative and detail-oriented
              Full-Stack &amp; Cross-Platform Developer. I specialize in building
              modern web apps, mobile applications, and API-driven platforms with
              React, React Native, Node.js, Django, and MongoDB.
            </p>
            <p>
              I focus on clean architecture, reusable code, and excellent UI/UX,
              ensuring every product is fast, scalable, and maintainable.
            </p>
            <p>
              I also have experience working remotely with international teams,
              including UK-based startups, contributing to enterprise-level
              projects, SaaS dashboards, and cross-platform mobile applications.
            </p>
          </BioText>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <StrengthsGrid>
              {strengths.map((strength, index) => (
                <StrengthCard key={index} variants={itemVariants}>
                  <StrengthIcon>{strength.icon}</StrengthIcon>
                  <StrengthTitle>{strength.title}</StrengthTitle>
                </StrengthCard>
              ))}
            </StrengthsGrid>
          </motion.div>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
