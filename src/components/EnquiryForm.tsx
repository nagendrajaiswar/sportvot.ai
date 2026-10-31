import { useState } from 'react'
import { DemoForm, Field, FormGrid, TextInput, SelectInput, TextareaInput, PhoneInput, CheckboxGroup } from './forms'
import { COUNTRIES } from '../data/countries'
import { ENQUIRY_RECIPIENT, submitEnquiry, type EnquiryTopic } from '../lib/enquiry'

const TOPICS: { value: EnquiryTopic; label: string }[] = [
  { value: 'production', label: 'Live Sports Production & Broadcasting' },
  { value: 'events', label: 'Corporate Events & Sports Tournaments' },
  { value: 'general', label: 'General Enquiry / Partnership' },
]

const PRODUCTION_SPORTS = [
  'Multi-sport', 'Football / Soccer', 'Cricket', 'Padel', 'Pickleball', 'Badminton', 'Tennis', 'Table Tennis',
  'Hockey', 'Rugby', 'Kabaddi', 'AFL', 'Baseball', 'Basketball', 'Netball', 'Other',
]
const EVENT_TYPES = ['Corporate Sports Tournament', 'Corporate Event', 'Community Sports Event', 'Other']
const EVENT_SPORTS = ['Cricket', 'Football', 'Padel', 'Pickleball', 'Badminton', 'Others']
const EVENT_SERVICES = ['End-to-end event management', 'Event venue', 'Videography & photography', 'Live coverage', 'Streaming', 'Highlights', 'Other']
const GENERAL_TYPES = ['Business Partnership', 'Live Streaming Requirement', 'Technology Partnership', 'Content & Streaming Rights', 'Distribution Partnership', 'Other']

function Placeholder({ children }: { children: string }) {
  return (
    <option value="" disabled>
      {children}
    </option>
  )
}

/**
 * The single enquiry form. Common fields first, then the follow-ups for the chosen enquiry type.
 * Pass `fixedTopic` to lock it to one type (hides the selector), e.g. on the Live Production page.
 */
export default function EnquiryForm({ fixedTopic }: { fixedTopic?: EnquiryTopic }) {
  const [picked, setPicked] = useState<EnquiryTopic | ''>('')
  const [dial, setDial] = useState('+91')
  const topic = fixedTopic ?? picked

  const onCountry = (name: string) => {
    const hit = COUNTRIES.find(([n]) => n === name)
    if (hit) setDial(hit[2])
  }

  const onSubmitData = async (data: FormData) => {
    if (!topic) return
    const fields: Record<string, string | string[]> = {}
    for (const key of new Set(data.keys())) {
      const all = data.getAll(key).map(String)
      fields[key] = all.length > 1 ? all : all[0]
    }
    await submitEnquiry({ topic, to: ENQUIRY_RECIPIENT[topic], fields })
  }

  return (
    <DemoForm submitLabel="Submit Enquiry" onSubmitData={onSubmitData}>
      {!fixedTopic && (
        <Field label="What can we help you with? *">
          <SelectInput required name="enquiryTopic" value={picked} onChange={(e) => setPicked(e.target.value as EnquiryTopic)}>
            <Placeholder>Select an option</Placeholder>
            {TOPICS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </SelectInput>
        </Field>
      )}

      <FormGrid>
        <Field label="Full Name *">
          <TextInput type="text" name="fullName" required placeholder="Your full name" />
        </Field>
        <Field label="Organisation / Company Name *">
          <TextInput type="text" name="organisation" required placeholder="Your organisation" />
        </Field>
        <Field label="Email Address *">
          <TextInput type="email" name="email" required placeholder="you@organisation.com" />
        </Field>
        <Field label="Contact Number">
          <PhoneInput placeholder="Phone number" dial={dial} onDialChange={setDial} />
        </Field>
        <Field label="Country / Region *" full>
          <SelectInput required name="country" defaultValue="" onChange={(e) => onCountry(e.target.value)}>
            <Placeholder>Select your country</Placeholder>
            {COUNTRIES.map(([name]) => (
              <option key={name}>{name}</option>
            ))}
          </SelectInput>
        </Field>

        {topic === 'production' && (
          <>
            <Field label="Sport *">
              <SelectInput required name="sport" defaultValue="">
                <Placeholder>Select a sport</Placeholder>
                {PRODUCTION_SPORTS.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Event / Tournament Name">
              <TextInput type="text" name="eventName" placeholder="Name of the event or tournament" />
            </Field>
            <Field label="Event Location & Dates *" full>
              <TextInput type="text" name="locationDates" required placeholder="City, venue and dates" />
            </Field>
            <Field label="Services Required *" full>
              <TextareaInput name="servicesRequired" required placeholder="Tell us what you need: number of courts or venues, cameras, graphics, commentary, streaming and distribution…" />
            </Field>
          </>
        )}

        {topic === 'events' && (
          <>
            <Field label="Event Type *">
              <SelectInput required name="eventType" defaultValue="">
                <Placeholder>Select an event type</Placeholder>
                {EVENT_TYPES.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Sport / Activity *">
              <SelectInput required name="sport" defaultValue="">
                <Placeholder>Select a sport or activity</Placeholder>
                {EVENT_SPORTS.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Event Location & Dates *" full>
              <TextInput type="text" name="locationDates" required placeholder="City, venue and dates" />
            </Field>
            <CheckboxGroup legend="Services Required" name="servicesRequired" options={EVENT_SERVICES} />
            <Field label="Additional Requirements" full>
              <TextareaInput name="additionalRequirements" placeholder="Anything else we should know: number of participants, budget, timelines…" />
            </Field>
          </>
        )}

        {topic === 'general' && (
          <>
            <Field label="Enquiry Type *" full>
              <SelectInput required name="enquiryType" defaultValue="">
                <Placeholder>Select an enquiry type</Placeholder>
                {GENERAL_TYPES.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </SelectInput>
            </Field>
            <Field label="Message / Enquiry Details *" full>
              <TextareaInput name="message" required placeholder="Tell us a little about what you have in mind…" />
            </Field>
          </>
        )}
      </FormGrid>
    </DemoForm>
  )
}
