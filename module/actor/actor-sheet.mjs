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
      width: 715,
      height: 900,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }]
    });
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
    html.find(".item-edit").click(this._onEditItem.bind(this));
    html.find(".item-delete").click(this._onDeleteItem.bind(this));
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    const actorData = super.getData(options);
    actorData.system = this.actor.system;
    actorData.config = game.atdm.config;
    actorData.skills = this.actor.skills;
    actorData.skillGroups = this.actor.skillGroups;
    return actorData;
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
    console.log(li);
    const id = li.data("itemId");
    console.log(id);
    let document = this.actor.items.get(id);
    return document.sheet.render(true);
  }

  /**
   * @description Delete the selected item
   * @param event
   * @private
   */
  _onDeleteItem(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const itemId = li.data("itemId");
    this.actor.deleteEmbeddedDocuments("Item",[itemId]);
  }
}
