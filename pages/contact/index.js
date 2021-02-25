import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/contact.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  { useState } from 'react';
import { alert } from '@ungap/global-this';



export default function Contact() {
  const [isSubmitting, setSubmitting] = useState()
  const [submitted, setSubmitted] = useState()

  const submitForm = () => {
    setSubmitting(true)
    fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: "Sagar", email: "info@sagarg.com.np" , messsage: "something message"})
    }).then((res) => {
     res.status === 200 ?  setSubmitted(true) : ''
    })
  }
  

    return (
      <div>
        <p>{isSubmitting ? 'Please wait form has been submitting' : ''}</p>
        <p>{ submitted ? 'Form has been summited': ''}</p>
        <button onClick={submitForm} style={{ cursor: "pointer" }} > submit form </button>
      </div>
    )

}
