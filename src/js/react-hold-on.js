import React from "react";
import { render } from 'react-dom';
import './react-hold-on.css';
import $ from 'jquery';

var _settings = {
    instanceProtection : null
}

/**
 * Protected methods
 */
var _ = {
    /**
     * Activate remove protection for HoldOn.js
     * 
     * @param {type} properties
     * @returns {undefined}
     */
    protectInstance : function(properties){
        let protection = setInterval(function(){
            if(!document.getElementById('holdon-overlay')){
                _.open(properties)
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
    getHtml : function(theme, properties){
        switch(theme){
            case "custom":
                return(
                    <div style="text-align: center;">
                        {properties.content}
                    </div>
                );
            
            case "sk-dot":
                return(
                    <div className="sk-dot"> 
                        <div className="sk-dot1"></div>
                        <div className="sk-dot2"></div> 
                    </div>
                );

            case "sk-rect":
                return(
                    <div className="sk-rect"> 
                        <div className="rect1"></div> 
                        <div className="rect2"></div> 
                        <div className="rect3"></div> 
                        <div className="rect4"></div> 
                        <div className="rect5"></div> 
                    </div>
                );
            case "sk-cube":
                return(
                    <div className="sk-cube"> 
                        <div className="sk-cube1"></div> 
                        <div className="sk-cube2"></div> 
                    </div>
                );

            case "sk-bounce":
                return(
                    <div className="sk-bounce"> 
                        <div className="bounce1"></div> 
                        <div className="bounce2"></div> 
                        <div className="bounce3"></div>
                    </div>
                );
            
            case "sk-circle":
                return(
                    <div className="sk-circle"> 
                        <div className="sk-circle1 sk-child"></div> 
                        <div className="sk-circle2 sk-child"></div> 
                        <div className="sk-circle3 sk-child"></div> 
                        <div className="sk-circle4 sk-child"></div> 
                        <div className="sk-circle5 sk-child"></div> 
                        <div className="sk-circle6 sk-child"></div> 
                        <div className="sk-circle7 sk-child"></div> 
                        <div className="sk-circle8 sk-child"></div> 
                        <div className="sk-circle9 sk-child"></div> 
                        <div className="sk-circle10 sk-child"></div> 
                        <div className="sk-circle11 sk-child"></div> 
                        <div className="sk-circle12 sk-child"></div> 
                    </div>
                );
            
            case "sk-cube-grid":
                return (
                    <div className="sk-cube-grid"> 
                        <div className="sk-cube-child sk-cube-grid1"></div> 
                        <div className="sk-cube-child sk-cube-grid2"></div> 
                        <div className="sk-cube-child sk-cube-grid3"></div> 
                        <div className="sk-cube-child sk-cube-grid4"></div> 
                        <div className="sk-cube-child sk-cube-grid5"></div> 
                        <div className="sk-cube-child sk-cube-grid6"></div> 
                        <div className="sk-cube-child sk-cube-grid7"></div> 
                        <div className="sk-cube-child sk-cube-grid8"></div> 
                        <div className="sk-cube-child sk-cube-grid9"></div> 
                    </div>
                );

            case "sk-folding-cube":
                return (
                    <div className="sk-folding-cube"> 
                        <div className="sk-cubechild1 sk-cube-parent"></div> 
                        <div className="sk-cubechild2 sk-cube-parent"></div>
                        <div className="sk-cubechild4 sk-cube-parent"></div> 
                        <div className="sk-cubechild3 sk-cube-parent"></div> 
                    </div>
                );

            case "sk-fading-circle":
                return(
                    <div className="sk-fading-circle"> 
                        <div className="sk-fading-circle1 sk-circle-child"></div> 
                        <div className="sk-fading-circle2 sk-circle-child"></div> 
                        <div className="sk-fading-circle3 sk-circle-child"></div> 
                        <div className="sk-fading-circle4 sk-circle-child"></div> 
                        <div className="sk-fading-circle5 sk-circle-child"></div> 
                        <div className="sk-fading-circle6 sk-circle-child"></div> 
                        <div className="sk-fading-circle7 sk-circle-child"></div> 
                        <div className="sk-fading-circle8 sk-circle-child"></div> 
                        <div className="sk-fading-circle9 sk-circle-child"></div> 
                        <div className="sk-fading-circle10 sk-circle-child"></div> 
                        <div className="sk-fading-circle11 sk-circle-child"></div> 
                        <div className="sk-fading-circle12 sk-circle-child"></div> 
                    </div>
                );

            default:
                console.warn(theme + " doesn't exist for React HoldOn");
                return (
                    <div className="sk-rect"> 
                        <div className="rect1"></div> 
                        <div className="rect2"></div> 
                        <div className="rect3"></div> 
                        <div className="rect4"></div> 
                        <div className="rect5"></div> 
                    </div>
                );
        }
    },
    /**
     * 
     * @param {type} properties
     * @returns {undefined}
     */
    open : function(properties){
        let theme = "sk-rect";
        let content = "";
        let message = "";
        let style = {
            display : 'none'
        };
        
        if(properties){
            if(properties.hasOwnProperty("theme")){
                theme = properties.theme;
            }

            if(properties.hasOwnProperty("message")){
                message = properties.message
            }
        }

        content = _.getHtml(theme, properties);

        let holderContent = (
            <div id="holdon-content-container">
                <div id="holdon-content">{content}</div>
                <div id="holdon-message">{message}</div>
            </div>
        );

        // Remove protection and overlay before add the new one
        clearInterval(_settings.instanceProtection);
        _.removeOverlay();

        let holder = document.createElement("div");
        holder.id = "holdon-overlay";
        holder.style = style;
        if(!document.getElementById("holdon-overlay"))
            document.body.appendChild(holder);
        render(holderContent, document.getElementById("holdon-overlay"));

        $(document.getElementById("holdon-overlay")).fadeIn();

        if(properties){
            if(properties.backgroundColor){
                style.backgroundColor = properties.backgroundColor;
            }

            if(properties.color){
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
    removeOverlay : function(){
        let el = document.getElementById("holdon-overlay");
        $(el).fadeOut(400, function(){
            if(el && el.parentNode){
                el.parentNode.removeChild(el);
            }
        });
    },

    /**
     * Closes the active instance of HoldOn
     * 
     * @returns {boolean}
     */
    close : function(){
        if(document.getElementById('holdon-overlay')){
            clearInterval(_settings.instanceProtection);
            
            _.removeOverlay();

            _settings.instanceProtection = null;

            return true;
        }

        return false;
    }
}

/**
 * Project HoldOn.js translated for Ract
 * 
 */

export default _;