$(document).ready(() =>{
    const $wrongOne = $('.wrong-answer-one');
    const $wrongTwo = $('.wrong-answer-two');
    const $wrongThree = $('.wrong-answer-three');
  
    const $wrongArray = [$wrongOne, $wrongTwo, $wrongThree];
  
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle('slow');
    });
  
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut('slow');
      $('.frown').show();
    });
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut('slow');
      $('.frown').show();
    });
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut('slow');
      $('.frown').show();
    });
  
    $('.correct-answer').on('click', () => {
      $wrongArray.forEach($wrong => {
        $wrong.fadeOut('fast');
      })
      $('.frown').hide();
      $('.smiley').show();    
    });
  
    $('.button').on('click', () => {
      $('.smiley').hide();
      $('.frown').hide();
      $wrongArray.forEach($wrong => {
        $wrong.show('fast');
      });
      $('.answer-text').fadeIn('fast');
    });
  
  }); 