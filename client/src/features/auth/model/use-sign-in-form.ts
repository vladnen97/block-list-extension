import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignIn } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'

export const useSignInForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
    setError,
  } = useForm<{
    email: string
    password: string
  }>({
    reValidateMode: 'onChange',
  })

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      void router.push(ROUTES.HOME)
    },
    onError: () => {
      const errorMessage = signInMutation.error ? 'Unauthorized' : undefined

      if (errorMessage) {
        setError('email', { type: 'custom', message: errorMessage })
      }
    },
  })

  return {
    handleFormSubmit: () => handleSubmit((data) => signInMutation.mutate(data)),
    register,
    isSubmitting,
    isValid,
    errorMessage: errors.email?.message,
  }
}
