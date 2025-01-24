const axios = require("axios");

const TRELLO_API_BASE = "https://api.trello.com/1";
const API_KEY = process.env.TRELLO_API_KEY;
const API_TOKEN = process.env.TRELLO_API_TOKEN;

async function fetchCard(cardId) {
  const url = `${TRELLO_API_BASE}/cards/${cardId}`;
  const params = { key: API_KEY, token: API_TOKEN };
  return retryRequest(() => axios.get(url, { params }));
}

async function updateCard(cardId, data) {
  const url = `${TRELLO_API_BASE}/cards/${cardId}`;
  return retryRequest(() => axios.put(url, { ...data, key: API_KEY, token: API_TOKEN }));
}

async function retryRequest(requestFunc, retries = 3) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await requestFunc();
    } catch (error) {
      if (i === retries || error.response?.status !== 429) throw error;
      console.log("Retrying request due to rate limit...");
      await new Promise((res) => setTimeout(res, (i + 1) * 1000));
    }
  }
}

module.exports = { fetchCard, updateCard };
