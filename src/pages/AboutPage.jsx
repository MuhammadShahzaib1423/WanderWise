import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const VALUES = [
  {
    title: 'Travelled by us first',
    text: 'We never sell a journey we have not taken ourselves. Every itinerary is walked, sailed or climbed by a member of our team before it reaches you.',
  },
  {
    title: 'Local expertise',
    text: 'Our guides live where you travel. They know the quiet beaches, the family-run kitchens and the stories you will not find in a guidebook.',
  },
  {
    title: 'Honest pricing',
    text: 'One clear price, agreed up front. No hidden extras, no surprise supplements — and every booking is financially protected.',
  },
];

const STATS = [
  { value: '8', label: 'Signature destinations' },
  { value: '6', label: 'Fictional regions' },
  { value: '4.8', label: 'Average traveller rating' },
  { value: '12k+', label: 'Happy travellers' },
];

function AboutPage() {
  return (
    <div>
      {/* Hero band */}
      <section className="relative flex min-h-[46vh] items-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Coastal mountains at sunrise"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
              Our story
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-5xl font-semibold text-white">
              We plan journeys the way we take them ourselves
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink/80">
            WanderWise began in 2019 with a simple frustration: package holidays that felt
            packaged. We wanted journeys with room to breathe — itineraries built around places
            we loved, paced for people rather than timetables, and guided by locals who call
            those places home.
          </p>
          <p className="mt-5 leading-relaxed text-ink/70">
            Seven years on, that philosophy hasn&rsquo;t changed. Our travel designers still walk
            every trail and sail every bay before it appears in our collection. We keep the
            group sizes small, the hotels characterful and the schedules unhurried — because the
            best travel memories are rarely the ones you planned to the minute.
          </p>
          <p className="mt-5 leading-relaxed text-ink/70">
            Today we craft journeys to eight extraordinary destinations across six regions, each
            one refined year after year with feedback from the travellers who have been there.
            We&rsquo;d be delighted to plan yours.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-lagoon-900 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-5xl font-semibold text-sand-200">{s.value}</p>
              <p className="mt-2 text-sm text-sand-100/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
            What we stand for
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink">Our values</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lagoon-100 text-lagoon-800">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="font-display text-2xl italic text-ink/75">
            &ldquo;We travel not to escape life, but for life not to escape us.&rdquo;
          </p>
          <p className="mt-3 text-sm text-ink/55">— The WanderWise team</p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-lagoon-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

export default AboutPage;
