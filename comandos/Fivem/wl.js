const Discord = require("discord.js")

module.exports = {
  name: 'liberarid', // Coloque o nome do comando
  description: 'Ativa o painal De Liberação de Id', // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator))
    return interaction.reply({
        content: `Opa ${interaction.user}, você não possui permissão para utilizar este comando!`,
        ephemeral: true,
    })

    interaction.reply({ content: `✅ Painel wl enviado com sucesso!`, ephemeral: true })

    const embedT = new Discord.EmbedBuilder()
    .setTitle(`Libereração De Passaporte `)
    .setDescription(` - Olá bem vindo ao painel de liberarção de e posivel liberar o seu id\n- Não esqueça de esta com seu visto em mão `)
    .setColor('#0000FF')
    .setFooter({
        iconURL: interaction.guild.iconURL({ dynamic: true }),
        text: (`Copyright © | Leleyfps#8448`)
            })
    .setTimestamp()

    let botao = new Discord.ActionRowBuilder().addComponents(
      new Discord.ButtonBuilder()
      .setCustomId("btlb")
      .setEmoji("💼")
      .setLabel("Fazer WL")
      .setStyle(Discord.ButtonStyle.Primary)
  );

    interaction.channel.send({ embeds: [embedT], components: [botao] })
    
  }
}