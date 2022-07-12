import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from './userInfo'
export const memberSlice = createSlice({
    name: 'member',
    initialState: { value: UserInfo },
    reducers: {
        addMember: (state, action) => {
            state.value.push(action.payload)
        },
    },
})
export const { addMember } = memberSlice.actions
export default memberSlice.reducer
