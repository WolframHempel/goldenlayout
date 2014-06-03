window.onload = function()
{
	var mConfig = {
		dimensions: {
			borderWidth: 5
		},
		
		content:[
			{
				type: 'row',
				content:[
					{
						width: 80,
						type: 'column',
						content:[
							{
								type: 'component',
								componentName: 'watchlist',
								componentState: { 'instruments': [ 'MSFT', 'GOOG', 'AAPL' ] }
							},
							{
								isClosable: false,
								type: 'row',
								content:[
									{
										type: 'component',
										componentName: 'research'
									},
									{
										type: 'component',
										componentName: 'research'
									}
								]
							},
							{
								type: 'stack',
								content:[
									{
										type: 'component',
										componentName: 'research',
										componentState: { index: 1 }
									},
									{
										isClosable: false,
										type: 'component',
										componentName: 'research',
										componentState: { index: 2 }
									},
									{
										type: 'component',
										componentName: 'research',
										componentState: { index: 3 }
									}
								]
							}
						]
					},
					{
						width: 20,
						type: 'column',
						content: [
							{
								height: 30,
								type: 'component',
								componentName: 'commentary',
								componentState: { 'feedTopic': 'us-bluechips' }
							},
							{
								type: 'component',
								componentName: 'commentary',
								componentState: { 'feedTopic': 'lse' }
							}
						]
					}
				]
			}
		]
	};
	var layoutManager;

	if( window.lm ) {
		layoutManager = new lm.LayoutManager( mConfig );
	} else {
		layoutManager = new GoldenLayout( mConfig );
	}
	
	
	/* global TestComponent */
	layoutManager.registerComponent( 'watchlist', TestComponent );
	layoutManager.registerComponent( 'research', TestComponent );
	layoutManager.registerComponent( 'commentary', TestComponent );
	layoutManager.init();
};