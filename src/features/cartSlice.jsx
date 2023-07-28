import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)

      if (cartItem) {
        cartItem.amount += 1
      } else {
        state.cartItems = [...state.cartItems, payload]
      }
    },
    removeItem: (state, { payload }) => {
      const itemId = payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      const itemId = payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount += 1
    },
    decrease: (state, { payload }) => {
      const itemId = payload
      const cartItem = state.cartItems.find((item) => item.id === itemId)
      cartItem.amount -= 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})
export default cartSlice.reducer
export const { addToCart, increase, decrease, removeItem, calculateTotals } =
  cartSlice.actions
