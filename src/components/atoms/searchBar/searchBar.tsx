'use client';
import Style from './searchBar.module.css';
import { useLocationList } from '../../../hooks/useLocationList';
import LocationsList from '../locationsList/locationsList';

export default function SearchBar() {
    const { setQuery,query } = useLocationList()
    const onchange = (event: { value: string }) => {
        setQuery(event.value)
    }
  return (
    <div className={`flex h-[120px] gap-2 items-center flex-col w-full max-w-[600px] ${Style.searchBar} justify-center relative  text-white font-semibold rounded-lg py-2 px-5  glassMorh`}>
      <h2 className='w-full text-2xl'>Busque la ciudad que desea</h2>
      <form className='flex-col md:flex-row flex gap-2 items-stretch  md:items-center justify-between  w-full' >
        <input className='h-[52px] w-full focus:outline-0 focus:border-primary-700 bg-primary-400  border-2 rounded-lg border-primary-300 px-5 text-2xl' value={query} type="text" onChange={(e) => onchange({ value: e.target.value })} />
      </form>
      <LocationsList />
    </div>
  );
}