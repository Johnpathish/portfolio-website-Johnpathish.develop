import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export const useContactForm = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900)
    })

    setStatus('success')
    setForm(initialForm)
  }

  return {
    form,
    status,
    handleChange,
    handleSubmit,
  }
}
