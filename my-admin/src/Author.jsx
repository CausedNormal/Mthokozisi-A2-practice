import { DataTable, DateField, List, Create } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin'; 
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';
// made this new file and copied code from website my-admin into here
// take out all repeating imports otherwise errors like: DateField

// took from inspect website, this will disapper from website after it is put in github
// took out ID <DataTable.Col source="id" />
export const AuthorList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="fullName" />
            <DataTable.Col source="dob">
                <DateField source="dob" />
            </DataTable.Col>
            <DataTable.Col source="authorBiography" />
            <DataTable.NumberCol source="profileID" />
        </DataTable>
    </List>
);


// took from inspect website, don't touch after you copied it.
// took out  <TextInput source="id" /> since fetch error,, can leave it in edit but not in create
export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="fullName" />
            <DateInput source="dob" />
            <TextInput source="authorBiography" />
            <NumberInput source="profileID" />
        </SimpleForm>
    </Edit>
);

// have to take out <TextInput source="id" /> from AuthorCreate because will gve errors
// copy this code from edit and just change <Edit> and </Edit> -> <Create> and </Create>
// LEAVE THE ID out for Create because it autmaticaly increments
export const AuthorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="fullName" />
            <DateInput source="dob" />
            <TextInput source="authorBiography" />
            <NumberInput source="profileID" />
        </SimpleForm>
    </Create>
);


// can take out id from show incase  <TextField source="id" />, asked not to show user certain fields
// click on the website so that we can inspect
export const AuthorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="fullName" />
            <DateField source="dob" />
            <TextField source="authorBiography" />
            <NumberField source="profileID" />
        </SimpleShowLayout>
    </Show>
);