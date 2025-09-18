// mark that JS is enabled (lets CSS hide [data-animate] only when JS exists)
document.documentElement.classList.add('js');

// Reveal-on-scroll animation
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

// Copy email button
const copy = document.getElementById('copy');
if (copy) {
  const email = 'biuro@sgroup.gmail';
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copy.textContent = 'Skopiowano: ' + email;
      setTimeout(() => (copy.textContent = 'Kopiuj email'), 1400);
    } catch {}
  });
}
