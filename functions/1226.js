const function1226 = function (t, e, i) {
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
    var o = i(0),
        r = i(14),
        s = i(419),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                switch (n._clist = i, n.id) {
                    case 506:
                        n._statusUpdate506();
                        break;
                    case 641:
                        n._statusUpdate641();
                        break;
                    case 642:
                        n._statusUpdate642();
                        break;
                    case 643:
                        n._statusUpdate643();
                        break;
                    case 644:
                        n._statusUpdate644();
                        break;
                    case 645:
                        n._statusUpdate645();
                        break;
                    case 646:
                        n._statusUpdate646();
                        break;
                    case 647:
                        n._statusUpdate647();
                        break;
                    case 648:
                        n._statusUpdate648();
                        break;
                    case 649:
                        n._statusUpdate649();
                        break;
                    case 650:
                        n._statusUpdate650();
                        break;
                    case 651:
                        n._statusUpdate651();
                        break;
                    case 652:
                        n._statusUpdate652();
                        break;
                    case 653:
                        n._statusUpdate653();
                        break;
                    case 654:
                        n._statusUpdate654();
                        break;
                    case 655:
                        n._statusUpdate655();
                        break;
                    case 657:
                        n._statusUpdate657();
                        break;
                    case 658:
                        n._statusUpdate658();
                        break;
                    case 666:
                        n._statusUpdate666();
                        break;
                    case 668:
                        n._statusUpdate668()
                }
                return n
            }
            return n(e, t), e.prototype._statusUpdate506 = function () {
                var t = this._getRawProgress(),
                    e = this._getUnsetSlotCount(145);
                if (t >= 3 && e.all >= 3) {
                    2 == this._getRawStatus() ? (this._updateTassei(), e.unlocked < 3 && (this._alert = 4)) : this._updateProgress(2)
                } else t >= 2 && e.all >= 2 ? this._updateProgress(2) : t >= 1 && e.all >= 1 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate641 = function () {
                if (0 != this._getRawProgress()) {
                    var t = this._getUnsetSlotCount(37),
                        e = this._getUnsetSlotCount(19),
                        i = t.all >= 2 && e.all >= 2,
                        n = t.unlocked >= 2 && e.unlocked >= 2;
                    if (1 == i) {
                        var o = this._getRawStatus();
                        2 == o ? (this._updateTassei(), 0 == n && (this._alert = 4)) : 1 == o && this._updateProgress(2)
                    }
                }
            }, e.prototype._statusUpdate642 = function () {
                var t = this._getUnsetSlotCount(37),
                    e = this._getUnsetSlotCount(23),
                    i = t.all >= 2 && e.all >= 2,
                    n = t.unlocked >= 2 && e.unlocked >= 2;
                if (1 == i) {
                    var o = this._getRawStatus();
                    2 == o ? (this._updateTassei(), 0 == n && (this._alert = 4)) : 1 == o && this._updateProgress(2)
                } else t.all >= 2 || e.all >= 2 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate643 = function () {
                if (0 != this._getRawProgress()) {
                    var t = this._getUnsetSlotCount(16),
                        e = this._getUnsetSlotCount(168),
                        i = t.all >= 2 && e.all >= 1,
                        n = t.unlocked >= 2 && e.unlocked >= 1;
                    if (1 == i) {
                        var o = this._getRawStatus();
                        2 == o ? (this._updateTassei(), 0 == n && (this._alert = 4)) : 1 == o && this._updateProgress(2)
                    }
                }
            }, e.prototype._statusUpdate644 = function () {
                var t = this._getUnsetSlotCount(17),
                    e = this._getUnsetSlotCount(169),
                    i = t.all >= 2 && e.all >= 1,
                    n = t.unlocked >= 2 && e.unlocked >= 1;
                if (1 == i) {
                    var o = this._getRawStatus();
                    2 == o ? (this._updateTassei(), 0 == n && (this._alert = 4)) : 1 == o && this._updateProgress(2)
                } else e.all >= 1 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate645 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(31),
                    i = o.default.model.useItem.getCount(32),
                    n = e >= 750 && i >= 750,
                    r = new _;
                if (r.add(75, 2), r.add(36, 1), 2 == t && 1 == n && 1 == r.isFulfill()) {
                    var s = this._getRawStatus();
                    2 == s ? (this._updateTassei(), 0 == r.isFulfillUnlocked() && (this._alert = 4)) : 1 == s && this._updateProgress(2)
                } else 2 == t && 1 == n && r.fulfill_count > 0 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate646 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(44),
                    i = e >= 5e3,
                    n = new _;
                if (n.add(39, 2), n.add(40, 2), 2 == t && 1 == i && 1 == n.isFulfill()) {
                    var r = this._getRawStatus();
                    2 == r ? (this._updateTassei(), 0 == n.isFulfillUnlocked() && (this._alert = 4)) : 1 == r && this._updateProgress(2)
                } else 2 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate647 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(31),
                    i = o.default.model.useItem.getCount(34),
                    n = e >= 1200 && i >= 3e3,
                    r = o.default.model.useItem.getCount(73),
                    s = r >= 1;
                if (2 == t && 1 == n && 1 == s) {
                    var a = this._getRawStatus();
                    2 == a ? this._updateTassei() : 1 == a && this._updateProgress(2)
                } else 1 == n && 1 == s ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate648 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(44),
                    i = e >= 5e3,
                    n = new _;
                if (n.add(4, 2), n.add(11, 2), 2 == t && 1 == i && 1 == n.isFulfill()) {
                    var r = this._getRawStatus();
                    2 == r ? (this._updateTassei(), 0 == n.isFulfillUnlocked() && (this._alert = 4)) : 1 == r && this._updateProgress(2)
                } else 2 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(2) : 1 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate649 = function () {
                var t = this._getRawProgress(),
                    e = this._getUnsetSlotCount(169),
                    i = this._getUnsetSlotCount(54),
                    n = e.all >= 1 && i.all >= 2,
                    o = e.unlocked >= 1 && i.unlocked >= 2;
                if (2 == t && 1 == n) {
                    var r = this._getRawStatus();
                    2 == r ? (this._updateTassei(), 0 == o && (this._alert = 4)) : 1 == r && this._updateProgress(2)
                } else 2 == t && 0 == n ? this._updateProgress(1) : 1 == n ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate650 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(74),
                    i = o.default.model.useItem.getCount(71),
                    n = e >= 2 && i >= 1;
                if (2 == t && 1 == n) {
                    var r = this._getRawStatus();
                    2 == r ? this._updateTassei() : 1 == r && this._updateProgress(2)
                } else 2 == t && 0 == n ? this._updateProgress(2) : 1 == t ? this._updateProgress(1) : 1 == n ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate651 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(33),
                    i = this._getUnsetSlotCount(18),
                    n = this._getUnsetSlotCount(22),
                    r = i.all >= 2 && n.all >= 2 && e >= 8e3,
                    s = i.unlocked >= 2 && n.unlocked >= 2 && e >= 8e3;
                if (2 == t && 1 == r) {
                    var a = this._getRawStatus();
                    2 == a ? (this._updateTassei(), 0 == s && (this._alert = 4)) : 1 == a && this._updateProgress(2)
                } else 2 == t ? this._updateProgress(2) : 1 == t ? this._updateProgress(1) : 1 == r ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate652 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(44),
                    i = e >= 5e3,
                    n = new _;
                if (n.add(19, 2), n.add(37, 2), 2 == t && 1 == i && 1 == n.isFulfill()) {
                    var r = this._getRawStatus();
                    2 == r ? (this._updateTassei(), 0 == n.isFulfillUnlocked() && (this._alert = 4)) : 1 == r && this._updateProgress(2)
                } else 2 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(2) : 1 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate653 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(44),
                    i = e >= 6e3,
                    n = new _;
                n.add(7, 3), n.add(19, 3);
                var s, a = this._getUnsetSlotCount(7),
                    u = this._getUnsetSlotCount(19),
                    l = a.all >= 3 || u.all >= 3,
                    c = this._clist;
                if (null != c)
                    for (var h = 0, p = c; h < p.length; h++) {
                        var d = p[h];
                        r.ObjUtil.getNumber(d, "api_no") == this.id && (s = r.ObjUtil.getNumber(d, "api_c_flag"))
                    }
                if (2 == t && 1 == i && 1 == n.isFulfill()) {
                    var f = this._getRawStatus();
                    2 == f && 1 == s ? (this._updateTassei(), 0 == n.isFulfillUnlocked() && (this._alert = 4)) : 1 == f && this._updateProgress(2)
                } else 2 == t && 1 == i && 1 == l ? this._updateProgress(2) : 1 == t && 1 == i && 1 == l ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate654 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(3),
                    i = e >= 10,
                    n = this._getUnsetSlotCount(16),
                    r = n.all >= 1,
                    s = n.unlocked >= 1;
                if (2 == t && 1 == i && 1 == r) {
                    var a = this._getRawStatus();
                    2 == a ? (this._updateTassei(), 0 == s && (this._alert = 4)) : 1 == a && this._updateProgress(2)
                } else 2 == t && 1 == i ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate655 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(3),
                    i = e >= 20,
                    n = this._getUnsetSlotCount(54),
                    r = n.all >= 1,
                    s = n.unlocked >= 1;
                if (2 == t && 1 == i && 1 == r) {
                    var a = this._getRawStatus();
                    2 == a ? (this._updateTassei(), 0 == s && (this._alert = 4)) : 1 == a && this._updateProgress(2)
                } else 2 == t && 1 == i ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate657 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(44),
                    i = e >= 5e3,
                    n = new _;
                if (n.add(23, 2), n.add(13, 2), 2 == t && 1 == i && 1 == n.isFulfill()) {
                    var r = this._getRawStatus();
                    2 == r ? (this._updateTassei(), 0 == n.isFulfillUnlocked() && (this._alert = 4)) : 1 == r && this._updateProgress(2)
                } else 2 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(2) : 1 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate658 = function () {
                var t = this._getRawProgress(),
                    e = o.default.model.useItem.getCount(3),
                    i = e >= 120,
                    n = new _;
                if (n.add(15, 3), n.add(46, 3), 2 == t && 1 == i && 1 == n.isFulfill()) {
                    var r = this._getRawStatus();
                    2 == r ? (this._updateTassei(), 0 == n.isFulfillUnlocked() && (this._alert = 4)) : 1 == r && this._updateProgress(2)
                } else 2 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(2) : 1 == t && 1 == i && n.fulfill_count > 0 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._statusUpdate666 = function () {
                var t = this._getRawProgress(),
                    e = new _;
                e.add(23, 2), e.add(26, 2);
                var i = o.default.model.useItem.getCount(70),
                    n = i >= 1;
                if (1 == t)
                    if (1 == e.isFulfill())
                        if (1 == n) {
                            var r = this._getRawStatus();
                            2 == r ? (this._updateTassei(), 0 == e.isFulfillUnlocked() && (this._alert = 4)) : this._updateProgress(2)
                        } else this._updateProgress(2);
                else this._updateProgress(1);
                else this._updateProgress(0)
            }, e.prototype._statusUpdate668 = function () {
                var t = this._getUnsetSlotCount(145),
                    e = o.default.model.useItem.get(31).count,
                    i = o.default.model.useItem.get(34).count,
                    n = e >= 800 && i >= 150;
                if (1 == n && t.all >= 2) {
                    2 == this._getRawStatus() ? (this._updateTassei(), t.unlocked < 2 && (this._alert = 4)) : this._updateProgress(2)
                } else 1 == n && t.all >= 1 ? this._updateProgress(1) : this._updateProgress(0)
            }, e.prototype._getUnsetSlotCount = function (t) {
                for (var e = o.default.model.slot.createUnsetList([], [t]), i = e.length, n = 0, r = 0, s = e; r < s.length; r++) {
                    0 == s[r].isLocked() && n++
                }
                return {
                    all: i,
                    unlocked: n
                }
            }, e.prototype._updateTassei = function () {
                this._o.api_state_ = 3, this._updateProgress(0)
            }, e.prototype._updateProgress = function (t) {
                this._o.api_progress_flag_ = t
            }, e
        }(s.DutyModel);
    e.DutyModel_ = a;
    var _ = function () {
            function t() {
                this._conds = []
            }
            return Object.defineProperty(t.prototype, "fulfill_count", {
                get: function () {
                    for (var t = 0, e = 0, i = this._conds; e < i.length; e++) {
                        var n = i[e];
                        n.count < n.need && t++
                    }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.add = function (t, e) {
                var i = new u(t, e);
                this._conds.push(i)
            }, t.prototype.isFulfill = function () {
                for (var t = 0, e = this._conds; t < e.length; t++) {
                    var i = e[t];
                    if (i.count < i.need) return !1
                }
                return !0
            }, t.prototype.isFulfillUnlocked = function () {
                for (var t = 0, e = this._conds; t < e.length; t++) {
                    var i = e[t];
                    if (i.count_unlocked < i.need) return !1
                }
                return !0
            }, t
        }(),
        u = function () {
            function t(t, e) {
                this._count = 0, this._count_unlocked = 0, this._need = 0;
                var i = o.default.model.slot.createUnsetList([], [t]);
                this._count = i.length, this._count_unlocked = 0;
                for (var n = 0, r = i; n < r.length; n++) {
                    0 == r[n].isLocked() && this._count_unlocked++
                }
                this._need = e
            }
            return Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return this._count
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "count_unlocked", {
                get: function () {
                    return this._count_unlocked
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "need", {
                get: function () {
                    return this._need
                },
                enumerable: !0,
                configurable: !0
            }), t
        }()
}