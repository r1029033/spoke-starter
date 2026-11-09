import {
  ActionBar,
  Button,
  Input,
  ServiceCard,
  SummaryRow,
  Tag,
  TimeSlot,
  TopBar,
} from './components'
import './App.css'

function App() {
  const colors = [
    ['Surface', 'var(--color-surface)'],
    ['Text primary', 'var(--color-text-primary)'],
    ['Text muted', 'var(--color-text-muted)'],
    ['Border', 'var(--color-border)'],
    ['Brand', 'var(--color-brand)'],
    ['On brand', 'var(--color-on-brand)'],
    ['Tag background', 'var(--color-tag-background)'],
    ['Tag text', 'var(--color-tag-text)'],
  ]

  return (
    <main className="showcase">
      <header className="showcase__header">
        <p className="showcase__eyebrow">Spoke</p>
        <h1>Design system</h1>
        <p>Tokens and reusable components transferred from Figma.</p>
      </header>

      <section className="showcase__section" aria-labelledby="colors-heading">
        <h2 id="colors-heading">Colours</h2>
        <div className="swatches">
          {colors.map(([name, color]) => (
            <div className="swatch" key={name}>
              <span className="swatch__color" style={{ background: color }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase__section" aria-labelledby="components-heading">
        <h2 id="components-heading">Components</h2>

        <div className="component-group">
          <h3>Button</h3>
          <div className="component-row">
            <Button>Book this repair</Button>
            <Button variant="secondary">Book this repair</Button>
          </div>
        </div>

        <div className="component-group">
          <h3>Tag and time slot</h3>
          <div className="component-row">
            <Tag>30 min</Tag>
            <TimeSlot>16:30</TimeSlot>
            <TimeSlot state="selected">16:30</TimeSlot>
            <TimeSlot state="disabled">16:30</TimeSlot>
          </div>
        </div>

        <div className="component-group">
          <h3>Input</h3>
          <div className="component-row component-row--wide">
            <Input />
            <Input state="focus" />
          </div>
        </div>

        <div className="component-group">
          <h3>Top bar</h3>
          <TopBar />
        </div>

        <div className="component-group">
          <h3>Service card</h3>
          <div className="component-row component-row--wide">
            <ServiceCard />
            <ServiceCard selected />
          </div>
        </div>

        <div className="component-group">
          <h3>Summary row</h3>
          <SummaryRow />
        </div>

        <div className="component-group">
          <h3>Action bar</h3>
          <ActionBar />
        </div>
      </section>
    </main>
  )
}

export default App
