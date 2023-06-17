import {AtDMSkillRollDialog} from "../dialogs/dialog-roll.mjs";
import {AtDMChat} from "./chat.mjs";
import {Tables} from "./tables.mjs";
import {Utils} from "./utils.mjs";

class AtDMRoll {
    constructor(actor) {this.actor = actor;}
    dialog(label){}
    roll(){}
    chat(){}
}

export class AtDMSkillRoll extends AtDMRoll {

    constructor(skill, actor){
        super(actor);
        this._label = skill.name;
        this._roll = null;
        this._rollTotal = null;
        this._toolTip = null;
    }

    static async init(event, actor, skill){
        console.log(skill);
        let dialogTemplateData = {
            label : skill.name,
            img : skill.img,
            config : game.atdm.config,
            // formula : "min(175,max(0, 1d100x>95 + @skill + @difficulty))",
            formula : "1d100x>95 + @skill + @difficulty",
            skillScore : skill.system.total,
            clumsyRange : 5,
            maxResult : 9999,
            difficulty : 0,
        }
        return AtDMSkillRollDialog.create(skill.name, new AtDMSkillRoll(skill, actor), dialogTemplateData);
    }

    /**
     * 
     * @param {*} actor 
     * @returns 
     */
    async roll(parameters){
        // Construct the Roll instance
        let r = new Roll(parameters.formula, {skill: parameters.skillScore, difficulty: parameters.difficulty});
        console.log(parameters);
        await r.evaluate({async:true});
        // The parsed terms of the roll formula
        const die= r.terms[0].total;
        // The resulting equation after it was rolled
        const result = r.result;
        const total = (r.total > 0) ? (r.total <= parameters.maxResult) ? r.total : parameters.maxResult : 0;
        const clumsy = die < parameters.clumsyRange;
        const checkResult = Tables.check.skills.find(s => Utils.inRange(total, s.roll[0], s.roll[1]));
        const cardTemplateData = {
            label : parameters.label,
            img : parameters.img,
            die : die,
            dice : r.terms[0].results,
            result : result,
            total : total,
            checkResult : checkResult,
            clumsy : clumsy,
            skillScore : parameters.skillScore,
            difficulty : parameters.difficulty
        }
        const html = await renderTemplate("systems/atdm/templates/chat/skillcheck-card.hbs", cardTemplateData);
        // const html = await renderTemplate("systems/atdm/templates/chat/item-card.hbs", dialogTemplateData);
        // Execute the roll
        let chatObject = await r.toMessage({
            speaker: ChatMessage.getSpeaker({ actor: this.actor }),
            // flavor: html,
            content:html,
            rollMode: game.settings.get('core', 'rollMode'),
        }, {create:true});
        return;
        // this._toolTip = new Handlebars.SafeString(await r.getTooltip());
    }
    //
    // async chat(roll){
    //     await new AtDMChat(this.actor)
    //         .withTemplate('systems/atdm/templates/chat/skillcheck-card.hbs')
    //         .withData({
    //             label : parameters.label,
    //             die : die,
    //             dice : r.terms[0].results,
    //             result : result,
    //             total : total,
    //             checkResult : checkResult,
    //             clumsy : clumsy,
    //             skillScore : parameters.skillScore,
    //             difficulty : parameters.difficulty
    //         })
    //         .withRoll(roll._roll)
    //         .create();
    // }
}