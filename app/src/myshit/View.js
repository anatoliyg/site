/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(function(require, exports, module) {
    
    function View(options) {
        
    }

    View.prototype.saySomething = function saySomething(){
        alert('yo, what did you want me to say?');
    }

   
    module.exports = View;
});
