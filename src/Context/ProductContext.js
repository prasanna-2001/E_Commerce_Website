//create context
import { useEffect } from 'react';
import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import reducer from "../Reducers/productReducer"
// Create context(to store te data or product)
// we need a provider (to provide the data/product)
// and then we need a consumer(to use that product) = > for that we have UseContext Hook



//               Context API
//         /         |           \
// Context          Provider     Cosumer
//                                  \
//                                 UseContext Hook

// taki apne <App> </App> ke sare children is context ko use kr ske isliye apn poore app ko from 
//ndex.js wali file ki apan wap kar dennge<AppProvider></AppProvider> me aur app ko bhi child bana denge
//ab app khud ek child hoga jiske child apne dadaji(ie <AppProvider></AppProvider>) ke sare data ko acces kr payenge.

//appprovideer ke sath apn ek prouct ie value ya data bhejte hai .. most of the times object jo ki cild use karenge.


//API
//api apan axios ki madat se call karenge 



const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";


const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],
        isSingleLoading: false,
        singleProduct: [],
    };

    const [state, dispatch] = useReducer(reducer, initialState)



    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });

        try {
            const res = await axios.get(url);
            // console.log(
            //     "~file: ProductContext.js ~ Line 10 ~ getProducts ~ res",
            //     res
            // );

            //products me response me se  only product data save kar liya
            const products = await res.data;
            // console.log(
            //     "~file: ProductContext.js ~ Line 12 ~ getProducts ~ res",
            //     products
            // );

            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    };


    // 2nd api for sinle product
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct });
        }
        catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    };


    useEffect(() => {
        getProducts(API);
    }, []); //second paramter []  is called the array deoendency  jsiise ek hi bar run kaega


    return <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
};


//bar bar chikdren me hook ko impoort karne se accha apan ek custom hook ban dete hai
//CUSTM HOOK

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };





