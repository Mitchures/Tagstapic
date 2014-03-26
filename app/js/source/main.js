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

  //------Test Functions-----------------

  /*window.onload = function(){
    imgs = document.getElementById('slideshow').children;
    interval = 8000;
    currentPic = 0;
    imgs[currentPic].style.animation = 'fadey '+interval+'ms';
    var infiniteLoop = setInterval(function(){
      imgs[currentPic].removeAttribute('style');
      if ( currentPic === imgs.length - 1) { currentPic = 0; } else { currentPic++; }
      imgs[currentPic].style.animation = 'fadey '+interval+'ms';
    }, interval);
  }*/

  
  //------Test Functions-----------------


  //------Adding To Q Functions----------

  function add2Q(){
    $('#Q').append($(this));
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

