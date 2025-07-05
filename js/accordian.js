 const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const icon = item.querySelector('.accordion-icon');
      const content = item.querySelector('.accordion-content');

      // Initialize open item
      if (item.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '16px'; // updated open padding
      }

      header.addEventListener('click', () => {
        items.forEach(otherItem => {
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherItem.querySelector('.accordion-icon');
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            otherContent.style.maxHeight = null;
            otherContent.style.padding = '0 16px';
            otherIcon.textContent = '+';
          }
        });

        if (item.classList.contains('open')) {
          // Close current
          item.classList.remove('open');
          content.style.maxHeight = null;
          content.style.padding = '0px 16px';
          icon.textContent = '+';
        } else {
          // Open current
          item.classList.add('open');
          content.style.padding = '32px 15px';  // increased padding here
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.textContent = '−';
        }
      });
    });