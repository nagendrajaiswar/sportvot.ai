import { Container, Section, PageHero, TwoCol, TrustList, Eyebrow } from '../components/ui'
import { Reveal } from '../components/Reveal'
import { DemoForm, Field, TextInput, TextareaInput } from '../components/forms'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your next broadcast."
        subtitle="Whether it's a single match or a full season partnership, our team replies within 24 hours."
      />
      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <TrustList
                items={[
                  'We respond to every enquiry within 24 hours',
                  'Every proposal is custom — built for your sport & scale',
                  'Trusted by organisations across 30+ countries',
                  'Your details are never shared with third parties',
                ]}
              />
              <div className="mt-10">
                <Eyebrow>Reach Us Directly</Eyebrow>
                <p className="mt-3 text-sv-text-muted">
                  hello@sportvot.ai
                  <br />
                  +1 (000) 000-0000
                </p>
              </div>
            </Reveal>
            <Reveal className="rounded-sv-xl border border-sv-border bg-sv-surface p-12 max-[900px]:p-6">
              <DemoForm submitLabel="Send Message →">
                <Field label="Your Name *">
                  <TextInput type="text" required placeholder="Full name" />
                </Field>
                <Field label="Email Address *">
                  <TextInput type="email" required placeholder="you@organisation.com" />
                </Field>
                <Field label="Phone Number *">
                  <TextInput type="tel" required placeholder="Include country code" />
                </Field>
                <Field label="Message *">
                  <TextareaInput required placeholder="How can we help?" />
                </Field>
                <p className="mb-4 text-xs text-sv-text-faint">By submitting you agree to SportVot's Privacy Policy.</p>
              </DemoForm>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>
    </>
  )
}
