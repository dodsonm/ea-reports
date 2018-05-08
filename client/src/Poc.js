
import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput,
  LongTextInput, SimpleForm, TextInput, BooleanInput } from 'admin-on-rest';

export const PocList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="keyname" />
            <TextField source="email" />
            <TextField source="phNum" />
            <TextField source="risso" />
            <EditButton />
        </Datagrid>
    </List>
);

const PocTitle = ({ record }) => {
    return <span>Poc {record ? `"${record.keyname}"` : ''}</span>;
};

export const PocEdit = (props) => (
    <Edit keyname={<PocTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="keyname" />
            <TextInput source="email" />
            <TextInput source="phNum" />
            <BooleanInput source="risso" />
        </SimpleForm>
    </Edit>
);

export const PocCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="keyname" />
            <TextInput source="email" />
            <TextInput source="phNum" />
            <BooleanInput source="risso" />
        </SimpleForm>
    </Create>
);
