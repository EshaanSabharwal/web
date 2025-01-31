document.addEventListener('DOMContentLoaded', () => {
    const bodySection = document.getElementById('body-section');
    bodySection.innerHTML = generateEvent();
});

const generateEvent = () =>{
    return `
        <div class="block md:grid grid-cols-3 items-center gap-12">
            <img src="./public/quizmantra.gif" alt="quizmantra" controls autoplay loop class="md:h-72 md:w-72 rounded-lg mx-auto shadow-lg shadow-black">
            <div class="text-center my-10">
                <h1 class="text-4xl md:text-6xl font-bold mb-4 ">On 23rd January!</h1>
                <p class="text-lg md:text-xl mb-8">Be part of something amazing.</p>
                <a href="https://forms.gle/HJWj87pykjT1fNwq7" target="_blank" class="pointer-events-none bg-red-700 text-white text-3xl font-medium p-4 rounded-full text-xl">Registrations Over</a>
            </div>
            <img src="./public/img/qr.jpg" alt="qr" srcset="" class="h-48 w-48 md:h-72 md:w-72 rounded-lg mx-auto shadow-lg shadow-black">
        </div>
    </div>`
}