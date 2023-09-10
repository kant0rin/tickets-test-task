import {expect, describe, it} from "vitest";
import {screen, render} from "@testing-library/react";
import {TICKET_CARD_TEST_IDS} from "./TicketCard.tsx";
import {TicketProps} from "./TicketCard.tsx";
import TicketCard from "./TicketCard.tsx";

const props: TicketProps = {
  "origin": "VVO",
  "origin_name": "Владивосток",
  "destination": "TLV",
  "destination_name": "Тель-Авив",
  "departure_date": "12.05.18",
  "departure_time": "16:20",
  "arrival_date": "12.05.18",
  "arrival_time": "22:10",
  "carrier": "TK",
  "stops": 3,
  "price": 12400,
  EUR: 117,
  USD: 100,
  error: null,
  currencyQuery: "RUB",
  img: '/src/assets/imgs/Turkish_Airlines_logo_2019_compact.svg'
}

describe ('ticket card tests', () => {
  it('should correctly show image, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.IMAGE)
    expect(container).toBeInTheDocument()
  });

  it('should correctly show departure time, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.DEPARTURE_TIME)
    expect(container).toHaveTextContent(props.departure_time)
  });

  it('should correctly show origin, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.ORIGIN)
    expect(container).toHaveTextContent(props.origin)
    expect(container).toHaveTextContent(props.origin_name)
  });

  it('should correctly show departure date, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.DEPARTURE_DATE)
    expect(container).toHaveTextContent('12 мая 2018 г,Сб')
  });

  it('should correctly show stops count, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.STOPS)
    expect(container).toHaveTextContent('3')
  });

  it('should correctly show arrival time, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.ARRIVAL_TIME)
    expect(container).toHaveTextContent(props.arrival_time)
  });

  it('should correctly show destination, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.DESTINATION)
    expect(container).toHaveTextContent(props.destination)
    expect(container).toHaveTextContent(props.destination_name)
  });

  it('should correctly show arrival date, when provided', () => {
    render(<TicketCard {...props}/>)
    const container = screen.getByTestId(TICKET_CARD_TEST_IDS.ARRIVAL_DATE)
    expect(container).toHaveTextContent('12 мая 2018 г,Сб')
  });


})
