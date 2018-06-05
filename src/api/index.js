import config from './config'

let apiKey = config.api_key
let country = 'uruguay'
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${ country }&api_key=${ apiKey }&format=json`

export default function getTopArtist(){
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)

}
