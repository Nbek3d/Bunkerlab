document.addEventListener('DOMContentLoaded', function () {
    function createElementWithAttributes(tag, attributes) {
        const element = document.createElement(tag);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        return element;
    }

    const header = document.createElement('header');
    document.body.appendChild(header);

    const containerNavbar = createElementWithAttributes('div', { class: 'container navbar df' });
    header.appendChild(containerNavbar);

    const logoImg = createElementWithAttributes('img', { src: './source/logo.png', alt: 'logo', class: 'logo' });
    containerNavbar.appendChild(logoImg);

    const navMenu = createElementWithAttributes('nav', { class: 'df' });
    containerNavbar.appendChild(navMenu);

    const naLinks = ['О нас', 'Услуги и цены', 'Фотоальбом', 'Контакты'];
    for (const linkText of naLinks) {
        const link = createElementWithAttributes('a', { href: '#', class: 'nav__link' });
        link.textContent = linkText;
        navMenu.appendChild(link);
    }

    const kontaktDiv = createElementWithAttributes('div', { class: 'kontakt df' });
    containerNavbar.appendChild(kontaktDiv);

    const iconImg = createElementWithAttributes('img', { src: './source/Vector.png', alt: 'tel', class: 'icon' });
    kontaktDiv.appendChild(iconImg);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '+7 (000) 000-00-00';
    kontaktDiv.appendChild(phoneNumber);

    const main = document.createElement('main');
    document.body.appendChild(main);

    const page1Container = createElementWithAttributes('div', { class: 'page1 container df' });
    main.appendChild(page1Container);

    const page1ContentDiv = createElementWithAttributes('div', { class: 'page1__content' });
    page1Container.appendChild(page1ContentDiv);

    const heading = document.createElement('h1');
    heading.textContent = 'Окунитесь в мир лошадей вместе с нами';
    page1ContentDiv.appendChild(heading);

    const page1PDiv = createElementWithAttributes('div', { class: 'page1__p df' });
    page1ContentDiv.appendChild(page1PDiv);

    const emptyDiv = document.createElement('div');
    page1PDiv.appendChild(emptyDiv);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Уроки верховой езды, фотосессии и мероприятия в частном конном клубе г. Санкт-Петербург';
    page1PDiv.appendChild(paragraph);

    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn df';
    btnDiv.textContent = 'записаться';
    page1ContentDiv.appendChild(btnDiv);

    const page1ImgDiv = createElementWithAttributes('div', { class: 'page1__img' });
    page1Container.appendChild(page1ImgDiv);

    const image = createElementWithAttributes('img', { src: './source/ot.png', alt: 'ot' });
    page1ImgDiv.appendChild(image);

    document.querySelectorAll('*').forEach(element => {
        element.style.margin = '0';
        element.style.padding = '0';
        element.style.boxSizing = 'border-box';
        element.style.listStyle = 'none';
        element.style.textDecoration = 'none';
        element.style.fontFamily = 'Roboto';
    });

    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.width = '80%';
        container.style.margin = '0 auto';
    });

    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.style.width = '15px';
    });

    const dfs = document.querySelectorAll('.df');
    dfs.forEach(df => {
        df.style.display = 'flex';
    });

    const headers = document.querySelectorAll('header');
    headers.forEach(header => {
        header.style.height = '100vh';
        header.style.backgroundImage = "url('./source/background.png')";
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
    });

    const navbars = document.querySelectorAll('.navbar');
    navbars.forEach(navbar => {
        navbar.style.height = '10vh';
        navbar.style.alignItems = 'center';
        navbar.style.justifyContent = 'space-between';
    });

    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.style.height = '50px';
    });

    const navs = document.querySelectorAll('nav');
    navs.forEach(nav => {
        nav.style.gap = '30px';
    });

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(navLink => {
        navLink.style.color = '#202020';
        navLink.style.textAlign = 'right';
        navLink.style.fontSize = '13px';
        navLink.style.fontStyle = 'normal';
        navLink.style.fontWeight = '400';
        navLink.style.lineHeight = 'normal';
        navLink.style.textTransform = 'uppercase';
        navLink.style.borderBottom = '0px solid transparent';
        navLink.style.transition = 'border-bottom 3s';
        navLink.style.position = 'relative';
    });

    const navLinkAfter = document.querySelectorAll('.nav__link:after');
    navLinkAfter.forEach(after => {
        after.style.content = "''";
        after.style.position = 'absolute';
        after.style.backgroundColor = '#008139';
        after.style.height = '2px';
        after.style.width = '0';
        after.style.left = '0';
        after.style.bottom = '-10px';
        after.style.transition = '.3s';
    });

    const navLinkHoverAfter = document.querySelectorAll('.nav__link:hover::after');
    navLinkHoverAfter.forEach(hoverAfter => {
        hoverAfter.style.width = '100%';
    });

    const kontakts = document.querySelectorAll('.kontakt');
    kontakts.forEach(kontakt => {
        kontakt.style.textAlign = 'center';
        kontakt.style.position = 'relative';
    });

    const kontaktDivPs = document.querySelectorAll('.kontakt div p');
    kontaktDivPs.forEach(kontaktDivP => {
        kontaktDivP.style.fontWeight = '700';
        kontaktDivP.style.color = '#202020';
        kontaktDivP.style.fontSize = '14px';
    });

    const kontaktAfters = document.querySelectorAll('.kontakt:after');
    kontaktAfters.forEach(after => {
        after.style.content = "'Ежедневно 9:00 – 22:00'";
        after.style.position = 'absolute';
        after.style.left = '15px';
        after.style.bottom = '-20px';
        after.style.color = '#7D808A';
        after.style.fontSize = '11px';
        after.style.fontWeight = '400';
        after.style.lineHeight = 'normal';
    });

    const kontaktTexts = document.querySelectorAll('.kontakt__text');
    kontaktTexts.forEach(kontaktText => {
        kontaktText.style.color = '#7D808A';
        kontaktText.style.fontSize = '11px';
        kontaktText.style.fontWeight = '400';
        kontaktText.style.lineHeight = 'normal';
    });

    const page1s = document.querySelectorAll('.page1');
    page1s.forEach(page1 => {
        page1.style.marginTop = '100px';
    });

    const page1ContentDivs = document.querySelectorAll('.page1__content, .page1__img');
    page1ContentDivs.forEach(contentDiv => {
        contentDiv.style.width = '50%';
    });

    const page1ImgImgs = document.querySelectorAll('.page1__img img');
    page1ImgImgs.forEach(img => {
        img.style.width = '300px';
    });

    const page1Headings = document.querySelectorAll('.page1 h1');
    page1Headings.forEach(heading => {
        heading.style.width = '550px';
        heading.style.color = '#000';
        heading.style.fontFamily = 'Philosopher';
        heading.style.fontSize = '47px';
        heading.style.fontStyle = 'normal';
        heading.style.fontWeight = '700';
        heading.style.lineHeight = '107%';
    });

    const page1PDivs = document.querySelectorAll('.page1__p');
    page1PDivs.forEach(pDiv => {
        pDiv.style.alignItems = 'center';
        pDiv.style.gap = '20px';
        pDiv.style.width = '500px';
        pDiv.style.color = '#646464';
        pDiv.style.fontFamily = 'Alegreya Sans';
        pDiv.style.fontSize = '14px';
        pDiv.style.fontStyle = 'normal';
        pDiv.style.fontWeight = '400';
        pDiv.style.lineHeight = '140%';
        pDiv.style.marginBottom = '50px';
    });

    const page1PDivDivs = document.querySelectorAll('.page1__p div');
    page1PDivDivs.forEach(pDivDiv => {
        pDivDiv.style.width = '26px';
        pDivDiv.style.height = '1px';
        pDivDiv.style.backgroundColor = '#8F8F8F';
    });

    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.style.width = '270px';
        btn.style.height = '70px';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        btn.style.borderRadius = '5px';
        btn.style.background = 'linear-gradient(180deg, #FFff00 0%, #FFff00 100%)';
    });
});
