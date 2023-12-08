require('../index')
;
const Discord = require('discord.js');

const client = require('../index');

const config = require("../config.json");

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
        if (interaction.customId === "painel_utilidades") {
            let opc = interaction.values[0]
            if (opc === "opc1") {
                interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos...`)
                setTimeout(() => {
                    try {
                        interaction.channel.delete()
                    } catch (e) {
                        return;
                    }
                }, 5000)
            }
        }
    }
})
