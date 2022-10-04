const BASE_URL = 'http://localhost:8000/api/'


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
const choreByChild = async (assigned_user, chores, setChores) => {
  try {
    await fetch(
      `http://127.0.0.1:8000/api/?assigned_user=${assigned_user}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== chores.length) setChores(data);
      });
  } catch (e) {
    console.error("Error fetching api data", e);
  }
}
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
const addChild = async (childObj, setFirst_Name, setDob) => {
  let response = await fetch('http://localhost:8000/api/accounts/addchild/', {
    
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization':`Bearer ${(localStorage.getItem('access'))}`,
        
      },
      body: JSON.stringify(childObj),
    })
    setFirst_Name('')
    setDob('')
    return await response.json

  }

const deleteChild = async (id) => {
  try {
    await fetch(`http://localhost:8000/api/accounts/updatechild/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
  } catch (e) {
    console.error("Error deleting data", e);
  }
}
const childByParent = async (child_accts, setChild_Accts) => {
  try {
    await fetch("http://127.0.0.1:8000/api/accounts/child/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== child_accts.length) setChild_Accts(data);
      });
  } catch (e) {
    console.error("Error fetching api data", e);
  }
};

const deleteChore = async (id) => {
      await fetch(`http://localhost:8000/api/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
  }
    // .then(
    //   await fetch(`http://127.0.0.1:8000/api/${id}/`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("access")}`,
    //     },
    //   })
    // );









const exportItems = { 
  fetchChores,
  choreByChild,
  addChore, 
  addChild,
  deleteChild, 
  childByParent,
  deleteChore,



};

export default exportItems;