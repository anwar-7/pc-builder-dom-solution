function updatePrice(clickId, itemId, price) {
  document.getElementById(clickId).addEventListener('click', function () {
    const cost = document.getElementById(itemId);
    cost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice =
      parseFloat(bestPrice) +
      parseFloat(memoryPrice) +
      parseFloat(storagePrice) +
      parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
  });
}
updatePrice('sixteenGB', 'memory-cost', 400);
updatePrice('eightGB', 'memory-cost', 0);
updatePrice('ssd3', 'storage-cost', 1000);
updatePrice('ssd2', 'storage-cost', 600);
updatePrice('ssd1', 'storage-cost', 0);
updatePrice('paid-delivery', 'delivery-cost', 20);
updatePrice('free-delivery', 'delivery-cost', 0);

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
  const code = document.getElementById('promo-input');
  const codeValue = code.value;
  const sussesMassage = document.getElementById('applied-text');
  const errorMessage = document.getElementById('not-applied-text');
  if (codeValue === fakeCode) {
    const total = document.getElementById('total-price');
    let totalPrice = parseFloat(total.innerText);
    const discount = (totalPrice * 20) / 100;
    totalPrice = totalPrice - discount;
    total.innerText = totalPrice;
    sussesMassage.classList.remove('d-none');
    sussesMassage.classList.add('d-block');
    errorMessage.classList.add('d-none');
  } else if (codeValue == '') {
    // console.log('empty');
  } else {
    sussesMassage.classList.add('d-none');
    errorMessage.classList.remove('d-none');
    errorMessage.classList.add('d-block');
  }
});
