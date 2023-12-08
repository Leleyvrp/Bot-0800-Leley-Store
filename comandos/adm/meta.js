const Discord = require("discord.js")

let array = []
let nsei = []

module.exports = {
    name: "metas",
    description: "Ativar painel de Metas 📥",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não possui permissão para utilzar este comando!`, ephemeral: true })
        } else {
            let embed = new Discord.EmbedBuilder()

                .setTitle("📥 ``PAINEL DE META PROJETO SEM NOME``")
                //.setThumbnail(interaction.guild.iconURL({ dinamyc: true, format: "png", size: 4096 }))
                .setDescription("• Clique no botão para abrir seu canal de meta caso algo de errado fale com uns dos lides\n\n• Não abra mais de um canal de meta sem motivo\n\n• Lembrando que a meta diaria e de duas rotas por dia")
                //.setImage("")
                .setColor("ff0000")
                .setFooter({
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                    text: (`${interaction.guild.name} © Todos os direitos reservados.`)
                });

            let painel = new Discord.ActionRowBuilder().addComponents(
                new Discord.SelectMenuBuilder()
                    .setCustomId("painel_meta")
                    .setPlaceholder("Para solicitar sua sala de meta")
                    .addOptions(
                        {
                            label: "canal de meta",
                            description: "Pegue  sua sala de meta",
                            value: "opc1",
                            emoji: "📥"
                        }
                    )
            );

            interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [painel] })
        }


    }
}