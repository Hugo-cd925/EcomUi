import HttpHelper from '../../../ultil/HttpHelper';
import constants from '../../../ultil/Constants';


/**
 * @name createProduct
 * @description Posts a product obj to the backend
 * @param {Object} Product The Product to create
 * @param {Function} setApiError Sets the API Error state
 */
 export async function createProduct(product, setApiError)  {
    await HttpHelper(`${constants.PRODUCT_ENDPOINT}`, 'POST', product)
        .then((response) => {
            console.log("pt2");
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

export async function getProductbyEmail(setProduct,email, setApiError) {
    await HttpHelper(`${constants.PRODUCT_ENDPOINT}/${email}`, 'GET')
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        setProduct(data);
    })
    .catch(() => {
        setApiError(true);
    })
};
    