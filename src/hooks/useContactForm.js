import { useMemo, useState } from 'react'

const CONTACT_API =
  'https://api-prod.aathisoft.com/webportal/public/website-contact'

const initialForm = {
  fullName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: '',
}

const readFirstValue = (data, keys) => {
  for (const key of keys) {
    if (data?.[key]) {
      return data[key]
    }

    if (data?.data?.[key]) {
      return data.data[key]
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
        source: 'portfolio-website',
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

      if (!response.ok) {
        throw new Error(data?.message || 'Contact request failed')
      }

      setSubmission({
        referenceId:
          readFirstValue(data, [
            'referenceId',
            'referenceID',
            'refId',
            'id',
            'ticketId',
          ]) || 'Not provided',
        status:
          readFirstValue(data, ['status', 'submissionStatus']) || 'Submitted',
        submittedDate:
          readFirstValue(data, [
            'submittedDate',
            'createdAt',
            'createdDate',
            'date',
          ]) || new Date().toLocaleString(),
      })
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setError('Failed to send message. Please try again.')
    }
  }

  const toast = useMemo(() => {
    if (status === 'success') {
      return {
        type: 'success',
        message: 'Message sent successfully.',
      }
    }

    if (status === 'error') {
      return {
        type: 'error',
        message: error,
      }
    }

    return null
  }, [error, status])

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
