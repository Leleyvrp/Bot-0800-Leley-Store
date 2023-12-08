const Discord = require("discord.js");

const { Client, Intents, GatewayIntentBits, ActivityType, PermissionFlagsBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const config = require("./config.json");

const { QuickDB } = require('quick.db');

const db = new QuickDB(); // using default driver

client.login(config.token);

module.exports = client;

client.commands = new Discord.Collection();

client.slashCommands = new Discord.Collection();

client.config = require("./config.json");

require("./handler")(client);

const { glob } = require("glob");

const { promisify } = require("util");

const globPromise = promisify(glob);

client.once("ready", () => {
  console.log("🤍 | Dev: Leley Fps")
  console.log(`🤍 | Estou Logado Em ${client.guilds.cache.size} Servidores`)
})


client.on("ready", () => {
  const messages = [
    `🤍 | PROJETO SEM NOME`,
    `🤍 | PROJETO SEM NOME`,
    `🤍 | LPROJETO SEM NOME.GG`
  ]

  var position = 0;

  setInterval(() => client.user.setPresence({
    activities: [{
      Status: "absent",
      name: `${messages[position++ % messages.length]}`,
      type: ActivityType.Playing,
      url: 'https://www.youtube.com/watch?v=a3DxVqMwUAQ'
    }]
  }), 1500 * 10);
});

// Status Perfil ausente / nao pertube / online / invisible

client.on("ready", () => {
  client.user.setPresence({ status: 'dnd' });// online , idle , dnd , invisible
});

//// Conectar Na Call \\\\

const { joinVoiceChannel } = require('@discordjs/voice');


client.on("ready", () => {
  let canal = client.channels.cache.get(`${config.canalvoz}`) // coloque o ID do canal de voz
  if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
  if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)

  try {

    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    })
    console.log(`🤍 | Entrei no canal de voz [ ${canal.name} ] com sucesso!`)

  } catch (e) {
    console.log(`❌ | Não foi possível entrar no canal [ ${canal.name} ].`)
  }

})

//// Comando Slahs \\\\

client.on("interactionCreate", async (interaction) => {
  if (!interaction.guild) return;

  if (interaction.isCommand()) {

    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd)
      return;

    const args = [];

    for (let option of interaction.options.data) {

      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }

    cmd.run(client, interaction, args);
  }

  if (interaction.isContextMenuCommand()) {
    await interaction.deferReply({ ephemeral: false });
    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);

  }
});


//// Ping \\\\

client.on("ready", () => {
  let canalPing = client.channels.cache.get(`${config.canalping}`); // Colocar o id do canal de ping
  if (!canalPing) return console.log(`Canal de ping do bot não encontrado`);
  canalPing.setName(`📡 Ping: Calculando...`);
  setInterval(() => {
    canalPing.setName(`💻 Ping: ${client.ws.ping}ms`);
  }, 1000 * 60 * 1);
})

//// Membros \\\\

client.on("ready", () => {
  let users = client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)
  const compact = users.toLocaleString("pt-BR", { notation: 'compact' });
  let membro = client.channels.cache.get(`${config.canalmembros}`); // Colocar o id do canal de membros
  if (!membro) return console.log(`Canal de membros do bot não encontrado`);
  membro.setName(`📡 Membros: Calculando...`);
  setInterval(() => {
    membro.setName(`👤 Membros: ${compact}`);
  }, 1000 * 60 * 1);
})

//// Sevidores Conectados \\\\

client.on("ready", () => {
  let guilds = client.guilds.cache.size
  let sv = client.channels.cache.get(`${config.canalservidor}`);
  if (!sv) return console.log(`Canal de servidores do bot não encontrado`); // Colocar o id do canal de servidores
  sv.setName(`📡 Servidores: Calculando...`);
  setInterval(() => {
    sv.setName(`🤍 Servidores: ${guilds}`);
  }, 1000 * 60 * 1);
})

const fs = require("fs");

fs.readdir('./events', (err, file) => {
  file.forEach(Events => {
    require(`./events/${Events}`)
  })
})