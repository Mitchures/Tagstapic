(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#start').click(showSearchBar);
    $('#tagstapic').click(homeButton);
    $('#bam').click(getPics);
    $(document).on('click','img',add2Q);
  }

  //------Minor Show and Hide Functions--------


  function showSearchBar(){
    $('#container2').show();
    $('#container3').show();
    $('#title').text('Search #Tags');
    $('#title-p').text('Search and Select 6 Pics.');
  }

  function homeButton(){
    emptyPics();
    $('#Q-box').empty();
    $('#title').text('#Tagstapic');
    $('#title-p').text('');
    $('#container2').hide();
    $('#container3').hide();
    $('#search-box').val('');
  }

  function emptyPics(){
    $('#target').empty();
  }
  //------Show and Hide Functions--------

 


  //------Adding To Q Functions----------

  function add2Q(){
    if($('#Q-box').children('img').length < 6 || !$('#Q-box').children('img').length){
      $('#Q-box').append(this);
      var $li = $('<li>');
      $li.append($(this).clone());
      $('.orbitSlider').append($li);
    }
  }
  //------Adding To Q Functions----------


  //------Instagram API Functions--------


  function getPics(){
    emptyPics();
    var tag = $('#search-box').val();
    var count = 6;
    var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=86cecf102fdd46599736c4deac452424&callback=?&count=' + count;
    $.getJSON(url, displayPics);
  }

  function displayPics(instaData){
    var pics = instaData.data;
    for(var i=0; i < pics.length; i++){
      $('#target').append('<img src="'+pics[i].images.thumbnail.url+'">');
    }
  }

  //------Instagram API Functions--------

  
  

})();

