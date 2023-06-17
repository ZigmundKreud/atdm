import {AtDMItem} from "../item/item.mjs";

export default function registerHooks() {
    /**
     * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
     */
    Hooks.once("ready", async () => {
        // console.debug("Importing data");
        console.info("System Initialized.");
    });
    /**
     * Hooks to attach listeners to chat message buttons to enable action chains from the chat
     */
    Hooks.on("renderChatLog", (app, html, data) => AtDMItem.chatListeners(html));
    Hooks.on("renderChatPopout", (app, html, data) => AtDMItem.chatListeners(html));
}
