/*
 * the function called by `270.js`
 * graph loader?
 */
const function145 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    // class r extends o.TaskBase
    var o = i(2), r = function (t) {
        function e(i) {
            var n = t.call(this) || this;
            n._aborted = false;
            /*
             * The Sprite object is the base for all textured objects that are rendered to the screen
             * http://pixijs.download/dev/docs/PIXI.Sprite.html
             */
            n._sprite = i;
            null == e._queue && (e._queue = []);
            return n
        }

        n(e, t);
        e.abortAll = function () {
            e._queue = [], null != e._current && (e._current._abort(), e._current = null)
        };
        e.abortBy = function (t) {
            if (null != t) {
                if (null != e._queue) {
                    for (var i = [], n = 0, o = e._queue; n < o.length; n++) {
                        var r = o[n];
                        0 == r._isChildElement(t) ? i.push(r) : r._log("discard")
                    }
                    e._queue = i
                }
                if (null != e._current) {
                    var s = e._current;
                    1 == s._isChildElement(t) && (s._log("stop(current)"), s._abort(), e._current = null)
                }
            }
        };
        e.prototype.start = function () {
            if (null == e._current) e._current = this, this._start(); else {
                for (var t = [], i = 0, n = e._queue; i < n.length; i++) {
                    var o = n[i];
                    o._sprite != this._sprite ? t.push(o) : o._log("discard(same sprite)")
                }
                e._queue = t, e._queue.push(this);
                var r = e._current;
                r._sprite == this._sprite && (r._sprite = null)
            }
        };
        e.prototype._abort = function () {
            this._aborted = !0, this._endTask()
        };
        e.prototype._endTask = function () {
            this._sprite = null, t.prototype._endTask.call(this)
        };
        e.prototype._completedEnd = function () {
            t.prototype._completedEnd.call(this), 0 == this._aborted && this._next()
        };
        e.prototype._failedEnd = function () {
            t.prototype._failedEnd.call(this), 0 == this._aborted && this._next()
        };
        e.prototype._next = function () {
            if (e._current = null, 0 != e._queue.length) {
                var t = e._queue.shift();
                e._current = t, t._start()
            }
        };
        e.prototype._isChildElement = function (t) {
            if (null == this._sprite) return !1;
            for (var e = this._sprite; null != e && e != t;) e = e.parent;
            return null != e
        };
        e._current = null;
        e._queue = null;
        return e
    }(o.TaskBase);
    e.TaskLoadBase = r
}