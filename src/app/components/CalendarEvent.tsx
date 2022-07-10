import React from 'react';
import { EventProps } from 'react-big-calendar';
import { ResourceInterface } from '../settings/calendarPage';

interface Props extends EventProps { };

export default function CalendarEvent(props: Props) {
    const { event } = props;
    const { title, resource } = event;
    const { notes }: ResourceInterface = resource;

    return (
        <div>
            <strong>
                {title}
            </strong>

            <span>
                {notes}
            </span>
        </div>
    )
}
