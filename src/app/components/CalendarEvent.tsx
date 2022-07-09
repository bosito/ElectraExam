import React from 'react';
import { Calendar, EventProps } from 'react-big-calendar';

interface Props extends EventProps {

}

export default function CalendarEvent(props:Props) {
    const { event } = props;
    const { title } = event;
    console.log(props)
  return (
    <div>
        <strong>
            {title}
        </strong>
    </div>
  )
}
