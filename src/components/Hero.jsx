import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import haroonImg from "../assets/haroon.jpg";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(108, 99, 255, 0.1) 0%,
    rgba(255, 101, 132, 0.1) 100%
  );
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
`;

const HeroText = styled.div`
  justify-self: start;
  @media (max-width: 768px) {
    order: 2;
    justify-self: center;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin-left: auto;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    max-width: 350px;
  }
  @media (max-width: 768px) {
    order: 1;
    margin: 0 auto 2rem auto;
    justify-content: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid var(--primary);
    border-radius: 20px;
    z-index: -1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const Greeting = styled(motion.div)`
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: bold;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 3rem;
  color: var(--light);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: var(--light);
  font-size: 1.5rem;
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

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroText>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, my name is
          </Greeting>
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Haroon Ahmad Khan.
          </Name>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build things for the web.
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a full-stack developer passionate about creating exceptional
            digital experiences. Currently focused on building accessible,
            human-centered products that make a difference.
          </Description>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com/HaroonAK08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/haroon-ahmad-khan-370703295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/HaroonAK08/Pluto-Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </HeroText>
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src={haroonImg} alt="Haroon Ahmad Khan" />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
