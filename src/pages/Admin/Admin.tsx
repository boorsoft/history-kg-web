import React from "react";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import { API_URL } from "../../constants/constants";

import ParagraphsList from './components/Paragraph/ParagraphsList';
import ParagraphCreate from './components/Paragraph/ParagraphCreate';
import ParagraphEdit from './components/Paragraph/ParagraphEdit';
import PersonsList from "./components/Person/PersonsList";
import PersonCreate from "./components/Person/PersonCreate";
import PersonEdit from "./components/Person/PersonEdit";
import authProvider from "./authProvider";

const AdminPage = () => {
    return (
        <Admin basename="/admin" authProvider={authProvider} dataProvider={restProvider(API_URL)} requireAuth>
            <Resource name="paragraphs" list={ParagraphsList} create={ParagraphCreate} edit={ParagraphEdit} />
            <Resource name="persons" list={PersonsList} create={PersonCreate} edit={PersonEdit} />
        </Admin>
    )
}

export default AdminPage;