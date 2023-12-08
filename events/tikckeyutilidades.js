require('../index')

const Discord = require('discord.js');

const client = require('../index');

const config = require("../config.json");

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
      if (interaction.customId === "painel_utilidades2") {
        let opc = interaction.values[0]
        if (opc === "opc1") {
          let embed = new Discord.EmbedBuilder()
            .setTitle("Importante")
            .setColor("ff0000")
            .setDescription("Tem certeza de que deseja fechar este Ticket?")
          let button = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setCustomId("Fecharttc")
              .setEmoji("🔒")
              .setLabel("Fechar")
              .setStyle(Discord.ButtonStyle.Primary),
          )
          interaction.channel.send({ embeds: [embed], components: [button] })
        }
        }
    }
  })
  
//  Ao Precionar o Buton Fechar
  
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "Fecharttc") {
  
        interaction.channel.setName(`Ticket Fechado  ${interaction.user.username}`)
  
        let embed = new Discord.EmbedBuilder()
        .setTitle("Importante")
        .setColor("ff0000")
        .setDescription("Paine De Ticket Fechado")
  
        let button2 = new Discord.ActionRowBuilder() .addComponents(
          new Discord.ButtonBuilder()
          .setCustomId("Transcripttt")
          .setEmoji("📑")
          .setLabel("Transcript")
          .setStyle(Discord.ButtonStyle.Primary),
  
          new Discord.ButtonBuilder()
          .setCustomId("Abrirtt")
          .setEmoji("🔓")
          .setLabel("Em Breve")
          .setStyle(Discord.ButtonStyle.Primary),
  
          new Discord.ButtonBuilder()
          .setCustomId("Apagartt")
          .setEmoji("🗑️")
          .setLabel("Apagar")
          .setStyle(Discord.ButtonStyle.Primary),
        )
        interaction.channel.send({ embeds: [embed], components: [button2] })
  
      }
    }
  })
  
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "Abrirtt") {
  
  
      }
    }
  })
  
  client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "Apagartt") {
        interaction.reply(`Olá ${interaction.user}, este ticket será excluído em segundos...`)
        setTimeout(() => {
          try {
            interaction.channel.delete()
          } catch (e) {
            return;
          }
        }, 5000)
      }
    }
  })
  