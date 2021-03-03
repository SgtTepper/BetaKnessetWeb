import React from 'react'
import Bubble from './Bubble'
import Histogram from './Histogram'
import { ScrollPage } from '../../../components/ScrollableView'
import { makeStyles } from '@material-ui/core/styles'
import QuotesSearch from '../../../components/QuotesSearch'

const useStyles = makeStyles({
    root: {
        maxWidth: '850px', 
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        placeContent: 'flex-start',
    },
})


const Search = React.memo(function Search() {
    const classes = useStyles()

    return (
        <ScrollPage limit id='top'>
            <div className={classes.root}>
                <div style={{margin: '.5em 1em'}}>
                    <QuotesSearch placeholder="מה מעניין אותך?" />
                </div>
                <Bubble />
            </div>
            <Histogram />
        </ScrollPage>
    )
})

export default Search