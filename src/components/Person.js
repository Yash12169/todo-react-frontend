import React from 'react'

export function Person({ data, show }) {

    if (show == false) {
        return null
    }
    else {
        return (
            <div>
                First name : {data.name}
                <br />
                Age : {data.age}
                <br />
                Gender : {data.gender}
            </div>
        )
    }
}
