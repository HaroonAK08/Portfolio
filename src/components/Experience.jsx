import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const ExperienceSection = styled.section`
  padding: 120px 10%;
  position: relative;
  background: var(--bg-dark);

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
  max-width: 900px;
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

const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      var(--primary),
      var(--border-subtle) 80%,
      transparent
    );

    @media (max-width: 600px) {
      left: 18px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 70px;
  padding-bottom: 3rem;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 600px) {
    padding-left: 55px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 14px;
  top: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--bg-dark);
  border: 3px solid var(--primary);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary);
  }

  @media (max-width: 600px) {
    left: 8px;
    width: 22px;
    height: 22px;
  }
`;

const ExperienceCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--border-hover);
    box-shadow: 0 12px 40px rgba(108, 99, 255, 0.06);
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const RoleTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
`;

const TypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.9rem;
  border-radius: 50px;
  background: rgba(0, 212, 170, 0.1);
  color: var(--accent);
  border: 1px solid rgba(0, 212, 170, 0.2);
  white-space: nowrap;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
`;

const CompanyName = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-light);
`;

const Location = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: var(--text-muted);

  svg {
    font-size: 0.75rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

const ContributionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
`;

const ContributionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;

  &::before {
    content: ">";
    color: var(--accent);
    font-weight: 700;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const experiences = [
  {
    role: "Full-Stack Developer",
    type: "Remote Contract",
    company: "BrightStack Solutions Ltd",
    location: "London, UK",
    description:
      "Worked with a UK-based startup team to develop scalable web applications and API-driven systems. Contributed to both frontend and backend development using React, Django REST Framework, and Node.js.",
    contributions: [
      "Developed responsive and high-performance web interfaces",
      "Built and maintained REST APIs for scalable backend systems",
      "Designed database architecture for optimal performance",
      "Implemented authentication, role-based access, and secure API integrations",
      "Collaborated in an agile remote environment, delivering production-ready features",
    ],
  },
  {
    role: "Frontend & React Native Developer",
    type: "Remote Contract",
    company: "Northbridge Digital",
    location: "Manchester, UK",
    description:
      "Contributed to cross-platform mobile applications and enterprise web solutions, improving user experience, performance, and scalability.",
    contributions: [
      "Developed React Native mobile apps for iOS and Android",
      "Built dynamic dashboards and SPA web applications using React",
      "Optimized application performance and ensured smooth UX",
      "Integrated third-party APIs and backend services",
      "Collaborated remotely with designers, developers, and product managers",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Professional <span>journey</span>
        </SectionTitle>

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <TimelineDot />
              <ExperienceCard>
                <CardHeader>
                  <RoleTitle>{exp.role}</RoleTitle>
                  <TypeBadge>
                    <FaBriefcase style={{ fontSize: "0.65rem" }} />
                    {exp.type}
                  </TypeBadge>
                </CardHeader>
                <CompanyInfo>
                  <CompanyName>{exp.company}</CompanyName>
                  <span style={{ color: "var(--text-muted)" }}>—</span>
                  <Location>
                    <FaMapMarkerAlt />
                    {exp.location}
                  </Location>
                </CompanyInfo>
                <Description>{exp.description}</Description>
                <ContributionsList>
                  {exp.contributions.map((item, i) => (
                    <ContributionItem key={i}>{item}</ContributionItem>
                  ))}
                </ContributionsList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
