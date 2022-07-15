import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import ContactForm from './Form/ContactForm'
import MessageForm from '../../Images/messageForm.svg'

import {
    Section,
    FormTitle,
    FormSubtitle
} from './FormSectionElements'

const FormSection = () => {
    return (
        <Section>
            <Wrapper>
                <FormTitle>
                    Seu celular está com defeito?
                </FormTitle>
                <FormSubtitle>
                    Faça um orçamento sem compromisso conosco
                </FormSubtitle>
                <div className='flex'>
                    <div className='contactForm'>
                        <ContactForm />
                    </div>
                    <div className='imgForm'>
                        <img src={MessageForm} alt='contact us'/>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export default FormSection
