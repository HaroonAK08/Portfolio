import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useRef, useState } from "react";

const ContactSection = styled.section`
  padding: 100px 10%;
  position: relative;
  background: var(--bg-card);
  border-top: 1px solid var(--border-subtle);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  margin-bottom: 1rem;
  letter-spacing: -1px;
  line-height: 1.2;

  span {
    color: var(--primary);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 3.5rem;
  line-height: 1.8;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  background: var(--bg-dark);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: var(--transition);
  text-decoration: none;
  color: var(--text-secondary);

  &:hover {
    border-color: var(--border-hover);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    transform: translateX(4px);
  }
`;

const ContactIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(43, 90, 77, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  .label {
    font-size: 0.78rem;
    color: var(--text-muted);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.15rem;
  }
  .value {
    font-size: 0.95rem;
    color: var(--text-primary);
    font-weight: 500;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: var(--bg-dark);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.15rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    border-color: var(--border-hover);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: var(--bg-dark);
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border-subtle);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Input = styled.input`
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 0.9rem 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: inherit;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(43, 90, 77, 0.08);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const TextArea = styled.textarea`
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 0.9rem 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: inherit;
  min-height: 140px;
  resize: vertical;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(43, 90, 77, 0.08);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  padding: 1rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    transition: transform 0.3s;
  }
  &:hover svg {
    transform: translateX(4px);
  }
`;

const CTABanner = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
  padding: 3rem 2rem;
  background: var(--bg-dark);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: integrate EmailJS or another email service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch {
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let&apos;s <span>work together</span>
        </SectionTitle>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interested in building high-quality web or mobile applications?
          I&apos;m available for remote freelance, contract, or long-term
          projects. Let&apos;s collaborate and bring your ideas to life!
        </Subtitle>

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactCard
              href="https://wa.me/923267477287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <div className="label">Phone / WhatsApp</div>
                <div className="value">+92 326 7477287</div>
              </ContactText>
            </ContactCard>

            <ContactCard
              href="mailto:haroonak88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <div className="label">Email</div>
                <div className="value">haroonak88@gmail.com</div>
              </ContactText>
            </ContactCard>

            <ContactCard
              href="https://www.google.com/maps/search/?api=1&query=Sahiwal+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <div className="label">Location</div>
                <div className="value">Sahiwal, Pakistan</div>
              </ContactText>
            </ContactCard>

            <SocialRow>
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
            </SocialRow>
          </ContactInfo>

          <ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormRow>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <FaArrowRight />}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>

        <CTABanner
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Ready to start your next project?</h3>
          <p>
            I&apos;m always open to discussing new opportunities, creative
            ideas, or partnerships. Don&apos;t hesitate to reach out!
          </p>
        </CTABanner>
      </Container>
    </ContactSection>
  );
};

export default Contact;
