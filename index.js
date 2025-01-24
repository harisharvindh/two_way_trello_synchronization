const { syncCards } = require("./utils/syncLogic");
const { handleWebhook } = require("./webhooks/webhookHandler");

exports.handler = async (event) => {
  try {
    if (event.httpMethod === "POST") {
      return await handleWebhook(event);
    } else {
      await syncCards();
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Synchronization completed successfully!" }),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred." }),
    };
  }
};
