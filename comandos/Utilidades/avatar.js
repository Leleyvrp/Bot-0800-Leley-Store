const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: `Veja a foto de usuário de um membro ou sua!`,
    type: Discord.ApplicationCommandType.ChatInput,
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],
  
    options: [
        {
            name: 'membro',
            type: Discord.ApplicationCommandOptionType.User,
            description: 'Informe o membro que você que ver o avatar',
            require: false,
        },
    ],
    run: async (client, interaction) => {

        let userMention = interaction.options.getUser('user');
        if (!userMention) {
            userMention = interaction.user;
        }
        let avatar = userMention.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        if (avatar) {
            const embed = new Discord.EmbedBuilder()
                .setTitle(`🖼 Avatar de ${userMention.username}`)
                .setImage(avatar)
                .setColor('Blue')

            const button = new Discord.ActionRowBuilder()
                .addComponents([
                    new Discord.ButtonBuilder()
                        .setLabel('Abrir avatar no navegador')
                        .setURL(avatar)
                        .setStyle(5)
                ])

            interaction.reply({ 
                embeds: [embed],
                components: [button]
            })
        } else {
            interaction.reply({
                embeds: [new Discord.EmbedBuilder()
                    .setColor('Red')
                    .setDescription(':error: **|** Nenhum avatar encontrado.')
                ], ephemeral: true
            })
        }
    },
}