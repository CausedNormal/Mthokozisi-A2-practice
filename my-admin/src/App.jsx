import { Admin, Resource, ListGuesser } from "react-admin"; // Took from src/admin/index.tsx from Marmalab
import { createTrailbaseProvider } from "./ra-trailbase"; // we typed it out ourselves
import {AuthorList} from "./Author.jsx";                    // After making Author File imprt it to App 

const TrailbaseURL = "https://special-adventure-g45wgj656g6j3v4gq-4000.app.github.dev/" // Took it from trailbase

const {dataProvider, authProvider} = await createTrailbaseProvider(TrailbaseURL)         // Typed ourselves function from React + put await before createTrailbase

const App = () => (                                                                     // Took from src/admin/index.tsx from Marmalab
  <Admin dataProvider={dataProvider}>                                                                                               
    <Resource name="Author" list={AuthorList} />                                  
  </Admin>
);                                                                                          // Took from src/admin/index.tsx from Marmalab // change ListGuesser in {} to AuthorList
// changed Resource name = "Author" list = {AuthorList}
export default App;                                                             // Took from src/admin/index.tsx from Marmalab
