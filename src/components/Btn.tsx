import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'outline' | 'live'
type Size = 'md' | 'sm'

type BaseProps = {
  variant?: Variant
  size?: Size
  block?: boolean
  magnetic?: boolean
  className?: string
  children: React.ReactNode
}
type LinkProps = BaseProps & { to: string; href?: undefined; type?: undefined; onClick?: () => void }
type AnchorProps = BaseProps & { href: string; to?: undefined; type?: undefined; target?: string; rel?: string }
type ButtonElProps = BaseProps & {
  type: 'submit' | 'button'
  to?: undefined
  href?: undefined
  disabled?: boolean
  onClick?: () => void
}

export type BtnProps = LinkProps | AnchorProps | ButtonElProps

const base =
  'relative inline-flex items-center justify-center gap-2.5 font-display font-bold rounded-full border border-transparent cursor-pointer overflow-hidden isolate transition-[transform,box-shadow,border-color,color] duration-300 will-change-transform'

const sizeClasses: Record<Size, string> = {
  md: 'text-[15px] px-8 py-4',
  sm: 'text-[13px] px-5 py-[11px]',
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-sv-primary text-white hover:bg-[#2b2aa6] hover:shadow-[0_12px_40px_rgba(120,119,224,.45)]',
  outline: 'bg-transparent text-sv-white border-sv-border-strong hover:border-sv-primary-light hover:text-sv-primary-light',
  live: 'bg-sv-live text-white hover:shadow-[0_12px_40px_rgba(255,0,67,.35)]',
}

export default function Btn(props: BtnProps) {
  const { variant = 'primary', size = 'md', block, magnetic = false, className = '', children } = props
  const classes = cn(base, sizeClasses[size], variantClasses[variant], block && 'w-full', className)
  const inner = <span className="relative z-10">{children}</span>

  let el: React.ReactElement
  if ('to' in props && props.to !== undefined) {
    el = (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {inner}
      </Link>
    )
  } else if ('href' in props && props.href !== undefined) {
    el = (
      <a href={props.href} target={props.target} rel={props.rel} className={classes}>
        {inner}
      </a>
    )
  } else {
    const { type = 'button', disabled, onClick } = props as ButtonElProps
    el = (
      <button type={type} disabled={disabled} onClick={onClick} className={classes}>
        {inner}
      </button>
    )
  }

  return magnetic ? <Magnetic>{el}</Magnetic> : el
}
