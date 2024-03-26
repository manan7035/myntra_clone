let itemContainer = document.querySelector(".right_side_bar");

const item=[
    {
        id:'001',
        image:'Image/1.jpg',
        rating:{
        stars:4.5,
        noOfrevious: 1400
        },
        company_name:'Carlton London',
        item_name:'Rhodium_Plated CZ Floral Studs',
        current:606,
        orignal:1045,
        discount:42,
        return_period:14,
        delivery_date:'2 jun 2024',   
    },
    {
        id:'002',
        image:'Image/2.jpg',
        rating:{
        stars:4.3,
        noOfrevious: 24
        },
        company_name:'CUKOO',
        item_name:'Women Padded Halter Neck Swimming Dress',
        current:1507,
        orignal:2599,
        discount:42,
        return_period:14,
        delivery_date:'2 jun 2024',   
    },
    {
        id:'003',
        image:'Image/3.jpg',
        rating:{
        stars:4.1,
        noOfrevious:249
        },
        company_name:'NUEVOSDAMAS',
        item_name:'Women Red & White Printed A-Line Knee-Length Skirts',
        current:495,
        orignal:1599,
        discount:69,
        return_period:14,
        delivery_date:'2 jun 2024',  
    },
    {
        id:'004',
        image:'Image/4.jpg',
        rating:{
        stars:5.0,
        noOfrevious:10
        },
        company_name:'ADIDAS',
        item_name:'Indian Cricket ODI Jersey',
        current:999,
        orignal:999,
        discount:0,
        return_period:14,
        delivery_date:'2 jun 2024',   
    },
    {
        id:'005',
        image:'Image/5.jpg',
        rating:{
        stars:4.2,
        noOfrevious:3500
        },
        company_name:'Roadster',
        item_name:'Pure Cotton T-shirt',
        current:489,
        orignal:1399,
        discount:65,
        return_period:14,
        delivery_date:'2 jun 2024',  
    },
    {
        id:'006',
        image:'Image/6.jpg',
        rating:{
        stars:5,
        noOfrevious:2
        },
        company_name:'Nike',
        item_name:'Men ReactX Running Shoes',
        current:14995,
        orignal:14995,
        discount:0,
        return_period:14,
        delivery_date:'2 jun 2024',  
    },
    {
        id:'007',
        image:'Image/7.jpg',
        rating:{
        stars:4.2,
        noOfrevious:388
        },
        company_name:'The Indian Garage Co',
        item_name:'Men Slim Fit Regular Shorts',
        current:639,
        orignal:1599,
        discount: 60,
        return_period:14,
        delivery_date:'2 jun 2024',  
    },
    {
        id:'008',
        image:'Image/8.jpg',
        rating:{
        stars:4.2,
        noOfrevious:5200
        },
        company_name:'Nivea',
        item_name:'Men Fresh Deodrant 150ml',
        current:142,
        orignal:285,
        discount:50,
        return_period:14,
        delivery_date:'2 jun 2024',   
    },
    ]

function displayItem(){
    if(!itemContainer){
             return;
         }
let innerHtml='';
item.forEach(item =>{
    innerHtml+=`<div class="container_2">
    <div class="items">
        <img src="${item.image}" alt="item image" class="image">
        <div class="rating">
            ${item.rating.stars}⭐ | ${item.rating.noOfrevious}
        </div>
    </div>
    <div class="company_name">${item.company_name}</div>
    <div class="item_name">${item.item_name}</div>
        <span class="current">Rs ${item.current}</span>
        <span class="orignal">Rs ${item.orignal}</span>
        <span class="discount">Rs (${item.discount}% OFF)</span>
    <div class="add_to">
    <button class="add_to_bag" onclick="addToBag(${item.id})" >Add to Bag</button>
    </div>
    </div>`
});
itemContainer.innerHTML=innerHtml;
}
    displayItem();
    

   
    let bag=[];
    let bagstr=localStorage.getItem('bag');
    bag=bagstr?JSON.parse(bagstr):[];    
    function addToBag(itemid){
        bag.push(itemid);
        localStorage.setItem('bag',JSON.stringify(bag));
        displaybagIcon();
    }
    displaybagIcon();
    function displaybagIcon(){
        if(bag.length > 0){
            document.querySelector('.bag_count').innerText=bag.length;
            document.querySelector('.bag_count').style.visibility='visible';
        }
        else{
            document.querySelector('.bag_count').style.visibility='hidden';
        }
        
    }








