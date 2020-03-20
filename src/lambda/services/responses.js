const headers = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
  "Access-Control-Allow-Origin":
    process.env.NODE_ENV == "development" ? "http://localhost:3000" : ""
};

const success = (entity, statusCode = 200) => {
  if (entity) {
    return {
      headers,
      statusCode,
      body: JSON.stringify(entity)
    };
  } else {
    if (typeof entity == "null") throw new Error("no content");

    return {
      headers,
      statusCode: 204,
      body: ""
    };
  }
};

const failed = (error, statusCode = 400) => {
  return {
    headers,
    statusCode,
    body: typeof error == "object" ? error.message : error || "unknow error"
  };
};

const cors = () => {
  return {
    headers,
    statusCode: 200,
    body: ""
  };
};

module.exports = {
  headers,
  success,
  failed,
  cors
};
