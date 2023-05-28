// Context.js
import React, { createContext, useState } from "react";

export const ElementoContext = createContext();

export const ElementoProvider = ({ children }) => {
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  return (
    <ElementoContext.Provider value={{ itemSeleccionado, setItemSeleccionado }}>
      {children}
    </ElementoContext.Provider>
  );
};
