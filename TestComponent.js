/* global TestComponent */
TestComponent = function( container, config ) {
	this._container = container;
	this._config = config;
	TestComponent.id++;
	this._element = $('<div class="testComponent"></div>' );
	this._element.append( '<h1>' + config.componentName + ' ' + TestComponent.id + '</h1>' );
	//this._element.append( '<h3>' + JSON.stringify( config ) + '</h3>' );
	this._element.append(
		'<ul>' +
			'<li><label>height</label><span class="height"></span></li>' +
			'<li><label>width</label><span class="width"></span></li>' +
		'</ul>'
	);

	container.getElement().append( this._element );
	container.on( 'resize', this.resize, this );
	container.on( 'destroy', function(){console.log('destroy', config.componentName ); });
};

TestComponent.id = 0;

TestComponent.prototype.resize = function() {
	this._element.width( this._container.width ).height( this._container.height );
	this._element.find( '.width' ).text( this._container.width );
	this._element.find( '.height' ).text( this._container.height );
};
