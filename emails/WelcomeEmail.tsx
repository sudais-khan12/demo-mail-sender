import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
} from "@react-email/components";

export const WelcomeEmail = ({ name }: { name: string }) => (
  <Html>
    <Head />
    <Body style={bodyStyle}>
      <Container style={containerStyle}>
        <Section>
          <Heading style={headingStyle}>Welcome to Our App!</Heading>
          <Text style={textStyle}>Hi {name}, thank you for joining us.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const bodyStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f4f4f4",
  margin: 0,
  padding: 0,
};

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  color: "#333333",
  fontSize: "24px",
  marginBottom: "20px",
};

const textStyle = {
  color: "#555555",
  fontSize: "16px",
};
