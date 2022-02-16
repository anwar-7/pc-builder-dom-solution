//----------------------->
// document.getElementById('sixteenGB').addEventListener('click', function () {
//   const memoryCost = document.getElementById('memory-cost');
//   memoryCost.innerText = 200;
//   const bastPrice = document.getElementById('best-price').innerText;
//   const memoryPrice = document.getElementById('memory-cost').innerText;
//   const storagePrice = document.getElementById('storage-cost').innerText;
//   const deliveryPrice = document.getElementById('delivery-cost').innerText;
//   const totalPrice =
//     parseFloat(bastPrice) +
//     parseFloat(memoryPrice) +
//     parseFloat(storagePrice) +
//     parseFloat(deliveryPrice);
//   const total = document.getElementById('total-price');
//   total.innerText = totalPrice;
//function call// updatePrice('memory-cost', 300);
// });

//----------------------->
/* 
document.getElementById('sixteenGB').addEventListener('click', function () {
  updatePrice('memory-cost', 300);
});
document.getElementById('eightGB').addEventListener('click', function () {
  updatePrice('memory-cost', 0);
});
document.getElementById('ssd3').addEventListener('click', function () {
  updatePrice('storage-cost', 800);
});
document.getElementById('ssd2').addEventListener('click', function () {
  updatePrice('storage-cost', 500);
});
document.getElementById('ssd1').addEventListener('click', function () {
  updatePrice('storage-cost', 0);
});
document.getElementById('paid-delivery').addEventListener('click', function () {
  updatePrice('delivery-cost', 20);
});
document.getElementById('free-delivery').addEventListener('click', function () {
  updatePrice('delivery-cost', 0);
});
 */
//----------------------->
/* 
function updatePrice(itemId, price) {
  const memoryCost = document.getElementById(itemId);
  memoryCost.innerText = price;

  const bastPrice = document.getElementById('best-price').innerText;
  const memoryPrice = document.getElementById('memory-cost').innerText;
  const storagePrice = document.getElementById('storage-cost').innerText;
  const deliveryPrice = document.getElementById('delivery-cost').innerText;

  const totalPrice =
    parseFloat(bastPrice) +
    parseFloat(memoryPrice) +
    parseFloat(storagePrice) +
    parseFloat(deliveryPrice);

  const total = document.getElementById('total-price');
  total.innerText = totalPrice;
} 
*/

function updatePrice(clickId, itemId, price) {
  document.getElementById(clickId).addEventListener('click', function () {
    const cost = document.getElementById(itemId);
    cost.innerText = price;

    const bastPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice =
      parseFloat(bastPrice) +
      parseFloat(memoryPrice) +
      parseFloat(storagePrice) +
      parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
  });
}
updatePrice('sixteenGB', 'memory-cost', 300);
updatePrice('eightGB', 'memory-cost', 0);
updatePrice('ssd3', 'storage-cost', 800);
updatePrice('ssd2', 'storage-cost', 500);
updatePrice('ssd1', 'storage-cost', 0);
updatePrice('paid-delivery', 'delivery-cost', 20);
updatePrice('free-delivery', 'delivery-cost', 0);

// promo code and error messages
const fakeCode = 'pHero';

document.getElementById('apply-btn').addEventListener('click', function () {
  const code = document.getElementById('promo-input');
  const codeValue = code.value;
  const sussesMassage = document.getElementById('applied-text');
  const errorMessage = document.getElementById('not-applied-text');
  if (codeValue === fakeCode) {
    const total = document.getElementById('total-price');
    let totalPrice = parseFloat(total.innerText);
    const discount = totalPrice * 0.2;
    totalPrice = totalPrice - discount;
    total.innerText = totalPrice;
    // massage handling for susses massage
    sussesMassage.classList.remove('d-none');
    sussesMassage.classList.add('d-block');
    errorMessage.classList.add('d-none');
  } else if (codeValue == '') {
    // console.log('emty');
  } else {
    // massage handling for  error massage
    sussesMassage.classList.add('d-none');
    errorMessage.classList.remove('d-none');
    errorMessage.classList.add('d-block');
  }

  // clear the field
  code.value = '';
});
