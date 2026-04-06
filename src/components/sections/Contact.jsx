import { useContactForm } from '../../hooks/useContactForm'

const Contact = () => {
  const { form, status, handleChange, handleSubmit } = useContactForm()

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

            <label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="YOUR NAME"
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
                required
              />
            </label>

            <button className="contact-submit" type="submit">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            <div className="form-status" aria-live="polite">
              {status === 'idle' && (
                <p>Share a project idea, collaboration, or job opportunity.</p>
              )}
              {status === 'success' && (
                <>
                  <p>Message submitted in demo mode.</p>
                  <p>Connect a real backend next.</p>
                </>
              )}
              {status === 'sending' && <p>Submitting your message...</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
