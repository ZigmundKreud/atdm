export const registerHandlebarsHelpers = function () {
    Handlebars.registerHelper("add", function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    Handlebars.registerHelper("concat", function (a, b) {
        return a + b;
    });
    Handlebars.registerHelper("isset", function (value) {
        return (value == undefined) ? false : true;
    });
    Handlebars.registerHelper("sum", function (arr, init) {
        return arr.reduce((previousValue, currentValue) => previousValue + currentValue, init);
    });
};
