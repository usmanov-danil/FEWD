import React from 'react';
import {Table, Th, Title} from "./HomeStyles";
import axios from "axios";
import {INFO_URL} from "../common";
import {useEffect, useState} from "react";

const Data = ({data}) => {
    return (
        <Table>
            <thead>
            <tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>email</Th>
                <Th>avatar</Th>
                <Th>address</Th>
            </tr>
            </thead>
            {
                data.map((entry, key) => {
                    return (
                        <tbody>
                        <tr key={key}>
                            <td>{entry.id}</td>
                            <td>{entry.name}</td>
                            <td>{entry.email}</td>
                            <td><img alt={'avatar'} src={entry.avatar}/></td>
                            <td>{entry.address}</td>
                        </tr>
                        </tbody>
                    );
                })
            }
        </Table>
    )
}


export const Home = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('Authorization');

    useEffect(() => {
        axios.get(INFO_URL, {headers: {Authorization: token}}).then(response => {
            setData(response.data);
        })
    }, [token]);

    if (token && data) {
        return (
            <Data data={data}/>
        )
    } else {
        return (
            <Title>You need to login to see secret info!</Title>
        )
    }

}