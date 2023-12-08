const Discord = require('discord.js')
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const FiveM = require('fivem-stats');
const server = new FiveM.Stats(`104.234.65.194:30120`)


// Links para os buttons
const loja = ""
const insta = ""
const regras = ""

module.exports = {
    name: 'setstats',
    description: 'Seta canal de status',
    Globally: false,
    Permissions: [Discord.PermissionFlagsBits.SendMessages],
    options: [{
        name: 'canal',
        description: 'Canal Liberar Id',
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true
    },
    {
        name: 'ip',
        description: 'Ip stats',
        type: Discord.ApplicationCommandOptionType.String,
        required: true
    },
    {
        name: 'connectip',
        description: 'Ip para conectar',
        type: Discord.ApplicationCommandOptionType.String,
        required: true
    },
    {
        name: 'connectbutton',
        description: 'link para conectar',
        type: Discord.ApplicationCommandOptionType.String,
        required: true
    },
    ],

    run: async (Client, inter) => {
        const dataAtual = `[` + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() + `]`



        server.getPlayers().then(players => {
            server.getMaxPlayers().then(max => {

                let Online = new Discord.EmbedBuilder()
                    .setTitle("``<:FHG:1149105222149488661>  Full House RP``")

                    //.setImage("")
                    .addFields(
                        { name: '> Status', value: '**```yaml\nONLINE\n```**', inline: true },
                        { name: '> Jogadores Online', value: `**\`\`\`yaml\n[ ${players} / ${max}]\n\`\`\`**`, inline: true },
                        { name: '> Ip connect', value: `**\`\`\`fix\n ${inter.options.getString('connectip')}\n\`\`\`**` },

                    )
                    .setColor("800080")
                    .setFooter({ text: `Atualizado acada 2 minutos. | Atualizado ultima vez as ${dataAtual}` })
                inter.options.getChannel('canal').send({ embeds: [Online], components: [row] }).then(async (msg) => {
                    await db.set(`statsmsg`, { msgid: msg.id, msgchannel: msg.channel.id, cip: inter.options.getString('connectip'), ipc: inter.options.getString('ip') })
                })
            })
        }).catch(error => {
            console.log(error)
            console.log(`SERVER OFFLINE!!!`)

            let Off = new Discord.EmbedBuilder()
            let connect = inter.options.getString('connectip')

                .addFields(
                    { name: '> Status', value: '**```yaml\n OffLine\n```**', inline: true },
                    { name: '> Jogadores Online', value: `**\`\`\`yaml\n[Server Off.]\n\`\`\`**`, inline: true },
                    { name: '> Ip connect', value: `**\`\`\`fix\n \n\`\`\`**` },

                )
                .setColor("800080")
                .setFooter({ text: `Atualizado acada 2 minutos. | Atualizado ultima vez as ${dataAtual}` })
            inter.options.getChannel('canal').send({ embeds: [Off], components: [row] }).then(async (msg) => {
                await db.set(`statsmsg`, { msgid: msg.id, msgchannel: msg.channel.id, cip: inter.options.getString('connectip'), ipc: inter.options.getString('ip') })
            })
        })

        inter.reply({ content: "Setup Iniciado", ephemeral: true })




    }


}