chrome.contextMenus.create({
	"title": "Customerize this",
	"contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {

	chrome.tabs.query(
		{active: true}, 
		function(tabs){ 
			chrome.tabs.sendMessage(
				tab.id, 
				{
					action: "sendInfo",
					info: item
				}, 
				function(response) { 
					//some
				}
			); 
		}
	);
});
