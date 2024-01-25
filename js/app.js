const cart1 = document.getElementById('cart');
const items1 = document.getElementById('cart-products-list');
const list1 = document.querySelector('#cart-list tbody');
const emptyCartBtn = document.getElementById('empty-cart');

loadEventListeners();

function loadEventListeners() {
  items1.addEventListener('click', buyItem);
  cart1.addEventListener('click', removeItem);
  emptyCartBtn.addEventListener('click', emptyCart);
}

function buyItem(e) {
  e.preventDefault();
  if(e.target.classList.contains('add-to-cart')) {
    const item = e.target.parentElement.parentElement;
    readItemData(item);
  }
} 

function readItemData(item) {
  const itemInfo = {
    product: item.querySelector('img').src,
    title: item.querySelector('h3').textContent,
    price: item.querySelector('.price').textContent,
    id: item.querySelector('.add-to-cart-btn').getAttribute('data-id')
  }
  cartInsert(itemInfo);
}

function cartInsert(item) {
  const existingItem = Array.from(list1.children).find(row => row.getAttribute('data-id') === item.id);

  if (existingItem) {
    const quantityElement = existingItem.querySelector('.item-quantity');
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
  } else {
    const row = document.createElement('tr');
    row.setAttribute('data-id', item.id);
    row.innerHTML = `
      <td>
        <img src="${item.product}" width=90 height=90 />
      </td>
      <td>
        ${item.title}
      </td>
      <td class="item-price">
        ${item.price}
      </td>
      <td class="item-quantity">1</td>
      <td>
        <button class="add-to-cart-btn add-to-cart empty" data-id=${item.id}>X</button>
      </td>
    `;
    list1.appendChild(row);
  }
  updateTotal();
}

function updateTotal() {
  let total = 0;
  Array.from(list1.children).forEach(row => {
    const price = parseFloat(row.querySelector('.item-price').textContent);
    const quantity = parseInt(row.querySelector('.item-quantity').textContent);
    total += price * quantity;
  });
  document.getElementById('total-amount').textContent = total.toFixed(2);
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains('empty')) {
    let itemRow = e.target.parentElement.parentElement;
    let quantityElement = itemRow.querySelector('.item-quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
    } else {
      itemRow.remove();
    }
    updateTotal();
  }
}

function emptyCart() {
  while(list1.firstChild) {
    list1.removeChild(list1.firstChild);
  }
  document.getElementById('total-amount').textContent = '0.00';
  updateTotal();
  return false;
}

document.querySelectorAll('.scrollToTopLink').forEach(function(element) {
  element.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({top: 0, behavior: "smooth"});
  });
});

function scrollToBottom() {
  if ('scrollBehavior' in document.documentElement.style) {
     window.scrollTo({
       top: document.body.scrollHeight,
       behavior: 'smooth'
     });
  } else {
     window.scrollTo(0, document.body.scrollHeight);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('video-presentation');
  video.play()
  .catch(error => {
      console.error('Error while trying to play the video: ', error);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video-presentation');
  video.addEventListener('ended', function() {
      video.currentTime = 0;
      video.play();
  });
});

document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('copy',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('cut',function(e){e.preventDefault();e.stopPropagation();});