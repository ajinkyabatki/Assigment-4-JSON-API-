let xhr=new XMLHttpRequest();

xhr.open('GET',"https://jsonplaceholder.typicode.com/comments")

xhr.onload=function() {
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(xhr.response);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
           console.log(`
           Name:${data[3].name}
           Email:${data[3].email}
           Body:${data[3].body}
           `);
        }
    }else{
        console.log("Error");
    }
}
xhr.send();

//rest country api was not loading in my browser so I did jsonplaceholder api instead