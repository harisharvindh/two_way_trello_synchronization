const { fetchCard, updateCard } = require("./trelloApi");

async function syncCards() {
  const sourceCard = await fetchCard(process.env.SOURCE_CARD_ID);
  const targetCard = await fetchCard(process.env.TARGET_CARD_ID);

  const fieldsToSync = ["name", "desc", "labels", "due"];
  const updates = {};

  for (const field of fieldsToSync) {
    if (sourceCard[field] !== targetCard[field]) {
      updates[field] = sourceCard[field];
    }
  }

  if (Object.keys(updates).length > 0) {
    await updateCard(process.env.TARGET_CARD_ID, updates);
    console.log("Target card updated.");
  } else {
    console.log("Cards are already synchronized.");
  }
}

module.exports = { syncCards };
