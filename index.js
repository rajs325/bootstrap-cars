fetch('https://66e5182f5cc7f9b6273c437b.mockapi.io/auto')
.then(response => response.json())
.then(dataset => {
	renderCharacters(dataset)
});

function renderCharacters(dataset) {
  const cardsContainer = document.querySelector('#cards-container');
  const row_div = document.createElement('div');
  row_div.classList = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3';
  dataset.forEach(item => {
    const col_div = document.createElement('div');
    const card_div = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h5');
    const details = document.createElement('ul');
    const stock_type = document.createElement('li');
    const mileage = document.createElement('li');
    const price = document.createElement('li');
    const monthly_payment = document.createElement('li');
    const dealer_name = document.createElement('li');
    const reviews = document.createElement('li');
    const distance = document.createElement('li');
    const like = document.createElement('button');

    col_div.classList = 'col'
    card_div.classList = 'card'
    image.classList = 'card-img'
    details.style = 'margin-left:20px; text-align: left;'
    like.classList = 'empty'

    image.src = item.vehicle_image1
    title.innerText = `${item.title}`
    stock_type.innerText =`${item.stock_type}`
    mileage.innerText =`${item.mileage}`
    price.innerText =`${item.primary_price}`
    monthly_payment.innerText =`${item.monthly_payment}`
    dealer_name.innerText =`${item.dealer_name}`
    reviews.innerText =`${item.reviews}`
    distance.innerText =`${item.distance}`

    like.textContent = 'like'

    card_div.appendChild(image)
    card_div.appendChild(title)
    card_div.appendChild(details)
    details.appendChild(stock_type)
    details.appendChild(mileage)
    details.appendChild(price)
    details.appendChild(monthly_payment)
    details.appendChild(dealer_name)
    details.appendChild(reviews)
    details.appendChild(distance)

    card_div.appendChild(like)

    col_div.appendChild(card_div)
    row_div.appendChild(col_div)
  });
  cardsContainer.appendChild(row_div)
};
