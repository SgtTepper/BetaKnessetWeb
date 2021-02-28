import React from 'react'
import FullCalendar from '@fullcalendar/react'
import heLocale from '@fullcalendar/core/locales/he'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

import { ScrollPage } from '../../components/ScrollableView'
import './index.css'
import config from '../../config'

class CalendarView extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: [],
    loading: 0,
  }

  render() {
    return (
      <div className='calendar demo-app'>
        {/*this.renderSidebar()*/}
        <div className='demo-app-main' style={{position: 'relative'}}>        
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'listWeek,dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='listWeek'
            theme='litera'
            locale={heLocale}
            editable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={Object.values(this.state.currentEvents)}
            datesSet={this.handleDates.bind(this)}
            eventContent={Event} // custom render function
            eventClick={this.handleEventClick}
            select={console.log}
          />
        </div>
        <div style={{
          position: 'absolute', 
          textAlign: 'center', 
          fontSize: '20pt',
          width: '100%', 
          backgroundColor: '#0011aa', 
          color: 'white', 
          padding: '.1em 0',
          opacity: this.state.loading > 0 ? .3 : 0,
          zIndex: 10,
          bottom: 0,
          transition: 'opacity .1s ease-in-out',
        }}>טוען...</div>
      </div>
    )
  }
            //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleEventClick = (selectInfo) => {
		console.log(selectInfo)
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }
  handleDates(fetchInfo) {
    this.setState(s => ({loading: s.loading + 1}))
    // TODO copy from https://fullcalendar.io/docs/events-function
    fetch(`${config.server}/KnessetSchedule?StartDate=${fetchInfo.start.toISOString()}&FinishDate=${fetchInfo.end.toISOString()}`, fetchInfo)
    .then(res => res.json())
    .then(data => {
      console.log("Rows:", data.length)

      const events = {}
      for (const r of data) {
        events[r.result.sessionID] = {
          id: r.result.sessionID,
          title: r.result.name,
          start: r.result.startDate,
          end: r.result.finishDate,
          items: r.items,
          color: r.result.sessionType === 1 ? 'purple' : null, // Should be done in render clause
          ...r.result
        }
      }
      this.setState(s => ({currentEvents: Object.assign(s.currentEvents, events)}))
    })
    .finally(() => this.setState(s => ({loading: s.loading - 1})))
  }

}

function Event(eventInfo) {
  const {event} = eventInfo
  const {extendedProps} = event

  switch (extendedProps.sessionType)
  {
    case 1:
      return <CommitteeEvent event={event} {...extendedProps} />;
    case 2:
      return <PlenumEvent event={event} {...extendedProps} />;
    default:
      return <></>;
  }
}

function CommitteeEvent({event, items, filePath}) {
  return (
    <div onClick={() => window.open(`https://docs.google.com/gview?url=${filePath}`, '_blank')}>
      {/*<b>{eventInfo.timeText}</b>*/}
      {/* TODO - <i>{eventInfo.event.title}</i> (need to parse it nicely, maybe in server)*/}
      <b>{event.title}</b>
      <div style={{whiteSpace: 'normal'}}><i>
        {truncateName(items.slice(0, 5).map(i => i.itemName).join(", "), 100)} - {' '}
        {items.length === 1 ? 'נושא אחד' : `${items.length} נושאים`}
      </i></div>
    </div>
  )
}

function PlenumEvent({event, items, filePath}) {
  return (
    <div onClick={() => window.open(`https://docs.google.com/viewer?url=${filePath}`, '_blank')}>
      {/*<b>{eventInfo.timeText}</b>*/}
      {/* TODO - <i>{eventInfo.event.title}</i> (need to parse it nicely, maybe in server)*/}
      <b>ישיבת מליאה</b>
      <div style={{whiteSpace: 'normal'}}><i>
        {truncateName(items.slice(0, 5).map(i => i.itemName).join(", "), 100)} - {' '}
        {items.length === 1 ? 'נושא אחד' : `${items.length} נושאים`}
      </i></div>
    </div>
  )
}

function renderSidebarEvent(event) {
  return null
  /*
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <ul>
        {event.items.map(i => 
          <li key={i.itemID}>{truncateName(i.itemName, 24)}</li>
        )}
      </ul>
    </li>
  )
  */
}

function truncateName(n, l) {
  if (n.length < l)
    return n
  return n.substring(0, l) + "..."
}

//const formatMonth = (s,e) => `${s.getYear()}-${s.getMonth()}/${s.getYear()}-${s.getMonth()}`



export default React.memo(function Calendar() {
  return (
    <ScrollPage id='calendar' limit>
      <div style={{position: 'relative', width: '100%'}}>
        <CalendarView />
      </div>
    </ScrollPage>
  )
})