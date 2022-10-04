import React, { useState, useEffect, createContext, useContext } from 'react'

const ChildContext = createContext({})

export const useChild = () => useContext(ChildContext)

export const ChildProvider = ({ children }) => {
  const [childAccounts, setChildAccounts] = useState([])

  // const storeChildAccounts = async (childAccounts) => {
  //   await setChildAccounts(childAccounts)
  // }
  useEffect(() => {
    const childByParent = () => {
    try {
      fetch("http://127.0.0.1:8000/api/accounts/child/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {

          if (data.length !== childAccounts.length) { 

            setChildAccounts(data);
    }
  })

    } catch (e) {
      console.error("Error fetching api data", e);
    };
  }
  childByParent();
}, [childAccounts]);

  return (<ChildContext.Provider value={{ setChildAccounts, childAccounts }}>{children}</ChildContext.Provider>)
}


