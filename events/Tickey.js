require('../index');

const Discord = require('discord.js');

const client = require('../index');

const config = require("../config.json");

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
        if (interaction.customId === "painel_ticket") {
            let opc = interaction.values[0]
            if (opc === "opc1") {

                let nome = `❓┃Duvidas ${interaction.user.username}`;
                let categoria = `${config.ticketdiv}` // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
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
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("0000ff")
                            .setTitle("Seja Bem Vindo Ao Seu Canal De Duvidas")
                            .setDescription(`${interaction.user} Aqui E Onde Você Deve Mandar Fotos Da Sua Meta Diária`);
                        let painel = new Discord.ActionRowBuilder().addComponents(
                            new Discord.SelectMenuBuilder()
                                .setCustomId("painel_utilidades2")
                                .setPlaceholder("Para solicitar ajudas efetue a abertura de Ticket Aqui.")
                                .addOptions(
                                    {
                                        label: "Fechar Canal",
                                        description: "Fecha o canal caso tenha tomado pd ou algo parecido",
                                        value: "opc1",
                                        emoji: "🔫"
                                    },
                                    {
                                        label: "Criar Canal de voz",
                                        description: "Cria Canal de voz para uma call de alinhamento ou algo importante",
                                        value: "opc2",
                                        emoji: "🗣️"
                                    }
                                )
                        );

                        ch.send({ embeds: [embed], components: [painel] }).then({
                        })
                    })
                }

            } else if (opc === "opc2") {

                let nome = `🛒┃Compra ${interaction.user.username}`;
                let categoria = `${config.ticketcomp}` // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
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
                            }
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("0000ff")
                            .setTitle("Seja Bem Vindo Ao Seu Canal De Compras")
                            .setDescription(`${interaction.user} Aqui E Onde Você Deve Mandar Fotos Da Sua Meta Diária`);
                        let painel = new Discord.ActionRowBuilder().addComponents(
                            new Discord.SelectMenuBuilder()
                                .setCustomId("painel_utilidades2")
                                .setPlaceholder("Para solicitar ajudas efetue a abertura de Ticket Aqui.")
                                .addOptions(
                                    {
                                        label: "Fechar Canal",
                                        description: "Fecha o canal caso tenha tomado pd ou algo parecido",
                                        value: "opc1",
                                        emoji: "🔫"
                                    },
                                    {
                                        label: "Criar Canal de voz",
                                        description: "Cria Canal de voz para uma call de alinhamento ou algo importante",
                                        value: "opc2",
                                        emoji: "🗣️"
                                    }
                                )
                        );

                        ch.send({ embeds: [embed], components: [painel] }).then({
                        })
                    })
                }

            } else if (opc === "opc3") {

                let nome = `🤝┃Parceria ${interaction.user.username}`;
                let categoria = `${config.ticketparc}` // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
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
                            }
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("0000ff")
                            .setTitle("Seja Bem Vindo Ao Seu Canal De Parcerias")
                            .setDescription(`${interaction.user} Aqui E Onde Você Deve Mandar Fotos Da Sua Meta Diária`);
                        let painel = new Discord.ActionRowBuilder().addComponents(
                            new Discord.SelectMenuBuilder()
                                .setCustomId("painel_utilidades2")
                                .setPlaceholder("Para solicitar ajudas efetue a abertura de Ticket Aqui.")
                                .addOptions(
                                    {
                                        label: "Fechar Canal",
                                        description: "Fecha o canal caso tenha tomado pd ou algo parecido",
                                        value: "opc1",
                                        emoji: "🔫"
                                    },
                                    {
                                        label: "Criar Canal de voz",
                                        description: "Cria Canal de voz para uma call de alinhamento ou algo importante",
                                        value: "opc2",
                                        emoji: "🗣️"
                                    }
                                )
                        );

                        ch.send({ embeds: [embed], components: [painel] }).then({
                        })
                    })
                }

            } else if (opc === "opc4") {

                let nome = `⚠️┃Denuncia  ${interaction.user.username}`;
                let categoria = `${config.ticketdel}` // Coloque o ID da categoria

                if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

                if (interaction.guild.channels.cache.find(c => c.name === nome)) {
                    interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
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
                            }
                        ]
                    }).then((ch) => {
                        interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
                        let embed = new Discord.EmbedBuilder()
                            .setColor("0000ff")
                            .setTitle("Seja Bem Vindo Ao Seu Canal De Denuncias")
                            .setDescription(`${interaction.user} Aqui E Onde Você Deve Mandar Fotos Da Sua Meta Diária`);
                        let painel = new Discord.ActionRowBuilder().addComponents(
                            new Discord.SelectMenuBuilder()
                                .setCustomId("painel_utilidades2")
                                .setPlaceholder("Para solicitar ajudas efetue a abertura de Ticket Aqui.")
                                .addOptions(
                                    {
                                        label: "Fechar Canal",
                                        description: "Fecha o canal caso tenha tomado pd ou algo parecido",
                                        value: "opc1",
                                        emoji: "🔫"
                                    },
                                    {
                                        label: "Criar Canal de voz",
                                        description: "Cria Canal de voz para uma call de alinhamento ou algo importante",
                                        value: "opc2",
                                        emoji: "🗣️"
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
