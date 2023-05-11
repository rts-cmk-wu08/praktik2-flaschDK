export async function getData() {
    const response = await fetch()
    if (!response.ok) {
        throw {message: 'Could not load it.'}
    }
    return response.json()
}