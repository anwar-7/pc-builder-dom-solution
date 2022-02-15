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
