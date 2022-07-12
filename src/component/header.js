import React, { useEffect, useState } from 'react'
import './header.css'
import { useDispatch } from 'react-redux'
import { addMember } from '../redux/member'

export default function Header() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const totArr = e.target[0].value.split(',')
        const numArr = totArr.map((val) => Number(val))
        // console.log(`nmArr`, typeof numArr, numArr)
        setData([...numArr])
    }

    useEffect(() => {
        data.map((val) => console.log(Number(val) + typeof val + `\n`))
        if (data && data.length > 0) {
            dispatch(addMember({ data }))
        }
    }, [data])

    return (
        <div className="header">
            <div className="header_1">
                <form type="submit" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" pattern="^[0-9a-zA-z]+(,[0-9a-zA-z]+){0,11}$" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
