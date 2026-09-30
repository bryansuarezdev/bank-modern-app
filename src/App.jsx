import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router'
import styles from './style'
import { navLinks } from './constants'
import { Navbar, Hero, Stats, Business, Billing, CardDeal,
  Testimonials, Clients, CTA, Footer } from './components'

const pageDetails = {
  '/': { title: 'Home' },
  '/features': { title: 'Features' },
  '/product': { title: 'Product' },
  '/clients': { title: 'Clients' },
}

const PageEffects = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = `${pageDetails[pathname]?.title ?? 'Page not found'} | Bank Modern App`
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const PageIntro = ({ eyebrow, title, description }) => (
  <header className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#17213a] px-8 py-14 sm:px-14 sm:py-20">
    <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-secondary/15 blur-[90px]" aria-hidden="true" />
    <div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-accent/15 blur-[90px]" aria-hidden="true" />
    <div className="relative z-10 max-w-[720px]">
      <p className="mb-4 font-poppins text-sm font-semibold uppercase tracking-[0.25em] text-secondary">{eyebrow}</p>
      <h1 className="font-poppins text-4xl font-semibold leading-tight text-white sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-[620px] font-poppins text-lg leading-8 text-dimWhite">{description}</p>
    </div>
  </header>
)

const exploreCards = [
  { path: '/features', number: '01', description: 'Discover the tools and benefits behind the experience.' },
  { path: '/product', number: '02', description: 'Take a closer look at billing and card features.' },
  { path: '/clients', number: '03', description: 'Browse client stories and partner examples.' },
]

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <section className="py-16" aria-labelledby="explore-heading">
      <p className="font-poppins text-sm font-semibold uppercase tracking-[0.25em] text-secondary">Explore</p>
      <h2 id="explore-heading" className={`${styles.heading2} mt-3`}>Find what matters to you.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {exploreCards.map((card) => (
          <Link key={card.path} to={card.path} className="group rounded-[22px] border border-white/10 bg-[#17213a] p-7 transition-colors hover:border-secondary/60 hover:bg-[#1d2b45] focus-visible:outline-2 focus-visible:outline-secondary">
            <span className="font-poppins text-sm font-semibold text-secondary">{card.number}</span>
            <h3 className="mt-7 font-poppins text-2xl font-semibold text-white group-hover:text-secondary">
              {navLinks.find((nav) => nav.path === card.path)?.title}
            </h3>
            <p className="mt-3 font-poppins leading-7 text-dimWhite">{card.description}</p>
            <span className="mt-7 inline-block font-poppins font-medium text-secondary" aria-hidden="true">Explore →</span>
          </Link>
        ))}
      </div>
    </section>
    <CTA />
  </>
)

const FeaturesPage = () => (
  <>
    <PageIntro eyebrow="Features" title="More control, less complexity." description="Explore the interface concepts for rewards, security and moving a balance in one place." />
    <Business />
  </>
)

const ProductPage = () => (
  <>
    <PageIntro eyebrow="Product" title="Payments made simple." description="A closer look at the billing and card sections of this banking interface concept." />
    <Billing />
    <CardDeal />
  </>
)

const ClientsPage = () => (
  <>
    <PageIntro eyebrow="Clients" title="Built around people." description="Example testimonials and partner marks used to illustrate the design. They are demonstration content." />
    <Testimonials />
    <Clients />
  </>
)

const NotFoundPage = () => (
  <div className="py-24 text-center">
    <h1 className="font-poppins text-5xl font-semibold text-white">Page not found</h1>
    <p className="mt-5 font-poppins text-dimWhite">The page you requested is not available.</p>
    <Link to="/" className="mt-8 inline-block rounded-xl bg-blue-gradient px-6 py-4 font-poppins font-medium text-primary">Back to home</Link>
  </div>
)

const App = () => (
  <div className="min-h-screen overflow-hidden bg-primary">
    <PageEffects />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}><Navbar /></div>
    </div>
    <main id="main-content" className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}><Footer /></div>
    </div>
  </div>
)

export default App
