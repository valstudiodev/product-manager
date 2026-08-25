import Container from "@/shared/primitives/container/Container";
import Section from "@/shared/primitives/section/Section";

function Footer(): React.JSX.Element {
  return (
    <footer className="bg-blue-950">
      <Section>
        <Container>
          <p className="text-center py-4">Created by Valentyn Tkachenko</p>
        </Container>
      </Section>
    </footer>
  );
}

export default Footer;