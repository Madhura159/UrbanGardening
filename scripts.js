// scripts.js
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-slideIndex * 100}%)`;
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceDetails = document.getElementById('service-details');

    const servicesContent = {
        consulting: `
            <h2>Consulting</h2>
            <p>Our urban gardening consulting services provide personalized guidance to help you create and maintain a thriving garden in your urban space. Whether you're a beginner or an experienced gardener, our experts are here to assist you with tailored advice and solutions.</p>
            <h3>What We Offer</h3>
            <ul>
                <li>Site Assessment: We evaluate your space to determine the best gardening strategies, considering factors like sunlight, soil quality, and available area.</li>
                <li>Plant Selection: Our experts help you choose the right plants for your environment, ensuring optimal growth and productivity.</li>
                <li>Garden Design: We assist in designing your garden layout, maximizing space efficiency and aesthetic appeal.</li>
                <li>Maintenance Tips: Get tips on watering, fertilizing, and pest control to keep your garden healthy year-round.</li>
            </ul>
            <h3>Benefits of Consulting</h3>
            <ul>
                <li>Customized Solutions: Receive advice tailored to your specific needs and conditions.</li>
                <li>Expert Knowledge: Benefit from the experience and expertise of professional urban gardeners.</li>
                <li>Increased Productivity: Improve your garden's yield with informed plant care and management strategies.</li>
                <li>Cost Efficiency: Avoid costly mistakes by getting it right the first time.</li>
            </ul>
            <p>Ready to transform your urban space into a green oasis? <a href="#contact">Contact us</a> today to schedule a consultation.</p>
        `,
        workshops: `
            <h2>Workshops</h2>
            <p>Our workshops are designed to educate and inspire urban gardeners of all skill levels. Whether you're just starting out or looking to expand your knowledge, our hands-on sessions cover a wide range of topics to help you succeed.</p>
            <h3>Workshop Topics</h3>
            <ul>
                <li>Urban Gardening Basics: Learn the fundamentals of starting and maintaining a garden in a city environment.</li>
                <li>Container Gardening: Discover the best practices for growing plants in containers, ideal for small spaces.</li>
                <li>Composting: Understand the process of composting and how to create nutrient-rich soil for your garden.</li>
                <li>Seasonal Planting: Get tips on what to plant and when, ensuring your garden thrives year-round.</li>
                <li>Advanced Techniques: Explore hydroponics, aquaponics, and other innovative gardening methods.</li>
            </ul>
            <h3>Why Attend Our Workshops?</h3>
            <ul>
                <li>Expert Instruction: Learn from experienced urban gardeners and horticulturists.</li>
                <li>Hands-On Experience: Participate in practical activities that reinforce learning.</li>
                <li>Networking Opportunities: Connect with fellow gardeners and share experiences.</li>
                <li>Resources and Materials: Receive take-home materials and resources to continue your gardening journey.</li>
            </ul>
            <p>Ready to enhance your gardening skills? <a href="#contact">Contact us</a> to sign up for our upcoming workshops.</p>
        `,
        gardenSetup: `
            <h2>Garden Setup</h2>
            <p>Starting an urban garden can be overwhelming, but our garden setup services make it easy. We provide everything you need to create a beautiful and productive garden in your urban space.</p>
            <h3>Our Garden Setup Services</h3>
            <ul>
                <li>Initial Consultation: We assess your space and discuss your gardening goals to create a customized plan.</li>
                <li>Design and Planning: Our experts design a garden layout that maximizes space and meets your aesthetic preferences.</li>
                <li>Installation: We handle all aspects of garden installation, from soil preparation to planting.</li>
                <li>Starter Kit: Receive a starter kit with essential tools, soil, and plants to get your garden going.</li>
                <li>Ongoing Support: Get follow-up visits and support to ensure your garden thrives.</li>
            </ul>
            <h3>Benefits of Our Garden Setup Services</h3>
            <ul>
                <li>Professional Expertise: Benefit from our knowledge and experience in urban gardening.</li>
                <li>Customized Solutions: Receive a garden setup tailored to your space and preferences.</li>
                <li>Time-Saving: Let us handle the setup so you can focus on enjoying your garden.</li>
                <li>Guaranteed Success: Our comprehensive service ensures your garden starts off on the right foot.</li>
            </ul>
            <p>Ready to start your urban garden? <a href="#contact">Contact us</a> today to schedule your garden setup service.</p>
        `,
        plantCare: `
            <h2>Plant Care</h2>
            <p>Proper plant care is essential for a thriving garden. Our plant care services provide you with the knowledge and support needed to keep your plants healthy and productive throughout the year.</p>
            <h3>Our Plant Care Services</h3>
            <ul>
                <li>Watering and Irrigation: Learn the best watering practices for different types of plants and set up efficient irrigation systems.</li>
                <li>Soil Management: Understand how to improve soil quality with composting, mulching, and other soil management techniques.</li>
                <li>Fertilization: Get advice on the right fertilizers to use and the proper application methods to ensure optimal plant nutrition.</li>
                <li>Pest and Disease Control: Identify common pests and diseases and learn how to manage them using organic and sustainable methods.</li>
                <li>Pruning and Training: Techniques for pruning and training your plants to promote healthy growth and higher yields.</li>
            </ul>
            <h3>Why Choose Our Plant Care Services?</h3>
            <ul>
                <li>Expert Guidance: Benefit from the expertise of experienced urban gardeners and horticulturists.</li>
                <li>Customized Care: Receive plant care tips and advice tailored to your specific garden and plant varieties.</li>
                <li>Healthy Plants: Ensure your plants receive the care they need to thrive, resulting in a more productive and beautiful garden.</li>
                <li>Sustainable Practices: Learn eco-friendly plant care techniques that protect the environment and promote sustainability.</li>
            </ul>
            <p>Need help with your plant care? <a href="#contact">Contact us</a> today to learn more about our plant care services.</p>
        `
    };

    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const service = this.dataset.service;
            serviceDetails.innerHTML = servicesContent[service];
            serviceDetails.style.display = 'block';
        });
    });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
