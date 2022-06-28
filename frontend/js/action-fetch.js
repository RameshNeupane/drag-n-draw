/**
 * fetch api get method
 * @param {String} url get request url
 * @returns {Promise} response to the request url
 */
const fetchGet = (url) => {
  return fetch(url);
};

/**
 * fetch api post method
 * @param {String} url post request url
 * @param {Object} data data to be posted
 */
const fetchPost = async (url, data) => {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  response = await response.json();
  shapeList.push(response);
  drawShapes();
};

const fetchDelete = async (url) => {
  await fetch(url, { method: "DELETE" });
  shapeList.shift();
};
