import { useState } from 'react'
import { ActionBar, Input, ServiceCard, SummaryRow, TimeSlot, TopBar } from './components'
import './App.css'

const services = [
  {
    description: 'Tube or tyre swap, any wheel size.',
    duration: '30 min',
    price: '\u20ac15',
    title: 'Flat tyre repair',
  },
  {
    description: 'Pads, cables and alignment.',
    duration: '45 min',
    price: '\u20ac25',
    title: 'Brake check and adjust',
  },
  {
    description: 'Smooth shifting on every gear.',
    duration: '45 min',
    price: '\u20ac30',
    title: 'Gear tune-up',
  },
  {
    description: 'Everything checked, cleaned and adjusted.',
    duration: '2 hours',
    price: '\u20ac89',
    title: 'Full service',
  },
]

const days = ['Today', 'Tomorrow', 'Mon 16']
const times = [
  { disabled: true, label: '09:00' },
  { disabled: true, label: '10:30' },
  { label: '12:00' },
  { label: '14:00' },
  { label: '16:30' },
  { label: '17:30' },
]

type BookingStep = 'service' | 'slot' | 'confirm'

function App() {
  const [step, setStep] = useState<BookingStep>('service')
  const [selectedService, setSelectedService] = useState(services[0].title)
  const [selectedDay, setSelectedDay] = useState(days[0])
  const [selectedTime, setSelectedTime] = useState('16:30')

  const service = services.find((item) => item.title === selectedService) ?? services[0]

  return (
    <main className="booking-screen">
      {step === 'service' ? (
        <>
          <TopBar />

          <section className="booking-screen__content">
            <header className="booking-screen__header">
              <h1>Choose a service</h1>
              <p>What does your bike need?</p>
            </header>

            <div className="booking-screen__services">
              {services.map((item) => (
                <ServiceCard
                  description={item.description}
                  duration={item.duration}
                  key={item.title}
                  onClick={() => setSelectedService(item.title)}
                  price={item.price}
                  selected={selectedService === item.title}
                  title={item.title}
                />
              ))}
            </div>
          </section>

          <ActionBar label="Continue" onAction={() => setStep('slot')} />
        </>
      ) : step === 'slot' ? (
        <>
          <TopBar onBack={() => setStep('service')} step="Step 2 of 3" />

          <section className="booking-screen__content">
            <header className="booking-screen__header">
              <h1>Pick a drop-off time</h1>
              <p>{service.title}, about {service.duration.replace('min', 'minutes')}</p>
            </header>

            <div className="booking-screen__field">
              <p className="booking-screen__label">Day</p>
              <div className="booking-screen__slots booking-screen__days">
                {days.map((day) => (
                  <TimeSlot
                    className={`booking-screen__day booking-screen__day--${day.toLowerCase().replace(' ', '-')}`}
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    state={selectedDay === day ? 'selected' : 'default'}
                  >
                    {day}
                  </TimeSlot>
                ))}
              </div>
            </div>

            <div className="booking-screen__field">
              <p className="booking-screen__label">Drop-off time</p>
              <div className="booking-screen__slots booking-screen__times">
                {times.map((time) => (
                  <TimeSlot
                    className={`booking-screen__time booking-screen__time--${time.label.replace(':', '-')}`}
                    key={time.label}
                    onClick={() => setSelectedTime(time.label)}
                    state={time.disabled ? 'disabled' : selectedTime === time.label ? 'selected' : 'default'}
                  >
                    {time.label}
                  </TimeSlot>
                ))}
              </div>
            </div>

            <p className="booking-screen__note">
              Ready the same day. We text you when your bike is done.
            </p>
          </section>

          <ActionBar label="Continue" onAction={() => setStep('confirm')} />
        </>
      ) : (
        <>
          <TopBar onBack={() => setStep('slot')} step="Step 3 of 3" />

          <section className="booking-screen__content">
            <header className="booking-screen__header">
              <h1>Check and confirm</h1>
            </header>

            <div className="booking-screen__summary">
              <SummaryRow label="Service" value={service.title} />
              <SummaryRow label="Drop-off" value={`${selectedDay} at ${selectedTime}`} />
              <SummaryRow label="Price" value={`${service.price}, pay at pick-up`} />
            </div>

            <Input className="booking-screen__input" />
            <Input
              className="booking-screen__input"
              label="Phone number"
              placeholder="+32 470 12 34 56"
            />

            <p className="booking-screen__note">
              We text you when your bike is ready. You pay when you pick it up.
            </p>
          </section>

          <ActionBar label="Confirm booking" />
        </>
      )}
    </main>
  )
}

export default App
