require('../index')
;
const Discord = require('discord.js');

const client = require('../index');

const config = require("../config.json");

const moment = require("moment");

const { QuickDB } = require('quick.db');

const db = new QuickDB(); // using default driver

let nsei = []

client.on("interactionCreate", async (int) => {

  if (!int.isButton()) return;

  if (int.customId === "btE") {
    if (nsei.includes(int.user.id)) {
      const reply3 = new Discord.EmbedBuilder()
        .setDescription(`🟢 Você já possuí um ponto **ABERTO.**  `)
        .setColor('#FF0000')
      return await int.reply({ embeds: [reply3], ephemeral: true })
    };

    nsei.push(int.user.id)


    const reply1 = new Discord.EmbedBuilder()
      .setDescription(`🟢 ${int.user}  Seu ponto foi **Aberto** com sucesso. `)
      .setColor('#008000')



    int.reply({ embeds: [reply1], ephemeral: true })


    let array = [int.user.id]

    if (int.user.customId == "entrar") {
      array.push(int.user)
    } else if (int.user.customId == "sair") {
      array = array.filter(user => user.id != int.user.id)
    }

    const tempo1 = `<t:${moment(int.createdTimestamp).unix()}>`

    await db.set(`tempo1`, tempo1)

  }

  if (int.customId === "btS") {

    if (!nsei.includes(int.user.id)) {
      const reply3 = new Discord.EmbedBuilder()
        .setDescription(` 🔴 | Você não possui ponto **ABERTO.**`)
        .setColor('#FF0000')
      return await int.reply({ embeds: [reply3], ephemeral: true })
    }

    nsei = nsei.filter((el) => {
      return el != int.user.id
    })
    const tempon = await db.get(`tempo1`)
    const tempo2 = `<t:${moment(int.createdTimestamp).unix()}>`
    let canalLogs2 = client.channels.cache.get(`${config.BPL}`); //ID do canal que será enviada logs do bateponto

    const reply2 = new Discord.EmbedBuilder()
      .setDescription(`🔴 ${int.user}  Seu ponto foi **Fechado** com sucesso.`)
      .setColor('#FF0000')

    int.reply({ embeds: [reply2], ephemeral: true })

    const embedS = new Discord.EmbedBuilder()
      .setTitle("✌️``Bate Ponto Fechado``")
      .setThumbnail(int.user.displayAvatarURL({ dinamyc: true, size: 2048, format: 'png' }))
      .setDescription(`⏬INFORMAÇÕES ABAIXO:\n\n🟢 Horário de Entrada: ${tempon}\n\n🔴 Horário de saída: ${tempo2}\n\n👨 Membro: **${int.user.username} ||${int.user}||**`)
      .setColor('#FF0000')
      .setFooter({
        iconURL: int.guild.iconURL({ dynamic: true }),
        text: (`Ponto Foi Fechado`)
      })
      .setTimestamp()

    canalLogs2.send({ embeds: [embedS] })

  }
});