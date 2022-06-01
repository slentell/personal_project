const BASE_URL = 'http://localhost:8000/api/v1'
const SIGNUP_URL = 'http://localhost:8000/api/v1/auth/register/'
const LOGOUT_URL = 'http://localhost:8000/api/v1/accounts/auth/logout/'

const tryCatchFetch = async (url, init = null) => {
  try {
    let response = await fetch(url, init)
    return await response.json()
  }
  catch (e) {
    console.error(e)
    return null
  }
};

const fetchChores = async (filters = null) => {
  let url = BASE_URL;
  if (filters)
    url += `?filter={"where":${filters}}`;
  return await tryCatchFetch(url)
}

// on the parent dashboard for listing each child's chores
const fetchChoresByAssignedUser = async (assignedUser) => {
  let filter = `{"assigned_user":{"ilike":"${assignedUser}"}}`
  return fetchChores(filter)
};
// on the child dashboard to get their chores
const fetchChoresByUser = async (username) => {
  let filter = `{"username":{"ilike":"${username}"}}`
  return fetchChores(filter)
};

const addChore = async (choreObj) => {
  let url = BASE_URL
  let init = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(choreObj)
  }
  return await tryCatchFetch(url, init)

}





const exportItems = { 
  fetchChores,
  fetchChoresByAssignedUser,
  fetchChoresByUser,
  addChore, 


};

export default exportItems;