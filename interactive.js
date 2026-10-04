gsap.registerPlugin(ScrollToPlugin);

const links = document.querySelectorAll('.nav a');
const secoes = document.querySelectorAll('section[id]');

// Rolagem suave ao clicar (menu e botões da seção início)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.2,
      scrollTo: { y: link.getAttribute('href'), offsetY: 64 },
      ease: 'power2.inOut'
    });
  });
});

// Traço no link da seção atual
const observer = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entrada.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -60% 0px' });

secoes.forEach(secao => observer.observe(secao));


gsap.to('.titulo-nome', {
  duration: 3,
  repeat: -1,        
  repeatDelay: 6,    
  scrambleText: {
    text: 'Desenvolvedor Web',
    chars: 'bew rodevlovneseD',   // letras usadas no embaralhado
    revealDelay: 0.5,     // espera antes de começar a revelar
    speed: 0.3
  }
});


document.querySelectorAll('.ferramentaWrapper').forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
        const estavaAtivo = item.classList.contains('ativo');
        document.querySelectorAll('.ferramentaWrapper').forEach(i => i.classList.remove('ativo'));
        if (!estavaAtivo) item.classList.add('ativo');
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.ferramentaWrapper').forEach(i => i.classList.remove('ativo'));
});


//Projetos:
document.querySelectorAll('.btnSaibaMais').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.bodyCard').classList.add('active');
    });
});

document.querySelectorAll('.btnVoltar').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.bodyCard').classList.remove('active');
    });
});

//navegador mobile
const hamburguer = document.querySelector('.hamburguer');
const fecharMenu = document.querySelector('.fecharMenu');
const nav = document.querySelector('.nav');

hamburguer.addEventListener('click', () => {
    nav.classList.add('ativo');
});

fecharMenu.addEventListener('click', () => {
    nav.classList.remove('ativo');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('ativo');
    });
});