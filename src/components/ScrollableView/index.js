import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
    scrollView: {
      scrollSnapType: 'y mandatory',
      flexGrow: 1,
      overflowY: 'scroll',
      overflowX: 'hidden',
      position: 'relative',
      scrollBehavior: 'smooth',
    },

    scrollPage: {
        position: 'relative',
        scrollSnapAlign: 'start',
        minHeight: '100%', 
        overflowY: 'hidden', 
    },

    wrapper: {
      display: 'flex',
      placeContent: 'center',
      position: 'relative',
      width: '100%',
      minHeight: '100%',
      zIndex: 2,
    },

    limitScreen: {
        height: '100%', 
    }
  });


  export default function ScrollableView(props) {
    const { children } = props
    const classes = useStyles()
    return (
    <div className={classes.scrollView} {...props}>
        {children}
    </div>
    )
  }

  export function ScrollPage({ children, limit, parentStyle, ...props }) {
    const classes = useStyles()
    return (
    <div className={clsx(classes.scrollPage, limit && classes.limitScreen)} style={parentStyle}>
      <div className={clsx(classes.wrapper, limit && classes.limitScreen)} {...props}>
        {children}
      </div>
    </div>
    )
  }