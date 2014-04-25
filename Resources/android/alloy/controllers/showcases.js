function Controller() {
    function een() {
        Ti.App.Properties.setString("showcase", "/showcases/1/index.html");
        var showcase = Alloy.createController("showcase").getView("showcase");
        showcase.open();
    }
    function twee() {
        Ti.App.Properties.setString("showcase", "/showcases/2/index.html");
        var showcase = Alloy.createController("showcase").getView("showcase");
        showcase.open();
    }
    function drie() {
        Ti.App.Properties.setString("showcase", "/showcases/3/index.html");
        var showcase = Alloy.createController("showcase").getView("showcase");
        showcase.open();
    }
    function vier() {
        Ti.App.Properties.setString("showcase", "/showcases/4/index.html");
        var showcase = Alloy.createController("showcase").getView("showcase");
        showcase.open();
    }
    function vijf() {
        Ti.App.Properties.setString("showcase", "/showcases/5/index.html");
        var showcase = Alloy.createController("showcase").getView("showcase");
        showcase.open();
    }
    function zes() {
        Ti.App.Properties.setString("showcase", "/showcases/6/index.html");
        var showcase = Alloy.createController("showcase").getView("showcase");
        showcase.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "showcases";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Sections & Rows",
        id: "__alloyId8"
    });
    $.__views.__alloyId9 = Ti.UI.createSearchBar({
        height: "43dp",
        top: 0,
        barColor: "#444",
        showCancel: true,
        id: "__alloyId9"
    });
    var __alloyId10 = [];
    $.__views.__alloyId11 = Ti.UI.createTableViewSection({
        headerTitle: "Eerste jaars",
        id: "__alloyId11"
    });
    __alloyId10.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Strooizout",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    een ? $.__views.__alloyId12.addEventListener("click", een) : __defers["$.__views.__alloyId12!click!een"] = true;
    $.__views.__alloyId13 = Ti.UI.createTableViewSection({
        headerTitle: "Tweede jaars",
        id: "__alloyId13"
    });
    __alloyId10.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Hoverboard",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    twee ? $.__views.__alloyId14.addEventListener("click", twee) : __defers["$.__views.__alloyId14!click!twee"] = true;
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Auto´s",
        id: "__alloyId15"
    });
    $.__views.__alloyId13.add($.__views.__alloyId15);
    vijf ? $.__views.__alloyId15.addEventListener("click", vijf) : __defers["$.__views.__alloyId15!click!vijf"] = true;
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "OV",
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    zes ? $.__views.__alloyId16.addEventListener("click", zes) : __defers["$.__views.__alloyId16!click!zes"] = true;
    $.__views.__alloyId17 = Ti.UI.createTableViewSection({
        headerTitle: "Derde jaars",
        id: "__alloyId17"
    });
    __alloyId10.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Aardappelen",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    drie ? $.__views.__alloyId18.addEventListener("click", drie) : __defers["$.__views.__alloyId18!click!drie"] = true;
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Virtual reality",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Laptops",
        id: "__alloyId20"
    });
    $.__views.__alloyId17.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewSection({
        headerTitle: "Vierde jaars",
        id: "__alloyId21"
    });
    __alloyId10.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Bier",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    vier ? $.__views.__alloyId22.addEventListener("click", vier) : __defers["$.__views.__alloyId22!click!vier"] = true;
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Boten",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: "50dp",
        color: "#000",
        title: "Treinen",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    $.__views.showcases = Ti.UI.createTableView({
        data: __alloyId10,
        search: $.__views.__alloyId9,
        id: "showcases",
        filterAttribute: "title"
    });
    $.__views.__alloyId8.add($.__views.showcases);
    $.__views.showcases = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        id: "showcases",
        title: "showcases"
    });
    $.__views.showcases && $.addTopLevelView($.__views.showcases);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId12!click!een"] && $.__views.__alloyId12.addEventListener("click", een);
    __defers["$.__views.__alloyId14!click!twee"] && $.__views.__alloyId14.addEventListener("click", twee);
    __defers["$.__views.__alloyId15!click!vijf"] && $.__views.__alloyId15.addEventListener("click", vijf);
    __defers["$.__views.__alloyId16!click!zes"] && $.__views.__alloyId16.addEventListener("click", zes);
    __defers["$.__views.__alloyId18!click!drie"] && $.__views.__alloyId18.addEventListener("click", drie);
    __defers["$.__views.__alloyId22!click!vier"] && $.__views.__alloyId22.addEventListener("click", vier);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;