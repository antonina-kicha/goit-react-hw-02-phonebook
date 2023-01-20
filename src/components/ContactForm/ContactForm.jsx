import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { Component } from 'react';
// import {InputFormik} from './Phonebook.styled'

export class ContactForm extends Component {
    state = {
            name: '',
            number: ''
    }
    
    handleInputChange = evt => {
        console.log(evt.currentTarget.name);
        console.log(evt.currentTarget.value);
        this.setState({[evt.currentTarget.name]: evt.currentTarget.value})
    }

    handleSubmit = evt => {
        // evt.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
    return (
      
        <Formik
        initialValues={{name: '', number: ''}}
      onSubmit={this.handleSubmit}
    >
      <Form autoComplete = "off">
            <label htmlFor="name">
                Name
            </label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={this.state.name} onChange={this.handleInputChange} />

            <label htmlFor="number">
                Contacts
            </label>
                <Field
                    id="number"
                    name="number"
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    value={this.state.number} onChange={this.handleInputChange} />

        <button type="submit" >Add contact</button>
      </Form>
    </Formik>
    )
  }

}
