import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/contact.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import { sendContactMail } from "../../components/networking/mail-api"
import  { useState } from 'react';
import { alert } from '@ungap/global-this';
import {
  Checkbox,
  Form,
  TextArea,
  Button,
  Grid
} from 'semantic-ui-react';

const Contact = () => {
  const [isSubmitting, setSubmitting] = useState()
  const [isError, setError] = useState()
  const [submitted, setSubmitted] = useState()
  const [state, setState] = useState({full_name:'',email:'',subject:'',message:''})

  const handleChange = (e, { name, value }) => setState({ ...state, [name]: value })

  const submitForm = async () => {
    setSubmitting(true)
    const res = await sendContactMail(state.full_name, state.email, state.message, state.subject)
    if (res.status < 300) {
      setSubmitting(false)
      setSubmitted(true)
      setState({
         full_name:'',
         email:'',
         subject:'',
         message:'',
       })
      setTimeout(()=>{setSubmitted(false);},5000)
    } else {
      setSubmitting(false)
      setError(true)
      setTimeout(()=>{setError(false);},5000)
    }
  }
  return (
    <PageLayout title="Contact Us">
      <Grid stackable >
        <Grid.Row>
            <Grid.Column width={16}>
              <Form style={pageStyles.formContainer} loading={isSubmitting} onSubmit={submitForm}>
                <Form.Input
                  required
                  fluid
                  name="full_name"
                  label='Full Name'
                  value={state.full_name}
                  placeholder='Full Name'
                  onChange={handleChange}
                />
                <Form.Input
                  required
                  fluid
                  name="email"
                  value={state.email}
                  label='Email'
                  placeholder='Email'
                  type="email"
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  label='Subject'
                  name="subject"
                  value={state.subject}
                  placeholder='Subject'
                  onChange={handleChange}
                />
                <Form.Field
                  required
                  control={TextArea}
                  label='Message'
                  name="message"
                  value={state.message}
                  placeholder='Message'
                  onChange={handleChange}
                />
                <p>{ submitted ? <div style={{color:'green'}}>Form has been summited.</div>: ''}</p>
                <p>{ isError ? <div style={{color:'red'}}>An error occured while submitting your message.</div>: ''}</p>
                <Button fluid color="blue" type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
        </Grid.Row>
      </Grid>

    </PageLayout>
  );
};

export default Contact;

const pageStyles = {
  formContainer: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 17
  }
}
