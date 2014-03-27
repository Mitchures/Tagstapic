(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#search').click(showSearchBar);
    $('#tagstapic').click(homeButton);
    $('#bam').click(getPics);
    $('.create').click(create);
    $(document).on('click','img',add2Q);
  }

  //------Minor Show and Hide Functions--------


  function create(){
    $('#title').text('#Create Slideshow');
    $('#container2').hide();
    $('#container3').show();
  }

  function showSearchBar(){
    $('#container2').show();
    $('#container3').hide();
    $('#title').text('#Search Tags');
  }

  function homeButton(){
    emptyPics();
    $('#Q').empty();
    $('#title').text('#Tagstapic');
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
    if($('#Q').children('img').length < 6 || !$('#Q').children('img').length){
      $('#Q').append(this);
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

