import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: var(--dark);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--light);
  margin-bottom: 3rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--darker);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(108, 99, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: 0 10px 30px rgba(108, 99, 255, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  color: var(--light);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: var(--gray);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  color: var(--primary);
  font-size: 0.9rem;
  background: rgba(108, 99, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: var(--light);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(108, 99, 255, 0.1);

  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
    background: rgba(108, 99, 255, 0.2);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Pluto Store",
      description:
        "A full-featured e-commerce platform with user authentication, product management, and secure payment processing. Built with modern web technologies for a seamless shopping experience.",
      technologies: ["React.js", "Bootstrap", "Redux"],
      link: "pluto.haroonkhan.me",
    },
    {
      title: "CV Maker",
      description:
        "A professional CV builder application that helps users create and customize their resumes with modern templates and real-time preview functionality.",
      technologies: ["React.js", "JavaScript", "CSS", "HTML"],
      link: "https://github.com/HaroonAK08/CV-Maker",
    },
    {
      title: "Oono",
      description:
        "A MERN stack project showcasing full-stack development capabilities with modern features and robust architecture.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "#",
    },
    {
      title: "Rentarround",
      description:
        "A professional React Native mobile application developed for property rental services, featuring location-based search and real-time updates.",
      technologies: ["React Native", "JavaScript", "Mobile Development"],
      link: "#",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.technologies.map((tech, techIndex) => (
                <Tech key={techIndex}>{tech}</Tech>
              ))}
            </TechStack>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
