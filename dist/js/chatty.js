/**
 * Chatty.js
 * 
 * A lightweight notification library for broadcasting messages in a user-interface.
 *
 * Author: Lansana Camara - https://github.com/lansana
 * @license MIT
 */

/**
 * Define Chatty constructor
 *
 * @param options
 * @constructor
 */
function Chatty (options) {
    // The default options
    this.options = {
        message: 'Woohoo, you rock!',
        duration: 3000,
        infinite: false,
        position: 'bottom right',
        renderHtml: false,
        isError: false,
        styles: {}
    };

    // Merge the defaults with the optional data
    if (options && typeof options === 'object') {
        this._extend(this.options, options)
    }

    // Define remaining class properties
    this.positionClass = this.options.position;
    this.id = 'chatty-' + new Date().getTime();
    this.body = document.body;
    this.chatty = null;
}

/**
 * Public/private methods for Chatty
 *
 * @type {{object}}
 */
Chatty.prototype = {

    /**
     * Add the chatty to the DOM and set to be automatically removed.
     *
     * @returns {Chatty}
     */
    show: function () {
        var self = this;
        var chatty = self._resetChatty(self.chatty);

        if (!chatty) {
            chatty = self._createChatty();
        }

        // Add chatty to the body
        self.body.appendChild(chatty);

        // Set the chatty object
        self.chatty = document.getElementById(chatty.id);

        // Set chatty to be automatically removed if applicable
        if (!self.options.infinite) {
            setTimeout(function () {
                // Clean up the crumbs
                self._removeChatty();
            }, self.options.duration);
        }

        return self;
    },

    /**
     * Update any properties with the new configuration
     *
     * @param config
     */
    update: function (config) {
        this._extend(this.options, config);

        // Update text
        if (this.options.renderHtml) {
            this._setText(this.chatty, this.options.message, true);
        } else {
            this._setText(this.chatty, this.options.message);
        }

        // Update class
        this.chatty.className = 'chatty-container ' + this.options.position;

        // Update styles
        this._extend(this.chatty.style, this.options.styles);

        // Update error class
        if (this.options.isError) {
            this.chatty.className += ' error';
        }
    },

    /**
     * Remove the chatty from the DOM (cleaning up the crumbs)
     *
     * @returns {Chatty}
     */
    close: function () {
        // Force removal (ignore this.options.infinite flag).
        this._removeChatty();

        return this;
    },

    /**
     * Create and returns a chatty object, consisting of the node and its id.
     *
     * @returns {Element}
     * @private
     */
    _createChatty: function () {
        var self = this;

        // Create chatty container
        var chatty = document.createElement('div');
        chatty.className = 'chatty-container ' + self.positionClass + (self.options.isError ? ' error' : '');
        chatty.id = self.id;

        // Set styles if applicable
        self._extend(chatty.style, self.options.styles);

        // Create chatty message
        var chattyMessage = document.createElement('div');
        chattyMessage.className = 'chatty-message';
        if (self.options.renderHtml) {
            self._setText(chattyMessage, self.options.message, true);
        } else {
            self._setText(chattyMessage, self.options.message);
        }

        // Add chatty message to chatty container
        chatty.appendChild(chattyMessage);

        return chatty;
    },

    /**
     * Remove chatty from DOM
     *
     * @returns {Chatty}
     * @private
     */
    _removeChatty: function () {
        var self = this;

        // Fade out
        self.chatty.style.opacity = '0';

        // Wait a second and clean up the crumbs
        setTimeout(function () {
            self.body.removeChild(self.chatty);
        }, 1000);

        return self;
    },

    /**
     * Update the properties of the chatty after it has been "removed" in order to
     * allow it to be seen again if the 'show' method is called again
     *
     * @param chatty
     * @private
     */
    _resetChatty: function (chatty) {
        if (chatty && chatty.style) {
            chatty.style.opacity = '1';
        }
    },

    /**
     * Cross-browser implementation to set text value of a node.
     * 'innerText' and 'textValue' have their problems.
     *
     * @param node
     * @param text
     * @param renderHtml
     * @private
     */
    _setText: function (node, text, renderHtml) {
        while (node.firstChild !== null) {
            node.removeChild(node.firstChild);
        }

        if (renderHtml) {
            var d = document.createElement('div');
            d.innerHTML = text;

            while (d.firstChild) {
                node.appendChild(d.firstChild);
            }
        } else {
            node.appendChild(document.createTextNode(text));
        }
    },

    /**
     * Merge two objects. 'source' is the object that will be altered with the
     * properties of 'config'.
     *
     * @param source
     * @param config
     * @private
     */
    _extend: function (source, config) {
        for (var key in config) {
            if (config && config.hasOwnProperty(key)) {
                source[key] = config[key];
            }
        }
    }

};