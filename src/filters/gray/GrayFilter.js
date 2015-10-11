var core = require('../../core');
// @see https://github.com/substack/brfs/issues/25
var fs = require('fs');

/**
 * This greyscales the palette of your Display Objects.
 *
 * @class
 * @extends PIXI.AbstractFilter
 * @memberof PIXI.filters
 */
function GrayFilter()
{
    core.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fs.readFileSync(__dirname + '/gray.frag', 'utf8'),
        // set the uniforms
        {
            gray: { type: '1f', value: 1 }
        }
    );
}

module.exports = core.utils.extend(GrayFilter, core.AbstractFilter);

Object.defineProperties(GrayFilter.prototype, {
    /**
     * The strength of the gray. 1 will make the object black and white, 0 will make the object its normal color.
     *
     * @member {number}
     * @memberof PIXI.filters.GrayFilter#
     */
    gray: {
        get: function ()
        {
            return this.uniforms.gray.value;
        },
        set: function (value)
        {
            this.uniforms.gray.value = value;
        }
    }
});
