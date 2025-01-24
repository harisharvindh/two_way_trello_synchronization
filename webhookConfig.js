const axios = require("axios");

const TRELLO_API_BASE = "https://api.trello.com/1";
const API_KEY = process.env.TRELLO_API_KEY;
const API_TOKEN = process.env.TRELLO_API_TOKEN;

async function createWebhook(callbackURL, idModel) {
  const url = `${TRELLO_API_BASE}/webhooks/`;
  return axios.post(url, {
    description: "Trello Sync Webhook",
    callbackURL,
    idModel,
    key: API_KEY,
    token: API_TOKEN,
  });
}

module.exports = { createWebhook };
