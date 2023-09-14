document.addEventListener("DOMContentLoaded", function () {
    const i1 = "Photos/dog.jpg";
    const i2 = "Photos/dog2.jpg";
    const i3 = "Photos/dog3.jpg";
    const i4 = "Photos/dog4.jpg";
    const i5 = "Photos/dog5.png";
    const i6 = "Photos/dog6.jpg";
    const i7 = "Photos/dog7.jpg";
    const i8 = "Photos/dog8.jpg";
    const i9 = "Photos/dog9.jpeg";
    const i10 = "Photos/dog10.jpg";
    const i11 = "Photos/dog11.jpg";

    const changeButton = document.getElementById("changeIMG");
    const dogImage = document.getElementById("dogIMG");

    const choose = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11];

    function changeImage() {

        const randomImageIndex = Math.floor(Math.random() * choose.length);
        dogImage.src = choose[randomImageIndex];
    }

    changeButton.onclick = changeImage;
});
