import HttpHelper from '../../../ultil/HttpHelper';
import constants from '../../../ultil/Constants';


/**
 * @name createUser
 * @description Posts a user to the backend
 * @param {Object} user The user to create
 * @param {Function} setUser Sets the user state
 * @param {Function} setApiError Sets the API Error state
 */
 export async function createProduct(product, setApiError)  {
    await HttpHelper(`${constants.PRODUCT_ENDPOINT}`, 'POST', product)
        .then((response) => {
            console.log(product);
            if (response.ok) {
                console.log("made it");
                return response.json();
                //navigate to seller page
            }
         
        })
        .catch(() => {
            setApiError(true);
        })
};

    