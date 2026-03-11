import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import dpImage from "../assets/DP.jpeg";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 10% 80px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroTextColumn = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const HeroImageColumn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: -5rem;

  @media (max-width: 768px) {
    order: 1;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 420px;
  height: 420px;

  @media (max-width: 1024px) {
    width: 340px;
    height: 340px;
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: var(--primary);
    z-index: -1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--bg-dark);
`;

const TagLine = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  margin-bottom: 2rem;
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 500;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.2rem;
  letter-spacing: -2px;
  color: var(--text-primary);

  span {
    color: var(--primary);
  }
`;

const Heading = styled(motion.h2)`
  font-size: clamp(1.05rem, 2.2vw, 1.4rem);
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1.8rem;
  max-width: 700px;
  line-height: 1.6;
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 620px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.8rem;
  background: var(--primary);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-md);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  svg {
    transition: transform 0.3s;
  }
  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.8rem;
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border-hover);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialDivider = styled.span`
  width: 40px;
  height: 1px;
  background: var(--border-hover);
  margin-right: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--text-muted);
  font-size: 1.25rem;
  transition: var(--transition);
  padding: 0.6rem;
  border-radius: var(--radius-sm);

  &:hover {
    color: var(--primary);
    background: rgba(0, 0, 0, 0.04);
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: left;

  .number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--primary);
    line-height: 1;
  }
  .label {
    font-size: 0.82rem;
    color: var(--text-muted);
    margin-top: 0.3rem;
    font-weight: 500;
  }
`;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroTextColumn>
          <TagLine variants={itemVariants}>Available for remote work</TagLine>

          <Name variants={itemVariants}>
            Hi, I&apos;m <span>Haroon</span>
            <br />
            Ahmad Khan.
          </Name>

          <Heading variants={itemVariants}>
            Full-Stack &amp; Cross-Platform Developer | React, React Native,
            Django, Node.js
          </Heading>

          <Description variants={itemVariants}>
            I help startups and businesses turn ideas into scalable,
            high-performance web and mobile applications. With expertise in
            React.js, Next.js, React Native, Node.js, and Django REST Framework,
            I build modern interfaces and robust backend systems that users love.
          </Description>

          <ButtonGroup variants={itemVariants}>
            <PrimaryButton href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              Let&apos;s Build Something Amazing <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              View My Work
            </SecondaryButton>
          </ButtonGroup>

          <SocialLinks variants={itemVariants}>
            <SocialDivider />
            <SocialLink
              href="https://github.com/HaroonAK08"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/haroon-ahmad-khan-370703295/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>

          <StatsRow variants={itemVariants}>
            <StatItem>
            <div className="number">5+</div>
            <div className="label">Years Experience</div>
            </StatItem>
            <StatItem>
              <div className="number">15+</div>
              <div className="label">Projects Delivered</div>
            </StatItem>
            <StatItem>
            <div className="number">9+</div>
            <div className="label">Happy Clients</div>
            </StatItem>
          </StatsRow>
        </HeroTextColumn>

        <HeroImageColumn
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <ImageWrapper>
            <ProfileImage src={dpImage} alt="Haroon Ahmad Khan" />
          </ImageWrapper>
        </HeroImageColumn>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
