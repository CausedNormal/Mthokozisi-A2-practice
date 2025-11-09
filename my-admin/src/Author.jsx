import { DataTable, DateField, List } from 'react-admin';
// made this new file and copied code from website my-admin into here

// 
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