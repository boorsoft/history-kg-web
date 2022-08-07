import React from "react";
import {
    Admin,
    DataProvider,
    fetchUtils,
    Options,
    Resource,
} from "react-admin";
import restProvider from "ra-data-simple-rest";
import axios from "axios";

import { API_URL } from "../../constants/constants";

import BooksList from "./components/Book/BooksList";
import BookCreate from "./components/Book/BookCreate";
import BookEdit from "./components/Book/BookEdit";
import PersonsList from "./components/Person/PersonsList";
import PersonCreate from "./components/Person/PersonCreate";
import PersonEdit from "./components/Person/PersonEdit";
import authProvider from "./authProvider";
import QuizList from "./components/Quiz/QuizList";
import QuizCreate from "./components/Quiz/QuizCreate";
import QuizEdit from "./components/Quiz/QuizEdit";
import { useParams } from "react-router-dom";

const httpClient = (url: string, options: Options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        });
    }

    return fetchUtils.fetchJson(url, options);
};

const AdminPage = () => {
    const pageParams = useParams();

    const dataProvider: DataProvider = {
        ...restProvider(API_URL, httpClient),
        delete: (resource, params) =>
            axios({
                method: "DELETE",
                url: `${API_URL}/${pageParams["*"]}/${params.id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        create: (resource, params) => {

            if (resource !== "books" || !params.data.file) {                
                return dataProvider.create(resource, params);
            }
            
            let formData = new FormData();

            formData.append('title', params.data.title)
            formData.append("file", params.data.file.rawFile);

            return axios({
                method: 'POST',
                data: formData,
                url: `${API_URL}/${resource}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        },
    };

    return (
        <Admin
            basename="/admin"
            authProvider={authProvider}
            dataProvider={dataProvider}
            requireAuth
        >
            <Resource
                name="books"
                list={BooksList}
                create={BookCreate}
                edit={BookEdit}
            />
            <Resource
                name="persons"
                list={PersonsList}
                create={PersonCreate}
                edit={PersonEdit}
            />
            <Resource
                name="quiz"
                list={QuizList}
                create={QuizCreate}
                edit={QuizEdit}
            />
        </Admin>
    );
};

export default AdminPage;
