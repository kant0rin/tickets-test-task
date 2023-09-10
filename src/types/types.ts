export interface CurrencyList  {
  data: {
    Valute: {
      USD: {
        Value: number
      },
      EUR: {
        Value: number
      }
    }
  }
}

export type CarrierType = 'S7' | 'TK' | 'SU' | 'BA'
export interface ITicket {
  origin: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_date: string,
  departure_time: string,
  arrival_date: string,
  arrival_time: string,
  carrier: string,
  stops: number,
  price: number}

export interface TicketsList {
  tickets: ITicket[]
}
