console.log("test");

const search_miles = document.getElementById('search_miles');
function getdata(url,callback) {
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.open("GET", url);
       xmlhttp.onreadystatechange = function() {
           if(this.readyState === 4 && this.status === 200) {
              xmlhttp.callback;
           }
       };
       xmlhttp.send();
}

    getdata('https://randomuser.me/api/?results=50', function(data){
      console.log('2');

    });
  
