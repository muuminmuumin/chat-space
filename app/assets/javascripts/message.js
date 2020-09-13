$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      let html = //メッセージに画像が含まれる場合のHTMLを作る
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
      let html = //メッセージに画像が含まれない場合のHTMLを作る
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
    .done(function(message){
      let html = buildHTML(message);
      console.log(message)
    })
    
    
  });
});