wp.customize.controlConstructor['kirki-toggle'] = wp.customize.Control.extend({

	// When we're finished loading continue processing
	ready: function() {

		'use strict';

		var control = this;

		// Init the control.
		if ( ! _.isUndefined( window.kirkiControlLoader ) && _.isFunction( kirkiControlLoader ) ) {
			kirkiControlLoader( control );
		} else {
			control.initKirkiControl();
		}
	},

	initKirkiControl: function() {

		'use strict';

		var control = this,
		    checkboxValue = control.setting._value;

		// Save the value
		this.container.on( 'change', 'input', function() {
			checkboxValue = ( jQuery( this ).is( ':checked' ) ) ? true : false;
			control.setting.set( checkboxValue );
		});
	}
});
