const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  // Check if working...
  console.log(count);
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
navItem.addEventListener('click', toggleNavigation);




function locationClick() {

  var userWord = document.getElementById("locationBox").value;
  console.log(userWord)

  if (userWord === "Etiam si omnes, ego non") {
    window.location.replace("block.html");
  } else if (userWord == "Havana" || userWord == "havana") {
    window.location.replace("https://www.google.com/maps/place/Havana,+Cuba/")
  } else if (userWord == "Sydney" || userWord == "sydney") {
    window.location.replace("https://www.google.com/maps/place/Sydney+NSW,+Australia/")
  } else if (userWord == "Rio" || userWord == "rio") {
    window.location.replace("https://www.google.com/maps/place/Rio+de+Janeiro,+State+of+Rio+de+Janeiro,+Brazil/")
  } else if (userWord == "Cape town" || userWord == "cape town"|| userWord == "Cape Town") {
    window.location.replace("https://www.google.com/maps/place/Cape+Town,+South+Africa/")
  } else if (userWord == "San antonio" || userWord == "san antonio"|| userWord == "San Antonio") {
    window.location.replace("https://www.google.com/maps/place/San+Antonio,+TX,+USA/")
  } else if (userWord == "Anchorage" || userWord == "anchorage") {
    window.location.replace("https://www.google.com/maps/place/Anchorage,+AK,+USA/")
  } else if (userWord == "New york" || userWord == "new york"|| userWord == "New York") {
    window.location.replace("https://www.google.com/maps/place/New+York,+NY,+USA/")
  } else if (userWord == "Panama city" || userWord == "panama city"|| userWord == "Panama City") {
    window.location.replace("https://www.google.com/maps/place/Panama+City,+Panama/")
  }

}



$(function() {
  var btn = $(".btn");
  
  btn.on("click", function() {
    
    $(this).addClass('btn-progress');
    setTimeout(function() {
      btn.addClass('btn-fill')
    }, 500);
    
    setTimeout(function() {
      btn.removeClass('btn-fill')
    }, 4100);
    
    setTimeout(function() {
      btn.addClass('btn-complete')
    }, 4100);
  
  });
})



(function($){
  // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
})(jQuery);
