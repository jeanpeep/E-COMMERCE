import { createContext } from "react";

export const ProductContext = createContext({
  productList: null,
  setProductList: () => {}
});

export const UserContext = createContext({
    user: {},
    setUser: () => {}
  });

export const DetailContext = createContext({
  details: {},
  setDetails: ()=>{}
})
export const CanastaContext = createContext({
  canasta: [],
  setCanasta: ()=>{}
})

