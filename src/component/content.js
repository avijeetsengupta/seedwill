import React, { useEffect, useState } from 'react'
import './content.css'
import { useSelector } from 'react-redux'

export default function Contant() {
    let userList = useSelector((state) => state.member.value)
    const [test, setTest] = useState([])
    let array = userList[userList.length - 1]?.data
    let newNumber = array?.slice().sort(function (a, b) {
        return a - b
    })
    useEffect(() => {
        if (newNumber) {
            setTest(newNumber)
        }
    }, [array])
    let sumOfTwoLargestNumberFromArray =
        test[test.length - 1] + test[test.length - 2]

    return (
        <div className="content">
            <div className="content_shown">
                <h3>
                    Maximum sum of two numbers {test[test.length - 1]} and{' '}
                    {test[test.length - 2]} is
                </h3>
                {!isNaN(sumOfTwoLargestNumberFromArray) &&
                    sumOfTwoLargestNumberFromArray}
            </div>
        </div>
    )
}
