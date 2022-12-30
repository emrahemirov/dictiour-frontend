import { Button, Stack } from '@chakra-ui/react';
import TextField from '@components/ui/common/TextField';
import { authService } from '@services/auth.service';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const SignUp = ({ openSignIn }: { openSignIn: () => void }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirm: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username required'),
        password: Yup.string().required('Password required'),
        passwordConfirm: Yup.string()
          .required('Password required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
      })}
      onSubmit={(values, actions) => {
        authService
          .signUp(values)
          .then(() => {
            toast('Kayıt yapıldı', { type: 'success' });
          })
          .catch(({ response: { data } }) => {
            toast(data.message, { type: 'error' });
          });
        actions.resetForm();
        openSignIn();
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Stack>
            <TextField label='Username' name='username' />
            <TextField label='Password' name='password' type='password' />
            <TextField
              label='Confirm Password'
              name='passwordConfirm'
              type='password'
            />

            <Button w={'full'} colorScheme={'teal'} type={'submit'}>
              Sign up
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
