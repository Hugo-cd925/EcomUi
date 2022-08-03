import React from 'react';
import HttpHelper from '../../../ultil/HttpHelper';
import constants from '../../../ultil/constants';

export async function fetchUsers(setUsers, setApiError){
    await HttpHelper(`${constants.User}`, 'GET')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(Constants.API_ERROR);
    })
    .then((data) => {
        setUsers(data);
    })
    .catch(() => {
        setApiError(true);
    })
}

export async function fetchUsers(setUsers, id, setApiError){
    await HttpHelper(`${constants.User/{id}}`, 'GET')
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

export async function fetchReservations(setReservations, setApiError) {
	await HttpHelper(`${Constants.RESERVATIONS_ENDPOINT}`, 'GET')
	  .then((response) => {
		if (response.ok) {
		  return response.json();
		}
		throw new Error(Constants.API_ERROR);
	  })
	  .then((data) => {
		setReservations(data);
	  })
	  .catch(() => {
		setApiError(true);
	  });
  }
