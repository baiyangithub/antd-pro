// import fetch from 'dva/fetch';

// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           An object containing either "data" or "err"
//  */
// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }
import qs from 'querystring';

export default function (url, options = {}) {
  const defaultOpts = {
    method: 'GET',
    headers: {
      // 'x-csrf-token': window.__csrf__,
    },
    credentials: 'include',
  };
  const opts = {
    ...defaultOpts,
    ...options,
    mode: 'cors'
  };

  let finnalUrl = url;
  if (opts.method.toUpperCase() === 'POST') {
    if (!opts.body) throw new Error('post请求需要携带body');
    opts.body = JSON.stringify(opts.body);
    opts.headers['Content-Type'] = 'application/json;charset=UTF-8';
  } else if (opts.query) {
    finnalUrl = `${finnalUrl}?${qs.stringify(opts.query)}`;
  } else if (Object.keys(options).length > 0) {
    finnalUrl = `${finnalUrl}?${qs.stringify(options)}`;
  }
  const fetch = window.fetch;
  return fetch(finnalUrl, opts).then(res => res.json());
}
