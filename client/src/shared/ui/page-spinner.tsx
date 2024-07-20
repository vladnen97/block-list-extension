import { Spinner } from '@/shared/ui/spinner'
import clsx from 'clsx'

export const PageSpinner = ({ classname }: { classname?: string }) => {
  return (
    <div
      className={clsx(
        'fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-slate-100',
        classname
      )}
    >
      <Spinner classname={'text-teal-600 w-24 h-24'} />
    </div>
  )
}
