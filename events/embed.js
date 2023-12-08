require('../index')
    ;
const Discord = require('discord.js');

const client = require('../index');

const config = require("../config.json");

const moment = require("moment");

const { QuickDB } = require('quick.db');

const db = new QuickDB(); // using default driver

var data = new Date();

const dataAtual = `[` + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() + `]`

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "embed") {

            const embedal = new Discord.ModalBuilder()
                .setCustomId("embedal")
                .setTitle("Formulário");

            const pergunta1 = new Discord.TextInputBuilder()
                .setCustomId("pergunta1") // Coloque o ID da pergunta
                .setLabel("Titulo Do Embed") // Coloque a pergunta
                .setMaxLength(50) // Máximo de caracteres para a resposta
                .setPlaceholder("Insira seu nome") // Mensagem que fica antes de escrever a resposta
                .setRequired(true) // Deixar para responder obrigatório (true | false)
                .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)

            const pergunta2 = new Discord.TextInputBuilder()
                .setCustomId("pergunta2") // Coloque o ID da pergunta
                .setLabel("Descrisção Do Embed") // Coloque a pergunta
                .setMaxLength(200) // Máximo de caracteres para a resposta
                .setPlaceholder("Insira a url do seu icon") // Mensagem que fica antes de escrever a resposta
                .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
                .setRequired(true)

            const pergunta3 = new Discord.TextInputBuilder()
                .setCustomId("pergunta3") // Coloque o ID da pergunta
                .setLabel("titulo") // Coloque a pergunta
                .setMaxLength(30) // Máximo de caracteres para a resposta
                .setPlaceholder("Insira o titulo do seu embed") // Mensagem que fica antes de escrever a resposta
                .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
                .setRequired(false)

            const pergunta4 = new Discord.TextInputBuilder()
                .setCustomId("pergunta4") // Coloque o ID da pergunta
                .setLabel("Descrisção") // Coloque a pergunta
                .setMaxLength(30) // Máximo de caracteres para a resposta
                .setPlaceholder("Insira a descrição do seu embed") // Mensagem que fica antes de escrever a resposta
                .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
                .setRequired(false)

            embedal.addComponents(
                new Discord.ActionRowBuilder().addComponents(pergunta1),
                new Discord.ActionRowBuilder().addComponents(pergunta2),
                new Discord.ActionRowBuilder().addComponents(pergunta3),
                new Discord.ActionRowBuilder().addComponents(pergunta4)
            )

            await interaction.showModal(embedal)
        }
    } else if (interaction.isModalSubmit()) {
        if (interaction.customId === "embedal") {
            let resposta1 = interaction.fields.getTextInputValue("pergunta1")
            let resposta2 = interaction.fields.getTextInputValue("pergunta2")
            let resposta3 = interaction.fields.getTextInputValue("pergunta3")
            let resposta4 = interaction.fields.getTextInputValue("pergunta4")
            if (!resposta3) resposta3 = `0000ff`
            if (!resposta4) resposta4 = `a`
            
        let embed = new Discord.EmbedBuilder()
            .setTitle(resposta1)
            .setDescription(resposta2)
            .setColor(resposta3)
            .setFooter(resposta4);
                       

        interaction.reply({ content: `Olá **${interaction.user.username}**, Seu embed foi enviado com sucesso`, ephemeral: true }),
            interaction.channel.send({ embeds: [embed] })

    }}
})

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        if (interaction.customId === "enviar") {
            let embed = new Discord.EmbedBuilder()


                .setAuthor({
                    name: (resposta1),
                    url: (resposta3),
                    icon: (resposta2)
                },)

                .setColor("0000ff")
                .setTitle("Seja Bem Vindo Ao Seu Canal De Duvidas")
                .setDescription(`${interaction.user} Aqui E Onde Você Deve Mandar Fotos Da Sua Meta Diária`);

            interaction.reply({ content: `Olá **${interaction.user.username}**, Seu embed foi enviado com sucesso`, ephemeral: true }),
                interaction.channel.send({ embeds: [embed] })
        }
    }
})

