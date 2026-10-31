import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { cn } from '../lib/utils'
import { COUNTRIES } from '../data/countries'

const fieldClasses =
  'rounded-sv-md border border-sv-border-strong bg-sv-black-soft px-[15px] py-[13px] font-body text-[15px] text-sv-white transition-colors focus:border-sv-primary-light focus:outline-none'

export function FormGrid({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('grid grid-cols-2 gap-4 max-[640px]:grid-cols-1', className)}>{children}</div>
}

export function Field({
  label,
  full,
  className,
  children,
}: {
  label: string
  full?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('mb-4 flex flex-col gap-1.5', full && 'col-span-full', className)}>
      <label className="text-[13px] font-semibold text-sv-text-muted">{label}</label>
      {children}
    </div>
  )
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldClasses, props.className)} />
}

export function SelectInput({ wrapperClassName, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { wrapperClassName?: string }) {
  return (
    <div className={cn('relative', wrapperClassName)}>
      <select {...props} className={cn(fieldClasses, 'w-full appearance-none pr-11', props.className)} />
      <CaretDown size={16} weight="bold" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sv-text-muted" />
    </div>
  )
}

/** Phone number input with a scrollable international country-code selector. */
export function PhoneInput({
  required,
  placeholder,
  dial,
  onDialChange,
}: {
  required?: boolean
  placeholder?: string
  dial?: string
  onDialChange?: (dial: string) => void
}) {
  const dialProps = dial === undefined ? { defaultValue: '+91' } : { value: dial, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => onDialChange?.(e.target.value) }
  return (
    <div className="flex gap-2">
      <SelectInput wrapperClassName="w-[116px] shrink-0" name="dialCode" aria-label="Country code" className="pr-8 pl-3" {...dialProps}>
        {COUNTRIES.map(([, iso, code]) => (
          <option key={iso} value={code}>
            {iso} {code}
          </option>
        ))}
      </SelectInput>
      <TextInput type="tel" name="phone" required={required} placeholder={placeholder} className="min-w-0 flex-1" />
    </div>
  )
}

/** A set of checkboxes sharing one name; read the selection with FormData.getAll(name). */
export function CheckboxGroup({ name, options, legend }: { name: string; options: string[]; legend: string }) {
  return (
    <fieldset className="mb-4 col-span-full">
      <legend className="mb-2 text-[13px] font-semibold text-sv-text-muted">{legend}</legend>
      <div className="grid grid-cols-2 gap-2.5 max-[640px]:grid-cols-1">
        {options.map((o) => (
          <label
            key={o}
            className="flex cursor-pointer items-center gap-2.5 rounded-sv-md border border-sv-border-strong bg-sv-black-soft px-4 py-3 text-[14px] text-sv-text transition-colors has-checked:border-sv-primary-border has-checked:bg-sv-primary-dim"
          >
            <input type="checkbox" name={name} value={o} className="h-4 w-4 shrink-0 accent-[#7877e0]" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function TextareaInput(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldClasses, 'min-h-[100px] resize-y', props.className)} />
}

export function DemoForm({
  className,
  submitLabel,
  block = true,
  onSubmitData,
  children,
}: {
  className?: string
  submitLabel: string
  block?: boolean
  /** Receives the submitted fields; reject to show an error instead of the success state. */
  onSubmitData?: (data: FormData) => void | Promise<void>
  children: React.ReactNode
}) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setState('sending')
    try {
      await onSubmitData?.(new FormData(form))
    } catch {
      setState('error')
      return
    }
    setState('sent')
    setTimeout(() => {
      setState('idle')
      form.reset()
    }, 2600)
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
      <button
        type="submit"
        disabled={state === 'sending' || state === 'sent'}
        className={cn(
          'mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-sv-primary px-8 py-4 font-display text-[15px] font-bold text-white transition-shadow hover:shadow-[0_12px_40px_rgba(120,119,224,.45)] disabled:opacity-80',
          block && 'w-full',
        )}
      >
        {state === 'sent' ? "Sent — we'll be in touch →" : state === 'sending' ? 'Sending…' : submitLabel}
      </button>
      {state === 'error' && (
        <p role="alert" className="mt-3 text-center text-sm text-sv-live">
          Something went wrong sending your enquiry. Please try again.
        </p>
      )}
    </form>
  )
}
