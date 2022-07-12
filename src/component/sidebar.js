import React from 'react'
import './sidebar.css'
import { useSelector } from 'react-redux'

export default function Sidebar() {
    const userList = useSelector((state) => state.member.value)
    const newValue = userList[userList.length - 1]?.data

    console.log('test', typeof newValue)
    return (
        <div className="sidebar">
            <div className="sidebar_1">
                {newValue &&
                    newValue.map((val) => {
                        return (
                            <ul style={{ listStyleType: 'none' }}>
                                <li>{val}</li>
                            </ul>
                        )
                    })}
                {console.log(`this is the sidebar data`, newValue)}
            </div>
        </div>
    )
}
