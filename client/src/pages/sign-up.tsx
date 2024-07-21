import { Header, UiLink } from '@/shared/ui'
import { SignUpForm } from '@/features/auth'
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout'

export function SignUpPage() {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={
        <Header
          right={
            <div className={'flex gap-2'}>
              <UiLink href={'/'}>Home</UiLink>
            </div>
          }
        />
      }
      form={<SignUpForm />}
    />
  )
}
