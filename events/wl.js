require('../index')

const Discord = require('discord.js')

const client = require('../index')

const config = require("../config.json");


const { QuickDB } = require("quick.db")

const db = new QuickDB()

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "btlb") {
            if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
            const modal3 = new Discord.ModalBuilder()
                .setCustomId("modal3")
                .setTitle("Formulário");

            const pergunta1 = new Discord.TextInputBuilder()
                .setCustomId("pergunta1") // Coloque o ID da pergunta
                .setLabel("Qual É Seu Nome?") // Coloque a pergunta
                .setMaxLength(30) // Máximo de caracteres para a resposta
                .setMinLength(1) // Mínimo de caracteres para a respósta
                .setPlaceholder("Insira seu nome") // Mensagem que fica antes de escrever a resposta
                .setRequired(true) // Deixar para responder obrigatório (true | false)
                .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            const pergunta2 = new Discord.TextInputBuilder()
                .setCustomId("pergunta2") // Coloque o ID da pergunta
                .setLabel("Qual seu ID") // Coloque a pergunta
                .setMaxLength(30) // Máximo de caracteres para a resposta
                .setPlaceholder("Insira seu ID") // Mensagem que fica antes de escrever a resposta
                .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
                .setRequired(false)



            modal3.addComponents(
                new Discord.ActionRowBuilder().addComponents(pergunta1),
                new Discord.ActionRowBuilder().addComponents(pergunta2)
            )

            await interaction.showModal(modal3)
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "modal3") {
            let resposta1 = interaction.fields.getTextInputValue("pergunta1")
            let resposta2 = interaction.fields.getTextInputValue("pergunta2")


            if (!resposta1) resposta1 = "Não informado."
            if (!resposta2) resposta2 = "Não informado."

            let embed = new Discord.EmbedBuilder()
                .setColor("ff0000")
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`O usuário ${interaction.user} enviou o formulário abaixo:`)
                .addFields(
                    {
                        name: `Qual Seu Nome:`,
                        value: `**Nome:** \`${resposta1}\``,
                        inline: false
                    },
                    {
                        name: `Qual Seu ID:`,
                        value: `**ID:** \`${resposta2}\``,
                        inline: false
                    }
                );

            interaction.reply({ content: `Olá **${interaction.user.username}**, seu formulário foi enviado com sucesso!`, ephemeral: true }),
                await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })

            let member = interaction.member;

            let novoApelido = `${resposta1} | ${resposta2}`//coloque o apelido para adicionar no user

            await member.setNickname(novoApelido);

            const role = `${config.rolelb}`//id do cargo a adicionar ao usar após fazer o formilario
            const roler = `${config.rolelbr1}`//id do cargo a adicionar ao usar após fazer o formilario
            member.roles.add(role);
            member.roles.remove(roler);
        }
    }
})
