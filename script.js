

let img = [
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497564245203-66a1216f073a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
]

let prev = document.getElementById('prevBtn');
let next = document.getElementById('nextBtn');
let currIndex = 0;

document.getElementById('image').setAttribute('src', `${img[0]}`);

prev.addEventListener('click', () => {
    if (currIndex != 0) {
        currIndex = currIndex - 1;
        document.getElementById('image').setAttribute('src', `${img[currIndex]}`);
    } else {
        currIndex = img.length - 1;
        document.getElementById('image').setAttribute('src', `${img[currIndex]}`);
    }
});

next.addEventListener('click', () => {
    if (currIndex != img.length - 1) {
        currIndex = currIndex + 1;
        document.getElementById('image').setAttribute('src', `${img[currIndex]}`);
    } else {
        currIndex = 0;
        document.getElementById('image').setAttribute('src', `${img[currIndex]}`);
    }
})



