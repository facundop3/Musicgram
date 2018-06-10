import config from './config'

let apiKey = config.api_key

export default function getTopArtist(countryName){
  let URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${ countryName }&api_key=${ apiKey }&format=json`
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
