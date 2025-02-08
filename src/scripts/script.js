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