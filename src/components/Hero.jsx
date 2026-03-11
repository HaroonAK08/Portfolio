import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import dpImage from "../assets/DP.jpeg";

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 10% 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(108, 99, 255, 0.12) 0%,
      transparent 70%
    );
    animation: ${pulse} 8s ease-in-out infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 101, 132, 0.08) 0%,
      transparent 70%
    );
    animation: ${pulse} 10s ease-in-out infinite 2s;
    pointer-events: none;
  }
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
  width: 450px;
  height: 450px;

  @media (max-width: 1024px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--gradient);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: var(--gradient);
    opacity: 0.15;
    filter: blur(30px);
    z-index: -2;
    animation: ${pulse} 4s ease-in-out infinite;
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
  background: rgba(108, 99, 255, 0.08);
  border: 1px solid var(--border-subtle);
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  margin-bottom: 2rem;
  font-size: 0.88rem;
  color: var(--primary-light);
  font-weight: 500;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.2rem;
  letter-spacing: -2px;

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Heading = styled(motion.h2)`
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1.8rem;
  max-width: 700px;
  line-height: 1.5;
`;

const Description = styled(motion.p)`
  font-size: 1.05rem;
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
  padding: 0.9rem 2rem;
  background: var(--gradient);
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-md);
  transition: var(--transition);
  box-shadow: 0 4px 25px rgba(108, 99, 255, 0.3);
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 40px rgba(108, 99, 255, 0.45);
    transform: translateY(-2px);
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
  padding: 0.9rem 2rem;
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
    background: rgba(108, 99, 255, 0.06);
    box-shadow: 0 0 25px rgba(108, 99, 255, 0.12);
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
    background: rgba(108, 99, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  background: rgba(108, 99, 255, 0.03);
  pointer-events: none;
  animation: ${float} ${(props) => props.duration || "6s"} ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};
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
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
      <FloatingShape
        style={{ top: "15%", right: "10%", width: 120, height: 120 }}
        duration="7s"
        delay="0s"
      />
      <FloatingShape
        style={{ bottom: "20%", right: "25%", width: 80, height: 80 }}
        duration="5s"
        delay="1s"
      />
      <FloatingShape
        style={{ top: "50%", left: "5%", width: 60, height: 60 }}
        duration="8s"
        delay="2s"
      />

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
