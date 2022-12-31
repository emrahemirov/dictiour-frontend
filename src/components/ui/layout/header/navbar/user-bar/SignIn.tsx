import { Button, Stack } from '@chakra-ui/react';
import TextField from '@components/ui/common/TextField';
import { Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const SignIn = ({ closeModal }: { closeModal: () => void }) => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username required'),
        password: Yup.string().required('Password required')
      })}
      onSubmit={async (values, actions) => {
        signIn('credentials', {
          username: values.username.trim(),
          password: values.password.trim(),
          redirect: false
        }).then(({ ok }) => {
          if (ok) {
            toast('Success', { type: 'success' });
            router.push('/');
          } else {
            toast('Error happened while signing in', { type: 'error' });
          }
        });

        actions.resetForm();
        closeModal();
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Stack>
            <TextField label='Username' name='username' />
            <TextField label='Password' name='password' type='password' />

            <Button w={'full'} colorScheme={'teal'} type={'submit'}>
              Sign in
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
