// ---- DISCORD LOGIN DIAG ----
import { Client, GatewayIntentBits, Events } from 'discord.js';

// ⛔️ Nur zum Test! Token hier direkt eintragen:
const TOKEN_RAW = "MTQxOTY4NDAyNzQwOTEwOTAwMg.GAm6SH.xsRuIE9Xdt3FLO_6wUTQDx24oguO-g8V1wRhIo"; // <-- exakt aus Dev-Portal (Bot -> Reset Token -> Copy)

// Hilfsfunktion: Token säubern
function cleanToken(t) {
  if (!t) return "";
  return t.replace(/\s+/g, "").trim(); // entfernt Whitespaces/Zeilenumbrüche
}

const TOKEN = cleanToken(TOKEN_RAW);

// Sanity-Checks & Debug-Ausgaben
(function debugToken(t) {
  const len = t?.length || 0;
  const looksSplit = t.includes(".");
  const masked = len >= 12 ? `${t.slice(0,6)}…${t.slice(-6)}` : t;

  console.log("---- TOKEN DIAG ----");
  console.log("Länge:", len);
  console.log("Hat Punkte (Segmentierung)?", looksSplit ? "ja" : "nein");
  console.log("Vorschau (maskiert):", masked);
  // lockere Pattern-Prüfung (Tokens haben 3 Segmente mit Punkten; Längen variieren)
  const pattern = /^[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+$/;
  console.log("Grob-Format OK?", pattern.test(t) ? "ja" : "nein");
  console.log("--------------------");
})(TOKEN);

if (!TOKEN) {
  console.error("❌ Kein Token gesetzt. Trag den Bot-Token in TOKEN_RAW ein.");
  process.exit(1);
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`✅ Eingeloggt als ${client.user.tag}`);
});

client.login(TOKEN).catch(err => {
  console.error("❌ Login fehlgeschlagen:", err?.message || err);
  console.error("Hinweis: Wenn dein Token jemals öffentlich war, ist er sofort ungültig. Im Dev-Portal 'Reset Token' und NEUEN eintragen.");
});
