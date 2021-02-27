import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import PersonIcon from '@material-ui/icons/Person'
import CloseIcon from '@material-ui/icons/Close'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { usePersonID, useNavigate } from '../utils'

const PersonSearch = React.memo(function ({persons, style, variant}) {
    const navigate = useNavigate()
    const personID = usePersonID()
    const [inputValue, setInputValue] = useState(null)

    useEffect(() => {
        if (personID)
            setInputValue(getFullName(persons[personID]))
    }, [persons, personID])

    return (
    <div style={{width: '100%', zIndex: 20}}>
        <div style={{
            display: 'flex',
            width: '100%',
        }}>

        <Autocomplete
            options={Object.keys(persons)}
            getOptionLabel={id => getFullName(persons[id])}
            value={personID || null}
            onChange={(event, newValue) => {
              navigate({personID: newValue});
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            style={{flexGrow: 1}}
            renderInput={(params) => (
            <TextField
                {...params}
                variant={variant || "outlined"}
                placeholder="שם של ח&quot;כ"
                InputProps={{
                    ...params.InputProps,
                    style,
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonIcon style={style?.color && {fill: style?.color}} />
                        </InputAdornment>                
                    ),
                }}
            />)}
            forcePopupIcon={false}
            disableClearable={true}
            noOptionsText={'אין תוצאות'}
        />
        </div>
    </div>  
    )
})

const getFullName = (p) => {
    if (!p) return ''
    const {FirstName, LastName} = p
    return `${FirstName} ${LastName}`
}

export default PersonSearch