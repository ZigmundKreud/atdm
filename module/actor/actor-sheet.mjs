import {ATDM} from "../system/config.mjs";
import {AtDMSkillRoll} from "../system/roll.mjs";
import {onManageActiveEffect, prepareActiveEffectCategories} from "../helpers/effects.mjs";
/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class AtDMActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["atdm", "sheet", "actor"],
      template: "systems/atdm/templates/actors/actor-sheet.hbs",
      top: 0,
      left: 0,
      width: 750,
      height: 900,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    // Render the item sheet for viewing/editing prior to the editable check.
    html.find(".item-edit").click(this._onEditItem.bind(this));
    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    // Active Effect management
    html.find(".effect-control").click(ev => onManageActiveEffect(ev, this.actor));
    html.find('.item-create').click(this._onItemCreate.bind(this));
    html.find(".item-delete").click(this._onDeleteItem.bind(this));
    html.find(".rollable").click(this._onRoll.bind(this));
    html.find(".skill-rank").click(this._onUpdateSkillRank.bind(this, false));
    html.find(".skill-rank").contextmenu(this._onUpdateSkillRank.bind(this, true));
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const context = super.getData(options);
    // Use a safe clone of the actor data for further operations.
    const actorData = this.actor.toObject(false);
    context.system = actorData.system;
    context.flags = actorData.flags;
    context.config = game.atdm.config;
    this._prepareItems(context);
    // Add roll data for TinyMCE editors.
    // context.rollData = context.actor.getRollData();

    // Prepare active effects
    context.effects = prepareActiveEffectCategories(this.actor.effects);
    console.log(this.actor.effects);
    console.log(context);
    return context;
  }
  /* -------------------------------------------- */

  /** @override */
  // {left, top, width, height, scale}={}
  setPosition(options = {}) {
    // options = {left:0, top:0};
    const position = super.setPosition(options);
    // const sheetBody = this.element.find(".sheet-body");
    // const bodyHeight = position.height - 50;
    // sheetBody.css("height", bodyHeight);
    return position;
  }

  /**
   * @description Open the item sheet
   * For capacity, open the source of the item or the embededd item depending of OPEN_TYPE value
   * @param event
   * @private
   */
  _onEditItem(event) {
    event.preventDefault();
    const li = $(event.currentTarget).closest(".item");
    const id = li.data("itemId");
    let document = this.actor.items.get(id);
    return document.sheet.render(true);
  }


  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    // Grab any data associated with this control.
    const data = duplicate(header.dataset);
    // Initialize a default name.
    const name = `New ${type.capitalize()}`;
    // Prepare the item object.
    const itemData = {
      name: name,
      type: type,
      system: data
    };
    // Remove the type from the dataset since it's in the itemData.type prop.
    delete itemData.system["type"];

    // Finally, create the item!
    return await Item.create(itemData, {parent: this.actor});
  }

  /**
   * @description Delete the selected item
   * @param event
   * @private
   */
  _onDeleteItem(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const item = this.actor.items.get(li.data("itemId"));
    item.delete();
    li.slideUp(200, () => this.render(false));
    // this.actor.deleteEmbeddedDocuments("Item",[itemId]);
  }

  /**
   * @description Handles the dice rolling process when the user clicked on a rollable item.
   * @param event
   * @private
   */
  _onRoll(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const itemId = li.data("itemId");
    const itemData = this.actor.items.get(itemId);
    if(itemData) {
      switch(itemData.type) {
        case ATDM.itemTypes.SKILL :
          return AtDMSkillRoll.init(event, this.actor, itemData);
        default : return;
      }
    }
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareItems(context) {
    // Initialize containers.
    const gear = [];
    const features = [];
    const spells = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: []
    };

    // Iterate through items, allocating to containers
    for (let i of context.items) {
      i.img = i.img || DEFAULT_TOKEN;
      // Append to gear.
      if (i.type === 'equipment') {
        gear.push(i);
      }
      // Append to features.
      else if (i.type === 'feature') {
        features.push(i);
      }
      // Append to spells.
      else if (i.type === 'spell') {
        if (i.system.spellLevel != undefined) {
          spells[i.system.spellLevel].push(i);
        }
      }
    }

    // Assign and return
    context.skills = this.actor.skills;
    context.skillGroups = this.actor.skillGroups;
    context.gear = gear;
    context.features = features;
    context.spells = spells;
  }

  _onUpdateSkillRank(decr=false, event) {
    console.log(decr);
  }
}
