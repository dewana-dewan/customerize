chrome.contextMenus.create({
	"title": "Customerize this",
	"contexts": ["image"]
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    alert(message);
    img_recieved = message;
    updateImage(message);
});

function updateImage(msg) {
	chrome.tabs.query({}, function(tabs) {
		alert(tabs[0].id);
		// alert(tab.id);
		chrome.tabs.sendMessage(
			tabs[0].id, 
			{
				action: "sendInfo",
				info: msg
			}, 
			function(respose) {

			}
		);
	});
}


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
			chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
				chrome.tabs.query(
					{}, 
					function(tabs){ 
						chrome.tabs.sendMessage(
							tab.id, 
							{
								action: "setImage",
								info: message
							}, 
							function(response) { 

							}
						); 
					}
				);
			});
		}
	);
});
