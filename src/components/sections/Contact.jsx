import { useContactForm } from '../../hooks/useContactForm'

const Contact = () => {
  const {
    form,
    status,
    error,
    submission,
    toast,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm()

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-band">
        <div className="container contact-stack">
          <div className="contact-hero">
            <h2>
              Let&apos;s Build
              <br />
              Something <span>Cool</span>
            </h2>

            <div className="contact-actions">
              <a
                className="contact-chip contact-chip--wide"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pathishjohn@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email pathishjohn@gmail.com"
              >
                Email Me
              </a>
              <a
                className="contact-chip"
                href="https://github.com/Johnpathish"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
              <a
                className="contact-chip"
                href="https://www.linkedin.com/in/john-pathish/"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
            </div>

            <div className="contact-email-pill">pathishjohn@gmail.com</div>
          </div>

          <form className="contact-form-card brutal-card" onSubmit={handleSubmit}>
            <h3>Quick Message</h3>

            {toast ? (
              <div className={`toast toast--${toast.type}`} role="status">
                {toast.message}
              </div>
            ) : null}

            <label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="FULL NAME"
                autoComplete="name"
                disabled={isSubmitting}
                required
              />
            </label>

            <label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="EMAIL"
                autoComplete="email"
                disabled={isSubmitting}
                required
              />
            </label>

            <label>
              <input
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="PHONE NUMBER"
                autoComplete="tel"
                disabled={isSubmitting}
                required
              />
            </label>

            <label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="ADDRESS"
                disabled={isSubmitting}
                required
              />
            </label>

            <label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="LOCATION"
                disabled={isSubmitting}
                required
              />
            </label>

            <label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="WHAT'S ON YOUR MIND?"
                rows="5"
                disabled={isSubmitting}
                required
              />
            </label>

            <button
              className="contact-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            <div className="form-status" aria-live="polite">
              {status === 'idle' && (
                <p>Share a project idea, collaboration, or job opportunity.</p>
              )}
              {status === 'sending' && <p>Submitting your message...</p>}
              {status === 'error' && <p>{error}</p>}
              {status === 'success' && submission ? (
                <div className="submission-details">
                  <p>
                    <strong>Reference ID:</strong> {submission.referenceId}
                  </p>
                  <p>
                    <strong>Status:</strong> {submission.status}
                  </p>
                  <p>
                    <strong>Submitted Date:</strong> {submission.submittedDate}
                  </p>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact