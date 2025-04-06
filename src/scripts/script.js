$(document).ready(function() {
    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0; 

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '1px 1px 10px var(--color-primary-5)');

        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();            

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })


        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 1000,
        distance: '40%'
    })

    ScrollReveal().reveal('#todos_imoveis',{
        origin: 'right',
        duration: 1000,
        distance: '40%'
    })

    ScrollReveal().reveal('#clientes',{
        origin: 'bottom',
        duration: 1000,
        distance: '40%'
    })
    
});

const feedbacksData = [
    { name: "Lucas Almeida", rating: 5, comment: "Atendimento impecável e serviço de altíssimo nível. Voltarei com certeza!" },
    { name: "Juliana Rocha", rating: 3, comment: "Foi uma boa experiência, mas alguns detalhes poderiam ser melhores." },
    { name: "Felipe Mendes", rating: 4, comment: "Gostei bastante, só acho que poderiam investir mais em personalização." },
    { name: "Renata Oliveira", rating: 5, comment: "Serviço excelente e atendimento super rápido. Amei!" },
    { name: "Thiago Fernandes", rating: 4, comment: "Fiquei bem satisfeito, mas sempre dá pra melhorar um pouco." }
];

const feedbackContainer = document.getElementById("feedbacks");
const template = document.getElementById("feedback-template");

feedbacksData.forEach(({ name, rating, comment }) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".feedback-name").textContent = name;
    clone.querySelector(".feedback-comment").textContent = comment;
    
    const ratingContainer = clone.querySelector(".feedback-rating");
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.className = i < rating ? "fa-solid fa-star" : "fa-regular fa-star";
        ratingContainer.appendChild(star);
    }
    
    feedbackContainer.appendChild(clone);
});