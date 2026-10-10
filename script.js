const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  }));
}
const form = document.getElementById('form');
const status = document.getElementById('status');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const subject = encodeURIComponent(`Luminate follow-up review — ${d.get('company')}`);
  const body = encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany / website: ${d.get('company')}\nService: ${d.get('project')}\nCurrent tools: ${d.get('tools') || 'Not provided'}\n\nFollow-up need:\n${d.get('message')}`);
  window.location.href = `mailto:luminatedigitaldesign@outlook.com?subject=${subject}&body=${body}`;
  status.textContent = 'Your email app should open. Send the email there, or email us directly if it does not open.';
});
