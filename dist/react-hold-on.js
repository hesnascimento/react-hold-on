'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('./react-hold-on.css');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _settings = {
    instanceProtection: null

    /**
     * Protected methods
     */
};var _ = {
    /**
     * Activate remove protection for HoldOn.js
     *
     * @param {type} properties
     * @returns {undefined}
     */
    protectInstance: function protectInstance(properties) {
        var protection = setInterval(function () {
            if (!document.getElementById('holdon-overlay')) {
                _.open(properties);
            }
        }, 100);

        _settings.instanceProtection = protection;
    },

    /**
     * Returns the html content with a given theme
     *
     * @param {type} theme
     * @param {type} properties
     * @returns {type} JSX
     */
    getHtml: function getHtml(theme, properties) {
        switch (theme) {
            case "custom":
                return _react2.default.createElement('div', { style: "text-align: center;" }, [properties.content]);

            case "sk-dot":
                return _react2.default.createElement('div', { className: "sk-dot" }, [_react2.default.createElement('div', { className: "sk-dot1" }), _react2.default.createElement('div', { className: "sk-dot2" })]);

            case "sk-rect":
                return _react2.default.createElement('div', { className: "sk-rect" }, [_react2.default.createElement('div', { className: "rect1" }), _react2.default.createElement('div', { className: "rect2" }), _react2.default.createElement('div', { className: "rect3" }), _react2.default.createElement('div', { className: "rect4" }), _react2.default.createElement('div', { className: "rect5" })]);
            case "sk-cube":
                return _react2.default.createElement('div', { className: "sk-cube" }, [_react2.default.createElement('div', { className: "sk-cube1" }), _react2.default.createElement('div', { className: "sk-cube2" })]);

            case "sk-bounce":
                return _react2.default.createElement('div', { className: "sk-bounce" }, [_react2.default.createElement('div', { className: "bounce1" }), _react2.default.createElement('div', { className: "bounce2" }), _react2.default.createElement('div', { className: "bounce3" })]);

            case "sk-circle":
                return _react2.default.createElement('div', { className: "sk-circle" }, [_react2.default.createElement('div', { className: "sk-circle1 sk-child" }), _react2.default.createElement('div', { className: "sk-circle2 sk-child" }), _react2.default.createElement('div', { className: "sk-circle3 sk-child" }), _react2.default.createElement('div', { className: "sk-circle4 sk-child" }), _react2.default.createElement('div', { className: "sk-circle5 sk-child" }), _react2.default.createElement('div', { className: "sk-circle6 sk-child" }), _react2.default.createElement('div', { className: "sk-circle7 sk-child" }), _react2.default.createElement('div', { className: "sk-circle8 sk-child" }), _react2.default.createElement('div', { className: "sk-circle9 sk-child" }), _react2.default.createElement('div', { className: "sk-circle10 sk-child" }), _react2.default.createElement('div', { className: "sk-circle11 sk-child" }), _react2.default.createElement('div', { className: "sk-circle12 sk-child" })]);

            case "sk-cube-grid":
                return _react2.default.createElement('div', { className: "sk-cube-grid" }, [_react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid1" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid2" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid3" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid4" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid5" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid6" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid7" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid8" }), _react2.default.createElement('div', { className: "sk-cube-child sk-cube-grid9" })]);

            case "sk-folding-cube":
                return _react2.default.createElement('div', { className: "sk-folding-cube" }, [_react2.default.createElement('div', { className: "sk-cubechild1 sk-cube-parent" }), _react2.default.createElement('div', { className: "sk-cubechild2 sk-cube-parent" }), _react2.default.createElement('div', { className: "sk-cubechild4 sk-cube-parent" }), _react2.default.createElement('div', { className: "sk-cubechild3 sk-cube-parent" })]);

            case "sk-fading-circle":
                return _react2.default.createElement('div', { className: "sk-fading-circle" }, [_react2.default.createElement('div', { className: "sk-fading-circle1 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle2 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle3 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle4 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle5 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle6 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle7 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle8 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle9 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle10 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle11 sk-circle-child" }), _react2.default.createElement('div', { className: "sk-fading-circle12 sk-circle-child" })]);

            default:
                console.warn(theme + " doesn't exist for React HoldOn");
                return _react2.default.createElement('div', { className: "sk-rect" }, [_react2.default.createElement('div', { className: "rect1" }), _react2.default.createElement('div', { className: "rect2" }), _react2.default.createElement('div', { className: "rect3" }), _react2.default.createElement('div', { className: "rect4" }), _react2.default.createElement('div', { className: "rect5" })]);
        }
    },
    /**
     *
     * @param {type} properties
     * @returns {undefined}
     */
    open: function open(properties) {
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
        }

        content = _.getHtml(theme, properties);

        var holderContent = _react2.default.createElement('div', { id: "holdon-content-container" }, [_react2.default.createElement('div', { id: "holdon-content" }, [content]), _react2.default.createElement('div', { id: "holdon-message" }, [message])]);

        // Remove protection and overlay before add the new one
        clearInterval(_settings.instanceProtection);
        _.removeOverlay();

        var holder = document.createElement("div");
        holder.id = "holdon-overlay";
        holder.style = style;
        if (!document.getElementById("holdon-overlay")) document.body.appendChild(holder);
        (0, _reactDom.render)(holderContent, document.getElementById("holdon-overlay"));

        (0, _jquery2.default)(document.getElementById("holdon-overlay")).fadeIn();

        if (properties) {
            if (properties.backgroundColor) {
                style.backgroundColor = properties.backgroundColor;
            }

            if (properties.color) {
                style.color = properties.color;
            }

            _.protectInstance(properties);
        }

        return true;
    },

    /**
     * Remove overlay from body
     *
     * @return {undefined}
     */
    removeOverlay: function removeOverlay() {
        var el = document.getElementById("holdon-overlay");
        (0, _jquery2.default)(el).fadeOut(400, function () {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });
    },

    /**
     * Closes the active instance of HoldOn
     *
     * @returns {boolean}
     */
    close: function close() {
        if (document.getElementById('holdon-overlay')) {
            clearInterval(_settings.instanceProtection);

            _.removeOverlay();

            _settings.instanceProtection = null;

            return true;
        }

        return false;
    }

    /**
     * Project HoldOn.js translated for Ract
     *
     */

};exports.default = _;