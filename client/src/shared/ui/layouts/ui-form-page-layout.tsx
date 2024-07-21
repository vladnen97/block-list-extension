import { ReactNode } from 'react'

export const UiFormPageLayout = ({
  form,
  title,
  header,
}: {
  header?: ReactNode
  form?: ReactNode
  title: string
}) => {
  return (
    <div className={'min-h-screen flex flex-col bg-slate-100'}>
      {header}
      <main className={'grow flex flex-col pt-24'}>
        <div
          className={
            'rounded-xl border border-slate-300 px-14 py-8 pb-14 max-w-[400px] bg-white self-center w-full'
          }
        >
          <h1 className={'text-2xl mb-8 text-center'}>{title}</h1>
          {form}
        </div>
      </main>
    </div>
  )
}
