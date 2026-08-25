import Container from "@/shared/primitives/container/Container";
import Section from "@/shared/primitives/section/Section";

function Header(): React.JSX.Element {
  return (
    <header className="bg-blue-950">
      <Section>
        <Container>
          <h1>Header</h1>
        </Container>
      </Section>
    </header>
  );
}

export default Header;