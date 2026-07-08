// كود جافا سكريبت لإضافة تفاعلية خفيفة للموقع
document.addEventListener('DOMContentLoaded', () => {
  console.log('تم تحميل الـ Portfolio بنجاح وبشكل متكامل!');

  // تأثير لإنعاش العناصر وتفعيل ظهورها عند تمرير الصفحة (Scroll Reveal)
  const cards = document.querySelectorAll('.project-card, .skill-card');

  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, options);

  cards.forEach((card) => {
    // نضع قيم مبدئية للاختفاء لتقوم الجافا سكريبت بإظهارها تدريجياً
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
  });
});
