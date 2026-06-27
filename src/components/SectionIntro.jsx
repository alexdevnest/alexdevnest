const SectionIntro = ({ title, direction }) => (
  <section
    className={`
      section-intro
      ${
        direction === 'reverse'
          ? 'flex-row-reverse'
          : ''
      }
    `}
  >
    <h2>
      { title }
      <span className="text-primary">.</span>
    </h2>
    <span className="inline-block flex-1">
      <hr className="h-1" />
    </span>
  </section>
)


export default SectionIntro;