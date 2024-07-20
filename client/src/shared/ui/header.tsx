import { Logo } from '@/shared/ui/logo'
import clsx from 'clsx'
import { ReactNode } from 'react'

export const Header = ({
  className,
  right,
}: {
  className?: string
  right?: ReactNode
}) => {
  return (
    <header
      className={clsx(
        'px-4 py-3 border-b border-b-slate-300 flex items-center justify-between',
        className
      )}
    >
      <div className={'flex items-center gap-2 text-xl'}>
        <Logo className={'text-teal-600 w-12 h-12'} />
        Easy Block
      </div>

      {right}
    </header>
  )
}
