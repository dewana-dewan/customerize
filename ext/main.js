chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.action == 'sendInfo') {
    alert("Message recieved!");
    console.log(msg.info);

  	var modal, image;
    img_url = msg.info.srcUrl;
  	$modal = $(document.createElement('div'));
  	// $modal.attr('src' , chrome.runtime.getURL('app/index.html'));
  	// $im_tag = $('#mainbg', $modal.contents());
  	// console.log($im_tag);
  	// $im_tag.attr('src', img_url);

  	$.ajax({
  		url: chrome.extension.getURL('app/index.html'),
  		success: function(data) {
  			$dat = $($.parseHTML(data));
  			$im_tag = $('#mainbg', $dat);
  			$im_tag.attr('src', img_url);
  			// $modal.contents().find("body").append($dat);
  			$modal.append($dat);
  			console.log($modal, $im_tag);
  		}
  	});

  	$modal.addClass('modal_hai');
  	$(document.body).append($modal);
  }

  else if(msg.action == 'setImage') {
  	console.log(msg.info);
    var imag = msg.info
    $('.sfescn').attr('src', imag);
  }
});