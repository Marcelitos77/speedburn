document.addEventListener('DOMContentLoaded', function () {
    
    function typeWriter(text, i) {
        if (i < text.length) {
            spanElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () { typeWriter(text, i); }, 100); 
        }
    }

    typeWriter(text, 0);
});document.addEventListener('DOMContentLoaded', function () {
    
    function typeWriter(text, i) {
        if (i < text.length) {
            spanElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(function () { typeWriter(text, i); }, 100); 
        }
    }

    typeWriter(text, 0);
});

