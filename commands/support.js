const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const musicIcons = require('../UI/icons/musicicons.js');

module.exports = {
    name: "support",
    description: "Get support server link",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction, lang) => {
        try {
            const supportServerLink = "https://discord.gg/aTSPpZ6fhS";
            const githubLink = "https://github.com/Vtubejeje";
            const youtubeLink = "https://www.youtube.com/@Vtubeprime";

            const embed = new EmbedBuilder()
                .setColor('#b300ff')
                .setAuthor({
                    name: lang.support.embed.authorName,
                    iconURL: musicIcons.beats2Icon, 
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.description
                    .replace("{supportServerLink}", supportServerLink)
                    .replace("{githubLink}", githubLink)
                    .replace("{youtubeLink}", youtubeLink)
                )
                .setImage('https://cdn.discordapp.com/attachments/1314967275530485763/1350418764877004830/istockphoto-515831616-612x612.jpg?ex=67d6aafb&is=67d5597b&hm=7a4245ee9945d8f6a3e122bb351a1fa6e8fc8e3117d83020c5eb5a4840bd334e&')
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setAuthor({
                    name: lang.support.embed.error,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.errorDescription)
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};
