$(function(){
  function buildHTML(message){
    
    if (message.image) {
      let html = 
        `<div class="MessageFrame">
          <div class="MessageFrame__NameDate">
            <div class="MessageFrame__NameDate__Name">
              ${message.user_name}
            </div>
            <div class="MessageFrame__NameDate__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="MessageFrame__Text">
            <p class="MessageFrame__Text__Body">
              ${message.body}
            </p>
            <img class='MessageFrame__Text__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
      `<div class="MessageFrame">
        <div class="MessageFrame__NameDate">
          <div class="MessageFrame__NameDate__Name">
            ${message.user_name}
          </div>
          <div class="MessageFrame__NameDate__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="MessageFrame__Text">
          <p class="MessageFrame__Text__Body">
            ${message.body}
          </p>
        </div>
      </div>`
      return html
    };
  }


  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,  
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data)
      $(".MessageList").append(html);
      $("form")[0].reset();
      
    })
    
    
  });
});