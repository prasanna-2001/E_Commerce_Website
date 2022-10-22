const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }

    // }
    // if (action.type === "API_ERROR") {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError: true,
    //     }
    // }
    //if se jyada easily switch se kar sakte hai
    switch (action.type) {
        case "SET_LOADING":

            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            return {

            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };


        default:
            return state;
    }

};

export default ProductReducer;