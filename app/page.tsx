import { Hero, SearchFilter, Filter, CarCard } from '@/components';

import { fetchCars } from '@/utils';

import { yearsOfProduction, fuels } from '@/constants';

export default async function Home({ searchParams }) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        fuel: searchParams.fuel || '',
        limit: searchParams.limit || 10,
        year: searchParams.year || 2023,
    });

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="overflow-hidden">
            <Hero/>

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
                    <SearchFilter/>

                    <div className="home__filter-container">
                        <Filter title='fuel' options={fuels} />
                        <Filter title='year' options={yearsOfProduction} />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((car) => (
                                <CarCard
                                    car={car}
                                />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className='home__error-container'>
                        <h2 className="text-black text-xl font-bold">
                            Нет результатов
                        </h2>
                        <p>
                            {allCars?.message}
                        </p>
                    </div>
                )}

            </div>
        </main>
    )
}
