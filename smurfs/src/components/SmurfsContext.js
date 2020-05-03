import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const SmurfsContext = createContext()

export const SmurfsProvider = props => {

    const [smurfs, setSmurfs] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                setSmurfs(res.data)
            })
    }, [])

    return (
        <SmurfsContext.Provider value={[smurfs, setSmurfs]}>
            {props.children}
        </SmurfsContext.Provider>
    )
}