"use client";

import React, { useState, useEffect } from 'react'

export default function Testing() {

    const [backendData, setBackendData] = useState([{}])

    const url = 'http://localhost:5000/api'

    /* const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setBackendData(data)
    } */

    /* useEffect(() => {
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }) */

    const lst = {'users': ['userone', 'usertwo', 'userthree']}

    return (
        <div>
            {/* {(typeof backendData.users === 'undefined') ? (
                <p></p>
            ) : (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )} */}
        </div>
    )
}