import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [{
        id: null,
        author: null,
        description: null,
        bookname: null,
        imageSrc: null,
        category:null,
    }]
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook(state, action) {
            if(state.books[0].id!=null){
            state.books.push(action.payload);
            }else{
                state.books[0] = action.payload;
            }
        },
        removeBook(state){
            state.books = initialState.books;
        }
    },
})


export const { setBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;