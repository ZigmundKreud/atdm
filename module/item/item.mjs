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
}
