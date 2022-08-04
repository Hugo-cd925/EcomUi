import React from 'react';
import HttpHelper from '../../../ultil/HttpHelper';
import constants from '../../../ultil/Constants';

export async function fetchUsers(setUsers, setApiError){
    await HttpHelper(`${constants.User}`, 'GET')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(constants.API_ERROR);
    })
    .then((data) => {
        setUsers(data);
    })
    .catch(() => {
        setApiError(true);
    })
}

export async function fetchUserById(setUsers, id, setApiError){
    await HttpHelper(`${constants.USER_ENDPOINT}/${id}`, 'GET')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(constants.API_ERROR);
    })
    .then((data) => {
        setUsers(data);
    })
    .catch(() => {
        setApiError(true);
    })
}