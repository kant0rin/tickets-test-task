import React from "react";
import {ITicket} from "../../types/types.ts";
import SaleButton from "../../components/ui/SaleButton/SaleButton.tsx";
import {IoIosAirplane} from "react-icons/io";
export interface TicketProps extends ITicket{
  EUR: number ,
  USD: number,
  error: null | string
  currencyQuery: 'RUB' | 'USD' | 'EUR',
  img: string
}

export const TICKET_CARD_TEST_IDS = {
  DEPARTURE_TIME: 'ticket-card-dep-time',
  IMAGE: 'ticket-card-img',
  DEPARTURE_DATE: 'ticket-card-dep-date',
  ORIGIN: 'ticket-card-origin',
  ARRIVAL_TIME: 'ticket-card-arr-time',
  ARRIVAL_DATE: 'ticket-card-arr-date',
  DESTINATION: 'ticket-card-destination',
  STOPS: 'ticket-card-stops'
}

const TicketCard: React.FC<TicketProps> = ({...props}) => {

  const refactorDate = (date: string) => {
    const array = date.split('.')
    array[2] = '20' + array[2]
    for (let i = array.length; i < 0; i--){

    }

    const refactoredDate = new Date(array.reverse().join(',')).toLocaleString('ru', {
      day: 'numeric' ,
      month:'short' ,
      year: 'numeric',
      weekday: 'short'}).split(',').reverse()
    refactoredDate[1] = refactoredDate[1][0].toUpperCase() + refactoredDate[1][1]
    refactoredDate.join(' ,').replace('.', ' ')
    return refactoredDate.join(',').replace('.', '')
  }


  return (
    <div className='w-full flex items-center bg-white rounded-md shadow-md  sm:flex-row flex-col-reverse'>
      <div className='flex flex-col gap-4 sm:border-r border-r-0 border-black border-opacity-10 p-8 items-center justify-center'>
        <img data-testid={TICKET_CARD_TEST_IDS.IMAGE} src={props.img} alt="img" className='w-[200px] h-[40px]'/>
        {
          props.currencyQuery === 'RUB'
            ? <SaleButton price={props.price.toLocaleString() + ' RUB'} error={props.error} onClick={() => console.log('click')}/>
            : props.currencyQuery === 'USD'
              ? <SaleButton price={props.USD.toLocaleString() + ' USD'} error={props.error} onClick={() => console.log('click')}/>
              : <SaleButton price={props.EUR.toLocaleString() + ' EUR'} error={props.error} onClick={() => console.log('click')}/>
        }
      </div>
      <div className='p-8 flex items-center sm:gap-0 gap-8 justify-between  sm:flex-row flex-col w-full'>
        <div className='flex flex-col gap-1 sm:items-start items-center'>
          <span data-testid={TICKET_CARD_TEST_IDS.DEPARTURE_TIME} className='text-[2rem] leading-[1.25]'>{props.departure_time}</span>
          <span data-testid={TICKET_CARD_TEST_IDS.ORIGIN} className='font-semibold'>{props.origin}, {props.origin_name}</span>
          <span data-testid={TICKET_CARD_TEST_IDS.DEPARTURE_DATE} >{refactorDate(props.departure_date)}</span>
        </div>
        <div className='flex flex-col gap-2 sm:mb-12 mb-0'>
          <span className='flex w-full justify-center font-semibold text-black'>
            <span data-testid={TICKET_CARD_TEST_IDS.STOPS} className='mr-1'>{props.stops}</span>
            {
              props.stops > 1
                ? 'пересадки'
                : props.stops === 0
                  ? 'пересадок'
                  : 'пересадка'
            }

          </span>
          <div className='w-[7rem] h-[1px] bg-[#e5e7e7] relative'>
            <IoIosAirplane color='#e5e7e7' className='absolute top-[-7px] right-0'/>
          </div>
        </div>
        <div className='flex flex-col gap-1 sm:items-start items-center' >
          <span data-testid={TICKET_CARD_TEST_IDS.ARRIVAL_TIME} className='text-[2rem] leading-[1.25]'>{props.arrival_time}</span>
          <span data-testid={TICKET_CARD_TEST_IDS.DESTINATION} className='font-semibold'>{props.destination}, {props.destination_name}</span>
          <span data-testid={TICKET_CARD_TEST_IDS.ARRIVAL_DATE} >{refactorDate(props.arrival_date)}</span>
        </div>

      </div>


    </div>
  );
};

export default TicketCard;
