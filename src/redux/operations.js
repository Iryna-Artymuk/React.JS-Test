import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const axios_cities = axios.create({
  baseURL: GEO_API_URL,
});

// export const fetchCities = createAsyncThunk(
//   'cities/fetchAll',
//   async (lang, thunkAPI) => {
//     const options = {
//       method: 'GET',
//       url: GEO_API_URL,
//       params: { languageCode: `${lang}` },
//       headers: {
//         'X-RapidAPI-Key': '4ea37c4ae4mshfa64929f445d140p1dcd6ajsn1c5914b92c81',
//         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios_cities.request(options);
//       console.log( response.data );
//         //return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   // async (_, thunkAPI) => {
//   //   try {
//   //     const response = await axios_cities.get('/contacts');
//   //     console.log(' response.data: ', response.data);

//   //     return response.data;
//   //   } catch (error) {
//   //     return thunkAPI.rejectWithValue(error.message);
//   //   }
//   // }
// );
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, thunkAPI) => {
//     // console.log('newContact: ', newContact);
//     // newContact сюди приходить дані з форми

//     try {
//       const response = await axios_instance.post('/contacts', newContact);
//       response && toast.success('Successfully added ');
//       return response.data;
//     } catch (error) {
//       toast.error('This is an error!');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const changeContact = createAsyncThunk(
//   'contacts/changeContact',
//   async (newContactData, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const id = state.contacts.activeContactId;

//     try {
//       const response = await axios_instance.patch(
//         `/contacts/${id}`,
//         newContactData
//       );
//       response && toast.success('Successfully changed');
//       return response.data;
//     } catch (error) {
//       toast.error('This is an error!');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     console.log('id: ', id);

//     try {
//       const response = await axios_instance.delete(`/contacts/${id}`);

//       response && toast.success('Successfully removed ');
//       return response.data;
//     } catch (error) {
//       toast.error('This is an error!');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
