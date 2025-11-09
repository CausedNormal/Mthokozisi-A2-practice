import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin"; // Took from src/admin/index.tsx from Marmalab
import { createTrailbaseProvider } from "./ra-trailbase"; // we typed it out ourselves
import {AuthorCreate, AuthorEdit, AuthorList, AuthorShow} from "./Author.jsx";                    // After making Author File imprt it to App , remember to import all of it.

// Remember put {AuthorCreate, AuthorEdit, AuthorList, AuthorShow } into here as you go

const TrailbaseURL = "https://special-adventure-g45wgj656g6j3v4gq-4000.app.github.dev/" // Took it from trailbase

const {dataProvider, authProvider} = await createTrailbaseProvider(TrailbaseURL)         // Typed ourselves function from React + put await before createTrailbase

const App = () => (                                                                     // Took from src/admin/index.tsx from Marmalab
  <Admin dataProvider={dataProvider}>                                                                                               
    <Resource name="Author" list={AuthorList} edit = {AuthorEdit} create = {AuthorCreate} show = {AuthorShow}/>                                  
  </Admin>
);                                                                                          // Took from src/admin/index.tsx from Marmalab // change ListGuesser in {} to AuthorList
// changed Resource name = "Author" list = {AuthorList}
// changed edit = {EditGuesser} -> edit = {AuthorEdit}
// put  create = {AuthorCreate}
// put show = {ShowGuesser} this will let us view all the information of a Profile, then go to website and insect then copy code to Authr.jsx
// change show = {ShowGuesser} -> 
// for next edit, put edit = {EditGuesser} -> then go back to website inspect and copy editguesser code
export default App;                                                             // Took from src/admin/index.tsx from Marmalab
