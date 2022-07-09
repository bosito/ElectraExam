import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Calendar } from 'react-big-calendar';
import { events, localizer, messages } from '../../settings/calendarPage';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {
  return (
    <div className='' >
      <Navbar title='Calendario' />
      <Calendar
        culture='es'
        messages={messages}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
      />
    </div>
  )
}
