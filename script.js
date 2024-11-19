let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed. Event listener triggered.');
    displayProducts();
});

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all the required fields.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        message: message,
    };

    alert(`Thank you, ${formData.name}! Your form has been submitted.`);
    console.log(formData);
    document.getElementById("myForm").reset();
}





function changeColor() {
    const box = document.getElementById('box');
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    box.style.backgroundColor = randomColor;
}





function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="removeProduct(${index})">Remove</button>
        `;
        container.appendChild(productDiv);
    });
}

function addProduct() {
    const newProduct = {
        name: "Tablet",
        price: 499.99,
        description: "Portable productivity and entertainment"
    };
    products.push(newProduct);
    displayProducts();
}

function removeProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

displayProducts();
