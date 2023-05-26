import {useContext, useEffect} from 'react'
import {UserContext} from '../App'
import {getFavorites, setFavorites} from '../util/favor'

const Favorites = () => {
const fav = ['pyramde','hundehus']
const {setFavList} = useContext(UserContext)
const {user} = useContext(UserContext)
useEffect(() => {
    setFavList(fav) 
    setFavorites(user,fav)
    console.log(user)
    console.log(getFavorites(user))
},[user])

    return ( 
        <>
        Det kan jeg li!
        </>
     );
}
 
export default Favorites;