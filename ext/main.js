chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.action == 'sendInfo') {
    alert("Message recieved!");
    console.log(msg.info);

  	var modal, image;
    img_url = msg.info.srcUrl;
  	$modal = $(document.createElement('div'));

  	$.ajax({
  		url: chrome.extension.getURL('assets/index.html'),
  		success: function(data) {
  			$dat = $($.parseHTML(data));
  			$modal.append($dat);
  			$im_tag = $('#test_img', $modal);
  			$im_tag.attr('src', img_url);
  			console.log($modal, $im_tag);
  		}
  	});

  	$modal.addClass('modal_hai');
  	$(document.body).append($modal);
  }
});