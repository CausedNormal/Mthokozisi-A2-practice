import { DataTable, List } from 'react-admin';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const GenreList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
        </DataTable>
    </List>
);

// Click on a person or edit button, copy code
//take out ID for fetch error
export const GenreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);


// take out <TextInput source="id" /> since React doe ths automatically 
export const GenreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);


// takeout ID  <TextField source="id" /> so no fetch error
export const GenreShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);