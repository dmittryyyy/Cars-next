import { Hero, SearchFilter, Filter } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className="home__text-container">
              <h1 className='text-4xl font-extrabold'>
                  Каталог машин
              </h1>
              <p className="text-2xl">
                  Изучите автомобили, которые вам могут понравиться
              </p>
          </div>

          <div className="home__filters">
              <SearchFilter />

              <div className="home__filter-container">
                  <Filter title='fuel'/>
                  <Filter title='year'/>
              </div>
          </div>
      </div>
    </main>
  )
}
