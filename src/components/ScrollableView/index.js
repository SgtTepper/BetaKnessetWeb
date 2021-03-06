import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { isSafari } from "react-device-detect"
import { useBigScreen, useWindowSize } from '../../utils'

const useStyles = makeStyles(theme => ({
    scrollView: {
      scrollSnapType: !isSafari ? 'y mandatory' : 'none',
      WebkitOverflowScrolling: 'touch',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative',
      scrollBehavior: 'smooth',
      [theme.breakpoints.down('sm')]: {
        scrollBehavior: 'auto',
      },
    },

    scrollPage: {
        display: 'flex',
        flexDirection: 'column',
        placeContent: 'stretch',
        position: 'relative',
        scrollSnapAlign: 'start',
        overflowY: 'hidden', 
    },

    wrapper: {
      zIndex: 2,
      display: 'flex',
      placeContent: 'center',
      position: 'relative',
      width: '100%',
      overflowY: 'hidden',
    },

    limitScreen: {
        flex: "1 0 100%",
        placeSelf: 'stretch',
        overflowX: 'hidden',
    }
  }))


  export default function ScrollableView(props) {
    const { children } = props
    const classes = useStyles()
    return (
    <div className={classes.scrollView} {...props}>
        {children}
    </div>
    )
  }

  export function ScrollPage({ children, limit, parentStyle, style, className, ...props }) {
    const classes = useStyles()

    // FIXME this is a (VERY) ugly hack to make safari work (OP)
    const windowSize = useWindowSize()
    const isBigScreen = useBigScreen()
    const height = isSafari ? windowSize.height - (isBigScreen ? 60 : 50) : 'initial'

    return (
    <div className={clsx(classes.scrollPage, limit && classes.limitScreen)} style={parentStyle}>
      <div className={clsx(classes.wrapper, limit && classes.limitScreen, className)} 
        style={{...style, height}} {...props}>
        {children}
      </div>
    </div>
    )
  }