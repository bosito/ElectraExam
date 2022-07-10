import { dateFnsLocalizer, Event, DateLocalizer, Messages } from 'react-big-calendar';
import esES from 'date-fns/locale/es'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';

export interface ResourceInterface {
    notes: string
};

const locales = {
    'es': esES,
};

const localizer: DateLocalizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events: Event[] = [
    {
        title: 'Cumple Test',
        start: new Date(),
        end: addHours(new Date(), 2),
        resource: {
            notes: 'conprar pastel',
        }
    }
];

const messages: Messages = {
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