

$('button').click(function(){

  // select buttons that are siblings of clicked button
  var siblingButtons = $(this).siblings('button');

  // remobe activebutton class of buttonsiblings
  siblingButtons.removeClass('activebutton');

  // toggleclass of activebutton being clicked
  $(this).toggleClass('activebutton');

  // sib selects divs that are siblings of this button
  var sib = $(this).siblings('div');
  // remove showtext class of this.siblings('div');
  sib.removeClass('showtext');

  // content equals buttons next element, the div with the text
  var content = $(this).next('div');
  // add / remove showtext class to text
  content.toggleClass('showtext');

});
