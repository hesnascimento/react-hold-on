"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Project HoldOn.js translated for Ract
 * @class
 */
var HoldOn = function () {
    function HoldOn() {
        _classCallCheck(this, HoldOn);

        this._settings = {
            instanceProtection: null
        };
    }

    /**
     *
     * @param {type} properties
     * @returns {undefined}
     */


    _createClass(HoldOn, [{
        key: "open",
        value: function open(properties) {
            var theme = "sk-rect";
            var content = "";
            var message = "";
            var style = {
                display: 'none'
            };

            if (properties) {
                if (properties.hasOwnProperty("theme")) {
                    theme = properties.theme;
                }

                if (properties.hasOwnProperty("message")) {
                    message = properties.message;
                }

                if (properties.backgroundColor) {
                    style.backgroundColor = properties.backgroundColor;
                }

                if (properties.color) {
                    style.color = properties.color;
                }

                this._protectInstance(properties);
            }

            content = this._getHtml(theme, properties);

            var holder = _react2.default.createClass('div', { id: "holdon-overlay", style: style }, [_react2.default.createClass('div', { id: "holdon-content-container" }, [_react2.default.createClass('div', { id: "holdon-content" }, [_react2.default.createClass('content')]), _react2.default.createClass('div', { id: "holdon-message" }, [message])])]);

            // Remove protection and overlay before add the new one
            clearInterval(this._settings.instanceProtection);
            _reactDom.render.unmountComponentAtNode(document.getElementById("holdon-overlay"));

            (0, _reactDom.render)(holder, document.getElementsByTagName("body"));

            return true;
        }

        /**
         * Closes the active instance of HoldOn
         *
         * @returns {boolean}
         */

    }, {
        key: "close",
        value: function close() {
            if (document.getElementById('holdon-overlay')) {
                clearInterval(this._settings.instanceProtection);

                _reactDom.render.unmountComponentAtNode(document.getElementById("holdon-overlay"));

                this._settings.instanceProtection = null;

                return true;
            }

            return false;
        }

        /**
         * Activate remove protection for HoldOn.js
         *
         * @param {type} properties
         * @returns {undefined}
         */

    }, {
        key: "_protectInstance",
        value: function _protectInstance(properties) {
            var protection = setInterval(function () {
                if (!document.getElementById('holdon-overlay')) {
                    this.open(properties);
                }
            }, 100);

            console.log("hat");
            this._settings.instanceProtection = protection;
        }

        /**
         * Returns the html content with a given theme
         *
         * @param {type} theme
         * @param {type} properties
         * @returns {type} JSX
         */

    }, {
        key: "_getHtml",
        value: function _getHtml(theme, properties) {
            switch (theme) {
                case "custom":
                    return _react2.default.createClass('div', { style: "text-align: center;" }, [properties.content]);

                case "sk-dot":
                    return _react2.default.createClass('div', { className: "sk-dot" }, [_react2.default.createClass('div', { className: "sk-dot1" }), _react2.default.createClass('div', { className: "sk-dot2" })]);

                case "sk-rect":
                    return _react2.default.createClass('div', { class: "sk-rect" }, [_react2.default.createClass('div', { class: "rect1" }), _react2.default.createClass('div', { class: "rect2" }), _react2.default.createClass('div', { class: "rect3" }), _react2.default.createClass('div', { class: "rect4" }), _react2.default.createClass('div', { class: "rect5" })]);
                case "sk-cube":
                    return _react2.default.createClass('div', { class: "sk-cube" }, [_react2.default.createClass('div', { class: "sk-cube1" }), _react2.default.createClass('div', { class: "sk-cube2" })]);

                case "sk-bounce":
                    return _react2.default.createClass('div', { class: "sk-bounce" }, [_react2.default.createClass('div', { class: "bounce1" }), _react2.default.createClass('div', { class: "bounce2" }), _react2.default.createClass('div', { class: "bounce3" })]);

                case "sk-circle":
                    return _react2.default.createClass('div', { class: "sk-circle" }, [_react2.default.createClass('div', { class: "sk-circle1 sk-child" }), _react2.default.createClass('div', { class: "sk-circle2 sk-child" }), _react2.default.createClass('div', { class: "sk-circle3 sk-child" }), _react2.default.createClass('div', { class: "sk-circle4 sk-child" }), _react2.default.createClass('div', { class: "sk-circle5 sk-child" }), _react2.default.createClass('div', { class: "sk-circle6 sk-child" }), _react2.default.createClass('div', { class: "sk-circle7 sk-child" }), _react2.default.createClass('div', { class: "sk-circle8 sk-child" }), _react2.default.createClass('div', { class: "sk-circle9 sk-child" }), _react2.default.createClass('div', { class: "sk-circle10 sk-child" }), _react2.default.createClass('div', { class: "sk-circle11 sk-child" }), _react2.default.createClass('div', { class: "sk-circle12 sk-child" })]);

                case "sk-cube-grid":
                    return _react2.default.createClass('div', { class: "sk-cube-grid" }, [_react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid1" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid2" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid3" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid4" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid5" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid6" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid7" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid8" }), _react2.default.createClass('div', { class: "sk-cube-child sk-cube-grid9" })]);

                case "sk-folding-cube":
                    return _react2.default.createClass('div', { class: "sk-folding-cube" }, [_react2.default.createClass('div', { class: "sk-cubechild1 sk-cube-parent" }), _react2.default.createClass('div', { class: "sk-cubechild2 sk-cube-parent" }), _react2.default.createClass('div', { class: "sk-cubechild4 sk-cube-parent" }), _react2.default.createClass('div', { class: "sk-cubechild3 sk-cube-parent" })]);

                case "sk-fading-circle":
                    return _react2.default.createClass('div', { class: "sk-fading-circle" }, [_react2.default.createClass('div', { class: "sk-fading-circle1 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle2 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle3 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle4 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle5 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle6 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle7 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle8 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle9 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle10 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle11 sk-circle-child" }), _react2.default.createClass('div', { class: "sk-fading-circle12 sk-circle-child" })]);

                default:
                    console.warn(theme + " doesn't exist for React HoldOn");
                    return _react2.default.createClass('div', { class: "sk-rect" }, [_react2.default.createClass('div', { class: "rect1" }), _react2.default.createClass('div', { class: "rect2" }), _react2.default.createClass('div', { class: "rect3" }), _react2.default.createClass('div', { class: "rect4" }), _react2.default.createClass('div', { class: "rect5" })]);
            }
        }
    }]);

    return HoldOn;
}();

exports.default = HoldOn;