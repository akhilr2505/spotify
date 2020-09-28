//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//redirects to spotify login page
export const authEndPoint = "https://accounts.spotify.com/authorize";

//redirects back to spotify home page
const redirectUri = "http://localhost:3000/callback";

const clientId = "c9592ebe9ec948e6980b39d0319ad0cf";

//declares scopes of what user can do in app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  //find url and location of hash
  return window.location.hash
    .substring(1)
    .split("&") //split url at &
    .reduce((initial, item) => {
      var parts = item.split("="); //split first item at =
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
