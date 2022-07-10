import { useState, useEffect } from 'react';
import { Modal, Button, Form, InputGroup  } from 'react-bootstrap';
import Navbar from '../../components/Navbar';
import CalendarEvent from '../../components/CalendarEvent';
import { Calendar, Event, View as ViewInterface } from 'react-big-calendar';
import { events, localizer, messages } from '../../settings/calendarPage';
import DatePicker from 'react-datepicker';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {
  const [lastView, setLastView] = useState<ViewInterface | any>(localStorage.getItem('LAST_VIEW') || 'week');
  const [openModal, setOpenModal] = useState(false);

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

  const onDobleClick = (event: Event): void => {
    //console.log('event --->', event);
    setOpenModal(true)
  };

  const onSelect = (event: Event): void => {

  };

  const onViewChanged = (event: ViewInterface): void => {
    localStorage.setItem('LAST_VIEW', event);
    setLastView(event);
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

      <ModalComponent
        show={openModal}
        onHide={() => setOpenModal(false)}
      />

    </div>
  );
};


interface PropsModal {
  show: boolean;
  onHide: () => void;
}

function ModalComponent(props: PropsModal) {
  const { show, onHide } = props;

  const handleSubmit = () => {

  };

  return (
    <Modal show={show} onHide={onHide} animation={true} >
      <Modal.Header closeButton>
        <Modal.Title>Nuevo evento</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} >
        <Modal.Body>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Fecha y hora inicio</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha y hora"
              maxLength={30}
              required={true}
            //value={nombre}
            //onChange={(event) => setNombre(event.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Fecha y hora fin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fecha y hora"
              maxLength={30}
              required={true}
            //value={nombre}
            //onChange={(event) => setNombre(event.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Titulos y notas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titulos y notas"
              maxLength={30}
              required={true}
            //value={nombre}
            //onChange={(event) => setNombre(event.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
              placeholder="Descripción"
              maxLength={30}
              required={false}
            //value={nombre}
            //onChange={(event) => setNombre(event.currentTarget.value)}
            />
          </Form.Group>

        </Modal.Body>
      </Form>
      <Modal.Footer>
        <Button variant="primary" type='submit'>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
