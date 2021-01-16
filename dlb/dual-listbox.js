!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var i = t();
        for (var s in i)
            ("object" == typeof exports ? exports : e)[s] = i[s]
    }
}(this, function() {
    return function(e) {
        function t(s) {
            if (i[s])
                return i[s].exports;
            var l = i[s] = {
                exports: {},
                id: s,
                loaded: !1
            };
            return e[s].call(l.exports, l, l.exports, t),
            l.loaded = !0,
            l.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.p = "",
        t(0)
    }([function(e, t) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , l = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1,
                    s.configurable = !0,
                    "value"in s && (s.writable = !0),
                    Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, i, s) {
                return i && e(t.prototype, i),
                s && e(t, s),
                t
            }
        }()
          , n = "dual-listbox"
          , a = "dual-lsitbox__container"
          , o = "dual-listbox__available"
          , d = "dual-listbox__selected"
          , c = "dual-listbox__title"
          , u = "dual-listbox__item"
          , r = "dual-listbox__buttons"
          , h = "dual-listbox__button"
          , v = "dual-listbox__search"
          , x = "dual-listbox__info"
          , b = "dual-listbox__item--selected"
          , f = function() {
            function e(t) {
                var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, e),
                this.setDefaults(),
                this.selected = [],
                this.available = [],
                this.isDomElement(t) ? this.select = t : this.select = document.querySelector(t),
                this._initOptions(s),
                this._initReusableElements(),
                this._splitSelectOptions(this.select),
                this._buildDualListbox(this.select.parentNode),
                this._addActions(),
                this.redraw()
            }
            return l(e, [{
                key: "setDefaults",
                value: function() {
                    this.addEvent = null,
                    this.removeEvent = null,
                    this.availableTitle = "Available options",
                    this.selectedTitle = "Selected options",
                    this.addAllButtonText = "add all",
                    this.addButtonText = "add",
                    this.removeButtonText = "remove",
                    this.removeAllButtonText = "remove all",
                    this.searchPlaceholder = "Search",

                    // add
                    this.upButtonText = "up",
                    this.downButtonText = "down",
                    this.okButtonText = "ok",
                    this.cancelButtonText = "cancel",
                    this.title = true,
                    this.searchable = true,
                    this.info = true,
                    this.listwidth = 300,
                    this.listheight = 300,
                    this.limit = 0,
                    this.okHandle = null,
                    this.cancelHandle = null,
                    this.addall = null,
                    this.addselected = null,
                    this.moveup = null,
                    this.movedown = null,
                    this.removeselected = null,
                    this.removeall = null
                    this.language = 'english'
                }
            }, {
                key: "addSelected",
                value: function(e) {
                    var t = this.available.indexOf(e);
                    t > -1 && (this.available.splice(t, 1),
                    this.selected.push(e),
                    this._selectOption(e.dataset.id),
                    this.redraw())
                }
            }, {
                key: "redraw",
                value: function() {
                    this.updateAvailableListbox(),
                    this.updateSelectedListbox(),
                    this.updateInfo()
                }
            }, {
                key: "removeSelected",
                value: function(e) {
                    var t = this.selected.indexOf(e);
                    t > -1 && (this.selected.splice(t, 1),
                    this.available.push(e),
                    this._deselectOption(e.dataset.id),
                    this.redraw())
                }
            }, {
                key: "searchLists",
                value: function(e, t) {
                    for (var i = t.querySelectorAll("." + u), s = e.toLowerCase(), l = 0; l < i.length; l++) {
                        var n = i[l];
                        e && n.textContent.toLowerCase().indexOf(s) === -1 ? n.style.display = "none" : n.style.display = "list-item"
                    }
                }
            }, {
                key: "updateAvailableListbox",
                value: function() {
                    this.availebleList.innerHTML = "",
                    this.title && this.availebleList.appendChild(this.availableListTitle);
                    for (var e = 0; e < this.available.length; e++) {
                        var t = this.available[e];
                        this.availebleList.appendChild(t)
                    }
                }
            }, {
                key: "updateSelectedListbox",
                value: function() {
                    this.selectedList.innerHTML = "",
                    this.title && this.selectedList.appendChild(this.selectedListTitle);
                    for (var e = 0; e < this.selected.length; e++) {
                        var t = this.selected[e];
                        this.selectedList.appendChild(t)
                    }
                }
            }, {
                key: "updateInfo",
                value: function() {
                    if (this.language == 'chinese') {
                        var text = '已选择 ' + this.selected.length + ' 个';
                        this.limit > 0 && (text += '. 最多可选 ' + this.limit + ' 个');
                    }
                    else {
                        var text = this.selected.length + ' items selected';
                        this.limit > 0 && (text += '. ' + this.limit + ' items max');
                    }
                    this.info.innerText = text
                }
            }, {
                key: "moveUp",
                value: function(e) {
                    var sel = this.selected;
                    [sel[e-1],sel[e]]=[sel[e],sel[e-1]]
                    this.updateSelectedListbox()
                }
            }, {
                key: "_actionAllSelected",
                value: function(e) {
                    e.preventDefault();
                    var nn = this.available.length;
                    for (var ii = 0; ii < nn; ii++) {
                        (this.limit <= 0 || this.selected.length + this.available.length <= this.limit) && this.addSelected(this.available[0])
                    };
                    this.limit > 0 && (this.selected.length + this.available.length > this.limit) && alert('chosen limit exceeded')
                }
            }, {
                key: "_actionItemSelected",
                value: function(e) {
                    e.preventDefault();
                    var t = this.dualListbox.querySelector("." + b);
                    t && (this.limit > 0 && this.selected.length >= this.limit) && alert('chosen limit exceeded.'),
                    t && (this.limit <= 0 || this.selected.length < this.limit) && this.addSelected(t)
                }
            }, {
                key: "_actionUp",
                value: function(e) {
                    e.preventDefault();
                    var t = this.dualListbox.querySelector("." + b);
                    var p;
                    t && (p = this.selected.indexOf(t),
                    p > 0 && this.moveUp(p))
                }
            }, {
                key: "_actionDown",
                value: function(e) {
                    e.preventDefault();
                    var t = this.dualListbox.querySelector("." + b);
                    var p;
                    t && (p = this.selected.indexOf(t),
                    p > -1 && p < (this.selected.length - 1) && this.moveUp(p + 1))
                }
            }, {
                key: "_actionAllDeselected",
                value: function(e) {
                    for (e.preventDefault(); this.selected.length > 0; )
                        this.removeSelected(this.selected[0])
                }
            }, {
                key: "_actionItemDeselected",
                value: function(e) {
                    e.preventDefault();
                    var t = this.dualListbox.querySelector("." + b);
                    t && this.removeSelected(t)
                }
            }, {
                key: "_actionOk",
                value: function(e) {
                    e.preventDefault();
                    this.okHandle && this.okHandle(this.selected);
                }
            }, {
                key: "_actionCancel",
                value: function(e) {
                    e.preventDefault();
                    this.cancelHandle && this.cancelHandle();
                }
            }, {
                key: "_actionItemDoubleClick",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    var e1 = this.available.indexOf(e);
                    var e2 = this.selected.indexOf(e);
                    t && (t.preventDefault(),
                    t.stopPropagation()),
                    e1 > -1 && (this.limit > 0 && this.selected.length >= this.limit) && alert('chosen limit exceeded.'),
                    e1 > -1 && (this.limit <= 0 || this.selected.length < this.limit) && this.addSelected(e),
                    e2 > -1 && this.removeSelected(e)
                }
            }, {
                key: "_actionItemClick",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    i && i.preventDefault();
                    for (var s = t.querySelectorAll("." + u), l = 0; l < s.length; l++) {
                        var n = s[l];
                        n !== e && n.classList.remove(b)
                    }
                    e.classList.contains(b) ? e.classList.remove(b) : e.classList.add(b)
                }
            }, {
                key: "_addActions",
                value: function() {
                    this._addButtonActions(),
                    this._addCloseButtonActions(),
                    this.searchable && this._addSearchActions()
                }
            }, {
                key: "_addButtonActions",
                value: function() {
                    var e = this;
                    this.add_all_button.addEventListener("click", function(t) {
                        return e._actionAllSelected(t)
                    }),
                    this.add_button.addEventListener("click", function(t) {
                        return e._actionItemSelected(t)
                    }),
                    this.up_button.addEventListener("click", function(t) {
                        return e._actionUp(t)
                    }),
                    this.down_button.addEventListener("click", function(t) {
                        return e._actionDown(t)
                    }),
                    this.remove_button.addEventListener("click", function(t) {
                        return e._actionItemDeselected(t)
                    }),
                    this.remove_all_button.addEventListener("click", function(t) {
                        return e._actionAllDeselected(t)
                    })
                }
            }, {
                key: "_addCloseButtonActions",
                value: function() {
                    var e = this;
                    this.ok_button.addEventListener("click", function(t) {
                        return e._actionOk(t)
                    }),
                    this.cancel_button.addEventListener("click", function(t) {
                        return e._actionCancel(t)
                    })
                }
            }, {
                key: "_addClickActions",
                value: function(e) {
                    var t = this;
                    return e.addEventListener("dblclick", function(i) {
                        return t._actionItemDoubleClick(e, i)
                    }),
                    e.addEventListener("click", function(i) {
                        return t._actionItemClick(e, t.dualListbox, i)
                    }),
                    e
                }
            }, {
                key: "_addSearchActions",
                value: function() {
                    var e = this;
                    this.search.addEventListener("change", function(t) {
                        return e.searchLists(t.target.value, e.dualListbox)
                    }),
                    this.search.addEventListener("keyup", function(t) {
                        return e.searchLists(t.target.value, e.dualListbox)
                    })
                }
            }, {
                key: "_buildDualListbox",
                value: function(e) {
                    this.select.style.display = "none",
                    this.searchable && this.dualListBoxSearchContainer.appendChild(this.search),
                    this.info && this.dualListBoxSearchContainer.appendChild(this.info),
                    this.dualListBoxContainer.appendChild(this.availebleList),
                    this.dualListBoxContainer.appendChild(this.buttons),
                    this.dualListBoxContainer.appendChild(this.selectedList),
                    this.dualListBoxContainer.appendChild(this.closebuttons),
                    this.dualListbox.appendChild(this.dualListBoxSearchContainer),
                    this.dualListbox.appendChild(this.dualListBoxContainer),
                    e.insertBefore(this.dualListbox, this.select)
                }
            }, {
                key: "_createButtons",
                value: function() {
                    this.buttons = document.createElement("div"),
                    this.buttons.classList.add(r),
                    this.add_all_button = document.createElement("button"),
                    this.add_all_button.classList.add(h),
                    this.add_all_button.innerHTML = this.addAllButtonText,
                    this.addall && (this.add_all_button.title = addall),
                    this.add_button = document.createElement("button"),
                    this.add_button.classList.add(h),
                    this.add_button.innerHTML = this.addButtonText,
                    this.addselected && (this.add_button.title = addselected),
                    this.up_button = document.createElement('button'),
                    this.up_button.classList.add(h),
                    this.up_button.innerHTML = this.upButtonText,
                    this.moveup && (this.up_button.title = moveup),
                    this.down_button = document.createElement('button'),
                    this.down_button.classList.add(h),
                    this.down_button.innerHTML = this.downButtonText,
                    this.movedown && (this.down_button.title = movedown),
                    this.remove_button = document.createElement("button"),
                    this.remove_button.classList.add(h),
                    this.remove_button.innerHTML = this.removeButtonText,
                    this.removeselected && (this.remove_button.title = removeselected),
                    this.remove_all_button = document.createElement("button"),
                    this.remove_all_button.classList.add(h),
                    this.remove_all_button.innerHTML = this.removeAllButtonText,
                    this.removeall && (this.remove_all_button.title = removeall),
                    this.buttons.appendChild(this.add_all_button),
                    this.buttons.appendChild(this.add_button),
                    this.buttons.appendChild(this.up_button),
                    this.buttons.appendChild(this.down_button),
                    this.buttons.appendChild(this.remove_button),
                    this.buttons.appendChild(this.remove_all_button)
                }
            }, {
                key: "_createCloseButtons",
                value: function() {
                    this.closebuttons = document.createElement("div"),
                    this.closebuttons.classList.add(r),
                    this.ok_button = document.createElement('button'),
                    this.ok_button.classList.add(h),
                    this.ok_button.innerHTML = this.okButtonText,
                    this.cancel_button = document.createElement('button'),
                    this.cancel_button.classList.add(h),
                    this.cancel_button.innerHTML = this.cancelButtonText,
                    this.closebuttons.appendChild(this.ok_button),
                    this.closebuttons.appendChild(this.cancel_button)
                }
            }, {
                key: "_createListItem",
                value: function(e) {
                    var t = document.createElement("li");
                    return t.classList.add(u),
                    t.innerHTML = e.innerHTML,
                    t.dataset.id = e.value,
                    this._addClickActions(t),
                    t
                }
            }, {
                key: "_createSearch",
                value: function() {
                    this.search = document.createElement("input"),
                    this.search.classList.add(v),
                    this.search.style.width = (this.listwidth - 10) + 'px',
                    this.search.placeholder = this.searchPlaceholder
                }
            }, {
                key: "_createInfo",
                value: function() {
                    this.info= document.createElement("label"),
                    this.info.classList.add(x)
                }
            }, {
                key: "_deselectOption",
                value: function(e) {
                    for (var t = this.select.options, i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.value === e && (s.selected = !1)
                    }
                    this.removeEvent && this.removeEvent(e)
                }
            }, {
                key: "_initOptions",
                value: function(e) {
                    for (var t in e)
                        this[t] = e[t]
                }
            }, {
                key: "_initReusableElements",
                value: function() {
                    this.dualListbox = document.createElement("div"),
                    this.dualListbox.classList.add(n),
                    this.select.id && this.dualListbox.classList.add(this.select.id),
                    this.dualListBoxContainer = document.createElement("div"),
                    this.dualListBoxContainer.classList.add(a),
                    this.dualListBoxSearchContainer = document.createElement("div"),
                    this.dualListBoxSearchContainer.classList.add(a),
                    this.availebleList = document.createElement("ul"),
                    this.availebleList.classList.add(o),
                    this.availebleList.style.width = this.listwidth + 'px',
                    this.availebleList.style.height= this.listheight + 'px',
                    this.selectedList = document.createElement("ul"),
                    this.selectedList.classList.add(d),
                    this.selectedList.style.width = this.listwidth + 'px',
                    this.selectedList.style.height= this.listheight + 'px',
                    this.title && (this.availableListTitle = document.createElement("li")),
                    this.title && this.availableListTitle.classList.add(c),
                    this.title && (this.availableListTitle.innerText = this.availableTitle),
                    this.title && (this.selectedListTitle = document.createElement("li")),
                    this.title && this.selectedListTitle.classList.add(c),
                    this.title && (this.selectedListTitle.innerText = this.selectedTitle),
                    this._createButtons(),
                    this._createCloseButtons(),
                    this.searchable && this._createSearch(),
                    this.info && this._createInfo()
                }
            }, {
                key: "_selectOption",
                value: function(e) {
                    for (var t = this.select.options, i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.value === e && (s.selected = !0)
                    }
                    this.addEvent && this.addEvent(e)
                }
            }, {
                key: "_splitSelectOptions",
                value: function(e) {
                    for (var t = e.options, i = 0; i < t.length; i++) {
                        var s = t[i]
                          , l = this._createListItem(s);
                        s.selected ? this.selected.push(l) : this.available.push(l)
                    }
                }
            }, {
                key: "isDomElement",
                value: function(e) {
                    return "object" === ("undefined" == typeof HTMLElement ? "undefined" : s(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : s(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
                }
            }]),
            e
        }();
        t.default = f,
        t.DualListbox = f
    }
    ])
});
