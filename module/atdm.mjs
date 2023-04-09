import {AtDMItemSheet} from "./item/item-sheet.mjs";
import {AtDMActor} from "./actor/actor.mjs";
import {AtDMItem} from "./item/item.mjs";
import {registerSystemSettings} from "./system/settings.mjs";
import {preloadHandlebarsTemplates} from "./system/templates.mjs";
import {registerHandlebarsHelpers} from "./system/helpers.mjs";
import registerHooks from "./system/hooks.mjs";
import {ATDM} from "./system/config.mjs";
import {Tables} from "./system/tables.mjs";
import {AtDMActorSheet} from "./actor/actor-sheet.mjs";

Hooks.once('init', async function () {

    game.atdm = {
        config:ATDM,
        tables:Tables
    };

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    // formula: "2d10+@attributes.mind.value+@aptitudes.init.value",
    CONFIG.Combat.initiative = {
        formula: "2d10",
        decimals: 0
    };

    // Define custom Entity classes
    CONFIG.Actor.documentClass = AtDMActor;
    CONFIG.Item.documentClass = AtDMItem;
    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemSheet);
    Actors.registerSheet("atdm", AtDMActorSheet, {makeDefault: true});
    Items.registerSheet("atdm", AtDMItemSheet, {makeDefault: true});
    // Register System Settings
    registerSystemSettings();
    await preloadHandlebarsTemplates();
    registerHandlebarsHelpers();
    registerHooks();
});


/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {
    // console.debug("Importing data");
    console.info("System Initialized.");
});
