(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#search').click(showSearchBar);
    $('#tagstapic').click(homeButton);
    $('#bam').click(getPics);
  }

  //------Minor Show and Hide Functions--------

  function showSearchBar(){
    $('#container2').show();
    $('#title').text('#Search Tags');
  }

  function homeButton(){
    $('#title').text('#Tagstapic');
    $('#container2').hide();
    $('#target').empty();
    $('#search-box').val('');
  }

  //------Show and Hide Functions--------




  //------Instagram API Functions--------


  function getPics(){
    $('#target').empty();
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

