import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMailOpen: false,
    selectedMail: null
  },
  reducers: {
    selectMail: (state, action )=> {
      state.selectedMail = action.payload
    }, 
    openSendMail: state => {
      state.sendMailOpen = true
    },
    closeSendMail: state => { 
      state.sendMailOpen = false;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { openSendMail, closeSendMail, selectMail } = mailSlice.actions;

export const selectSendMailOpen = state => state.mail.sendMailOpen;
export const selectOpenMail = state => state.mail.selectedMail

export default mailSlice.reducer;
