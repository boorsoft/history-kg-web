import React from "react";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import { API_URL } from "../../constants/constants";
import ParagraphsList from './components/ParagraphsList';
import ParagraphCreate from './components/ParagraphCreate';
import ParagraphEdit from './components/ParagraphEdit';

const AdminPage = () => {
    return (
        <Admin basename="/admin" dataProvider={restProvider(API_URL)}>
            <Resource name="paragraphs" list={ParagraphsList} create={ParagraphCreate} edit={ParagraphEdit} />
        </Admin>
    )
}

export default AdminPage;