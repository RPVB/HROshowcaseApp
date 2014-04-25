function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "showcase";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.showcase = Ti.UI.createWindow({
        id: "showcase"
    });
    $.__views.showcase && $.addTopLevelView($.__views.showcase);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview"
    });
    $.__views.showcase.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.webview.url = Ti.App.Properties.getString("showcase");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;