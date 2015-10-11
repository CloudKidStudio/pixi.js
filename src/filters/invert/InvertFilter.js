var core = require('../../core');
// @see https://github.com/substack/brfs/issues/25
var fs = require('fs');

/**
 * This inverts your Display Objects colors.
 *
 * @class
 * @extends PIXI.AbstractFilter
 * @memberof PIXI.filters
 */
function InvertFilter()
{
    core.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fs.readFileSync(__dirname + '/invert.frag', 'utf8'),
        // custom uniforms
        {
            invert: { type: '1f', value: 1 }
        }
    );
}

module.exports = core.utils.extend(InvertFilter, core.AbstractFilter);

Object.defineProperties(InvertFilter.prototype, {
    /**
     * The strength of the invert. `1` will fully invert the colors, and
     * `0` will make the object its normal color.
     *
     * @member {number}
     * @memberof PIXI.filters.InvertFilter#
     */
    invert: {
        get: function ()
        {
            return this.uniforms.invert.value;
        },
        set: function (value)
        {
            this.uniforms.invert.value = value;
        }
    }
});
