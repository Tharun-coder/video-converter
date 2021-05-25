import React, { useState } from "react";

let UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [path, setPath] = useState("");
  const [folderPath, setFolderPath] = useState("");

  return (
    <UserContext.Provider value={{ path, setPath, folderPath, setFolderPath }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
