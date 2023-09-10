import {useEffect, useState} from "react";
import axios from "axios";
import tickets from '../assets/tickets.json'
import {CurrencyList, ITicket} from "../types/types.ts";
import TicketCard from "../cards/TicketCard/TicketCard.tsx";
import aeroflot from '../assets/imgs/Aeroflot_Russian_Airlines_logo_(ru).svg'
import britishAirways from '../assets/imgs/British_Airways-Logo.wine.svg'
import s7 from '../assets/imgs/S7_new_logo.svg'
import turkishAirlines from '../assets/imgs/Turkish_Airlines_logo_2019_compact.svg'
import TicketsFilter from "./TicketsFilter.tsx";



const TicketsList = () => {

  const [filterQuery, setFilterQuery] = useState<(number | string)[]>(['all'])
  const [currencyQuery, setCurrencyQuery] = useState<'RUB' | 'USD' | 'EUR'>('RUB')
  const [currencyList, setCurrencyList] = useState<{USD: number, EUR: number}>({USD: 0, EUR: 0})
  const [currencyListError, setCurrencyListError] = useState<string | null>(null)
  const [refactoredTicketsList, setRefactoredTicketList] = useState<ITicket[]>(tickets.tickets)

  useEffect(() => {
    if (filterQuery.indexOf('all') !== -1) {
      setRefactoredTicketList([...tickets.tickets])
    } else {
      setRefactoredTicketList([...tickets.tickets.filter(e => filterQuery.indexOf(e.stops) !== -1)])
    }
  }, [filterQuery]);


  const ticketImages = {
    SU: aeroflot,
    BA: britishAirways,
    S7: s7,
    TK: turkishAirlines
  }

  const fetchCurrencyList = async () => {
    try {
      const response: CurrencyList = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      setCurrencyList({USD: response.data.Valute.USD.Value, EUR: response.data.Valute.EUR.Value})
    } catch (e) {
      setCurrencyListError('Ошибка загрузки данных')
    }

  }


  useEffect(() => {
    fetchCurrencyList()
  }, []);

  return (
    <div className='w-full justify-center flex px-10 pb-10'>
      <div className='max-w-[1000px] flex gap-8 flex-col lg:flex-row lg:items-start items-center'>
        <TicketsFilter
          maxStops={3}
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          currencyQuery={currencyQuery}
          setCurrencyQuery={setCurrencyQuery}
        />
        <div className='lg:min-w-[600px] min-w-[320px] w-full flex flex-col gap-4'>
          {
            refactoredTicketsList.map((e: ITicket, index) => {
              return (
                <TicketCard
                  {...e}
                  img={ticketImages[e.carrier as keyof typeof ticketImages]}
                  currencyQuery={currencyQuery}
                  error={currencyListError}
                  EUR={Math.ceil(e.price / currencyList.EUR)}
                  USD={Math.ceil(e.price / currencyList.USD)} key={index}

                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default TicketsList;
