import { Button, Stack } from '@chakra-ui/react';
import TextField from '@components/ui/common/TextField';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username required'),
        password: Yup.string().required('Password required')
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
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
