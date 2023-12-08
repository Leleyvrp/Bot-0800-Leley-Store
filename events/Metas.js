require('../index')

const Discord = require('discord.js')

const client = require('../index')

const config = require("../config.json");

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
        if (interaction.customId === "painel_meta") {
            let opc = interaction.values[0]
            if (opc === "opc1") {

                let nome = `🧾┃meta ${interaction.user.username}`;
                let categoria = `${config.meta}` // Coloque o ID da categoria
                let Cargo = `${config.metar}`
                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um meta aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
                } else {
                    interaction.guild.channels.create({
                        name: nome,
                        type: Discord.ChannelType.GuildText,
                        parent: categoria,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.id,
                                deny: [
                                    Discord.PermissionFlagsBits.ViewChannel
                                ]
                            },
                            {
                                id: interaction.user.id,
                                allow: [
                                    Discord.PermissionFlagsBits.ViewChannel,
                                    Discord.PermissionFlagsBits.SendMessages,
                                    Discord.PermissionFlagsBits.AttachFiles,
                                    Discord.PermissionFlagsBits.EmbedLinks,
                                    Discord.PermissionFlagsBits.AddReactions
                                ]
                            },
                            {
                                id: Cargo,
                                allow: [
                                    Discord.PermissionFlagsBits.ViewChannel,
                                    Discord.PermissionFlagsBits.SendMessages,
                                    Discord.PermissionFlagsBits.AttachFiles,
                                    Discord.PermissionFlagsBits.EmbedLinks,
                                    Discord.PermissionFlagsBits.AddReactions
                                ]
                            },
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, Seu canal de foi aberto: ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("ff0000")
                            .setTitle("Seja Bem Vindo Ao Seu Canal De Metas")
                            .setDescription(`${interaction.user} Aqui E Onde Você Deve Mandar Fotos Da Sua Meta Diária`);
                        let painel = new Discord.ActionRowBuilder().addComponents(
                            new Discord.SelectMenuBuilder()
                                .setCustomId("painel_utilidades")
                                .setPlaceholder("Para solicitar ajudas efetue a abertura de meta Aqui.")
                                .addOptions(
                                    {
                                        label: "Fechar Canal",
                                        description: "Fecha o canal caso tenha tomado pd ou algo parecido",
                                        value: "opc1",
                                        emoji: "🔫"
                                    }
                                )
                        );

                        ch.send({ embeds: [embed], components: [painel] }).then({
                        })
                    })
                }

            }
        }
    }
})
