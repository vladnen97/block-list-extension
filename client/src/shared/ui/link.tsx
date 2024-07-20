import Link from 'next/link'
import { ComponentProps } from 'react'
import clsx from 'clsx'

type Props = {} & ComponentProps<typeof Link>

export const UiLink = ({ className, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'p-1 text-teal-500 cursor-pointer hover:text-teal-600'
      )}
    />
  )
}
