const snippet = [
  'const developer={',
  "  name: 'JohnPathish',",
  "  role: 'Frontend Developer',",
  "  passion: 'Development and Problem Solving',",
  "  motto: 'Code is Poetry, Design is Magic'",
  '};',
]

const CodeWidget = () => {
  return (
    <div className="code-widget-frame">
      <div className="code-widget brutal-card" aria-label="Code preview">
        <span className="window-dots window-dots--top" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>

        <pre>
          {snippet.map((line) => (
            <div key={line} className="code-widget__line">
              <code>{line}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}

export default CodeWidget
