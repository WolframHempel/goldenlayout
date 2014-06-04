/* global TestComponent */
TestComponent = function( container, config ) {
	this._container = container;
	this._config = config;
	TestComponent.id++;
	this._element = $('<div class="testComponent"></div>' );
	this._sizeIndicator = $('<div class="sizeIndicator"></div>' );
	this._element.append( this._sizeIndicator );
	//this._element.append( '<h3>' + JSON.stringify( config ) + '</h3>' );
	this._element.append(
		'<div class="content">' +
			'<h1>' + config.componentName + ' ' + TestComponent.id + '</h1>' +
			'<ul>' +
				'<li><label>height</label><span class="height"></span></li>' +
				'<li><label>width</label><span class="width"></span></li>' +
			'</ul>' +
		'</div>'
	);

	container.getElement().append( this._element );
	container.on( 'resize', this.resize, this );
	container.on( 'destroy', function(){console.log('destroy', config.componentName ); });
};

TestComponent.id = 0;

TestComponent.prototype.resize = function() {
	this._element.width( this._container.width ).height( this._container.height );
	this._sizeIndicator.width( this._container.width - 12 ).height( this._container.height - 12 );
	this._element.find( '.width' ).text( this._container.width );
	this._element.find( '.height' ).text( this._container.height );
};
