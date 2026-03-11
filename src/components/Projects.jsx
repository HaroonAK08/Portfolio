import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

const ProjectsSection = styled.section`
  padding: 100px 10%;
  position: relative;
  background: var(--bg-dark);
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
  margin-bottom: 3.5rem;
  letter-spacing: -1px;
  line-height: 1.2;

  span {
    color: var(--primary);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: var(--transition);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.accentColor || "var(--primary)"};
    opacity: 0;
    transition: var(--transition);
  }

  &:hover {
    border-color: var(--border-hover);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 1.8rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectEmoji = styled.span`
  font-size: 2rem;
  margin-bottom: 0.8rem;
  display: block;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ProjectLink = styled(motion.a)`
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--bg-dark);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    border-color: var(--border-hover);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  background: rgba(43, 90, 77, 0.06);
  color: var(--primary);
  border: 1px solid rgba(43, 90, 77, 0.12);
  font-family: "JetBrains Mono", monospace;
`;

const Highlights = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;

  svg {
    color: var(--accent);
    font-size: 0.7rem;
    flex-shrink: 0;
  }
`;

const projects = [
  {
    emoji: "\uD83D\uDED2",
    title: "Enterprise E-Commerce Platform",
    description:
      "Built a high-performance e-commerce platform with advanced product filtering, shopping cart functionality, and scalable product catalog management.",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Modular architecture for maintainability",
      "Optimized for performance with large product catalogs",
      "Fully responsive UI for desktop & mobile",
    ],
    accentColor: "#c07d45",
    githubLink: "https://github.com/HaroonAK08/Pluto-Store",
    liveLink: "https://pluto.haroonkhan.me",
  },
  {
    emoji: "\u2708\uFE0F",
    title: "Flight Search & Booking Mobile App",
    description:
      "Developed a cross-platform flight booking application using React Native integrated with real-time flight APIs, authentication, and search optimization.",
    technologies: ["React Native", "Node.js", "REST APIs"],
    highlights: [
      "Smooth, intuitive mobile UX",
      "Secure authentication & booking workflow",
      "External flight data API integration for real-time updates",
    ],
    accentColor: "#2b5a4d",
    githubLink: "#",
    liveLink: null,
  },
  {
    emoji: "\uD83C\uDF10",
    title: "Oono \u2014 Social & Collaboration Platform",
    description:
      "Developed Oono, a modern social collaboration platform connecting users through messaging, groups, and shared workspaces.",
    technologies: [
      "React.js",
      "Django REST Framework",
      "MongoDB",
      "Tailwind CSS",
    ],
    highlights: [
      "Real-time messaging and notifications",
      "Secure multi-role authentication system",
      "Scalable backend supporting thousands of concurrent users",
      "Fully responsive UI for web and mobile",
    ],
    accentColor: "#8b6f4e",
    githubLink: "#",
    liveLink: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Things I&apos;ve <span>built</span>
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              accentColor={project.accentColor}
            >
              <ProjectEmoji>{project.emoji}</ProjectEmoji>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectLinks>
                  {project.githubLink && project.githubLink !== "#" && (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </ProjectLink>
                  )}
                  {project.liveLink && (
                    <ProjectLink
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt style={{ fontSize: "0.85rem" }} />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectHeader>

              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechStack>

              <Highlights>
                {project.highlights.map((highlight, i) => (
                  <HighlightItem key={i}>
                    <FaCheck />
                    {highlight}
                  </HighlightItem>
                ))}
              </Highlights>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
