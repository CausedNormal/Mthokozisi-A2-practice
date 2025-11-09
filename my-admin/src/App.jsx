import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin"; // Took from src/admin/index.tsx from Marmalab
import { createTrailbaseProvider } from "./ra-trailbase"; // we typed it out ourselves, this will make the website run
import {AuthorCreate, AuthorEdit, AuthorList, AuthorShow} from "./Author.jsx";                    // After making Author File imprt it to App , remember to import all of it.
import {GenreList, GenreEdit, GenreCreate, GenreShow} from "./Genre.jsx";
import { bwLightTheme, bwDarkTheme } from 'react-admin';  //import from Marmalab for css

// use ctrl + c to shut down anything in the terminal
// Remember put {AuthorCreate, AuthorEdit, AuthorList, AuthorShow } into here as you go
// Most of the time there is an error it will be a duplicate

const TrailbaseURL = "https://special-adventure-g45wgj656g6j3v4gq-4000.app.github.dev/" // Took it from trailbase

const {dataProvider, authProvider} = await createTrailbaseProvider(TrailbaseURL)         // Typed ourselves function from React + put await before createTrailbase

const App = () => (                                                                     // Took from src/admin/index.tsx from Marmalab
  <Admin dataProvider={dataProvider} authProvider = {authProvider} theme={bwLightTheme} darkTheme={bwDarkTheme}>                                                                                              
    <Resource name="Author" list={AuthorList} edit = {AuthorEdit} create = {AuthorCreate} show = {AuthorShow}/>   
    <Resource name="Genre" list={GenreList} edit = {GenreEdit} create = {GenreCreate} show={GenreShow}/>                               
  </Admin>
);                                                                                          // Took from src/admin/index.tsx from Marmalab // change ListGuesser in {} to AuthorList

//1. to make new jsx file
//2. type <Resource name="Genre" list={ListGuesser} /> , this should show in website as a tab
//3. go to website rght click -> inspect to console and copy list code
//4. Paste list code into Genre.jsx then in App.jsx import {GenreList} from "./Genre.jsx";
//5. Type <Resource name="Genre" list={GenreList} edit = {EditGuesser} /> in App.jsx
//6. go to website and click on a row/edit button, then inspect code then Copy the code from GenreEdit to make GenreCreate then import it to App.jsx and change 
//7. Add genreEdit to import {GenreList, GenreEdit} from "./Genre.jsx"; and change edit = {EditGuesser} -> edit = {GenreEdit}
//8. add show={ShowGuesser} as placeholder until we click on the website then inspect code to copy to Genre.jsx 
//9. For login page 



// changed Resource name = "Author" list = {AuthorList}
// changed edit = {EditGuesser} -> edit = {AuthorEdit}
// put  create = {AuthorCreate}
// put show = {ShowGuesser} this will let us view all the information of a Profile, then go to website and insect then copy code to Authr.jsx
// change show = {ShowGuesser} -> 
// for next edit, put edit = {EditGuesser} -> then go back to website inspect and copy editguesser code
export default App;                                                             // Took from src/admin/index.tsx from Marmalab
