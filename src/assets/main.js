$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3621943.json',
    dataType: 'jsonp',
    success: function(response){
      console.log(response.courses.completed)
      $.each(response.courses.completed, function(index, property){
        let title = '<h3>'+response.courses.completed[index].title+'</h3>';
        let urlimg = response.courses.completed[index].badge;
        let image = '<img src='+urlimg+'></img>';
        let urlbtn = response.courses.completed[index].url;
        let linkbtn = '<a class="contents" href='+urlbtn+' target="_blank">See Course</a>';
        let btn = '<button class="MENU">'+linkbtn+'</button>';
        $('#badges').append('<div class="course">'+title+image+btn+'</div>')
      })
    }
  })
});
