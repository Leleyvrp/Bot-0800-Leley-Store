
const Discord = require("discord.js")

module.exports = {
  name: "avaliar-staff", // Coloque o nome do comando
  description: "De uma nota de atendimento para algum staff.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  Globally: false,
  Permissions: [Discord.PermissionFlagsBits.SendMessages],
  
  options: [
    {
        name: "staff",
        description: "Mencione o staff que será avaliado",
        type: Discord.ApplicationCommandOptionType.User,
        required: true
    },
    {
        name: "nota",
        description: "De uma nota para o atendimento",
        type: Discord.ApplicationCommandOptionType.Number,
        required: true
    },
    {
        name: "feedback",
        description: "De um feedback para o atendimento",
        type: Discord.ApplicationCommandOptionType.String,
        required: true  

    },
  ],

  run: async (client, interaction) => {

    const channel = interaction.guild?.channels.cache.find(c => c.name === "🌈│feedback-staff") // Aqui você coloca o nome do canal onde as avaliações serão enviadas
    interaction.reply({ content: `Avaliação enviada com sucesso!`, ephemeral: true });

    const user = interaction.options.getUser("staff");
    const avaliação = interaction.options.getNumber("nota")
    const feedack = interaction.options.getString("feedback")

    channel.send({
        embeds: [
            new Discord.EmbedBuilder()
            .setAuthor({ name: `Avaliação enviada por ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            .setDescription(`**Staff Avaliado**:\n${user.toString()}\n(\`${user.id}\`)\n\n**Nota da Avaliação**:\n${avaliação}\n\n**Feedback do membro:**\n${feedack}`)
            .setThumbnail(user.displayAvatarURL())
            .setColor("34db8d")
        ]
    })
  }

}