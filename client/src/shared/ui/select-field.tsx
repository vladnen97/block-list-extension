import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'
import clsx from 'clsx'

type SelectFieldOptionType = {
  value: string
  label: string
}

type SelectFieldProps = {
  label?: string
  error?: string
  selectClassName?: string
  options?: SelectFieldOptionType[]
} & ComponentPropsWithoutRef<'select'>

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, selectClassName, label, options, error, ...props }, ref) => {
    const id = useId()

    return (
      <div className={clsx(className, 'flex flex-col gap-1')}>
        {label && (
          <label htmlFor={id} className={'block'}>
            {label}
          </label>
        )}
        <select
          {...props}
          id={id}
          className={clsx(
            selectClassName,
            'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none'
          )}
          ref={ref}
        >
          {options?.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <div className={'text-rose-600 text-sm'}>{error}</div>}
      </div>
    )
  }
)
