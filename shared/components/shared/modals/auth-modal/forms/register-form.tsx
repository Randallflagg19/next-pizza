import React from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import {formRegisterSchema, RegisterValues} from './schemas'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormInput} from '../../../form'
import {Button} from '../../../../ui'
import {toast} from 'react-hot-toast'
import {registerUser} from '@/app/actions'

interface Props {
	onClose?: () => void;
	onClickLogin?: () => void;
}

export const RegisterForm: React.FC<Props> = ({onClose, onClickLogin}) => {

	const form = useForm<RegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		}
	});

	const onSubmit = async (data: RegisterValues) => {
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			})

			toast.success('Регистрация успешна. Подтвердите свою почту',{
				icon: '✅'
			})

			onClose?.()

		}catch (error) {
			console.error('Error [REGISTER]', error);
			toast.error('Неверный E-Mail или пароль', {
				icon: '❌'
			})
		}
	}


	return  <FormProvider {...form}>
		<form className='flex flex-col gap-5'
		      onSubmit={form.handleSubmit(onSubmit)}>

			<FormInput name='email' label='E-Mail' required/>
			<FormInput name='fullName' label='Полное имя' required/>
			<FormInput name='password' label='Пароль' type='password' required/>
			<FormInput name='confirmPassword' label='Подтверите пароль' type='password' required/>

			<Button loading={form.formState.isSubmitting}
			        className='h-12 text-base' type='submit'>
				Зарегистрироваться
			</Button>
		</form>
	</FormProvider>
};
