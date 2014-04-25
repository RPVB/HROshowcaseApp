function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "welkom";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.welkom = Ti.UI.createWindow({
        id: "welkom"
    });
    $.__views.__alloyId25 = Ti.UI.createView({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId25"
    });
    $.__views.welkom.add($.__views.__alloyId25);
    $.__views.HeaderLabel = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 40,
            fontFamily: "Helvetica Neue"
        },
        top: "20",
        id: "HeaderLabel"
    });
    $.__views.__alloyId25.add($.__views.HeaderLabel);
    $.__views.BodyLabel = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        top: "20",
        width: "80%",
        id: "BodyLabel"
    });
    $.__views.__alloyId25.add($.__views.BodyLabel);
    $.__views.welkom = Ti.UI.createTab({
        window: $.__views.welkom,
        id: "welkom",
        title: "home"
    });
    $.__views.welkom && $.addTopLevelView($.__views.welkom);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.HeaderLabel.text = "Welkom";
    $.BodyLabel.text = "Dit is een app waar op een groot aantal showcases van projecten door media technologie studenten te zien zijn.";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;