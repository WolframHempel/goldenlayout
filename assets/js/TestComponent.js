TestComponent = function( container, state ) {
	this._element = $( $( '#test-component' ).html() );
	container.getElement().append( this._element );
};
