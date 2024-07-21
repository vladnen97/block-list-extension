import { Button, TextField, UiLink } from '@/shared/ui'
import { ROUTES } from '@/shared/constants/routes'
import { useSignUpForm } from '@/features/auth/model/use-sign-up-form'

export const SignUpForm = () => {
  const { register, isValid, handleFormSubmit, isSubmitting, errorMessage } =
    useSignUpForm()

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
        Sign up
      </Button>
      <p>Already have an account?</p>
      <UiLink href={ROUTES.SIGN_IN}>Sign In</UiLink>
    </form>
  )
}
