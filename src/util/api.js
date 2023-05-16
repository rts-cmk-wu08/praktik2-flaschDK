async function fetcher(url, params) {
    const response = await fetch(url, params);
    let result = []
    if (!response.ok) {
        throw {message: 'Could not fetch ' + url}
    }
    else {
        result = await response.json()
        console.log(result)
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

export async function getHomesCount() {return await fetcher("https://dinmaegler.onrender.com/homes/count")}

export async function getAllHomes() {return await fetcher("https://dinmaegler.onrender.com/homes")}

export async function getHomeDetails(homeid) {return await fetcher("https://dinmaegler.onrender.com/homes/"+homeid)}
