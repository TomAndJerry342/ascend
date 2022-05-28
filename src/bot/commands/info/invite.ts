import { Message, MessageEmbed } from 'discord.js';
import { DescriptionTypes } from '../_example.js';
import config from '../../../utils/readConfig.js';

export default async function (message: Message, args: string[]) {
  const embed = new MessageEmbed()
    .setTitle(`Invite for \`${config.botName}\``)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${message.client.user?.id}&permissions=412317248576&scope=bot%20applications.commands`);

  message.channel.send({embeds: [embed]});
}

export const description: DescriptionTypes = {
  name: 'invite',
  aliases: ['botinvite'],
  description: 'Provides an invite link for the bot',
  usage: '',
};