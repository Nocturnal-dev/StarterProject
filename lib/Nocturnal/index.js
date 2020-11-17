"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var Map = /** @class */ (function () {
    function Map() {
        this.items = {};
    }
    Map.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    Map.prototype.has = function (key) {
        return key in this.items;
    };
    Map.prototype.get = function (key) {
        return this.items[key];
    };
    return Map;
}());
exports.Map = Map;
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(value);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
exports.List = List;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.Build = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return Component;
}());
exports.Component = Component;
// HTML
var Attribute = /** @class */ (function () {
    function Attribute(name, value) {
        this.name = name;
        this.value = value;
    }
    Attribute.prototype.SetName = function (name) {
        this.name = name;
    };
    Attribute.prototype.GetName = function () {
        return this.name;
    };
    Attribute.prototype.SetValue = function (value) {
        this.value = value;
    };
    Attribute.prototype.GetValue = function () {
        return this.value;
    };
    return Attribute;
}());
exports.Attribute = Attribute;
var HTMLFile = /** @class */ (function () {
    function HTMLFile(path) {
        this.path = path;
    }
    HTMLFile.prototype.Write = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.appendFile(this.path, data, function (err) {
                            if (err)
                                console.error(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HTMLFile.prototype.WriteTagBegin = function (tag, attribs) {
        return __awaiter(this, void 0, void 0, function () {
            var result, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = "";
                        result += "<" + tag + " ";
                        for (i = 0; i < attribs.size(); i++) {
                            result += attribs.get(i).GetName() + "=" + attribs.get(i).GetValue() + " ";
                        }
                        result += ">";
                        return [4 /*yield*/, this.Write(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HTMLFile.prototype.WriteTagEnd = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Write("</" + tag + ">")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HTMLFile;
}());
exports.HTMLFile = HTMLFile;
;
var TagComponent = /** @class */ (function (_super) {
    __extends(TagComponent, _super);
    function TagComponent(path, tag, attribs, innerText) {
        var _this = _super.call(this) || this;
        _this.path = path;
        _this.tag = tag;
        _this.attribs = attribs;
        _this.innerText = innerText;
        _this.childComponents = new List();
        return _this;
    }
    TagComponent.prototype.Build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = new HTMLFile(this.path);
                        return [4 /*yield*/, file.WriteTagBegin(this.tag, this.attribs)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, file.Write(this.innerText)];
                    case 2:
                        _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < this.childComponents.size())) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.childComponents.get(i).Build()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [4 /*yield*/, file.WriteTagEnd(this.tag)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TagComponent.prototype.AddComponent = function (tag) {
        this.childComponents.add(tag);
    };
    return TagComponent;
}(Component));
exports.TagComponent = TagComponent;
var HTMLScriptComponent = /** @class */ (function (_super) {
    __extends(HTMLScriptComponent, _super);
    function HTMLScriptComponent(htmlpath, scriptText, scriptPath) {
        var _this = this;
        var list = new List();
        list.add(new Attribute("type", "\"text/javascript\""));
        if (scriptPath) {
            list.add(new Attribute("src", scriptPath));
        }
        _this = _super.call(this, htmlpath, "script", list, scriptText) || this;
        return _this;
    }
    return HTMLScriptComponent;
}(TagComponent));
exports.HTMLScriptComponent = HTMLScriptComponent;
var HTMLRootComponent = /** @class */ (function (_super) {
    __extends(HTMLRootComponent, _super);
    function HTMLRootComponent(path) {
        return _super.call(this, path, "html", new List(), "") || this;
    }
    return HTMLRootComponent;
}(TagComponent));
exports.HTMLRootComponent = HTMLRootComponent;
var HTMLBodyComponent = /** @class */ (function (_super) {
    __extends(HTMLBodyComponent, _super);
    function HTMLBodyComponent(path, attribs) {
        return _super.call(this, path, "body", attribs, "") || this;
    }
    return HTMLBodyComponent;
}(TagComponent));
exports.HTMLBodyComponent = HTMLBodyComponent;
var HTMLHeadComponent = /** @class */ (function (_super) {
    __extends(HTMLHeadComponent, _super);
    function HTMLHeadComponent(path, attribs) {
        return _super.call(this, path, "head", attribs, "") || this;
    }
    return HTMLHeadComponent;
}(TagComponent));
exports.HTMLHeadComponent = HTMLHeadComponent;
var HTMLLinkComponent = /** @class */ (function (_super) {
    __extends(HTMLLinkComponent, _super);
    function HTMLLinkComponent(path, attribs, innerText) {
        var _this = _super.call(this) || this;
        _this.path = path;
        _this.attribs = attribs;
        _this.innerText = innerText;
        return _this;
    }
    HTMLLinkComponent.prototype.Build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = new HTMLFile(this.path);
                        return [4 /*yield*/, file.WriteTagBegin("link", this.attribs)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HTMLLinkComponent;
}(Component));
exports.HTMLLinkComponent = HTMLLinkComponent;
var HTMLTitleComponent = /** @class */ (function (_super) {
    __extends(HTMLTitleComponent, _super);
    function HTMLTitleComponent(path, title) {
        return _super.call(this, path, "title", new List(), title) || this;
    }
    return HTMLTitleComponent;
}(TagComponent));
exports.HTMLTitleComponent = HTMLTitleComponent;
var HTMLStyleComponent = /** @class */ (function (_super) {
    __extends(HTMLStyleComponent, _super);
    function HTMLStyleComponent(path, stylesheetpath) {
        var _this = this;
        var attribs = new List();
        attribs.add(new Attribute("rel", "stylesheet"));
        attribs.add(new Attribute("href", stylesheetpath));
        _this = _super.call(this, path, attribs, "") || this;
        return _this;
    }
    return HTMLStyleComponent;
}(HTMLLinkComponent));
exports.HTMLStyleComponent = HTMLStyleComponent;
var HTMLScriptFileComponent = /** @class */ (function (_super) {
    __extends(HTMLScriptFileComponent, _super);
    function HTMLScriptFileComponent(htmlpath, scriptPath) {
        return _super.call(this, htmlpath, "", scriptPath) || this;
    }
    return HTMLScriptFileComponent;
}(HTMLScriptComponent));
exports.HTMLScriptFileComponent = HTMLScriptFileComponent;
var HTMLHeaderComponent = /** @class */ (function (_super) {
    __extends(HTMLHeaderComponent, _super);
    function HTMLHeaderComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "h1", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "h1", new List(), text) || this;
        }
        return _this;
    }
    return HTMLHeaderComponent;
}(TagComponent));
exports.HTMLHeaderComponent = HTMLHeaderComponent;
var HTMLHeader2Component = /** @class */ (function (_super) {
    __extends(HTMLHeader2Component, _super);
    function HTMLHeader2Component(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "h2", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "h2", new List(), text) || this;
        }
        return _this;
    }
    return HTMLHeader2Component;
}(TagComponent));
exports.HTMLHeader2Component = HTMLHeader2Component;
var HTMLHeader3Component = /** @class */ (function (_super) {
    __extends(HTMLHeader3Component, _super);
    function HTMLHeader3Component(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "h3", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "h3", new List(), text) || this;
        }
        return _this;
    }
    return HTMLHeader3Component;
}(TagComponent));
exports.HTMLHeader3Component = HTMLHeader3Component;
var HTMLHeader4Component = /** @class */ (function (_super) {
    __extends(HTMLHeader4Component, _super);
    function HTMLHeader4Component(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "h4", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "h4", new List(), text) || this;
        }
        return _this;
    }
    return HTMLHeader4Component;
}(TagComponent));
exports.HTMLHeader4Component = HTMLHeader4Component;
var HTMLHeader5Component = /** @class */ (function (_super) {
    __extends(HTMLHeader5Component, _super);
    function HTMLHeader5Component(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "h5", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "h5", new List(), text) || this;
        }
        return _this;
    }
    return HTMLHeader5Component;
}(TagComponent));
exports.HTMLHeader5Component = HTMLHeader5Component;
var HTMLHeader6Component = /** @class */ (function (_super) {
    __extends(HTMLHeader6Component, _super);
    function HTMLHeader6Component(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "h6", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "h6", new List(), text) || this;
        }
        return _this;
    }
    return HTMLHeader6Component;
}(TagComponent));
exports.HTMLHeader6Component = HTMLHeader6Component;
var HTMLParagraphComponent = /** @class */ (function (_super) {
    __extends(HTMLParagraphComponent, _super);
    function HTMLParagraphComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "p", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "p", new List(), text) || this;
        }
        return _this;
    }
    return HTMLParagraphComponent;
}(TagComponent));
exports.HTMLParagraphComponent = HTMLParagraphComponent;
var HTMLSpanComponent = /** @class */ (function (_super) {
    __extends(HTMLSpanComponent, _super);
    function HTMLSpanComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "span", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "span", new List(), text) || this;
        }
        return _this;
    }
    return HTMLSpanComponent;
}(TagComponent));
exports.HTMLSpanComponent = HTMLSpanComponent;
var HTMLBoldComponent = /** @class */ (function (_super) {
    __extends(HTMLBoldComponent, _super);
    function HTMLBoldComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "b", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "b", new List(), text) || this;
        }
        return _this;
    }
    return HTMLBoldComponent;
}(TagComponent));
exports.HTMLBoldComponent = HTMLBoldComponent;
var HTMLStrongComponent = /** @class */ (function (_super) {
    __extends(HTMLStrongComponent, _super);
    function HTMLStrongComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "strong", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "strong", new List(), text) || this;
        }
        return _this;
    }
    return HTMLStrongComponent;
}(TagComponent));
exports.HTMLStrongComponent = HTMLStrongComponent;
var HTMLItallicComponent = /** @class */ (function (_super) {
    __extends(HTMLItallicComponent, _super);
    function HTMLItallicComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "i", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "i", new List(), text) || this;
        }
        return _this;
    }
    return HTMLItallicComponent;
}(TagComponent));
exports.HTMLItallicComponent = HTMLItallicComponent;
var HTMLEmphasizedComponent = /** @class */ (function (_super) {
    __extends(HTMLEmphasizedComponent, _super);
    function HTMLEmphasizedComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "em", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "em", new List(), text) || this;
        }
        return _this;
    }
    return HTMLEmphasizedComponent;
}(TagComponent));
exports.HTMLEmphasizedComponent = HTMLEmphasizedComponent;
var HTMLMarkComponent = /** @class */ (function (_super) {
    __extends(HTMLMarkComponent, _super);
    function HTMLMarkComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "mark", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "mark", new List(), text) || this;
        }
        return _this;
    }
    return HTMLMarkComponent;
}(TagComponent));
exports.HTMLMarkComponent = HTMLMarkComponent;
var HTMLSmallComponent = /** @class */ (function (_super) {
    __extends(HTMLSmallComponent, _super);
    function HTMLSmallComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "small", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "small", new List(), text) || this;
        }
        return _this;
    }
    return HTMLSmallComponent;
}(TagComponent));
exports.HTMLSmallComponent = HTMLSmallComponent;
var HTMLDeletedComponent = /** @class */ (function (_super) {
    __extends(HTMLDeletedComponent, _super);
    function HTMLDeletedComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "del", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "del", new List(), text) || this;
        }
        return _this;
    }
    return HTMLDeletedComponent;
}(TagComponent));
exports.HTMLDeletedComponent = HTMLDeletedComponent;
var HTMLInsertComponent = /** @class */ (function (_super) {
    __extends(HTMLInsertComponent, _super);
    function HTMLInsertComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "ins", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "ins", new List(), text) || this;
        }
        return _this;
    }
    return HTMLInsertComponent;
}(TagComponent));
exports.HTMLInsertComponent = HTMLInsertComponent;
var HTMLSubscriptComponent = /** @class */ (function (_super) {
    __extends(HTMLSubscriptComponent, _super);
    function HTMLSubscriptComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "sub", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "sub", new List(), text) || this;
        }
        return _this;
    }
    return HTMLSubscriptComponent;
}(TagComponent));
exports.HTMLSubscriptComponent = HTMLSubscriptComponent;
var HTMLSuperScriptComponent = /** @class */ (function (_super) {
    __extends(HTMLSuperScriptComponent, _super);
    function HTMLSuperScriptComponent(htmlpath, text, attribs) {
        var _this = this;
        if (attribs) {
            _this = _super.call(this, htmlpath, "sup", attribs, text) || this;
        }
        else {
            _this = _super.call(this, htmlpath, "sup", new List(), text) || this;
        }
        return _this;
    }
    return HTMLSuperScriptComponent;
}(TagComponent));
exports.HTMLSuperScriptComponent = HTMLSuperScriptComponent;
var App = /** @class */ (function () {
    function App() {
        this.components = new List();
    }
    App.prototype.AddComponent = function (component) {
        this.components.add(component);
    };
    App.prototype.Build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.components.size())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.components.get(i).Build()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
exports.App = App;
var AppBuilder = /** @class */ (function () {
    function AppBuilder() {
    }
    AppBuilder.prototype.Build = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return AppBuilder;
}());
exports.AppBuilder = AppBuilder;
