import { useState } from 'react'
import { Hero , Footer , CustumerReviews,PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality } from './sections';
import Nav from './components/Nav';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      {/* <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustumerReviews/>
      </section> */}
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-y pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
