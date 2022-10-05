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

//create context
import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{ myName: "Prasanna " }}>{children}</AppContext.Provider>
};


//bar bar chikdren me hook ko impoort karne se accha apan ek custom hook ban dete hai
//CUSTM HOOK

const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };





