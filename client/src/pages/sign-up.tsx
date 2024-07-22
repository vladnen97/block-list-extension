import { Header } from '@/shared/ui'
import { SignUpForm } from '@/features/auth'
import { UiFormPageLayout } from '@/shared/ui/layouts/ui-form-page-layout'

export function SignUpPage() {
  return (
    <UiFormPageLayout
      title="Sign Up"
      header={<Header />}
      form={<SignUpForm />}
    />
  )
}
