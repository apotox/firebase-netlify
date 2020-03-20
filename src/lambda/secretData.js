const { success, failed } = require("./services/responses");
const { VerifyToken } = require("./services/security");

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const user = await VerifyToken(event.queryStringParameters.token);

  if (!user) return failed("unauthorized", 401);

  const secretmessage = "this is a secret";

  return success({
    message: secretmessage
  });
};
