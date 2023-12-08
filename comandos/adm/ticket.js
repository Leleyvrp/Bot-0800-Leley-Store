const Discord = require("discord.js")
const { guilds } = require("../..")

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js")

let array = []
let nsei = []

module.exports = {
    name: "ticket",
    description: "Ativar painel de ticket 📥",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Você não possui permissão para utilzar este comando!`, ephemeral: true })
        } else {
            let embed = new EmbedBuilder()

                .setTitle("🎟️ ``PAINEL DE TICKET LELEY STORE``")
                //.setThumbnail(interaction.guild.iconURL({ dinamyc: true, format: "png", size: 4096 }))
                .setDescription("• ❓Caso queira tirar uma duvida\n\n• 🛒 Caso queira comprar algo ou tenha tido um problema na compra\n\n• 🤝 Caso queira fazer uma parceria \n\n• ⚠️ Caso queira fazer uma denuncia")
                //.setImage("")
                .setColor("0000ff")
                .setFooter({
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                    text: (`${interaction.guild.name} © Todos os direitos reservados.`)
                });

            let painel = new ActionRowBuilder().addComponents(
                new Discord.SelectMenuBuilder()
                    .setCustomId("painel_ticket")
                    .setPlaceholder("Para solicitar ajudas efetue a abertura de Ticket Aqui.")
                    .addOptions(
                        {
                            label: "Duvidas",
                            description: "Ticket caso tenha uma duvida",
                            value: "opc1",
                            emoji: "❓"
                        },
                        {
                            label: "Compras",
                            description: "Ticket caso queira fazer uma compra",
                            value: "opc2",
                            emoji: "🛒"
                        },
                        {
                            label: "Parcerias",
                            description: "Ticket caso queira fazer uma parceria",
                            value: "opc3",
                            emoji: "🤝"
                        },
                        {
                            label: "Denuncias",
                            description: "Ticket caso queira fazer uma denuncia",
                            value: "opc4",
                            emoji: "⚠️"
                        }
                    )
            );

            interaction.reply({ content: `✅ Mensagem enviada!`, ephemeral: true })
            interaction.channel.send({ embeds: [embed], components: [painel] })
        }


    }
}