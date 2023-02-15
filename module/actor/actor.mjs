/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class AtDMActor extends Actor {

  prepareDerivedData(){
    const actorType = this.type;
    switch(actorType){
      case "character" : this.prepareCharacterDerivedData();  break;
      default: break;
    }
  }
  /**
   * Prepare Character type specific data
   */
  prepareCharacterDerivedData() {
    console.log("DERIVED | ", this);
    for (const [key, stat] of Object.entries(this.system.stats)) {
      this.system.stats[key].total = stat.base + stat.kin + stat.spec;
    }
    for (const [key, save] of Object.entries(this.system.saves)) {
      save.statBonus = this.system.stats[save.stat].total;
      this.system.saves[key].statBonus = save.statBonus;
      if(this.system.resources.lvl > 0) {
        this.system.saves[key].lvl = this.computeRankBonus(this.system.resources.lvl);
      }
      this.system.saves[key].total = save.statBonus + save.lvl + save.kin + save.spec;
    }
    for (let skill of this.skills) {
      skill.prepareDerivedData()
    }
  }
  computeRankBonus(rank){
    if(rank ==0) return -25;
    if(rank <= 10) return rank*5;
    if(rank <= 20) return 50 + (rank-10)*2;
    if(rank > 20) return 70 + rank;
  }

  get skills() {
    return this.items.filter((item) => item.type === game.atdm.config.itemTypes.SKILL);
  }

  get skillGroups() {
    const skills = this.items.filter((item) => item.type === game.atdm.config.itemTypes.SKILL);
    console.log(skills);
    let skillGroups = [];
    for (const key of Object.keys(game.atdm.config.skills.categories)) {
      let group = {
        "category" : key,
        "items" : skills.filter((skill) => skill.system.category === key).sort((a,b) => a.name - b.name)
      }
      skillGroups.push(group);
    }
    console.log(skillGroups);
    return skillGroups;
  }

}