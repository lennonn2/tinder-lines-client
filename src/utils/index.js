export const increment = (id, url) => {
  if (window.location.hostname === 'localhost' || window.location.search.includes('dev=true')) {
    return;
  }
  fetch(`https://qvqnyun7pl.execute-api.us-east-1.amazonaws.com/prod/${url}`, {
    body: JSON.stringify({id}), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
  });
};