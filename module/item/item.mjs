import {AtDMActor} from "../actor/actor.mjs";

/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class AtDMItem extends Item {

  prepareDerivedData() {
    const itemType = this.type;
    switch(itemType){
      case "skill" : this.prepareSkillDerivedData();  break;
      default: break;
    }
  }

  prepareSkillDerivedData(){
    // console.log("DERIVED | ",this.system.stat);
    if(this.name) this.system.slug = this.name.slugify({ strict: true });
    if(this.actor) this.system.statBonus = this.computeStatBonus(this.actor);
    this.system.rankBonus = this.computeRankBonus(this.system.rank);
    this.system.total = this.system.rankBonus + this.system.statBonus + this.system.vocBonus + this.system.kinBonus + this.system.itemBonus + this.system.specialBonus;
  }
  computeRankBonus(rank){
    if(rank ==0) return -25;
    if(rank <= 10) return rank*5;
    if(rank <= 20) return 50 + (rank-10)*2;
    if(rank > 20) return 70 + rank;
  }
  computeStatBonus(actor){
    if(this.system.stat && actor.system.stats[this.system.stat]) {
      const actorStat = actor.system.stats[this.system.stat];
      return actorStat.total;
    }
    else return 0;
  }

  /* -------------------------------------------- */
  /*  Chat Message Helpers                        */
  /* -------------------------------------------- */

  /**
   * Apply listeners to chat messages.
   * @param {HTML} html  Rendered chat message.
   */
  static chatListeners(html) {
    html.on("click", ".card-buttons button", this._onChatCardAction.bind(this));
  }

  /**
   * Handle execution of a chat card action via a click event on one of the card buttons
   * @param {Event} event       The originating click event
   * @returns {Promise}         A promise which resolves once the handler workflow is complete
   * @private
   */
  static async _onChatCardAction(event) {
    event.preventDefault();
    // Extract card data
    const button = event.currentTarget;
    button.disabled = true;
    const card = button.closest(".chat-card");
    const messageId = card.closest(".message").dataset.messageId;
    const message = game.messages.get(messageId);
    const action = button.dataset.action;
    console.log("CARD ACTION");
    // const messageId = card.closest(".message").dataset.messageId;
    // const message = game.messages.get(messageId);
    // const action = button.dataset.action;
    //
    // // Recover the actor for the chat card
    // const actor = await this._getChatCardActor(card);
    // if ( !actor ) return;
    //
    // // Validate permission to proceed with the roll
    // const isTargetted = action === "save";
    // if ( !( isTargetted || game.user.isGM || actor.isOwner ) ) return;
    //
    // // Get the Item from stored flag data or by the item ID on the Actor
    // const storedData = message.getFlag("dnd5e", "itemData");
    // const item = storedData ? new this(storedData, {parent: actor}) : actor.items.get(card.dataset.itemId);
    // if ( !item ) {
    //   const err = game.i18n.format("DND5E.ActionWarningNoItem", {item: card.dataset.itemId, name: actor.name});
    //   return ui.notifications.error(err);
    // }
    // const spellLevel = parseInt(card.dataset.spellLevel) || null;
    //
    // // Handle different actions
    // let targets;
    // switch ( action ) {
    //   case "attack":
    //     await item.rollAttack({
    //       event: event,
    //       spellLevel: spellLevel
    //     });
    //     break;
    //   case "damage":
    //   case "versatile":
    //     await item.rollDamage({
    //       event: event,
    //       spellLevel: spellLevel,
    //       versatile: action === "versatile"
    //     });
    //     break;
    //   case "formula":
    //     await item.rollFormula({event, spellLevel}); break;
    //   case "save":
    //     targets = this._getChatCardTargets(card);
    //     for ( let token of targets ) {
    //       const speaker = ChatMessage.getSpeaker({scene: canvas.scene, token: token.document});
    //       await token.actor.rollAbilitySave(button.dataset.ability, { event, speaker });
    //     }
    //     break;
    //   case "toolCheck":
    //     await item.rollToolCheck({event}); break;
    //   case "placeTemplate":
    //     try {
    //       await dnd5e.canvas.AbilityTemplate.fromItem(item)?.drawPreview();
    //     } catch(err) {}
    //     break;
    //   case "abilityCheck":
    //     targets = this._getChatCardTargets(card);
    //     for ( let token of targets ) {
    //       const speaker = ChatMessage.getSpeaker({scene: canvas.scene, token: token.document});
    //       await token.actor.rollAbilityTest(button.dataset.ability, { event, speaker });
    //     }
    //     break;
    // }
    //
    // // Re-enable the button
    // button.disabled = false;
  }

}
