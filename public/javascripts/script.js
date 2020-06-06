$(function() {
    $("#b1").on("click", function () {
      var url = $("#i1").val();
      console.log(url);
      $.ajax({
        type: 'GET',
        url: '/admin/q/'+url,
        success: function(order) {
        var html=''
        if(order.length==1){ console.log(order);
            order=order[0]
            html = '<div class="row justify-content-center mt30"><h2> you searched for</h2><br></div><div class="container"><div class="card-group vgr-cards"><div class="card"><div class="card-img-body"><img class="card-img" src="/images/'+order.doc+'" alt="Card image cap"></div><div class="card-body"><h4 class="card-title">registration No. :'+order.rid+'</h4><p class="card-text"><i name="name" style="font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:20px;">name:'+order.name+'</i><br><i name="email" style="font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:20px;">email:'+order._id+'</i><br><i name="mobile" style="font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:20px;">mobile:'+order.number+'</i><br><i name="type" style="font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:20px;">Type of registration:'+order.reg+'</i><br><i name="tickets" style="font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:20px;">no. of tickets: '+order.tickets+'</i></p></div></div></div></div></div>';
       }
       else{
            html='<div class="row justify-content-center mt30"><h2> no results found...</h2><br></div>'
       }
          //   for (var i = 0; i< order.length; i++) {
        //       html += '<h2>' + order[i].name + ' ' + order[i].drink + '</h2>';
        //   }
          $('#target').html(html);
        }
      });
    });
  });