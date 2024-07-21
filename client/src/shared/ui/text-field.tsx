import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'
import clsx from 'clsx'

type TextFieldProps = {
  label?: string
  error?: string
  inputClassName?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { className, inputClassName, label, error, ...props },
    ref
  ) {
    const id = useId()

    return (
      <div className={clsx(className, 'flex flex-col gap-1')}>
        {label && (
          <label htmlFor={id} className={'block'}>
            {label}
          </label>
        )}
        <input
          {...props}
          id={id}
          className={clsx(
            inputClassName,
            'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none'
          )}
          ref={ref}
        />
        {error && <div className={'text-rose-600 text-sm'}>{error}</div>}
      </div>
    )
  }
)
