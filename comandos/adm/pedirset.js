const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()

module.exports = {
  name: "pedirset", // Coloque o nome do comando
  description: "Abri O Painel De Pedir Set", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "canal_pedirset",
        description: "Canal para enviar o pedir set para os membros.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    },
    {
        name: "canal_logs",
        description: "Canal para enviar as logs dos pedir sets recebidos.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {
        const canal_formulario = interaction.options.getChannel("canal_pedirset")
        const canal_logs = interaction.options.getChannel("canal_logs")

        if (canal_formulario.type !== Discord.ChannelType.GuildText) {
            interaction.reply({ content: `O canal ${canal_formulario} não é um canal de texto.`, ephemeral: true })
        } else if (canal_logs.type !== Discord.ChannelType.GuildText) {
            interaction.reply({ content: `O canal ${canal_logs} não é um canal de texto.`, ephemeral: true })
        } else {
            await db.set(`canal_formulario_${interaction.guild.id}`, canal_formulario.id)
            await db.set(`canal_logs_${interaction.guild.id}`, canal_logs.id)

            let embed = new Discord.EmbedBuilder()
            .setDescription("#ff0000")
            .setTitle("Canais Configurados!")
            .setDescription(`> Canal do Onde vão pedir set: ${canal_formulario}.\n> Canal de Logs: ${canal_logs}.`)
            interaction.reply({ embeds: [embed], ephemeral: true }).then( () => {
                let embed_formulario = new Discord.EmbedBuilder()
                .setColor("#ff0000")
                //.setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                //.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                .setTitle("💼 ``Painel De Setagem``")
                .setDescription(`**• Não seja vacilão e esteja com o seu passaporte e nome em mãos\n\n• Coloque dados coerentes no pequeno formulário que será criado para você responder**`)
                //.setImage("")
                .setFooter({
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                    text: (`${interaction.guild.name} © Todos os direitos reservados.`)
                });
    
                let botao = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("formulario")
                    .setEmoji("💼")
                    .setLabel("Pedir Set")
                    .setStyle(Discord.ButtonStyle.Primary),

                    new Discord.ButtonBuilder()
                    .setCustomId("amig")
                    .setEmoji("👊")
                    .setLabel("pegue cargo de amigos")
                    .setStyle(Discord.ButtonStyle.Primary)
                );


                canal_formulario.send({ embeds: [embed_formulario], components: [botao] })
            })
        } 
    }
  }
}



