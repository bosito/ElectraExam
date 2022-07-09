import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import CalendarEvent from '../../components/CalendarEvent';
import { Calendar, Event, View as ViewInterface } from 'react-big-calendar';
import { events, localizer, messages } from '../../settings/calendarPage';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {
  const [lastView, setLastView] = useState<ViewInterface | any>(localStorage.getItem('LAST_VIEW') || 'week');

  useEffect(() => {

  }, []);
  
  const handleEventPropGetter = (event: Event, start: Date, end: Date, isSelected: boolean) => {
    
    return {
      className: '',
      style: {
        backgroundColor: 'red',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white'
      }
    };
  };

  const onDobleClick = (event: Event) => {
    console.log('event --->', event);
  };

  const onSelect = (event: Event) => {
    console.log('select --->', event);
  };

  const onViewChanged = (event: ViewInterface) => {
    console.log('change --->', event);
  };

  return (
    <div className='' >
      <Navbar title='Calendario' />
      <Calendar
        culture='es'
        messages={messages}
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
        eventPropGetter={handleEventPropGetter}
        components={{ 
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
    </div>
  );
};
