import { useMemo, useState } from 'react'

const CONTACT_API =
  'https://api-prod.aathisoft.com/webportal/public/website-contact'

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
      const payload = {
        ...form,
        phoneNumber: form.phoneNumber,
        source: 'aathisoft-website',
        pageUrl: window.location.href,
      }

      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || 'Contact request failed')
      }

      setSubmission({
        referenceId:
          readFirstValue(data, ['data.id', 'id', 'referenceId', 'referenceID', 'refId', 'ticketId']) ||
          'Not provided',
        status:
          readFirstValue(data, ['data.status', 'status', 'submissionStatus']) ||
          'Submitted',
        submittedDate:
          readFirstValue(data, ['data.submittedAt', 'submittedAt', 'submittedDate', 'createdAt', 'createdDate', 'date']) ||
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
