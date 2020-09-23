import React, { useRef, useState } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = ({ handleSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    unitaryPrice: '',
    size: '',
    description: ''
  })

  const inputFileRef = useRef()

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const _handleSubmit = e => {
    e.preventDefault()
    handleSubmit({ ...formValues, image: inputFileRef.current.files[0] })
  }

  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>
          Name
        </Label>
        <Control>
          <Input
            placeholder='Product name'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Unitary price
        </Label>
        <Control>
          <Input
            placeholder='Product unit price'
            type='number'
            name='unitaryPrice'
            value={formValues.unitaryPrice}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Size
        </Label>
        <Control>
          <Input
            placeholder='Product size'
            type='number'
            name='size'
            value={formValues.size}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Description
        </Label>
        <Control>
          <Input
            placeholder='Product description'
            name='description'
            value={formValues.description}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Image
        </Label>
        <Control>
          <input
            type='file' ref={inputFileRef} />
        </Control>
      </Field>

      <Button type='sumbit' color='primary'>Save product</Button>
    </form>
  )
}

export default Form
