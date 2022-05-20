import React from "react";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import { API_URL } from "../../constants/constants";
import ParagraphsList from './components/ParagraphsList';

const AdminPage = () => {
    return (
        <Admin basename="/admin" dataProvider={restProvider(API_URL)}>
            <Resource name="paragraphs" list={ParagraphsList} />
        </Admin>
    )
}

export default AdminPage;