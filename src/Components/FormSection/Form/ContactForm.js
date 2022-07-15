import { React, useState } from 'react'


import {
    FormContainer,
} from './ContactFormElements'

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        city: '',
        uf: 'RJ',
        cel: '',
        description: ''
    })

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        
        const isCheckbox = type === 'checkbox'
        const data = formValues[name] || {};
        if(isCheckbox) {
            data[value] = checked
        }
        
        console.log(data)
        const newValue = isCheckbox ? data : value;
        setFormValues({...formValues, [name]: newValue})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
    }

    console.log(formValues)

    return (
        <FormContainer
        onSubmit={handleSubmit}
        >
            {/* INPUT NOME  */}
            <input 
                type='text' 
                name='name' 
                placeholder='nome completo' 
                onChange={handleInputChange} 
                value={formValues.name}
            />
            {/* INPUT EMAIL  */}
            <input 
                type='text' 
                name='email' 
                placeholder='email' 
                onChange={handleInputChange} 
                value={formValues.email}
            />
            {/* INPUT Celular  */}
            <input 
                type='text' 
                name='cel' 
                placeholder='celular' 
                onChange={handleInputChange} 
                value={formValues.cel}
            />
            {/* INPUT CITY  */}
            <div className='formGroup'>
                <input 
                    type='text' 
                    name='city' 
                    placeholder='cidade' 
                    onChange={handleInputChange} 
                    value={formValues.city}
                />
                <select 
                    name='uf' 
                    onChange={handleInputChange} 
                    value={formValues.uf}
                    className='selectUf'
                >
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select>
            </div>

            {/* TEXTAREA DESCRIPTION */}
            <textarea 
                name='description' 
                onChange={handleInputChange} 
                value={formValues.description}
                maxLength={200}
                placeholder='descreva em poucas palavras o problema com seu aparelho'
            />

            <button type='submit' className='submitBtn'>Enviar</button>
        </FormContainer>    
    )
}

export default ContactForm
