export class AtDMSkillRollDialog extends Dialog {
  constructor(title, skillRoll, html, options) {
    options.classes.push("skillroll");
    options.width = 500;

    let conf = {
      title: title,
      content: html,
      buttons: {
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize("ATDM.ui.cancel"),
          callback: () => { this.close() }
        },
        submit: {
          icon: '<i class="fas fa-check"></i>',
          label: game.i18n.localize("ATDM.ui.submit"),
          callback: async (html) => {
            const formula = html.find("#formula").val();
            const difficulty = html.find("#difficulty").val();
            const clumsyRange = html.find("#clumsyRange").val();
            const maxResult = html.find("#maxResult").val();
            const skillScore = html.find("#skillScore").val();
            const skillName = html.find("#skillName").val();
            const parameters = {
              label : skillName,
              formula : formula,
              difficulty : parseInt(difficulty),
              clumsyRange : parseInt(clumsyRange),
              maxResult : parseInt(maxResult),
              skillScore : parseInt(skillScore)
            }
            return skillRoll.roll(parameters);
          }
        }
      },
      default: "submit"
    };
    super(conf, options);
    // this.skillRoll = skillRoll;
  }

  static async create(title, skillRoll, dialogTemplateData) {
    let options = { classes: ["atdm", "dialog"], height: "fit-content", "z-index": 99999 };
    const html = await renderTemplate("systems/atdm/templates/dialogs/skillcheck-dialog.hbs", dialogTemplateData);
    return new AtDMSkillRollDialog(title, skillRoll, html, options).render(true);
  }

  // activateListeners(html) {
  //   super.activateListeners(html);
  // }
}
