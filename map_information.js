// When the user clicks the marker, an info window opens.

/*    function attachMessage(marker) {
	google.maps.event.addListener(marker, 'click', function() {
	    new google.maps.Geocoder().geocode({
		latLng: marker.getPosition()
	    }, function(result, status) {
		if (status == google.maps.GeocoderStatus.OK) {
          new google.maps.InfoWindow({
              content: contentString
          }).open(marker.getMap(), marker);
        }
      });
	});
	}*/

      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};


var contentString =/*
    '<div class="ex_2" style="left: 275.5px; top: 133.5px;">'+

    '<!-- モーダルウインドウ -->'+
    '<div id="modal-content">'+

    '<form id="detail">'+
    '<p id="username">UserName</p>'+
    '<hr>'+
    '<p id="comment">Comment</p>'+
    '<hr>'+
    '<p>Like　Comment</p>'+
    '<hr>'+
    '</form>'+
    
    '<img src="picture/Effel.JPG">'+
    
    '<p>'+
    '<a id="modal-close" class="button-link">'+
    '<p id="close">閉じる</p>'+
    '</a>'+
    '</p>'+

    '<!-- モーダルウィンドウのコンテンツの終了 -->'+
    '</div>'+

    '<p>+
    <a id="modal-open" class="button-link">クリックするとモーダルウィンドウが開きます。</a>+
    </p>'+
    '<!-- ここまでモーダルウィンドウ -->'+
    '</div>';*/













    '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';



        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });


var marker = new google.maps.Marker({
          position: uluru,
          map: map,
        /*  title: 'Uluru (Ayers Rock)'*/
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
