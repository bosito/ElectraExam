import { dateFnsLocalizer } from 'react-big-calendar';
import esES from 'date-fns/locale/es'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';

const locales = {
    'es': esES,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [{
    title: 'Cumple Test',
    notes: 'conprar pastel',
    start: new Date(),
    end: addHours(new Date(), 2)
}]

const messages = {
    allDay: 'Todo el día',
    previous: '<',
    next: '>',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No hay eventos en este rango',
    showMore: (total: any) => `+ Ver más (${total})`
};

export { messages, events, localizer, locales }