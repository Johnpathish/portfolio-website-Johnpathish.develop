const Button = ({
  children,
  href,
  type = 'button',
  variant = 'primary',
  disabled = false,
  target,
  rel,
}) => {
  const className = `button button--${variant}${disabled ? ' is-disabled' : ''}`

  if (href) {
    return (
      <a className={className} href={href} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
