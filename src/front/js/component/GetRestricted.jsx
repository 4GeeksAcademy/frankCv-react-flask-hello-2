import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext.js"

const GetRestricted = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {

    }, [store.userList])

    return (
        <div>
            <h1>GetRestricted</h1>
            <br />
            <button onClick={async () => await actions.restricted_list()}>Show Users</button>

            <ul>
                {store.userList ? store.userList.map(e => <li key={e.id}>email:    {e.email}   name:    {e.name}</li>) : <li></li>}
            </ul>
        </div>
    )
}

export default GetRestricted