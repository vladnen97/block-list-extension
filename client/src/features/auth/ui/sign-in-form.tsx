import { Button, TextField, UiLink } from '@/shared/ui'
import { ROUTES } from '@/shared/constants/routes'
import { useSignInForm } from '@/features/auth/model/use-sign-in-form'

export const SignInForm = () => {
  const { handleFormSubmit, isSubmitting, isValid, errorMessage, register } =
    useSignInForm()

  return (
    <form className={'flex flex-col gap-4'} onSubmit={handleFormSubmit()}>
      <TextField
        error={errorMessage}
        type={'email'}
        label="Email"
        placeholder="test@gmail.com"
        {...register('email', { required: true })}
      />
      <TextField
        type="password"
        label="Password"
        {...register('password', { required: true })}
      />
      <Button type={'submit'} disabled={isSubmitting || !isValid}>
        Sign in
      </Button>
      <p>Don&apos;t have an account?</p>
      <UiLink href={ROUTES.SIGN_UP}>Sign Up</UiLink>
    </form>
  )
}
