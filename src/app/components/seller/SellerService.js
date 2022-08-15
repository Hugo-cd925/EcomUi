import React from 'react';
import HttpHelper from '../../../ultil/HttpHelper';
import constants from '../../../ultil/Constants';

/**
 * @name fetchUsers
 * @descrption Gets all users
 * @param {*} setUsers 
 * @param {*} setApiError 
 */
export async function fetchUsers(setUsers, setApiError) {
    await HttpHelper(`${constants.USER_ENDPOINT}`, 'GET')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            
        })
        .then((data) => {
            setUsers(data);
        })
        .catch(() => {
            setApiError(true);
        })
}


/**
 * @name getUserByEmail
 * @descrption Gets all users
 * @param {*} setUsers 
 * @param {*} setApiError 
 */
 export async function getUserByEmail(email, setUsers, setApiError) {
    await HttpHelper(`${constants.USER_ENDPOINT}/${email}`, 'GET')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            
        })
        .then((data) => {
            setUsers(data);
        })
        .catch(() => {
            setApiError(true);
        })
}
/**
 * @name fetchUserByEmail
 * @description Gets the user by email to see if exists
 * @param {String} email Target Email
 * @param {Function} setUser Sets the user state
 */
export async function fechUserByEmail (email, setUser)  {
    let userByEmailExists;
    await HttpHelper(`${constants.USER_ENDPOINT}/${email}`, 'GET')
        .then((response) => {
            if (response.status === 200) {
                userByEmailExists = true;
                return response.json();
            }
            if (response.status === 404) {
                userByEmailExists = false;
                console.log("user no exist");
                return userByEmailExists;
            }
            //throw new Error(response.statusText);
        })
        .then((body) => {
            setUser(body);
            
            //document.cookie = `user=${JSON.stringify(body)}`;
        })
        .catch(() => { });
    return userByEmailExists;
};

/**
 * @name fetchUserById
 * @description Returns user with specified ID
 * @param {*} setUsers 
 * @param {*} id 
 * @param {*} setApiError 
 */
export async function fetchUserById(setUser, id, setApiError) {
    await HttpHelper(`${constants.USER_ENDPOINT}/${id}`, 'GET')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(constants.API_ERROR);
        })
        .then((data) => {
            setUser(data);
        })
        .catch(() => {
            setApiError(true);
        })
};

/**
 * @name createUser
 * @description Posts a user to the backend
 * @param {Object} user The user to create
 * @param {Function} setUser Sets the user state
 * @param {Function} setApiError Sets the API Error state
 */
export async function createUser(user, setUser, setApiError)  {
    await HttpHelper(`${constants.USER_ENDPOINT}`, 'POST', user)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            //throw new Error(response.statusText);
        })
        .then((body) => {
            setUser(body);
            document.cookie = `user=${JSON.stringify(body)}`;
        })
        .catch(() => {
            setApiError(true);
        })
};

export async function loginUser (googleUser, setUser, setApiError) {
    const userByEmailExists = await fechUserByEmail(googleUser.email, setUser);
    if (!userByEmailExists) {
      createUser(googleUser, setUser, setApiError);
    }
  };
  
  export async function updateUser(user, id, setApiError){ 
	await HttpHelper(`${constants.USER_ENDPOINT}/${id}`, 'PUT', user)
	.then((response) => {
		if (response.ok){
			return response.json();
		}
	})
	.catch(() => {
		setApiError(true);
	  })
	  }
