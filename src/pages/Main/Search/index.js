import React from 'react'
import Bubble from './Bubble'
import Histogram from './Histogram'
import { ScrollPage } from '../../../components/ScrollableView'
import { makeStyles } from '@material-ui/core/styles'
import QuotesSearch from '../../../components/QuotesSearch'

const useStyles = makeStyles({
    root: {
        maxWidth: '850px', 
        height: '100%', 
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        marginTop: '1em',
        placeContent: 'flex-start',
        zIndex: 2,
    },
})


const Search = React.memo(function Search() {
    const classes = useStyles()

    return (
        <ScrollPage limit id='top'>
            <div className={classes.root}>
                <QuotesSearch />
                <Bubble />
            </div>
            <Histogram />
        </ScrollPage>
    )
})

export default Search