export async function getAllHomes() {
    let result = [];
    const response = await fetch("https://dinmaegler.onrender.com/homes")
    if (!response.ok) {
        throw {message: 'Could not load it.'}
    }
    else {
        result = await response.json()
        console.log(result)
    }

    return {result}
}

export async function getHomeDetails(homeid) {
    console.log(homeid)
    let result = [];
    const id = "6163f2def709bf29ac53288b"
    const response = await fetch("https://dinmaegler.onrender.com/homes/"+homeid)
    if (!response.ok) {
        throw {message: 'Could not load it.'}
    }
    else {
        result = await response.json()
        console.log(result)
    }

    return {result}
}