import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaMobile,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";

const SkillsSection = styled.section`
  padding: 120px 10%;
  position: relative;
  background: var(--bg-card);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--border-subtle),
      transparent
    );
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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
  margin-bottom: 3.5rem;
  letter-spacing: -1px;
  line-height: 1.2;

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(motion.div)`
  background: var(--bg-dark);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${(props) => props.accent || "var(--gradient)"};
    opacity: 0.6;
    transition: var(--transition);
  }

  &:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(108, 99, 255, 0.06);

    &::before {
      opacity: 1;
      width: 4px;
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: ${(props) => props.bg || "rgba(108, 99, 255, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || "var(--primary)"};
  font-size: 1.1rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const SkillChip = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(108, 99, 255, 0.05);
  border: 1px solid var(--border-subtle);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition);

  svg {
    font-size: 0.9rem;
    color: var(--primary-light);
  }

  &:hover {
    background: rgba(108, 99, 255, 0.1);
    border-color: var(--border-hover);
    color: var(--text-primary);
    transform: translateY(-2px);
  }
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categories = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    color: "#61dafb",
    bg: "rgba(97, 218, 251, 0.1)",
    accent: "linear-gradient(180deg, #61dafb, #6c63ff)",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <FaMobile /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Responsive UI", icon: null },
      { name: "SPA & SSR", icon: null },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    color: "#68a063",
    bg: "rgba(104, 160, 99, 0.1)",
    accent: "linear-gradient(180deg, #68a063, #6c63ff)",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Django REST Framework", icon: <FaPython /> },
      { name: "REST API Design", icon: null },
      { name: "Authentication & Security", icon: null },
      { name: "Payment Integration", icon: null },
      { name: "3rd-Party APIs", icon: null },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    color: "#00d4aa",
    bg: "rgba(0, 212, 170, 0.1)",
    accent: "linear-gradient(180deg, #00d4aa, #6c63ff)",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Optimized Queries", icon: null },
      { name: "Scalable Data Architecture", icon: null },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <FaGitAlt />,
    color: "#f05032",
    bg: "rgba(240, 80, 50, 0.1)",
    accent: "linear-gradient(180deg, #f05032, #6c63ff)",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "RapidAPI", icon: null },
      { name: "Agile Methodology", icon: null },
      { name: "Remote Collaboration", icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My <span>technical toolkit</span>
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CategoriesGrid>
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                variants={cardVariants}
                accent={category.accent}
              >
                <CategoryHeader>
                  <CategoryIcon color={category.color} bg={category.bg}>
                    {category.icon}
                  </CategoryIcon>
                  <CategoryTitle>{category.title}</CategoryTitle>
                </CategoryHeader>
                <SkillsGrid>
                  {category.skills.map((skill, i) => (
                    <SkillChip key={i} whileHover={{ scale: 1.04 }}>
                      {skill.icon}
                      {skill.name}
                    </SkillChip>
                  ))}
                </SkillsGrid>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
