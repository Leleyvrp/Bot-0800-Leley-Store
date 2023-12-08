const Discord = require("discord.js")

const BPC = ""

let array = []
let nsei = []

module.exports = {
  name: "bater-ponto",
  description: "Ativar painel de bater ponto.",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'canal',
        description: 'Selecione um canal de texto.',
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    }
  ],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator))
    return interaction.reply({
        content: `Opa ${interaction.user}, você não possui permissão para utilizar este comando!`,
        ephemeral: true,
    })

    interaction.reply({ content: `Painel bate-ponto enviado com sucesso!`, ephemeral: true })
    
        const canalEnv = interaction.options.getChannel('canal')

    const embedT = new Discord.EmbedBuilder()
    .setTitle(`Bate Ponto | `)
    .setThumbnail(interaction.guild.iconURL({ dinamyc: true, format: "png", size: 4096 }))
    .setDescription(` 🟢 Para **Abrir** seu **PONTO** clique no botão: ✅\n\n 🔴 Para **Fechar** seu **PONTO** clique no botão: ❌`)
    .setColor('#0000FF')
    .setFooter({
        iconURL: interaction.guild.iconURL({ dynamic: true }),
        text: (`Copyright © | Leleyfps#8448`)
            })
    .setTimestamp()

    const acct = new Discord.ActionRowBuilder()
                  .addComponents(
                  new Discord.ButtonBuilder()
                  .setLabel("Abrir Ponto")
                  .setStyle(2)
                  .setCustomId("btE")
                  .setEmoji("✅"),
                  new Discord.ButtonBuilder()
                  .setLabel("Fechar Ponto")
                  .setStyle(2)
                  .setCustomId("btS")
                  .setEmoji(`❌`),
                  )

    canalEnv.send({ embeds: [embedT], components: [acct] })
    
    
  }}  