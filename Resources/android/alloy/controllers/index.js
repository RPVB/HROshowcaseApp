function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = [];
    $.__views.__alloyId2 = Alloy.createController("welkom", {
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("showcases", {
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId6 = Alloy.createController("info", {
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId1,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;