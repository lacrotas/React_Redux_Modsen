import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SeacrhComboBox(props) {
  return (
    <Autocomplete
      disablePortal
      options={ (props.isBookName == 1)? bookName: bookKategory}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={(props.isBookName==1)?"Book name":" Book kategory"} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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
const bookName = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];