const { SlashCommandBuilder } = require('discord.js');
import { NftFilters } from '@alch/alchemy-web3';
import mintNFT from scripts/mint-NFT.js;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ifsc code')
		.setDescription('returns hash'),
	async execute(interaction, args) {
        let input = interaction.options.data(args);
		await interaction.reply(mintNFT(input));
	},
};
