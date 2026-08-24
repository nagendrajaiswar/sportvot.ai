import { Container, Section } from '../components/ui'
import { Reveal } from '../components/Reveal'
import Btn from '../components/Btn'

export default function NotFound() {
  return (
    <Section className="flex min-h-[70svh] items-center pt-[140px]">
      <Container>
        <Reveal className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-sv-primary-light">404</p>
          <h1 className="mt-4 font-display text-[clamp(32px,5vw,56px)] font-extrabold text-sv-white">This page doesn't exist.</h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] text-sv-text-muted">
            The page you're looking for may have been moved or the link is out of date.
          </p>
          <div className="mt-8 flex justify-center">
            <Btn to="/" variant="primary">
              Back to Home
            </Btn>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
