import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignUp } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { AxiosError } from 'axios'

export const useSignUpForm = () => {
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

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      void router.push(ROUTES.HOME)
    },
    onError: (error) => {
      const errorMessage = (error as AxiosError<{ type: string }>).response
        ?.data.type

      if (errorMessage) {
        setError('email', { type: 'custom', message: errorMessage })
      }
    },
  })

  const handleFormSubmit = () =>
    handleSubmit((data) => signUpMutation.mutate(data))

  return {
    handleFormSubmit,
    register,
    isSubmitting,
    isValid,
    errorMessage: errors.email?.message,
  }
}
