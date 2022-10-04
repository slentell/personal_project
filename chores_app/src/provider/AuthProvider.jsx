import React, { useEffect} from 'react'
import jwt_decode from 'jwt-decode'

const AuthContext = React.createContext({})

export const useAuth = () => React.useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [parentAccount, setParentAccount] = React.useState(null)

  const storeParentAccount = async (parentAccount) => {
    await setParentAccount(parentAccount)
  }
  useEffect(() => {
    if (localStorage.getItem('access') !== null) {
      const payload = jwt_decode(localStorage.getItem('access'))
      storeParentAccount(payload['user_id'])
    }
    }, [])
  return (<AuthContext.Provider value={{ storeParentAccount, parentAccount }}>{children}</AuthContext.Provider>) 
}
