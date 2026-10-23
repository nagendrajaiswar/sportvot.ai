import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { cn } from '../lib/utils'

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

const COUNTRY_CODES = [
  ['IN', '+91'], ['US', '+1'], ['GB', '+44'], ['AE', '+971'], ['AU', '+61'], ['CA', '+1'], ['SG', '+65'], ['SA', '+966'],
  ['QA', '+974'], ['NG', '+234'], ['KE', '+254'], ['ZA', '+27'], ['ID', '+62'], ['PH', '+63'], ['MY', '+60'], ['LK', '+94'],
  ['BD', '+880'], ['NP', '+977'], ['DE', '+49'], ['FR', '+33'],
]

/** Phone number input with an international country-code selector. */
export function PhoneInput({ required, placeholder = 'Phone number' }: { required?: boolean; placeholder?: string }) {
  return (
    <div className="flex gap-2">
      <SelectInput wrapperClassName="w-[116px] shrink-0" defaultValue="+91" aria-label="Country code" className="pr-8 pl-3">
        {COUNTRY_CODES.map(([iso, code]) => (
          <option key={iso} value={code}>
            {iso} {code}
          </option>
        ))}
      </SelectInput>
      <TextInput type="tel" required={required} placeholder={placeholder} className="min-w-0 flex-1" />
    </div>
  )
}

export function TextareaInput(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(fieldClasses, 'min-h-[100px] resize-y', props.className)} />
}

export function DemoForm({
  className,
  submitLabel,
  block = true,
  children,
}: {
  className?: string
  submitLabel: string
  block?: boolean
  children: React.ReactNode
}) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    const form = e.currentTarget
    setTimeout(() => {
      setSent(false)
      form.reset()
    }, 2600)
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
      <button
        type="submit"
        disabled={sent}
        className={cn(
          'mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-sv-primary px-8 py-4 font-display text-[15px] font-bold text-white transition-shadow hover:shadow-[0_12px_40px_rgba(120,119,224,.45)] disabled:opacity-80',
          block && 'w-full',
        )}
      >
        {sent ? "Sent — we'll be in touch →" : submitLabel}
      </button>
    </form>
  )
}
