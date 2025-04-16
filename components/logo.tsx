import { Link } from '@tanstack/react-router'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 w-6 text-sm',
    md: 'h-8 w-8 text-lg',
    lg: 'h-10 w-10 text-xl',
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div
        className={`relative flex ${sizeClasses[size]} from-primary to-primary/80 text-primary-foreground items-center justify-center rounded-full bg-gradient-to-br shadow-sm`}
      >
        <span className="font-bold">A</span>
        <div className="bg-accent absolute -right-1 -bottom-1 h-2 w-2 rounded-full"></div>
      </div>
      <span
        className={`text-foreground font-bold tracking-tight ${textSizeClasses[size]}`}
      >
        Amora
      </span>
    </Link>
  )
}
