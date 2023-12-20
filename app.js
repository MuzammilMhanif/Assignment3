const card_area = document.getElementById('card_area');

const cards_data = [
      {
            id: 4,
            name: "newTitle",
            price: 205,
            description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
            image_url: "https://i.imgur.com/R2PN9Wq.jpeg"
        },
        {
            id: 7,
            name: "Ergonomic Wooden Tuna",
            price: 743,
            description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            image_url: "https://i.imgur.com/mp3rUty.jpeg"
        },
        {
            id: 9,
            name: "Electronic Bronze Chips",
            price: 808,
            description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four-wheel drive",
            image_url: "https://i.imgur.com/R3iobJA.jpeg"
        },
        {
            id: 11,
            name: "Awesome Bronze Car",
            price: 382,
            description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
            image_url: "https://i.imgur.com/cBuLvBi.jpeg"
        },
        {
            id: 12,
            name: "Recycled Rubber Cheese",
            price: 30,
            description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
            image_url: "https://i.imgur.com/KeqG6r4.jpeg"
            }
 ]
showgallery(cards_data);
function showgallery(){
    document.getElementById("card_area").innerText = '';
cards_data.map((card,index)=>card_area.innerHTML += `
 <div class="card">
<h4 class="title">${card.name}
  <div class="card-body">
    <p class="card-text">${card.description}</p>
        <p class="card-text">Price: $${card.price}</p>
</div>

`)
    
}
    
let searchbox = document.getElementById('myinput');
let texxt = document.getElementById('myinput').value;
let filarray = ""
searchbox.addEventListener("keyup",function(){
    fillarray = cards_data.filter(function(a){
        if(a.name.includes(texxt)){
            return a.name;
        }
    });
    if(this.value ==""){
        showgallery(cards_data);

    }
    else {
        showgallery(cards_data);
    }
})