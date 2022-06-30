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
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  response = await response.json();
  shapeList.push(response);
  drawShapes();
};

/**
 * fetch api delete method
 * @param {String} url delete request url
 */
const fetchDelete = async (url) => {
  await fetch(url, { method: "DELETE" });
  shapeList.shift();
  objectReferenceList.shift();
};

/**
 * fetch api patch method
 * @param {String} url patch request url
 * @param {Object} data data to be updated
 */
const fetchPatch = async (url, data) => {
  let response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  response = response.json();
};
