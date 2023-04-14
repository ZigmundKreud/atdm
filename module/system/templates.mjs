/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */

export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // ACTOR
    "systems/atdm/templates/actors/actor-sheet.hbs",
    "systems/atdm/templates/actors/parts/actor-combat-partial.hbs",
    "systems/atdm/templates/actors/parts/actor-effects-partial.hbs",
    "systems/atdm/templates/actors/parts/actor-inventory-partial.hbs",
    "systems/atdm/templates/actors/parts/actor-magic-partial.hbs",
    "systems/atdm/templates/actors/parts/actor-skills-partial.hbs",
    "systems/atdm/templates/actors/parts/actor-stats-partial.hbs",
    // ITEM
    "systems/atdm/templates/items/item-sheet.hbs",
    "systems/atdm/templates/items/parts/equipment-partial.hbs",
    "systems/atdm/templates/items/parts/skill-partial.hbs"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
