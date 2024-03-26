let bagItemObjects;
onLoad();
function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    displayBagSummry();
}

function displayBagSummry(){
  let summry=document.querySelector('.bag-summary');
  let totalItem=bagItemObjects.length;
  let totalMRP=0;
  let totalDiscount=0;
  

  bagItemObjects.forEach(bag=>{
    totalMRP+=bag.orignal;
    totalDiscount+= bag.orignal-bag.current;
  })

  const CONVENIENCE_FEES=99;
let finalPayment=totalMRP-totalDiscount +CONVENIENCE_FEES;

  summry.innerHTML=`
  <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}


function loadBagItemObjects(){

   console.log(bag);
   bagItemObjects = bag.map(itemId =>{
    for(let i=0;i<item.length;i++){
        if(itemId==item[i].id){
            return item[i];
        }
    }
   });
   console.log(bagItemObjects);
}

function displayBagItems(){

    let containerElement=document.querySelector('.bag-items-container');
    let innerHTML="";
    bagItemObjects.forEach(bag => {
        innerHTML +=generateItemHTML(bag);
    });
    containerElement.innerHTML=innerHTML;
}

function removeFromBag(itemId){
    bag=bag.filter(bagItemId=>bagItemId !== itemId);
    localStorage.setItem('bag', JSON.stringify(bag));
    loadBagItemObjects();
    displaybagIcon();
    displayBagItems();
    displayBagSummry();

}

function generateItemHTML(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current}</span>
        <span class="original-price">Rs ${item.orignal}</span>
        <span class="discount-percentage">(${item.discount}% OFF)</span>
      </div>
      <div>
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;

}