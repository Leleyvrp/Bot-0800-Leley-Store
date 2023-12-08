const Discord = require("discord.js")

const { QuickDB } = require("quick.db")

const db = new QuickDB()




module.exports = {
  name: 'embed', // Coloque o nome do comando
  description: 'Ira Criar Um Embed no canal em que enviar', // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
        interaction.reply({ content: `Você não possui permissão para utilzar este comando!`, ephemeral: true })
    } else {
        let embed = new Discord.EmbedBuilder()

            .setTitle("📜``PAINEL DE EMBED``")
            .setDescription("- Aqui Você Pode Criar Um Embed\n")
            .setColor("0000ff")
            .setFooter({
                iconURL: interaction.guild.iconURL({ dynamic: true }),
                text: (`${interaction.guild.name} © Todos os direitos reservados.`)
            });

            let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setCustomId("embed")
                .setEmoji("🙍")
                .setLabel("Althor")
                .setStyle(Discord.ButtonStyle.Primary)
            );

        
        interaction.reply({ embeds: [embed], components: [botao], ephemeral: true })
    }

    
  }
}