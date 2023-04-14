export const Tables = {};

Tables.check = {
    skills : [
        {"roll" : [0, 4], "resolution" : "fumble", "success" : false, "fumble":true, "partial":false, "critical":false},
        {"roll" : [5, 74], "resolution" : "failure", "success" : false, "fumble":false, "partial":false, "critical":false},
        {"roll" : [75, 99], "resolution" : "partial", "success" : true, "fumble":false, "partial":true, "critical":false},
        {"roll" : [100, 174], "resolution" : "success", "success" : true, "fumble":false, "partial":false, "critical":false},
        {"roll" : [175, 9999], "resolution" : "critical", "success" : true, "fumble":false, "partial":false, "critical":true}
    ],
    saves : {}
}
Tables.attacks = {
    edged : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 9, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 17, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 19, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 21, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 23, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 17, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 25, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 18, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 27, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 11, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 21, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 17, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 11, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 22, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 21, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 38, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 24, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 42, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 27, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 46, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 37, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 20, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 50, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 40, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 33, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 22, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}}
    ],
    blunt : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 9, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 11, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 12, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 12, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 13, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 14, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 15, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 15, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 17, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 19, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 17, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 19, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 21, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 18, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 15, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 22, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 19, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 21, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 23, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 20, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 22, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 22, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 23, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 17, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 29, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 24, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 24, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 17, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 32, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 25, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 36, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 19, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}}
    ],
    missile : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 11, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 18, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 19, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 19, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 21, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 21, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 23, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 23, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 25, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 25, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 23, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 27, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 25, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 15, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 29, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 31, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 27, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 17, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 33, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 32, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 35, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 33, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 29, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 19, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 37, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 20, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}}
    ],
    unarmed : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 15, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 19, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 18, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 13, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 24, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 22, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 18, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 24, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 20, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}}
    ],
    area : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 4, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 5, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 6, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 15, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 9, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 20, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 21, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 12, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 22, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 24, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 20, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 15, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 26, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 28, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 24, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 18, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 20, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 18, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}}
    ],
    bolt : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 5, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 6, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 16, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 21, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 24, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 15, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 27, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 15, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 30, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 32, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 19, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 20, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 20, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 36, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 38, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 25, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 24, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 24, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 40, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 26, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 42, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 31, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}}
    ],
    beast : [
        {"roll" : [0, 10], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : true}},
        {"roll" : [11, 35], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [36, 40], "NA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false }, "LA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "MA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}, "HA" : { "dmg": null, "critType" : "-", "miss" : true, "crit" : false, "clumsy" : false}},
        {"roll" : [41, 45], "NA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [46, 50], "NA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [51, 55], "NA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [56, 60], "NA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 0, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [61, 65], "NA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 1, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [66, 70], "NA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 2, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [71, 75], "NA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false }, "LA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "MA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}, "HA" : { "dmg": 3, "critType" : "-", "miss" : false, "crit" : false, "clumsy" : false}},
        {"roll" : [76, 80], "NA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 4, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [81, 85], "NA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 5, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [86, 90], "NA" : { "dmg": 12, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 8, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [91, 95], "NA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 6, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [96, 100], "NA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "-", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [101, 105], "NA" : { "dmg": 15, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 11, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 7, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [106, 110], "NA" : { "dmg": 17, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 10, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 8, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [111, 115], "NA" : { "dmg": 19, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 13, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 11, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 9, "critType" : "Sup", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [116, 120], "NA" : { "dmg": 23, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 14, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 10, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [121, 125], "NA" : { "dmg": 26, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 12, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [126, 130], "NA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 14, "critType" : "Lig", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [131, 135], "NA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 16, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [136, 140], "NA" : { "dmg": 32, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 20, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 18, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [141, 145], "NA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 24, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 20, "critType" : "Mod", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [146, 150], "NA" : { "dmg": 36, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 24, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 22, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [151, 155], "NA" : { "dmg": 38, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 26, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 24, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [156, 160], "NA" : { "dmg": 40, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 26, "critType" : "Gri", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [161, 165], "NA" : { "dmg": 42, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 32, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 28, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [166, 170], "NA" : { "dmg": 44, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 32, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 30, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}},
        {"roll" : [171, 175], "NA" : { "dmg": 46, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false }, "LA" : { "dmg": 36, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "MA" : { "dmg": 34, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}, "HA" : { "dmg": 32, "critType" : "Let", "miss" : false, "crit" : true, "clumsy" : false}}
    ]
}
Tables.critical = {
    beast: [
        {
            "roll": [0, 5], "caption": "Votre coup est puissant, mais porté à plat.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts.",
                    "attackerEffect": "Attaquant : Maladresse d’Arme (utilisez la Table de Maladresse appropriée).",
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20], "caption": "Votre frappe ripe le long du corps de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +6 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [21, 35], "caption": "Votre coup est solidement porté.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [36, 50], "caption": "Votre cible l’a bien senti, celui-là.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +13 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "13",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [51, 65], "caption": "Votre cible titube sous la force de votre coup.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [66, 79], "caption": "Votre coup provoque une entaille.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Saignement (3 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Vous portez un coup déchirant sur un membre supérieur.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Saignement (3 PV), Sonnée, -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [90, 99], "caption": "Vous portez un coup précis sur un membre inférieur.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +16 Dégâts, Saignement (5 PV), Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "16",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 5, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ayant quatre pattes ou plus",
                    "targetEffect": "Cible : -10 aux actions uniquement.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [100], "caption": "Vous frappez au cou, détruisant les principaux vaisseaux sanguins.", "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, Mourante, meurt après 6 Rounds, mais peut agir entre-temps.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 6
                    }]
                },
                {
                    "label": "Cible n’ayant pas de cou ou de vaisseaux sanguins",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, -20 aux actions uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "Vous frappez à plat sur la tête de la cible.", "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : +15 Dégâts, tombe inconsciente.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible sans tête ou portant une armure protégeant la tête",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [107, 109], "caption": "Vous écrasez le pied de la cible.", "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : +15 Dégâts, À Terre, Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ayant plus de deux pieds ou ne s’en servant pas",
                    "targetEffect": "Cible : -10 aux actions uniquement.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [110], "caption": "En plein dans l’aine !", "options": [
                {
                    "label": "Cible mammifère",
                    "targetEffect": "Cible : +20 Dégâts, Sonnée, -30 aux actions, tétanisée de douleur, stérilité définitive.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "paralyzed",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible non mammifère",
                    "targetEffect": "Cible : +20 Dégâts uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [111, 116],
            "caption": "Vous frappez dans la zone des yeux et aveuglez temporairement la cible.",
            "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : Sonnée et aveugle pendant 6 Rounds, puis -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": 6}, {
                        "type": "blind",
                        "value": null,
                        "duration": 6
                    }]
                },
                {
                    "label": "Cible sans yeux ou n’en ayant pas besoin",
                    "targetEffect": "Cible : +20 Dégâts uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [117, 119],
            "caption": "Votre frappe sectionne une artère principale sur un membre inférieur.",
            "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : Saignement (8 PV), -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 8, "duration": null}]
                },
                {
                    "label": "Cible sans système circulatoire",
                    "targetEffect": "Cible : +20 Dégâts, Sonnée uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [120], "caption": "En pleine poitrine !", "options": [
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : coeur détruit, mort instantanée.",
                    "attackerEffect": "Attaquant : Arme coincée dans ou sous le corps de la cible pendant 3 Rounds.",
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                },
                {
                    "label": "Cible portant une armure ou n’ayant pas de poitrine",
                    "targetEffect": "Cible : +30 Dégâts, Sonnée.",
                    "attackerEffect": "Attaquant : subit une Maladresse d’Arme.",
                    "extraDmg": "30",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 12
                    }]
                }
            ]
        },
        {
            "roll": [121, 126], "caption": "Vous sectionnez un membre supérieur.", "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : +15 Dégâts, Saignement (6 PV), Sonnée, membre inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible sans membres",
                    "targetEffect": "Cible : +25 Dégâts uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "25",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [127, 129],
            "caption": "Vous frappez droit à la tête et fracturez le crâne de la cible.",
            "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : +20 Dégâts, Inapte.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "incapacitated", "value": null, "duration": null}]
                },
                {
                    "label": "Cible n’ayant pas de crâne ou portant une armure Rigide protégeant la tête",
                    "targetEffect": "Cible : +30 Dégâts, Sonnée, attaquant subissant une Maladresse d’Arme.",
                    "attackerEffect": "Attaquant : subit une Maladresse d’Arme.",
                    "extraDmg": "30",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [130], "caption": "En pleine bouche !", "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : Mort instantanée.",
                    "attackerEffect": "Attaquant : Arme coincée dans les os du palais pendant 3 Rounds.",
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                },
                {
                    "label": "Cible n’ayant pas de bouche",
                    "targetEffect": "Cible : +40 Dégâts, Sonnée.",
                    "attackerEffect": "Attaquant : subit une Maladresse d’Arme.",
                    "extraDmg": "40",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136],
            "caption": "Vous frappez avec force au niveau du dos et brisez la colonne vertébrale de la cible.",
            "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : À Terre, paralysée à partir de la taille.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "paralyzed",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible sans colonne vertébrale",
                    "targetEffect": "Cible : coupée en deux, mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [137, 140], "caption": "Vous éventrez la cible et ses viscères se répandent.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Sonnée, Mourante, meurt après 6 Rounds, mais peut agir entre-temps à -40.",
                    "attackerEffect": "Attaquant : est recouvert de fluides corporels.",
                    "extraDmg": null,
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 6
                    }]
                }
            ]
        },
        {
            "roll": [141, 146], "caption": "Votre frappe vicieuse remonte vers le crâne.", "options": [
                {
                    "label": "Cible normale",
                    "targetEffect": "Cible : +30 Dégâts, mâchoire brisée, coma.",
                    "attackerEffect": null,
                    "extraDmg": "30",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible sans tête",
                    "targetEffect": "Cible : +50 Dégâts uniquement.",
                    "attackerEffect": null,
                    "extraDmg": "50",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [147, 149], "caption": "En plein dans l’oeil !", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée, tombe sur l’attaquant.",
                    "attackerEffect": "Attaquant : coincé sous la cible pendant 1 Round, +20 Dégâts et Bloqué 5 Rounds si la cible était notablement plus grande que lui.",
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [150], "caption": "Votre coup brutal détruit un organe vital.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": "Attaquant : bonus de +20 pour intimider les adversaires proches au prochain Round.",
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    cut: [
        {
            "roll": [0, 5], "caption": "Votre frappe est faible et ne pénètre pas.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : pas de Dégâts supplémentaires.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20], "caption": "Vous entaillez légèrement le mollet.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Saignement (1 PV).",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}]
                }
            ]
        },
        {
            "roll": [21, 35], "caption": "Vous entaillez l’épaule.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +2 Dégâts, Saignement (1 PV).",
                    "attackerEffect": null,
                    "extraDmg": "2",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}]
                }
            ]
        },
        {
            "roll": [36, 50], "caption": "Vous entaillez la poitrine.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts, Saignement (1 PV), -5 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": "-5",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65], "caption": "Vous entaillez l’avant-bras.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +4 Dégâts, Saignement (1 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [66, 79], "caption": "Votre lame pénètre dans le flanc.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +5 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (2 PV), Sonnée, -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 2, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Votre lame entaille largement la cuisse.", "options": [
                {
                    "label": "Cible portant une armure protégeant les jambes",
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas une armure protégeant les jambes",
                    "targetEffect": "Cible : +6 Dégâts, Saignement (3 PV), Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [90, 99], "caption": "Vous entaillez l’abdomen.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, Saignement (3 PV)",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, Saignement (6 PV), -30 aux actions. ",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [100], "caption": "Votre frappe vient scalper la tempe de la cible.", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +4 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (3 PV), Sonnée, -20 aux actions, oreille tranchée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "Votre coup touche une main (50% D/50% G).", "options": [
                {
                    "label": "Cible touchée à la main du bouclier",
                    "targetEffect": "Cible : +4 Dégâts, Sonnée, bouclier inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible touchée à la main d’arme",
                    "targetEffect": "Cible : Saignement (1 PV), Sonnée, 1d5 doigts sectionnés, -10 aux actions pour chaque doigt sectionné.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "special",
                    "activityMalusDuration": null,
                    "injury": "special",
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [107, 109],
            "caption": "Vous entaillez profondément la face interne de la jambe, sectionnant tendons et muscles.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Saignement (6 PV), Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [110], "caption": "Votre lame entaille profondément le bas de l’abdomen.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (6 PV), Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : éviscération, coma, Mourante, meurt après 12 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 12
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [111, 116], "caption": "Vous portez un coup puissant dans la poitrine de la cible.", "options": [
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +12 Dégâts, À Terre, Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +12 Dégâts, À Terre, Sonnée, -30 aux actions., Saignement (10 PV).",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 10, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [117, 119], "caption": "Votre coup vicieux atteint l’avant-bras du bras d’arme.", "options": [
                {
                    "label": "Cible portant une armure protégeant les bras",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, désarmée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "disarmed",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant les bras",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, désarmée, Saignement (10 PV), bras sectionné, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 10, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [120], "caption": "Votre lame s’abat sur le cou de la cible.", "options": [
                {
                    "label": "Cible portant une armure protégeant le cou",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (6 PV), Sonnée, protection détruite.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas une armure protégeant le cou",
                    "targetEffect": "Cible : Sonnée, gorge tranchée, Mourante, meurt après 8 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 8}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [121, 126],
            "caption": "Votre lame s’enfonce profondément dans l’épaule, sectionnant quasiment le bras.",
            "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (4 PV), Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas une armure Rigide",
                    "targetEffect": "Cible : +15 Dégâts, Saignement (10 PV), Sonnée, bras inutilisable, -50 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 10, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [127, 129], "caption": "Votre lame sectionne un pied.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : À Terre, Sonnée, Saignement (8 PV), -50 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 8, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [130], "caption": "En plein visage !", "options": [
                {
                    "label": "Cible portant un heaume (avec visière)",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (4 PV), Sonnée, -40 aux actions, heaume, dents et nez fendus, cicatrice permanente (-10 ALL).",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de heaume",
                    "targetEffect": "Cible : visage fendu, mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136],
            "caption": "Votre frappe puissante sectionne le bras d’arme au niveau du coude.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Saignement (12 PV), Sonnée, bras inutilisable, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 12, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [137, 140], "caption": "Votre frappe puissante sectionne la jambe au niveau du genou.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Saignement (15 PV), À Terre, Sonnée, ne peut plus marcher, -60 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "bleeding", "value": 15, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [141, 146],
            "caption": "Votre lame s’enfonce dans la poitrine de la cible, l’entaillant profondément et largement.",
            "options": [
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (8 PV), Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 8, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : poumons atteints, arrêt cardiaque immédiat, Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "inconscious", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [147, 149],
            "caption": "Votre lame pénètre Par le Flanc et sectionne la colonne vertébrale de la cible.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : chute immédiate, paralysie des membres postérieurs, -80 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-80",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "paralyzed",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [150], "caption": "Votre lame décapite la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    darkmagic: [
        {
            "roll": [0, 5],
            "caption": "Un coup oblique laisse une vilaine marque sur l’avant-bras de la cible.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20],
            "caption": "La cible esquive à moitié le coup, mais ne peut l’éviter complètement.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +6 Dégâts, Saignement (1 PV).",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}]
                }

            ]
        },
        {
            "roll": [21, 35],
            "caption": "L’énergie sombre déchire les muscles de la cuisse de la cible, la laissant endolorie.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +5 Dégâts, Sonnée, -5 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": "-5",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [36, 50],
            "caption": "La cible regrette instantanément d’avoir levé son bras pour Parer le coup.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Saignement (2 PV), lâche ce qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 2, "duration": null}]
                }

            ]
        },
        {
            "roll": [51, 65],
            "caption": "Le coup frappe violemment la poitrine de la cible, la laissant meurtrie et hagarde.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [66, 79],
            "caption": "La cible tombe au sol en hurlant de douleur, le flanc brûlé par une horrible explosion.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Saignement (2 PV), À Terre, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "bleeding", "value": 2, "duration": null}]
                }

            ]
        },
        {
            "roll": [80, 89], "caption": "Des flammes noires enveloppent la main gauche de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Saignement (3 PV), Sonnée, -10 aux actions, lâche tout ce qu’elle tient dans sa main gauche.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 3,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [90, 99],
            "caption": "La cible se tord de douleur tandis que d’horribles cloques suintantes apparaissent sur son abdomen, là où le coup l’a touchée.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +13 Dégâts, Saignement (4 PV), À Terre, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "13",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [100], "caption": "Un feu verdâtre et malsain dévore le côté de la tête de la cible.", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +10 Dégâts, +1 Dégâts d’Âme, Sonnée, casque détruit.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 1,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : +3 Dégâts d’Âme, inconsciente, oreille consumée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 3,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "Le coup ouvre une énorme entaille sur la cuisse de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +13 Dégâts, Saignement (6 PV), Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "13",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 6,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [107, 109], "caption": "Le coup, d’une puissance effroyable, détruit le genou.", "options": [
                {
                    "label": "Cible portant une armure de métal sur les jambes",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, -50 aux actions, armure détruite.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d'armure de métal sur les jambes",
                    "targetEffect": "Cible : +15 Dégâts, À Terre, Sonnée, -70 aux actions, jambe amputée au niveau du genou.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-70",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [110], "caption": "Des vrilles d’énergie noire ravagent le dos de l’ennemi.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +12 Dégâts, +3 Dégâts d’Âme, Saignement (3 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 3,
                        "duration": null
                    }, {"type": "soul", "value": 3, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : colonne vertébrale fracturée, paralysie, Mourante, meurt après 8 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 8
                    }, {"type": "paralyzed", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [111, 116],
            "caption": "La puanteur de la chair pourrie emplit l’air tandis que la corruption colonise la poitrine de la cible.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, +3 Dégâts d’Âme, Saignement (4 PV), Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 4,
                        "duration": null
                    }, {"type": "soul", "value": 3, "duration": null}]
                }

            ]
        },
        {
            "roll": [117, 119],
            "caption": "Une vague d’énergie noire s’abat sur le bras du bouclier de la cible, corrodant le métal, la chair et les os.",
            "options": [
                {
                    "label": "Cible portant un bouclier",
                    "targetEffect": "Cible : +9 Dégâts, +3 Dégâts d’Âme, Sonnée, bouclier détruit.",
                    "attackerEffect": null,
                    "extraDmg": "9",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 3,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de bouclier",
                    "targetEffect": "Cible : +16 Dégâts, +4 Dégâts d’Âme, Sonnée, -50 aux actions, bras inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "16",
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 4,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [120], "caption": "Le coup s’abat sur les cervicales.", "options": [
                {
                    "label": "Cible portant une armure Rigide protégeant le cou",
                    "targetEffect": "Cible : +9 Dégâts, +4 Dégâts d’Âme, Saignement (6 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "9",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 6,
                        "duration": null
                    }, {"type": "soul", "value": 4, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d'armure Rigide protégeant le cou",
                    "targetEffect": "Cible : tombe au sol en crachant du sang, Mourante, meurt après 6 Rounds d’une abominable agonie.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 6
                    }]
                }
            ]
        },
        {
            "roll": [121, 126],
            "caption": "Une explosion d’énergie maléfique consume entièrement le bas de la jambe de la cible, ne laissant derrière elle qu’un moignon flétri.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +14 Dégâts, À Terre, Sonnée, -70 aux actions, jambe inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "14",
                    "activityMalus": "-70",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [127, 129], "caption": "Le coup est si puissant qu’il détruit l’épaule de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +18 Dégâts, +3 Dégâts d’Âme, Saignement (6 PV), -30 aux actions, bras inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "18",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "soul",
                        "value": 3,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [130], "caption": "Le visage de la cible est atrocement mutilé.", "options": [
                {
                    "label": "Cible portant un heaume (avec visière)",
                    "targetEffect": "Cible : +15 Dégâts, +3 Dégâts d’Âme, les deux yeux sont crevés.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "blind", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 3,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de heaume (avec visière)",
                    "targetEffect": "Cible : Mourante, meurt après 5 Rounds, les énergies sombres dévorent son visage ; lancez 1D100 : sur 1-50, le cadavre de la cible se relève le jour suivant sous la forme d’un Laquais Mort-Vivant.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 5}]
                }
            ]
        },
        {
            "roll": [131, 136], "caption": "L’impact du coup se répercute sur les deux bras de la cible.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +16 Dégâts, +5 Dégâts d’Âme, Sonnée, -40 aux actions, laisse tomber ce qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": "16",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 5,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +6 Dégâts d’Âme, inconscience, les deux bras sont estropiés.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "soul",
                        "value": 6,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [137, 140],
            "caption": "La cible fixe avec incrédulité la masse de chair pourrie qui remplace sa jambe, puis s’écroule au sol.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Mourante, meurt après 8 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 8}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [141, 146],
            "caption": "L’abdomen de la cible explose dans une gerbe de sang noir et putride.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +6 Dégâts d’Âme, Saignement (15 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 15,
                        "duration": null
                    }, {"type": "soul", "value": 6, "duration": null}]
                }

            ]
        },
        {
            "roll": [147, 149],
            "caption": "Des lances de ténèbres pures se fichent dans les flancs de la cible, causant de terribles dommages aux organes internes.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : inconsciente, Mourante, meurt après 4 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 4}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [150], "caption": "La cible tombe au sol en hurlant, les ténèbres consumant son âme.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Mort instantanée, le corps se relève en tant que Laquais Mort-Vivant en 1d5 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    fire: [
        {
            "roll": [0, 5], "caption": "L’air autour de la cible se réchauffe.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +0 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "0",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20],
            "caption": "La chaleur est intense, la cible transpire beaucoup, mais pas d’effet supplémentaire.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [21, 35], "caption": "La cible souffre de brûlures superficielles mineures.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +8 Dégâts, Saignement (1 PV).",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}]
                }
            ]
        },
        {
            "roll": [36, 50], "caption": "Les émanations brûlantes aveuglent la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65], "caption": "Les vêtements de la cible prennent feu.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : 8 Dégâts par Round jusqu’à ce que le feu soit éteint, il faut 2 Actions Complètes pour éteindre le feu, tous les vêtements sont détruits après 10 Rounds en feu.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "burning", "value": 8, "duration": null}]
                }
            ]
        },
        {
            "roll": [66, 79], "caption": "La cible est projetée par un souffle de flammes hurlantes.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, les pièces d’armure et vêtements inflammables couvrant les pieds et les mollets sont détruits.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Le feu engloutit le bras d’arme de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Saignement (4 PV), Sonnée, lâche ce qu’elle tient, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [90, 99],
            "caption": "Les flammes frappent la cible à la poitrine et la font tourner sur elle-même.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, désarmée. La cible doit réaliser un Jet d’Évaluation au début du Round suivant, avec une pénalité Spéciale de -40.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "disarmed", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [100], "caption": "Projection de flammes en plein visage.", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +15 Dégâts, Saignement (3 PV), Sonnée, aveuglée pendant 3 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }, {"type": "blind", "value": null, "duration": 3}]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : inconscience, Saignement (6 PV), horrible cicatrice permanente (-10 ALL).",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "Le feu engloutit le dos de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, À Terre, Sonnée, tous les objets ou vêtements portés sur le dos sont détruits ou inutilisables.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [107, 109], "caption": "Les flammes brûlent la cuisse.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Saignement (5 PV), Sonnée, -60 aux actions, jambe inutilisable en raison de la brûlure profonde et de la perte de tissus.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "bleeding", "value": 5, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [110], "caption": "Les flammes s’enroulent autour du cou de la cible.", "options": [
                {
                    "label": "Cible portant une armure protégeant le cou",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (4 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant le cou",
                    "targetEffect": "Cible : coma, Mourante, meurt après 12 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 12}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [111, 116], "caption": "Le souffle de feu frappe le bras du bouclier.", "options": [
                {
                    "label": "Cible portant un bouclier",
                    "targetEffect": "Cible : Saignement (3 PV), Sonnée, -20 aux actions, bouclier détruit.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de bouclier",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (6 PV), Sonnée, -30 aux actions, bras brûlé jusqu’à l’os et inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [117, 119], "caption": "La cible inhale des fumées incandescentes.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Saignement (6 PV), À Terre et incapable d’effectuer une quelconque action pendant 6 Rounds à cause d’une toux incoercible, puis Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "incapacitated", "value": null, "duration": 6}]
                }
            ]
        },
        {
            "roll": [120],
            "caption": "Votre coup frappe la cible à la ceinture et l’embrase presque entièrement.",
            "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : Saignement (8 PV), À Terre, Sonnée, -60 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "bleeding", "value": 8, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : jambes consumées, Mourante, meurt après 6 Rounds de coma.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [121, 126],
            "caption": "Vous provoquez une puissante explosion de feu qui soulève la cible à 3 mètres de haut.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, désarmée ; de plus, la cible subit un Coup Critique Modéré d’Impact à cause de la chute.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "disarmed", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [127, 129], "caption": "Un brasier ardent pulvérise le bras d’arme de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Saignement (8 PV), Sonnée, -40 aux actions, bras inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 8, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [130], "caption": "Le feu engloutit la tête de la cible.", "options": [
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : l’armure fond sur la tête, Mourante, meurt après 5 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 5}]
                },
                {
                    "label": "Cible portant une armure non métallique",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (4 PV), Sonnée, -20 aux actions, armure détruite.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : s’effondre, Mourante, meurt après 10 minutes à cause des brûlures profondes et étendues.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "incapacitated", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136],
            "caption": "La cible est engloutie par les flammes et subit un choc thermique extrême.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +50 Dégâts, coma pendant 3 mois.",
                    "attackerEffect": null,
                    "extraDmg": "50",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [137, 140], "caption": "Les flammes enveloppent la tête de la cible.", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +15 Dégâts, aveugle pendant 2 semaines.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "blind", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}]
                }
            ]
        },
        {
            "roll": [141, 146], "caption": "Le souffle enflammé heurte la cible en pleine poitrine.", "options": [
                {
                    "label": "Cible portant une armure protégeant le torse",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (6 PV), Sonnée, armure détruite.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant le torse",
                    "targetEffect": "Cible : +20 Dégâts, Saignement (12 PV), Inapte.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 12, "duration": null}, {
                        "type": "incapacitated",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [147, 149],
            "caption": "La cible est totalement engloutie dans un torrent de flammes rugissantes détruisant toute matière organique et provoquant la fusion des pièces métalliques.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Mourante, meurt après 6 Rounds de douleur, de terreur et de hurlements.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}]
                }
            ]
        },
        {
            "roll": [150],
            "caption": "Tout ce qui reste de la cible est un petit tas fumant de cendres, de dents et d’os calcinés.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    frost: [
        {
            "roll": [0, 5], "caption": "Juste une brise fraîche.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +0 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "0",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20], "caption": "Un vent froid se lève.", "options": [
                {
                    "label": "Cible portant une cape ou des vêtements épais",
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas de cape ou de vêtement épais",
                    "targetEffect": "Cible : +6 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [21, 35], "caption": "Le froid mordant provoque des engelures.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +7 Dégâts, Saignement (1 PV).",
                    "attackerEffect": null,
                    "extraDmg": "7",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}]
                }
            ]
        },
        {
            "roll": [36, 50], "caption": "Vous provoquez un coup de froid sur la poitrine de la cible.", "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +5 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : ce qui précède, Saignement (2 PV), -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 2, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65], "caption": "Le froid s’insinue dans les lombaires de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +9 Dégâts, Sonnée, les objets de bois portés sur le dos sont maintenant gelés et cassants, inutilisables.",
                    "attackerEffect": null,
                    "extraDmg": "9",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [66, 79], "caption": "Le froid s’insinue jusque dans le bassin de la cible.", "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, engelure pelvienne, stérilité permanente.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Votre coup percute la cible dans le dos, la projetant au sol.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, désarmée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "disarmed",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [90, 99],
            "caption": "Le froid mordant s’en prend aux mains de la cible (1d10 : 1-4 gauche, 5-8 droite, 9-10 les deux).",
            "options": [
                {
                    "label": "Cible portant des gants",
                    "targetEffect": "Cible : +8 Dégâts, désarmée.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "disarmed", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de gants : perd 1d5 (ou 1d10) doigts, -5 aux actions pour chaque doigt perdu.",
                    "targetEffect": "Cible : perd 1d5 (ou 1d10) doigts, -5 aux actions pour chaque doigt perdu.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "special",
                    "activityMalusDuration": null,
                    "injury": "special",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [100], "caption": "Le froid mordant gèle le visage de la cible.", "options": [
                {
                    "label": "Cible portant des fourrures ou des vêtements épais autour de la tête",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de fourrure ou de vêtement épais autour de la tête",
                    "targetEffect": "Cible : coma d’un mois, perte du nez à la suite de graves engelures.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "La jambe de la cible gèle.", "options": [
                {
                    "label": "Cible portant une armure ou un vêtement épais couvrant les jambes",
                    "targetEffect": "Cible : +10 Dégâts, À Terre, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure ou de vêtement épais couvrant les jambes",
                    "targetEffect": "Cible : jambe inutilisable, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [107, 109], "caption": "Le coup de froid gèle la tempe de la cible.", "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +8 Dégâts, Sonnée, -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : +12 Dégâts, oreille gelée provoquant une pénalité permanente de -50 à la Perception auditive et -20 à tous les autres Jets de Perception.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [110], "caption": "Le coup de froid gèle la nuque de la cible.", "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +8 Dégâts, Saignement (2 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 2,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : coma pendant 3 semaines, paralysie à partir du cou à son réveil.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "paralyzed", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [111, 116],
            "caption": "Le froid se change en une fine stalactite de glace venant percuter la cible.",
            "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : Saignement (2 PV), À Terre, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 2,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : +13 Dégâts, -40 aux actions, engelures et un os cassé.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [117, 119], "caption": "Le froid gèle les pieds de la cible.", "options": [
                {
                    "label": "Cible portant des bottes lourdes",
                    "targetEffect": "Cible : +5 Dégâts, À Terre, Sonnée, bottes détruites.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de bottes",
                    "targetEffect": "Cible : +20 Dégâts, -60 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [120], "caption": "Le blizzard gelé frappe la cible en plein visage.", "options": [
                {
                    "label": "Cible portant des vêtements épais couvrant la tête",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (2 PV), Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 2,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de vêtement épais couvrant la tête",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (2 PV), Sonnée, -20 aux actions, aveugle, coma.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 2, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "blind", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [121, 126],
            "caption": "Le froid referme ses mâchoires de glace sur le bras de la cible (1d10 : 1-5 bras d’arme, 6-10 bras du bouclier).",
            "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (3 PV), Sonnée, lâche tout ce qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 3,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : bras gelé, brisé et inutilisable, inconscience, -50 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [127, 129], "caption": "La cible inhale un air beaucoup trop glacial.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, effectue un JdS-R contre un Niveau d’Attaque de 10 et, en cas d’échec, Mourante, meurt après 6 Rounds par congélation des fluides vitaux.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [130],
            "caption": "Le souffle glacial concentré sur le torse gèle la poitrine, brise les côtes et congèle le coeur et les poumons de la cible.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Mourante, meurt après 3 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 3}]
                }
            ]
        },
        {
            "roll": [131, 136], "caption": "Le froid intense enserre la poitrine de la cible.", "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +10 Dégâts, À Terre, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : Mourante, meurt après 10 Rounds d’une insuffisance cardio-respiratoire.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 10}]
                }
            ]
        },
        {
            "roll": [137, 140], "caption": "La cible, engloutie par le froid, commence à geler sur place.", "options": [
                {
                    "label": "Cible portant une armure ou des vêtements épais",
                    "targetEffect": "Cible : +20 Dégâts, Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d'armure ou de vêtement épais",
                    "targetEffect": "Cible : Mourante, meurt après 12 Rounds passés à frissonner et à exhaler le peu de chaleur restant dans le corps.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 12}]
                }
            ]
        },
        {
            "roll": [141, 146], "caption": "Les deux jambes de la cible gèlent.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +30 Dégâts, À Terre, Sonnée, -100 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "30",
                    "activityMalus": "-100",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [147, 149],
            "caption": "La tête de la cible est gelée. Bien conservée, mais tout de même morte.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [150],
            "caption": "La cible est changée en statue de glace, tombe au sol et se brise en mille morceaux.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    grapple: [
        {
            "roll": [0, 5], "caption": "Vous attrapez la cible sans parvenir à la bloquer.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : pas de Dégâts supplémentaires.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20], "caption": "Votre prise est trop légère, la cible se libère.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +2 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "2",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [21, 35],
            "caption": "Vous saisissez le bras de la cible, mais elle parvient à se libérer.",
            "options": [
                {
                    "label": "Cible portant d’amples manches longues",
                    "targetEffect": "Cible : +3 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [36, 50],
            "caption": "Vous entravez la jambe de la cible mais, en tournant sur elle-même, elle parvient à se libérer.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65], "caption": "Vous agrippez le bras du bouclier.", "options": [
                {
                    "label": "Cible portant un bouclier",
                    "targetEffect": "Cible : -50 aux actions jusqu’à ce qu’elle lâche son bouclier ou se libère.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-50",
                    "activityMalusDuration": "special",
                    "injury": "serious",
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas de bouclier",
                    "targetEffect": "Cible : Sonnée, -30 aux actions jusqu’à ce qu’elle se libère.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [66, 79], "caption": "Vous agrippez le bras d’arme.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +4 Dégâts, Sonnée, -20 aux actions, désarmée, entorse du poignet.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Vous enserrez la poitrine de la cible.", "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide",
                    "targetEffect": "Cible : 1d10 côtes cassées, +2 Dégâts et -5 aux actions pour chaque côte cassée.",
                    "attackerEffect": null,
                    "extraDmg": "2",
                    "activityMalus": "special",
                    "activityMalusDuration": null,
                    "injury": "special",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [90, 99], "caption": "Vous entravez la jambe de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts, À Terre, Bloquée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "held",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [100], "caption": "Vous entravez les deux jambes de la cible, qui tombe au sol.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +9 Dégâts, À Terre, Bloquée, ne peut pas se relever, -40 aux actions jusqu’à ce qu’elle se libère.",
                    "attackerEffect": null,
                    "extraDmg": "9",
                    "activityMalus": "-40",
                    "activityMalusDuration": "special",
                    "injury": "serious",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "held",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [101, 106],
            "caption": "Vous entravez le bras d’arme et, en cherchant à se libérer, la cible a les ligaments déchirés.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Bloquée, Sonnée, désarmée, -30 aux actions ; si l’attaquant maintient la saisie : 5 Dégâts par Round.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "held",
                        "value": null,
                        "duration": null
                    }, {"type": "disarmed", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [107, 109],
            "caption": "Votre prise enserre le cou et une épaule, vous liant à la cible.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Bloquée, -50 aux actions.",
                    "attackerEffect": "Attaquant : Bloqué, -50 aux actions, peut mettre fin à la saisie à tout moment.",
                    "extraDmg": null,
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "held", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [110],
            "caption": "Votre cible est complètement immobilisée au sol, mais est toujours consciente.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : peut essayer de se libérer à -60 ; si l’attaquant maintient la saisie : 8 Dégâts par Round.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [111, 116], "caption": "Votre puissante prise déséquilibre la cible.", "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +8 Dégâts, Sonnée, Bloquée, À Terre ; si l’attaquant maintient la saisie : 4 Dégâts par Round.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "held", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide",
                    "targetEffect": "Cible : +16 Dégâts, Sonnée, Bloquée, À Terre, -30 aux actions, côtes fêlées ; si l’attaquant maintient la saisie : 4 Dégâts par Round.",
                    "attackerEffect": null,
                    "extraDmg": "16",
                    "activityMalus": "-30",
                    "activityMalusDuration": "special",
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "held",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [117, 119], "caption": "Votre prise au bras d’arme brise net le poignet.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, désarmée, -50 aux actions ; si l’attaquant maintient la saisie : +4 Dégâts par Round.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "disarmed",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [120], "caption": "Vous garrottez le cou de la cible.", "options": [
                {
                    "label": "Cible portant une armure Rigide protégeant le cou",
                    "targetEffect": "Cible : Sonnée, -60 aux actions jusqu’à ce qu’elle se libère.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-60",
                    "activityMalusDuration": "special",
                    "injury": "crippling",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "disarmed",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d'armure Rigide protégeant le cou",
                    "targetEffect": "Cible : strangulation, Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}]
                }
            ]
        },
        {
            "roll": [121, 126],
            "caption": "Votre prise désarticule le bras et projette l’adversaire au sol.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, À Terre, bras inutilisable, la cible lâche tout ce qu’elle tenait ; si l’attaquant maintient la saisie : 8 Dégâts par Round.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [127, 129], "caption": "La cible est prise au cou par l’arrière.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +5 Dégâts, Sonnée ; si l’attaquant maintient la saisie : 5 Dégâts par Round, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [130], "caption": "Vous bloquez fermement le cou de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Sonnée, -60 aux actions, perd connaissance en 6 Rounds si ne parvient pas à se libérer.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136], "caption": "Le pied de la cible est enchevêtré, la cible tombe mal.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, arme et bras brisés, -50 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [137, 140],
            "caption": "La cible est agrippée au niveau de la ceinture, projetée dans les airs, et retombe sur la tête.",
            "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -30 aux actions, entorse cervicale.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : crâne enfoncé et nuque brisée, mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [141, 146], "caption": "Les jambes de la cible sont enchevêtrées et la cible tombe.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Inapte, -80 aux actions à son réveil en raison de multiples fractures aux jambes.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-80",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "incapacitated", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [147, 149],
            "caption": "La cible est complètement enchevêtrée et sans défense, à la merci de l’attaquant.",
            "options": [
                {
                    "label": null,
                    "targetEffect": null,
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "held", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [150],
            "caption": "La cible est saisie si fortement à la tête que son crâne en est écrasé.",
            "options": [
                {
                    "label": "Cible portant un casque : coma.",
                    "targetEffect": "Cible : coma.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{
                        "type": "incapacitated",
                        "value": null,
                        "duration": null
                    }, {"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    impact: [
        {
            "roll": [0, 5], "caption": "Votre coup est faible et porte à plat.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : pas de dégâts supplémentaires.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }

            ]
        },
        {
            "roll": [6, 20], "caption": "Votre coup glisse le long de l’épaule.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +5 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }

            ]
        },
        {
            "roll": [21, 35], "caption": "Votre coup atteint la cuisse et provoque une vive douleur.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +5 Dégâts, -10 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": []
                }

            ]
        },
        {
            "roll": [36, 50], "caption": "Votre coup percute un avant-bras.", "options": [
                {
                    "label": "Cible avec arme ou bouclier",
                    "targetEffect": "Cible : lâche son arme ou son bouclier.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible sans arme ni bouclier",
                    "targetEffect": "Cible : Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65],
            "caption": "Vous frappez droit dans les côtes, la cible en a le souffle coupé.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +4 Dégâts, Sonnée, -40 aux actions pendant 1 Round.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": "-40",
                    "activityMalusDuration": "1",
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [66, 79], "caption": "Vous frappez aux côtes par le côté.", "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +6 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide",
                    "targetEffect": "Cible : +6 Dégâts, Sonnée, 1d5 côtes cassées, -5 aux actions pour chaque côte cassée.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": "special",
                    "activityMalusDuration": null,
                    "injury": "special",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Votre coup brise la main d’arme de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +8 Dégâts, Sonnée, -20 aux actions, lâche son arme.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [90, 99],
            "caption": "Votre coup s’enfonce dans l’abdomen de la cible et provoque une douleur fulgurante.",
            "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, -40 aux actions, muscles meurtris.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [100], "caption": "Vous frappez à plat sur la tête, la commotion perce les tympans.", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, -20 aux actions, -40 à la Perception auditive.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : +30 Dégâts, Sonnée, -20 aux actions, -40 à la Perception auditive, fracture du crâne, coma pendant 4 semaines.",
                    "attackerEffect": null,
                    "extraDmg": "30",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "Vous frappez à la cuisse.", "options": [
                {
                    "label": "Cible portant une armure protégeant les jambes",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant les jambes",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, fémur fracturé, -40 aux actions à la place.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [107, 109], "caption": "Votre coup disloque le genou de la cible.", "options": [
                {
                    "label": "Cible portant une armure protégeant les jambes",
                    "targetEffect": "Cible : +8 Dégâts, À Terre, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant les jambes",
                    "targetEffect": "Cible : +20 Dégâts, -60 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [110], "caption": "Votre frappe s’enfonce dans les lombaires.", "options": [
                {
                    "label": "Cible portant une armure protégeant le torse",
                    "targetEffect": "Cible : +10 Dégâts, À Terre, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant le torse",
                    "targetEffect": "Cible : -50 aux actions, vertèbre fêlée, risque de rester paralysée à partir de la taille si elle n’est pas traitée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [111, 116], "caption": "Votre coup heurte puissamment la poitrine de la cible.", "options": [
                {
                    "label": "Cible portant une armure Rigide protégeant le torse",
                    "targetEffect": "Cible : +10 Dégâts, À Terre, Sonnée, lâche toutes ses armes.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide protégeant le torse",
                    "targetEffect": "Cible : +20 Dégâts, -40 aux actions, sternum enfoncé.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [117, 119],
            "caption": "Vous frappez l’un des deux avant-bras (50% D, 50% G) et en fracturez les os.",
            "options": [
                {
                    "label": "Cible touchée au bras de bouclier",
                    "targetEffect": "Cible : Sonnée, bouclier inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible touchée au bras d’arme",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, -30 aux actions, arme lâchée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [120], "caption": "Vous frappez au cou.", "options": [
                {
                    "label": "Cible portant une armure Rigide protégeant le cou",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -20 aux actions, incapable de parler ou manger de la nourriture solide jusqu’à ce qu’elle reçoive des soins.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "silenced",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas une telle armure",
                    "targetEffect": "Cible : Sonnée, trachée écrasée, Mourante, meurt après 12 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 12
                    }]
                }
            ]
        },
        {
            "roll": [121, 126], "caption": "Votre coup brise un tibia.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, À Terre, Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [127, 129],
            "caption": "Votre coup désarticule une épaule, le bras est cassé et inutilisable.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [130], "caption": "Votre coup enfonce la mâchoire de la cible.", "options": [
                {
                    "label": "Cible portant un heaume (avec visière)",
                    "targetEffect": "Cible : +20 Dégâts, Sonnée, -30 aux actions, mâchoire brisée, incapable de parler ou manger de la nourriture solide jusqu’à ce qu’elle reçoive des soins.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "silenced",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de heaume",
                    "targetEffect": "Cible : mâchoire pénétrant les os du crâne, mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136], "caption": "Votre coup brise le coude du bras d’arme.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +20 Dégâts, Sonnée, -40 aux actions, bras inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }

            ]
        },
        {
            "roll": [137, 140], "caption": "Votre coup brise les os d’une hanche.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +35 Dégâts, À Terre, Sonnée, -75 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "35",
                    "activityMalus": "-75",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }

            ]
        },
        {
            "roll": [141, 146],
            "caption": "Votre coup heurte puissamment l’abdomen et écrase les entrailles de la cible.",
            "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas une telle protection",
                    "targetEffect": "Cible : +20 Dégâts, Saignement (12 PV), Sonnée, -40 aux actions, hémorragie interne.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 12, "duration": null}]
                }
            ]
        },
        {
            "roll": [147, 149],
            "caption": "Votre coup est si puissant qu’il broie la cage thoracique et son contenu.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : inconsciente, Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": 6
                    }]
                }

            ]
        },
        {
            "roll": [150],
            "caption": "Votre coup fait exploser la tête de la cible et en détruit le cerveau.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    lightning: [
        {
            "roll": [0, 5],
            "caption": "Les cheveux de la cible se dressent à cause de l’électricité statique.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +0 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "0",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20], "caption": "Une légère décharge ébranle la cible.", "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +3 Dégâts, et Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [21, 35], "caption": "La décharge engourdit les bras de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Sonnée, lâche tout objet métallique qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [36, 50], "caption": "La foudre circule à travers le corps de la cible.", "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +6 Dégâts, -5 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": "-5",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": []
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +6 Dégâts, -5 aux actions et Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": "-5",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65],
            "caption": "La décharge pénètre dans le corps de la cible Par le Flanc et se propage au reste du corps, causant quelques dégâts musculaires.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +9 Dégâts, Sonnée, -10 aux actions, lâche tout objet métallique qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": "9",
                    "activityMalus": "-10",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [66, 79],
            "caption": "La puissante décharge endommage le bras du bouclier de la cible.",
            "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +12 Dégâts, -20 aux actions, lâche tout objet métallique qu’elle tient (bouclier compris).",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": []
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -20 aux actions, lâche tout objet métallique qu’elle tient (bouclier compris).",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [80, 89],
            "caption": "La poitrine de la cible est foudroyée et son coeur s’arrête un moment.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, À Terre, Sonnée, lâche tout objet métallique qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [90, 99],
            "caption": "L’arc électrique frappe la hanche de la cible et provoque de graves brûlures.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +12 Dégâts, Saignement (4 PV), -30 aux actions, toute armure non métallique protégeant la jambe de la cible prend feu et est détruite.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}]
                }
            ]
        },
        {
            "roll": [100], "caption": "La cible est électrocutée.", "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : À Terre, inconscience.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : coma pendant un mois.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [101, 106],
            "caption": "L’arc électrique se propage dans le dos de la cible, attirant tout objet métallique porté.",
            "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, -20 aux actions et Bloquée pendant 1 Round.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "held",
                        "value": null,
                        "duration": 1
                    }]
                }
            ]
        },
        {
            "roll": [107, 109],
            "caption": "La foudre s’enroule autour des jambes de la cible, brûlant la chair et les muscles.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +15 Dégâts, Saignement (5 PV), À Terre, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 5,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [110],
            "caption": "La foudre frappe la cible en pleine tête, illuminant son visage de l’intérieur.",
            "options": [
                {
                    "label": "Cible ne portant pas de casque de métal ou de heaume",
                    "targetEffect": "Cible : +15 Dégâts, aveugle pendant 1d5 Rounds, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "blind", "value": null, "duration": "special"}]
                },
                {
                    "label": "Cible portant un casque de métal ou un heaume",
                    "targetEffect": "Cible : cerveau endommagé, inconsciente, Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }, {"type": "dying", "value": null, "duration": 6}]
                }
            ]
        },
        {
            "roll": [111, 116], "caption": "Un arc électrique frappe violemment le bras d’arme.", "options": [
                {
                    "label": "Cible portant une armure organique",
                    "targetEffect": "Cible : Saignement (2 PV), Sonnée, -20 aux actions, lâche tout objet métallique qu’elle tient.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 2,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure organique",
                    "targetEffect": "Cible : Saignement (4 PV), Sonnée, lâche tout objet qu’elle tient, bras inutilisable suite aux lésions neuromusculaires.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 4,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [117, 119], "caption": "La frappe diffuse dans l’abdomen de la cible.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +10 Dégâts, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (2 PV), Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 2,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [120],
            "caption": "La foudre parcourt le corps de l’adversaire, provoquant des brûlures massives.",
            "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (5 PV), À Terre, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 5,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : les différentes pièces d’armure, sous l’effet de l’arc électrique, se soudent, et la cible est Bloquée jusqu’à ce que l’armure soit retirée d’une manière ou d’une autre.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "held", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [121, 126],
            "caption": "Le corps de la cible semble être un excellent conducteur électrique.",
            "options": [
                {
                    "label": "Cible ne portant pas d’armure de métal",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, et subit un Coup Critique Superficiel de Foudre au début du Round suivant.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible portant une armure de métal",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, et subit un Coup Critique Léger de Foudre au début du Round suivant.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [127, 129],
            "caption": "La foudre s’abat brutalement sur la poitrine de la cible, provoquant une importante crise convulsive.",
            "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +12 Dégâts, Saignement (2 PV), À Terre, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 2,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : insuffisance cardio-respiratoire, Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}]
                }
            ]
        },
        {
            "roll": [130],
            "caption": "La tête de la cible se transforme en bourrelet carbonisé, seules les dents sont épargnées.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136],
            "caption": "La décharge électrocute la cible puis se propage à une autre victime.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +25 Dégâts, À Terre, Sonnée, et une autre créature aléatoire dans un rayon de 2 mètres de la cible subit un Coup Critique Léger de Foudre.",
                    "attackerEffect": null,
                    "extraDmg": "25",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [137, 140], "caption": "Une déflagration électrique arrache la jambe de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +20 Dégâts, Saignement (12 PV), À Terre, Sonnée, incapable de marcher, -50 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "bleeding",
                        "value": 12,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [141, 146],
            "caption": "La surcharge électrique grille le système nerveux de la cible.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : À Terre, inconsciente, -100 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": "-100",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "prone", "value": null, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [147, 149], "caption": "L’arc électrique consume l’abdomen de la cible.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : À Terre, Sonnée, Mourante, meurt après 8 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : coupée en deux, mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [150],
            "caption": "Le choc désagrège la structure cellulaire de la cible, dont le corps tout entier se transforme en poussière, qu’une légère brise vient balayer.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ],
    pierce: [
        {
            "roll": [0, 5], "caption": "Swoosh ! C’est passé près !", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Pas de Dégâts supplémentaires.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [6, 20], "caption": "Votre coup frappe dans l’épaule.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                }
            ]
        },
        {
            "roll": [21, 35], "caption": "Votre coup frappe dans la cuisse.", "options": [
                {
                    "label": "Cible portant une armure protégeant les jambes",
                    "targetEffect": "Cible : +3 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant les jambes",
                    "targetEffect": "Cible : +3 Dégâts, Saignement (3 PV).",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}]
                }
            ]
        },
        {
            "roll": [36, 50], "caption": "Vous éraflez l’avant-bras de la cible.", "options": [
                {
                    "label": "Cible portant une armure protégeant l’avant-bras",
                    "targetEffect": "Cible : +2 Dégâts.",
                    "attackerEffect": null,
                    "extraDmg": "2",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas d’armure protégeant l’avant-bras",
                    "targetEffect": "Cible : +2 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "2",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [51, 65], "caption": "Votre coup ripe le long du flanc de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Saignement (1 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 1, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [66, 79], "caption": "Vous frappez droit dans la poitrine.", "options": [
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +8 Dégâts, Saignement (4 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +4 Dégâts, Saignement (2 PV).",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 2, "duration": null}]
                }
            ]
        },
        {
            "roll": [80, 89], "caption": "Votre coup transperce un mollet, déchirant tendons et muscles.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +3 Dégâts, Sonnée, -25 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "3",
                    "activityMalus": "-25",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [90, 99], "caption": "Vous perforez l’abdomen.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +4 Dégâts, Saignement (3 PV).",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (6 PV), Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [100], "caption": "Votre arme pénètre le crâne au niveau de l’oreille.", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +5 Dégâts, Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : Saignement (5 PV), oreille déchirée, os temporal perforé, coma.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 5, "duration": null}, {
                        "type": "inconscjous",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [101, 106], "caption": "Votre coup s’enfonce dans la cuisse.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +5 Dégâts, Saignement (2 PV).",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 2, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +7 Dégâts, Saignement (5 PV), Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "7",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 5, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [107, 109], "caption": "Votre coup s’enfonce dans le mollet.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +4 Dégâts, -20 aux actions, muscle déchiré.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": []
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +6 Dégâts, Sonnée, -40 aux actions, muscle sectionné.",
                    "attackerEffect": null,
                    "extraDmg": "6",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [110], "caption": "Votre coup s’enfonce dans l’aine.", "options": [
                {
                    "label": "Cible portant une armure",
                    "targetEffect": "Cible : +12 Dégâts, Sonnée, -20 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "12",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                },
                {
                    "label": "Cible ne portant pas d’armure",
                    "targetEffect": "Cible : +18 Dégâts, Saignement (5 PV), Sonnée, -30 aux actions, stérilité définitive.",
                    "attackerEffect": null,
                    "extraDmg": "18",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 5, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [111, 116], "caption": "Votre frappe perfore la cage thoracique.", "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +5 Dégâts, Saignement (4 PV), Sonnée, -20 aux actions, entaille profonde.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide",
                    "targetEffect": "Cible : +15 Dégâts, Sonnée, -50 aux actions, poumon perforé, Mourante, meurt après 6 heures.",
                    "attackerEffect": null,
                    "extraDmg": "15",
                    "activityMalus": "-50",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [117, 119],
            "caption": "Votre coup transperce le bras d’arme, sectionnant tendons et muscles.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +4 Dégâts, Saignement (4 PV), -20 aux actions, bras inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "4",
                    "activityMalus": "-20",
                    "activityMalusDuration": null,
                    "injury": "minor",
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}]
                }
            ]
        },
        {
            "roll": [120], "caption": "Votre frappe atteint le cou de la cible.", "options": [
                {
                    "label": "Cible portant une armure Rigide protégeant le cou",
                    "targetEffect": "Cible : +5 Dégâts, Saignement (4 PV), Sonnée.",
                    "attackerEffect": null,
                    "extraDmg": "5",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 4, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d'armure Rigide protégeant le cou",
                    "targetEffect": "Cible : +10 Dégâts, Saignement (15 PV), Sonnée, artère principale sectionnée.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 15, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [121, 126], "caption": "Votre frappe perfore profondément le fessier.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +8 Dégâts, Sonnée, -40 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": "-40",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "stunned", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [127, 129], "caption": "Votre coup à l’ars emporte les ligaments de l’épaule.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, Saignement (6 PV), Sonnée, -30 aux actions, bras inutilisable.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 6, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [130], "caption": "En plein front !", "options": [
                {
                    "label": "Cible portant un casque",
                    "targetEffect": "Cible : +8 Dégâts, inconscience pendant 30 minutes.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas de casque",
                    "targetEffect": "Cible : crâne fracturé, coma, Mourante, meurt après 10 minutes.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "inconscious", "value": null, "duration": null}, {
                        "type": "dying",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [131, 136],
            "caption": "Votre frappe emporte l’arrière du genou, déchire les ligaments et endommage les muscles.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +8 Dégâts, Saignement (3 PV), À Terre, Sonnée, -60 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "8",
                    "activityMalus": "-60",
                    "activityMalusDuration": null,
                    "injury": "crippling",
                    "activeEffects": [{"type": "bleeding", "value": 3, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [137, 140],
            "caption": "Votre coup transperce la jambe et sectionne une artère principale.",
            "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : Saignement (15 PV), coma suivi de mort.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "bleeding", "value": 15, "duration": null}, {
                        "type": "inconscious",
                        "value": null,
                        "duration": null
                    }, {"type": "prone", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [141, 146], "caption": "Votre arme embroche les reins de la cible.", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : +10 Dégâts, agonie, Mourante, meurt après 6 Rounds.",
                    "attackerEffect": null,
                    "extraDmg": "10",
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dying", "value": null, "duration": 6}, {
                        "type": "prone",
                        "value": null,
                        "duration": null
                    }]
                }
            ]
        },
        {
            "roll": [147, 149], "caption": "Frappe au coeur !", "options": [
                {
                    "label": "Cible portant une armure Rigide",
                    "targetEffect": "Cible : +20 Dégâts, Saignement (8 PV), Sonnée, -30 aux actions.",
                    "attackerEffect": null,
                    "extraDmg": "20",
                    "activityMalus": "-30",
                    "activityMalusDuration": null,
                    "injury": "serious",
                    "activeEffects": [{"type": "bleeding", "value": 8, "duration": null}, {
                        "type": "stunned",
                        "value": null,
                        "duration": null
                    }]
                },
                {
                    "label": "Cible ne portant pas d’armure Rigide",
                    "targetEffect": "Cible : mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        },
        {
            "roll": [150], "caption": "Pan ! Dans l’oeil !", "options": [
                {
                    "label": null,
                    "targetEffect": "Cible : cerveau transpercé, mort instantanée.",
                    "attackerEffect": null,
                    "extraDmg": null,
                    "activityMalus": null,
                    "activityMalusDuration": null,
                    "injury": null,
                    "activeEffects": [{"type": "dead", "value": null, "duration": null}]
                }
            ]
        }
    ]
}