const { syncCards } = require("../utils/syncLogic");

async function handleWebhook(event) {
  const body = JSON.parse(event.body);
  if (body.action && body.action.type === "updateCard") {
    await syncCards();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Webhook handled successfully!" }),
    };
  }
  return { statusCode: 400, body: JSON.stringify({ error: "Invalid webhook event." }) };
}

module.exports = { handleWebhook };
