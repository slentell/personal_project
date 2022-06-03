const BASE_URL = 'http://localhost:8000/api/v1'


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
const addChild = async (childObj) => {
  let url = 'http://127.0.0.1:8000/api/v1/accounts/addchild'
  let init = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(childObj)
  }
  return await tryCatchFetch(url, init)

  }






const exportItems = { 
  fetchChores,
  fetchChoresByAssignedUser,
  fetchChoresByUser,
  addChore, 
  addChild,

};

export default exportItems;