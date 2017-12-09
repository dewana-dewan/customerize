chrome.contextMenus.create({
	"title": "Customerize this",
	"contexts": ["image"]
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
	
	console.log(item, item.srcUrl);
	localStorage.setItem('url', item.srcUrl);

	chrome.windows.create({
			// Just use the full URL if you need to open an external page
			url: chrome.runtime.getURL('app/index.html'),
			type: 'popup',
			focused: true
			// state: 'maximized'
		}, function(win) {

			chrome.tabs.onRemoved.addListener( function(tabId, removeInfo) {



				chrome.extension.getBackgroundPage().console.log(win, item.srcUrl);
				console.log(win, item.srcUrl);
				chrome.tabs.query(
					{active: true}, 
					function(tabs){ 
						chrome.tabs.sendMessage(
							tab.id, 
							{
								action: "setImage",
								info: win
							}, 
							function(response) { 
								//some
								// chrome.windows.create({
								// 	// Just use the full URL if you need to open an external page
								// 	url: chrome.runtime.getURL('app/index.html'),
								// 	type: "popup",
								// 	focused: true
								// }, function(win) {
								// // ok
								// });
							}
						); 
					}
				);
			});

		}
	);

	// chrome.tabs.query(
	// 	{active: true}, 
	// 	function(tabs){ 
	// 		chrome.tabs.sendMessage(
	// 			tab.id, 
	// 			{
	// 				action: "sendInfo",
	// 				info: item
	// 			}, 
	// 			function(response) { 
	// 				//some
	// 				chrome.windows.create({
	// 					// Just use the full URL if you need to open an external page
	// 					url: chrome.runtime.getURL('app/index.html'),
	// 					type: "popup",
	// 					focused: true
	// 				}, function(win) {
	// 				// ok
	// 				});
	// 			}
	// 		); 
	// 	}
	// );
});
