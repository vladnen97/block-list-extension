import { Header, UiLink } from '@/shared/ui'
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout'
import { SignInForm } from '@/features/auth'

export function SignInPage() {
  return (
    <UiFormPageLayout
      title="Sign In"
      header={
        <Header
          right={
            <div className={'flex gap-2'}>
              <UiLink href={'/'}>Home</UiLink>
            </div>
          }
        />
      }
      form={<SignInForm />}
    />
  )
}
