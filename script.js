function openBasket() {
  document.getElementById("basket").style.display = "block";
  document.querySelector(".sidenav").classList.add("open");
}

function closeBasket() {
  document.getElementById("basket").style.display = "none";
  document.querySelector(".sidenav").classList.remove("open");
}


document.addEventListener('DOMContentLoaded', function () {
    loadBasket();
    render();
  });

let posts = [
    {
      'name': 'BBQ Chili Cheese Burger',
      'details': 'mit Softbun, Homestyle Burger, 100 % Rind, Lollo Bionda Salat,Tomaten, Röstzwiebeln, BBQ Sauce und Chili-Cheese-Sauce',
      'size': 'Wahl aus: 125g oder 2x125g.',
      'price': '8,90 €',
      'burgerPhoto': './photos/aktion/aktion1.JPG',
      'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Chili-Cheese-Steak',
        'details': 'mit Tomatensauce, Gouda, Rindersteakstreifen, Champignons, roter Paprika, roten Zwiebeln und Chili-Cheese-Sauce',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '11,90 €',
        'burgerPhoto': './photos/aktion/aktion3.JPG',
        'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Hot Steak',
        'details': 'mit Tomatensauce, Gouda, Rindersteakstreifen, Kirschtomaten, Jalapeños und Sauce béarnaise',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '12,90 €',
        'burgerPhoto': './photos/aktion/aktion2.JPG',
        'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Surf & Turf',
        'details': 'mit Tomatensauce, Gouda, in Knoblauchöl marinierten Vannamei-Garnelen, Rindersteakstreifen, Kirschtomaten, grünem Spargel und Grana Padano (italienischer Hartkäse)',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '13,90 €',
        'burgerPhoto': './photos/aktion/aktion4.JPG',
        'plus': './photos/aktion/plus.png'
    },    {
        'name': 'Ben & Jerrys Doppelpack',
        'details': 'bestelle zwei Ben & Jerrys Pints Deiner Wahl',
        'size': 'Wahl aus: Cookie Dough 465ml, Karamel Sutra 465ml, Chocolate Fudge Brownie 465ml, Strawberry Cheesecake 465ml, Half Baked 465ml und mehr.',
        'price': '12,99 €',
        'burgerPhoto': './photos/aktion/aktion5.JPG',
        'plus': './photos/aktion/plus.png'
    }
  ];
  
  let klassik = [
    {
      'name': 'Pizza nach Plan',
      'details': 'mit Zutaten nach Wahl',
      'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
      'price': '8,90 €',
      'burgerPhoto': './photos/aktion/klassiker.JPG',
      'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Salami Deluxe',
        'details': 'mit 50% mehr Salami',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '10,40 €',
        'burgerPhoto': './photos/aktion/klassiker2.JPG',
        'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Chicken und Curry',
        'details': 'mit Currysauce, Hähnchenbrustfilet und Ananas',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '11,40 €',
        'burgerPhoto': './photos/aktion/klassiker3.JPG',
        'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Margherita Deluxe',
        'details': 'mit Tomatenscheiben, Mozzarella und Basilikum-Pesto',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '10,40 €',
        'burgerPhoto': './photos/aktion/klassiker4.JPG',
        'plus': './photos/aktion/plus.png'
    },    {
        'name': 'Pizza Mista',
        'details': 'mit Salami, Hinterschinken, Champignons und grünen sowie milden Peperoni',
        'size': 'Wahl aus: Cookie Dough 465ml, Karamel Sutra 465ml, Chocolate Fudge Brownie 465ml, Strawberry Cheesecake 465ml, Half Baked 465ml und mehr.',
        'price': '11,40 €',
        'burgerPhoto': './photos/aktion/klassiker5.JPG',
        'plus': './photos/aktion/plus.png'
    }
  ];
  
  let premium = [
    {
      'name': 'Pizza Green Garden',
      'details': 'mit Zwiebeln, Mais, roter Paprika, Broccoli und grünen Oliven',
      'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
      'price': '11,40 €',
      'burgerPhoto': './photos/aktion/premium.JPG',
      'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Amsterdam',
        'details': 'mit Hinterschinken, Tomatenscheiben, Broccoli und Sauce Hollandaise',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '11,90 €',
        'burgerPhoto': './photos/aktion/premium2.JPG',
        'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Diavolo (scharf)',
        'details': 'mit Chili-Salami, Mozzarella und scharfen Jalapenos',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '11,90 €',
        'burgerPhoto': './photos/aktion/premium3.JPG',
        'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Pizza Western BBQ',
        'details': 'mit Barbecuesauce, Rinderhackfleisch, roten Zwiebeln, Bacon und Mozzarella',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '13,40 €',
        'burgerPhoto': './photos/aktion/premium4.JPG',
        'plus': './photos/aktion/plus.png'
    },    {
        'name': 'Pizza Sucuk',
        'details': 'mit Hirtenkäse, Sucuk (türk. Knoblauchwurst), roten Zwiebeln und grünen Oliven',
        'size': 'Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.',
        'price': '12,40 €',
        'burgerPhoto': './photos/aktion/premium5.JPG',
        'plus': './photos/aktion/plus.png'
    }
  ];
  
  let burger = [
    {
      'name': 'Max Burger',
      'details': 'mit Tomatenscheiben, roten Zwiebeln, dänischen Gurken, Ketchup und Mayonnaise',
      'size': 'Wahl aus: 125g oder 2x125g.',
      'price': '8,40 €',
      'burgerPhoto': './photos/aktion/burger.JPG',
      'plus': './photos/aktion/plus.png'
    },
    {
        'name': 'Max Burger Cheese',
        'details': 'mit Tomatenscheiben, roten Zwiebeln, dänischen Gurken, Ketchup, Mayonnaise und Chester-Schmelzkäse',
        'size': 'Wahl aus: 125g oder 2x125g.',
        'price': '8.90 €',
        'burgerPhoto': './photos/aktion/burger2.JPG',
        'plus': './photos/aktion/plus.png'
    },  
    {
        'name': 'Chili-Cheese Burger (scharf)',
        'details': 'mit Bacon, Tomatenscheiben, roten Zwiebeln, scharfen Jalapenos und Chili-Cheese-Sauce',
        'size': 'Wahl aus: 125g oder 2x125g.',
        'price': '9.90 €',
        'burgerPhoto': './photos/aktion/burger3.JPG',
        'plus': './photos/aktion/plus.png'
    }
  ];
  
  
  function render() {
      const containerAktion = document.getElementById('containerAktion');
      const pizzaKlassiker = document.getElementById('pizzaKlassiker');
      const pizzaPremium = document.getElementById('pizzaPremium');
      const burgerChoice = document.getElementById('burgerChoice');
      const basket = document.getElementById('basket'); 
    
      containerAktion.innerHTML = '';
      pizzaKlassiker.innerHTML = '';
      pizzaPremium.innerHTML = '';
      burgerChoice.innerHTML = '';
      basket.innerHTML = ''; 
    
      renderProducts(posts, containerAktion);
      renderProducts(klassik, pizzaKlassiker);
      renderProducts(premium, pizzaPremium);
      renderProducts(burger, burgerChoice);
    }
    
    function renderProducts(products, container) {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        container.innerHTML += `
          <a onclick="addToBasket('${product.name}', '${product.price}', event)" href="#ak123" class="aktion-last">
            <div class="last">
              <span>${product.name}</span>
              <span2>${product.details}</span2>
              <span3>${product.size}</span3>
              <span4>${product.price}</span4>
            </div>
            <div class="last-img">
              <img src="${product.burgerPhoto}">
            </div>
            <div class="last-plus">
              <img src="${product.plus}">
            </div>
          </a>`;
      }
    }
  

  let basketItems = [];

  
  function showBasket() {
    const basket = document.getElementById('basket');
    basket.innerHTML = '';
  
    if (basketItems.length === 0) {
      basket.innerHTML = '<p>Dein Warenkorb ist Leer.</p>';
    } else {
      for (let i = 0; i < basketItems.length; i++) {
        const item = basketItems[i];
        basket.innerHTML += `
          <div class="basket-item">
            <div class="plus-minus">
              <a href="#" onclick="removeItemFromBasket('${item.name}', event)">
                <img src="./minus-square-outlined-button.png">
              </a>
              <span>${item.quantity}</span>
              <a href="#" onclick="addToBasket('${item.name}', '${item.price}', event)">
                <img src="./instagram-post.png">
              </a>
            </div>
            <span>${item.name}</span>
            <span>${item.price}</span>
            <a href="#" onclick="removeBin('${item.name}', event)">
              <img src="./bin.png">
            </a>
          </div>`;
      }
    }
    calculate();
    lifer();
  }
  
  function addToBasket(name, price, e) {
    e.preventDefault();
  
    const existingItemIndex = basketItems.findIndex(item => item.name === name);
  
    if (existingItemIndex !== -1) {
      basketItems[existingItemIndex].quantity += 1;
    } else {
      const item = { name, price, quantity: 1 };
      basketItems.push(item);
    }
  
    showBasket();
    saveBasket();
  }
  
  function removeItemFromBasket(name, e) {
    e.preventDefault();
    const existingItemIndex = basketItems.findIndex(item => item.name === name);
  
    if (existingItemIndex !== -1) {
      if (basketItems[existingItemIndex].quantity > 1) {
        basketItems[existingItemIndex].quantity -= 1;
      } else {
        basketItems.splice(existingItemIndex, 1);
      }
  
      showBasket();
      saveBasket();
    }
  }

  function calculate() {
    const subtotalElement = document.getElementById('subtotal');
    
    const totalPrice = basketItems.reduce((total, item) => total + (parseFloat(item.price.replace(',', '.')) * item.quantity), 0);
    
    subtotalElement.innerHTML = `
        <h2>Subtotal</h2>
        <h2>${totalPrice.toFixed(2)} €</h2>`;

    bezahlen();
}


function lifer() {
    const liferKostenElement = document.getElementById('liferKosten');
    liferKostenElement.innerHTML = `
    <h3>Lieferkosten</h3>
    <h3>5 $</h3>`;
}

let totalPrice = 0; 

function bezahlen() {
  const btnBezahlen = document.getElementById('btn');
  const itemsTotal = basketItems.reduce((total, item) => total + (parseFloat(item.price.replace(',', '.')) * item.quantity), 0);

  const totalBezahlen = itemsTotal + 5;

  btnBezahlen.innerHTML = `<button>Bezahlen ${totalBezahlen.toFixed(2)} €</button>`;
}


function removeBin(name, e) {
    e.preventDefault();
    const indexToRemove = basketItems.findIndex(item => item.name === name);
  
    if (indexToRemove !== -1) {
      basketItems.splice(indexToRemove, 1);
      showBasket();
    }
    saveBasket();
  }
  function saveBasket() {
    let basketItemsAsText = JSON.stringify(basketItems);
    localStorage.setItem('list', basketItemsAsText);
}

function loadBasket() {
  let basketItemsAsText = localStorage.getItem('list');
  if (basketItemsAsText) {
      basketItems = JSON.parse(basketItemsAsText);
  }
}
