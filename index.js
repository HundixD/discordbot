import { Client, GatewayIntentBits, Events } from 'discord.js';

// ⚠️ ACHTUNG: Token hier DIREKT eintragen (nur zum Testen!)
// Besser später wieder .env nutzen, damit der Token nicht im Code steht.
const TOKEN = "MTQxOTY4NDAyNzQwOTEwOTAwMg.GJ0nq6.nW5o3aZaL95EFY3x0M6THcvPqC64i6kGDWpOHQ";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`✅ Eingeloggt als ${client.user.tag}`);
});

client.login(TOKEN).catch(err => {
  console.error("❌ Login fehlgeschlagen:", err.message);
});
