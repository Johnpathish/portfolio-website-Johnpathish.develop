import { useMemo, useState } from 'react'

const CONTACT_API = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = 'b0d34d60-e439-4d34-953e-079729ba805d'

const initialForm = {
  fullName: '',
  email: '',
  phoneNumber: '',
  address: '',
  location: '',
 
  message: '',
}

const readFirstValue = (data, keys) => {
  for (const key of keys) {
    const value = key.split('.').reduce((obj, segment) => obj?.[segment], data)
    if (value) {
      return value
    }
  }

  return ''
}

export const useContactForm = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [submission, setSubmission] = useState(null)

  const isSubmitting = status === 'sending'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setStatus('sending')
    setError('')
    setSubmission(null)

    try {
      const payload = new FormData(event.currentTarget)
      payload.set('access_key', WEB3FORMS_ACCESS_KEY)
      payload.set('subject', 'New portfolio contact form message')
      payload.set('from_name', form.fullName)
      payload.set('name', form.fullName)
      payload.set('phone', form.phoneNumber)
      payload.set('page_url', window.location.href)

      const response = await fetch(CONTACT_API, {
        method: 'POST',
        body: payload,
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || data?.success === false) {
        throw new Error(
          data?.message || data?.error || 'Contact request failed',
        )
      }

      setSubmission({
        referenceId: readFirstValue(data, ['data.id', 'id']) || 'Web3Forms',
        status:
          readFirstValue(data, ['data.status', 'status']) ||
          'Submitted',
        submittedDate:
          readFirstValue(data, ['data.submittedAt', 'submittedAt']) ||
          new Date().toLocaleString(),
        serverMessage: readFirstValue(data, ['message', 'data.message']) || '',
      })
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setError(err?.message || 'Failed to send message. Please try again.')
    }
  }

  const toast = useMemo(() => {
    if (status === 'success') {
      return {
        type: 'success',
        message: submission?.serverMessage || 'Message sent successfully.',
      }
    }

    if (status === 'error') {
      return {
        type: 'error',
        message: error,
      }
    }

    return null
  }, [error, status, submission])

  return {
    form,
    status,
    error,
    submission,
    toast,
    isSubmitting,
    handleChange,
    handleSubmit,
  }
}
