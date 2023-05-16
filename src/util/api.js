async function fetcher(url, params) {
    const response = await fetch(url, params);
    let result = []
    if (!response.ok) {
        throw {message: 'Could not fetch ' + url}
    }
    else {
        result = await response.json()
    }
    return result
  }

  export async function getHomesCount() {
    const response = await fetch("https://dinmaegler.onrender.com/homes/count");
    let result = ""
    if (!response.ok) {
        throw {message: 'Could not fetch ' + url}
    }
    else {
        result = await response.text()
    }
    return result
}

export async function getToken () { 
    await fetcher("https://dinmaegler.onrender.com/auth/local",
{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: "flemming@mail.dk",
      password: "123456",
    })
})
}

export async function getAllHomes() {return await fetcher("https://dinmaegler.onrender.com/homes")}

export async function getSomeHomes() {return await fetcher("https://dinmaegler.onrender.com/homes?_limit=4")}

export async function getHomeDetails(homeid) {return await fetcher("https://dinmaegler.onrender.com/homes/"+homeid)}

export async function getAllAgents() {return await fetcher("https://dinmaegler.onrender.com/agents")}

export async function getSomeAgents() {return await fetcher("https://dinmaegler.onrender.com/agents?_limit=3")}

export async function getAgentDetails(agentid) {return await fetcher("https://dinmaegler.onrender.com/agents/"+agentid)}