import './App.css';
import Login from './Login';
import {useEffect} from "react";
import {getTokenFromURL} from "./spotify";
import {useState} from "react";
import Player from "./Player";
import SpotifyWebAPI from 'spotify-web-api-js';
import {useDataLayerValue} from "./DataLayer";

const SPOTIFY = new SpotifyWebAPI();

function App() {
    const [token, setToken] = useState(null);
    const [{}, dispatch] = useDataLayerValue();
    useEffect(()=>{
        const hash = getTokenFromURL();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token){
            setToken(_token);
            SPOTIFY.setAccessToken(_token);
            SPOTIFY.getMe().then(r => {
                console.log(r)
                dispatch({
                    type: 'SET_USER',
                    user: r
                })
            });
            SPOTIFY.getUserPlaylists().then((playlists) =>{
                dispatch(
                    {
                        type: "SET_PLAYLISTS",
                        playlists: playlists
                })
            })
            SPOTIFY.getPlaylist('37i9dQZEVXcRegcn9zgCMl').then(r =>{
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: r
                })
            })
        }

    }, [])
  return (
    <div className="app">
        {/*<Player spotify={SPOTIFY}/>*/}
        {token ? (<Player/>): <Login />}
    </div>
  );
}

export default App;
