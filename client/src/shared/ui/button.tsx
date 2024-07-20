import { ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline'
}

type Props = ButtonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonProps>

export const Button = ({ className, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'px-4 h-10 rounded cursor-pointer flex ga-2 items-center justify-center',
        {
          primary:
            'text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30',
          secondary:
            'text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30',
          outline:
            'border border-slate-300 hover:bg-slate-300 disabled:opacity-50 cursor-not-allowed',
        }[variant]
      )}
      {...props}
    />
  )
}
