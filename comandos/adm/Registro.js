
const Discord = require("discord.js")

const { QuickDB } = require('quick.db');

const db = new QuickDB(); // using default driver

module.exports = {
  name: 'registrar', // Coloque o nome do comando
  description: 'Registra Um Player', // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,


  run: async (client, interaction) => {

    let embed = new Discord.EmbedBuilder()
      .setTitle("``Painel De Registro``")
      .setDescription("<:Ve_Ponto_BRHOT:1153083178840506398> Seja Bem  Vindo Ao Painel De Registro \n<a:setavermelha1:1153082675352059966> Gênero: Homem, Mulher\n<a:setavermelha1:1153082675352059966> Idade: +18 Ou -18\n<a:setavermelha1:1153082675352059966> Sexualidade: Hetero,Lgbtqiap+\n<a:setavermelha1:1153082675352059966> Status: Solteiro,Namorando,Casado ")
      .setColor("0000ff")

    let Button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId("registro")
          .setStyle("2")
          .setEmoji("989616870212661278")
          .setLabel("registrar")
      )
    interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
    interaction.channel.send({ embeds: [embed], components: [Button] })
  }
}