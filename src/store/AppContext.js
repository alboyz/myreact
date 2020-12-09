import React from "react";

const AppContext = React.createContext({ login: false, user: {}, loading: false });

export default AppContext;
