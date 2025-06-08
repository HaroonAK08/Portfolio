import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  display: flex;
  align-items: center;
  background: var(--darker);
`;

const ContactContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  color: var(--gray);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--gray);
  cursor: pointer;

  &:hover {
    transform: translateX(10px);
    background: rgba(108, 99, 255, 0.2);
  }

  svg {
    color: var(--primary);
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--dark);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(108, 99, 255, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--light);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: var(--darker);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  color: var(--light);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  background: var(--darker);
  border: 1px solid rgba(108, 99, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  color: var(--light);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: var(--gradient);
  color: var(--light);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(108, 99, 255, 0.2);
  }
`;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    time: new Date().toLocaleString(),
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("-lUD2kmeE0Gl-VzM8");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = {
        ...form,
        time: new Date().toLocaleString(),
      };

      const result = await emailjs.sendForm(
        "service_wlrmf9o", // Your service ID
        "template_3qaqd3m", // Your template ID
        formRef.current,
        formData
      );

      if (result.text === "OK") {
        setForm({
          name: "",
          email: "",
          message: "",
          time: new Date().toLocaleString(),
        });
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <ContactSection id="contact">
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactItem
              as="a"
              href="https://wa.me/923267477287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone />
              <span>+92 326 7477287</span>
            </ContactItem>
            <ContactItem
              as="a"
              href="mailto:haroonak88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              <span>haroonak88@gmail.com</span>
            </ContactItem>
            <ContactItem
              as="a"
              href="https://www.google.com/maps/search/?api=1&query=Sahiwal+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt />
              <span>Sahiwal, Pakistan</span>
            </ContactItem>
          </ContactInfo>
          <ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
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
                value={form.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
