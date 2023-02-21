import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SeacrhComboBox() {
  return (
    <Autocomplete
      disablePortal
      options={bookKategory}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={ "Book kategory"} />}
    />
  );
}

// kategoryes
const bookKategory = [
  { label: 'Action and Adventure', value: 1994 },
  { label: 'Anthology', value: 1994 },
  { label: 'Classic', value: 1994 },
  { label: 'Comic and Graphic Novel', value: 1994 },
  { label: 'Crime and Detective', value: 1994 },
  { label: 'Drama', value: 1994 },
  { label: 'Fable', value: 1994 },
  { label: 'Fairy Tale', value: 1994 },
  { label: 'Fan-Fiction', value: 1994 },
  { label: 'Fantasy', value: 1994 },
  { label: 'Historical Fiction', value: 1994 },
  { label: 'Horror', value: 1994 },
  { label: 'Humor', value: 1994 },
  { label: 'Legend', value: 1994 },
  { label: 'Magical Realism', value: 1994 },
  { label: 'Mystery', value: 1994 },
  { label: 'Mythology', value: 1994 },
  { label: 'Realistic Fiction', value: 1994 },
  { label: 'Romance', value: 1994 },
  { label: 'Satire', value: 1994 },
  { label: 'Science Fiction (Sci-Fi)', value: 1994 },
  { label: 'Short Story', value: 1994 },
  { label: 'Suspense/Thriller', value: 1994 },

];
