import classNames from 'classnames'
import React from "react";
import MyCheckBox from "./ui/MyCheckBox/MyCheckBox.tsx";

interface TicketsFilterProps  {
  currencyQuery: 'RUB' | 'USD' | 'EUR'
  setCurrencyQuery: (e: 'RUB' | 'USD' | 'EUR') => void
  filterQuery: (number | string)[]
  setFilterQuery: (e: (number | string)[]) => void
  maxStops: number
}

const TicketsFilter: React.FC<TicketsFilterProps> = ({currencyQuery, setCurrencyQuery, filterQuery, setFilterQuery, maxStops}) => {

  return (
    <div className='bg-white rounded-md shadow-md h-max flex flex-col lg:justify-start justify-center lg:items-start items-center sm:w-[400px] w-[320px] pb-4'>
      <h2 className='mb-4 font-semibold px-4 pt-4'>Валюта</h2>
      <div className='px-4 flex w-full justify-center mb-8'>
        <button
          className={
            classNames('py-3 px-8 border-black border-opacity-10 ' +
            'border rounded-md duration-300 ',
            {
              'bg-blue-500 text-white hover:text-blue-300': currencyQuery === 'RUB',
              'text-blue-500 bg-white hover:bg-blue-100 hover:bg-opacity-30 hover:border-blue-300': currencyQuery !== 'RUB'
            }
            )}
          onClick={() => setCurrencyQuery('RUB')}
        >
          RUB
        </button>
        <button
          className={
            classNames('py-3 px-8 border-black border-opacity-10 ' +
              'border rounded-md duration-300 ',
              {
                'bg-blue-500 text-white hover:text-blue-300': currencyQuery === 'USD',
                'text-blue-500 bg-white hover:bg-blue-100 hover:bg-opacity-30 hover:border-blue-300': currencyQuery !== 'USD'
              }
            )}
          onClick={() => setCurrencyQuery('USD')}
        >
          USD
        </button>
        <button
          className={
            classNames('py-3 px-8 border-black border-opacity-10 ' +
              'border rounded-md duration-300 ',
              {
                'bg-blue-500 text-white hover:text-blue-300 ': currencyQuery === 'EUR',
                'text-blue-500 bg-white hover:bg-blue-100 hover:bg-opacity-30 hover:border-blue-300': currencyQuery !== 'EUR'
              }
            )}
          onClick={() => setCurrencyQuery('EUR')}
        >
          EUR
        </button>
      </div>
      <h2 className='mb-4 px-4 font-semibold'>Количество пересадок</h2>
      <MyCheckBox filterQuery={filterQuery} labelText='Все' id='all' setFilterQuery={setFilterQuery} value={'all'}/>
      {
        Array(maxStops+1).fill(0).map((value, index) => {
          if (index === 0) {
            return <MyCheckBox key={index} filterQuery={filterQuery} labelText={'Без пересадок'} id={index.toString()} setFilterQuery={setFilterQuery} value={index}/>
          }
          if (index === 1) {
            return  <MyCheckBox key={index} filterQuery={filterQuery} labelText={index + ' пересадка'} id={index.toString()} setFilterQuery={setFilterQuery} value={index}/>
          } else return <MyCheckBox key={index} filterQuery={filterQuery} labelText={index + ' пересадки'} id={index.toString()} setFilterQuery={setFilterQuery} value={index}/>
        })
      }
    </div>
  );
};

export default TicketsFilter;
