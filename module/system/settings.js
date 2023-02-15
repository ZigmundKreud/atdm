export const registerSystemSettings = function() {
	/**
     * System settings
     */
	game.settings.register("atdm", "displayDifficulty", {
		name: "Affiche la difficulté",
		hint: "Active l'affichage de la difficulté sur les jets de compétences/attributs et d'armes.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		requiresReload: true
	});

}