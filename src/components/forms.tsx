import { useState } from 'react'
import { cn } from '../lib/utils'

const fieldClasses =
  'rounded-sv-md border border-sv-border-strong bg-sv-black-soft px-[15px] py-[13px] font-body text-[15px] text-sv-white transition-colors focus:border-sv-primary focus:outline-none'

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

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn(fieldClasses, props.className)} />
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
