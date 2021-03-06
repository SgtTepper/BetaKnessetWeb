import React from 'react'
import FullCalendar from '@fullcalendar/react'
import heLocale from '@fullcalendar/core/locales/he'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import Typography from '@material-ui/core/Typography'

import { ScrollPage } from '../../components/ScrollableView'
import './index.css'
import config from '../../config'
import { useBigScreen } from '../../utils'

const CalendarComponent = React.memo(function ({loading, ...props}) {
  return (
    <div className='calendar demo-app'>
      <div className='demo-app-main' style={{position: 'relative'}}>        
        <FullCalendar
          initialView='listWeek'
          locale={heLocale}
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          eventContent={Event} // custom render function
          {...props}
        />
      </div>
      <Typography style={{
        position: 'absolute', 
        textAlign: 'center', 
        fontSize: '20pt',
        width: '100%', 
        backgroundColor: '#0048dd', 
        color: 'white', 
        padding: '.3em 0',
        opacity: loading > 0 ? 1 : 0,
        zIndex: 10,
        bottom: 0,
        transition: 'opacity .4s ease-in-out',
      }}>טוען...</Typography>
    </div>
  )
})

class CalendarView extends React.PureComponent {
  state = {
    currentEvents: {},
    loading: 0,
  }

  render() {
    return (
      <CalendarComponent 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'listWeek,dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={Object.values(this.state.currentEvents)}
        datesSet={this.handleDates.bind(this)}
        eventClick={this.handleEventClick}
        loading={this.state.loading}
      />
    )
  }

  handleEventClick = (selectInfo) => {
    console.debug(selectInfo)
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

class MobileCalendarView extends CalendarView {
  render() {
    return (
      <CalendarComponent 
      plugins={[listPlugin]}
      headerToolbar={{
        left: '',
        center: 'title',
        right: ''
      }}
      footerToolbar={{
        left: 'prev,next',
        center: '',
        right: 'today'
      }}
      events={Object.values(this.state.currentEvents)}
      datesSet={this.handleDates.bind(this)}
      eventClick={this.handleEventClick}
      loading={this.state.loading}
      />
    )
  }
}

function truncateName(n, l) {
  if (n.length < l)
    return n
  return n.substring(0, l) + "..."
}

export default React.memo(function Calendar() {
  const isBigScreen = useBigScreen()
  return (
    <ScrollPage id='calendar' limit>
      <div style={{position: 'relative', width: '100%'}}>
        <Typography variant="h4" component="h2"
          style={{textAlign: 'center', margin: '.3em 0'}}>
          לו״ז הכנסת
        </Typography>
        {isBigScreen
          ? <CalendarView />
          : <MobileCalendarView />
        }
      </div>
    </ScrollPage>
  )
})