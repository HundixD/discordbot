import { Client, GatewayIntentBits, Events } from 'discord.js';

// ⚠️ ACHTUNG: Token hier DIREKT eintragen (nur zum Testen!)
// Besser später wieder .env nutzen, damit der Token nicht im Code steht.
const TOKEN = "MTQxOTY4NDAyNzQwOTEwOTAwMg.GHPuGu.gKKGDECALq1by3rtoylifNyzpS6m8SwDZQ65VU";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`✅ Eingeloggt als ${client.user.tag}`);
});

client.login(TOKEN).catch(err => {
  console.error("❌ Login fehlgeschlagen:", err.message);
});
