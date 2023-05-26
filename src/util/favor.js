export function getFavorites (user) {
if (user == "guest") return []
    const favList = JSON.parse(localStorage.getItem('dinmaegler-'+user));
    return favList
}

export function setFavorites (user, favList) {
if (user == "guest") return []
localStorage.setItem('dinmaegler-'+user,JSON.stringify(favList));
}