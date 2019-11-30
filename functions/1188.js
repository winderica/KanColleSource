const function1188 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(1189),
        r = i(4),
        s = i(30),
        a = i(1),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._btn_lists = [], e._lists_str = [], e._btn_list_goFigure = [], e._btn_list_goFigureStr = [], e._btn_back = new s.BackBtn, e._btn_back.position.set(15, 653), e._btn_change = new l, e._btn_change.position.set(862, 645), e._btn_mess_icon = new l, e._btn_mess_icon.position.set(1101, 684), e._btn_wall = new l, e._btn_wall.position.set(10, 39), e._btn_floor = new l, e._btn_floor.position.set(10, 102), e._btn_desk = new l, e._btn_desk.position.set(10, 165), e._btn_window = new l, e._btn_window.position.set(10, 228), e._btn_object = new l, e._btn_object.position.set(10, 291), e._btn_chest = new l, e._btn_chest.position.set(10, 354), e._btn_goShop = new l, e._btn_goShop.position.set(0, 477);
                for (var i = 0; i < 10; i++) e._btn_lists[i] = new l, e._btn_lists[i].position.set(327, 48 * i + 54);
                e._btn_list_goTop = new l, e._btn_list_goTop.position.set(273, 573), e._btn_list_goPrev = new l, e._btn_list_goPrev.position.set(330, 573), e._btn_list_goNext = new l, e._btn_list_goNext.position.set(645, 573), e._btn_list_goLowest = new l, e._btn_list_goLowest.position.set(699, 573);
                for (var i = 0; i < 5; i++) e._btn_list_goFigure[i] = new l;
                return e
            }
            return n(e, t), Object.defineProperty(e.prototype, "btn_back", {
                get: function () {
                    return this._btn_back
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_goShop", {
                get: function () {
                    return this._btn_goShop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_change", {
                get: function () {
                    return this._btn_change
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_mess_icon", {
                get: function () {
                    return this._btn_mess_icon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_wall", {
                get: function () {
                    return this._btn_wall
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_floor", {
                get: function () {
                    return this._btn_floor
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_desk", {
                get: function () {
                    return this._btn_desk
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_window", {
                get: function () {
                    return this._btn_window
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_object", {
                get: function () {
                    return this._btn_object
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_chest", {
                get: function () {
                    return this._btn_chest
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_lists", {
                get: function () {
                    return this._btn_lists
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "lists_str", {
                get: function () {
                    return this._lists_str
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goTop", {
                get: function () {
                    return this._btn_list_goTop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goLowest", {
                get: function () {
                    return this._btn_list_goLowest
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goPrev", {
                get: function () {
                    return this._btn_list_goPrev
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goNext", {
                get: function () {
                    return this._btn_list_goNext
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "itemName", {
                get: function () {
                    return this._itemName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "itemDescription", {
                get: function () {
                    return this._itemDescription
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "itemDescriptionLength", {
                get: function () {
                    return this._itemDescriptionLength
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "iconEquipment", {
                get: function () {
                    return this._iconEquipment
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goFigure", {
                get: function () {
                    return this._btn_list_goFigure
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_list_goFigureStr", {
                get: function () {
                    return this._btn_list_goFigureStr
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "frame1_bg", {
                get: function () {
                    return this._frame1_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "frame2_bg", {
                get: function () {
                    return this._frame2_bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbnail", {
                get: function () {
                    return this._thumbnail
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbnailBG", {
                get: function () {
                    return this._thumbnailBG
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbnailBG2", {
                get: function () {
                    return this._thumbnailBG2
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbnailMask", {
                get: function () {
                    return this._thumbnailMask
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "menumoji", {
                get: function () {
                    return this._menumoji
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bgm_fairy", {
                get: function () {
                    return this._bgm_fairy
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._frame1_bg = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(10)), this._frame1_bg.position.set(261, 37), this._frame2_bg = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(11)), this._frame2_bg.position.set(763, 58), this._menumoji = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(19)), this._menumoji.position.set(1050, 457), this._bgm_fairy = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(15)), this._bgm_fairy.position.set(1171, 604), this._bgm_fairy.anchor.set(1, 1), this._thumbnailBG = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(12)), this._thumbnailBG.position.set(849, 83), this._thumbnailBG2 = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(13)), this._thumbnailBG2.position.set(849, 83), this._thumbnailMask = new PIXI.Graphics, this._thumbnailMask.beginFill(16777215), this._thumbnailMask.drawRect(853, 83, 240, 300), this._thumbnail = new PIXI.Sprite, this._thumbnail.position.set(849, 77), this._btn_back.initialize(), this._btn_back.activate(), this._btn_goShop.initialize(2, 3), this._btn_change.initialize(0, 1), this._btn_mess_icon.initialize(16, 16), this._btn_wall.initialize(27, 28), this._btn_floor.initialize(24, 25), this._btn_desk.initialize(39, 40), this._btn_window.initialize(30, 31), this._btn_object.initialize(33, 34), this._btn_chest.initialize(36, 37), this._btn_list_goTop.initialize(7, 7), this._btn_list_goPrev.initialize(6, 6), this._btn_list_goNext.initialize(5, 5), this._btn_list_goLowest.initialize(4, 4), this.addChild(this._btn_back), this.addChild(this._btn_goShop), this.addChild(this._btn_change), this.addChild(this._btn_mess_icon), this.addChild(this._btn_wall), this.addChild(this._btn_floor), this.addChild(this._btn_desk), this.addChild(this._btn_window), this.addChild(this._btn_object), this.addChild(this._btn_chest), this.addChild(this._frame1_bg), this.addChild(this._btn_list_goTop), this.addChild(this._btn_list_goPrev), this.addChild(this._btn_list_goNext), this.addChild(this._btn_list_goLowest), this.addChild(this._frame2_bg), this.addChild(this._menumoji), this.addChild(this._bgm_fairy);
                for (var t = 0; t < 5; t++) this._btn_list_goFigureStr[t] = new r.TextBox(24, 5592405), this._btn_list_goFigureStr[t].text = (t + 1).toString(), this._btn_list_goFigureStr[t].position.set(394 + 52 * t, 566), this.addChild(this._btn_list_goFigureStr[t]), this._btn_list_goFigure[t].position.set(382 + 52 * t, 566), this._btn_list_goFigure[t].initialize(9, 9), this._btn_list_goFigure[t].width = 36, this._btn_list_goFigure[t].height = 36, this.addChild(this._btn_list_goFigure[t]);
                for (var t = 0; t < 10; t++) this._lists_str[t] = new r.TextBox(24, 5592405), this._lists_str[t].text = "", this._lists_str[t].position.set(333, 48 * t + 61), this.addChild(this._lists_str[t]), this._btn_lists[t].initialize(9, 8), this.addChild(this._btn_lists[t]);
                this._iconEquipment = new PIXI.Sprite(o.INTERIOR_PARTS.getTexture(14)), this._iconEquipment.position.set(-150, -150), this.addChild(this._iconEquipment), this._itemName = new r.TextBox(22, 5592405), this._itemName.text = "", this._itemName.position.set(Math.floor(900 - this._itemName.width / 2), Math.floor(409 - this._itemName.height / 2)), this._itemDescription = new r.TextBox(19, 5592405), this._itemDescription.text = "", this._itemDescription.position.set(801, 442), this._itemDescription.style.wordWrap = !0, this._itemDescription.style.wordWrapWidth = 272, this._itemDescription.style.breakWords = !0, this.addChild(this._itemName), this.addChild(this._itemDescription), this.addChild(this._thumbnailBG), this.addChild(this._thumbnailMask), this.addChild(this._thumbnail), this.addChild(this._thumbnailBG2)
            }, e.prototype.changeMessIconTexture = function (t) {
                this._btn_mess_icon.dispose(), t ? this._btn_mess_icon.initialize(16, 16) : this._btn_mess_icon.initialize(17, 17)
            }, e.prototype.dispose = function () {
                this._btn_back.dispose(), this._btn_back = null, this._btn_goShop.dispose(), this._btn_goShop = null, this._btn_change.dispose(), this._btn_change = null, this._btn_mess_icon.dispose(), this._btn_mess_icon = null, this._btn_wall.dispose(), this._btn_wall = null, this._btn_floor.dispose(), this._btn_floor = null, this._btn_desk.dispose(), this._btn_desk = null, this._btn_window.dispose(), this._btn_window = null, this._btn_object.dispose(), this._btn_object = null, this._btn_chest.dispose(), this._btn_chest = null;
                for (var t = 0; t < 10; t++) this._btn_lists[t].dispose();
                this._btn_lists = null, this._lists_str.forEach(function (t) {
                    t.destroy()
                }), this._lists_str = null, this._btn_list_goTop.dispose(), this._btn_list_goTop = null, this._btn_list_goLowest.dispose(), this._btn_list_goLowest = null, this._btn_list_goPrev.dispose(), this._btn_list_goPrev = null, this._btn_list_goNext.dispose(), this._btn_list_goNext = null, this._itemName.destroy(), this._itemName = null, this._itemDescription.destroy(), this._itemDescription = null, this._itemDescriptionLength = null, this._iconEquipment = null;
                for (var t = 0; t < 5; t++) this._btn_list_goFigure[t].dispose();
                this._btn_list_goFigure = null, this._btn_list_goFigureStr.forEach(function (t) {
                    t.destroy()
                }), this._btn_list_goFigureStr = null, this._frame1_bg = null, this._frame2_bg = null, this._thumbnail = null, this._thumbnailBG = null, this._thumbnailBG2 = null, this._thumbnailMask = null, this._menumoji = null, this._bgm_fairy = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ViewTop = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._setTexture(e._texture_no_on)
            }, e._onMouseOut = function () {
                e._setTexture(e._texture_no)
            }, e
        }
        return n(e, t), e.prototype.initialize = function (t, e) {
            this._texture_no = t, this._texture_no_on = e, this._setTexture(this._texture_no), null != this._texture_no_on && (this.interactive = this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut))
        }, e.prototype.dispose = function () {
            this.interactive = this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut)
        }, e.prototype._setTexture = function (t) {
            this.texture = o.INTERIOR_PARTS.getTexture(t)
        }, e
    }(PIXI.Sprite)
}