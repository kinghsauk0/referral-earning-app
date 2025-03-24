import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
  
export const fetchRegister = createAsyncThunk("fetchRegister", async() => {
    const data = await fetch('')
    return data.json
}) 

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        isLoading: false,
        data: null,
        error: false,    
      },
      extraReducers: (builder) => {
        builder.addCase(fetchRegister.pending, (state,action) => {
            state.isLoading = true
        })
        builder.addCase(fetchRegister.fulfilled, (state,action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchRegister.rejected, (state,action) => {
            state.error = true
            
        })
      }
}) 

export default registerSlice;