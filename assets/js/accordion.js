document.querySelectorAll('.accordion-item').forEach((accordionItem) => {
    accordionItem.addEventListener('click', () => {
        const content = accordionItem.querySelector('.accordion-content');
        const plusIcon = accordionItem.querySelector('.accordion-icon-plus');
        const minusIcon = accordionItem.querySelector('.accordion-icon-minus');

        if (accordionItem.classList.contains('active')) {
            content.style.maxHeight = '0';
            accordionItem.classList.remove('active', 'active-shadow');
        } else {
            document.querySelectorAll('.accordion-item').forEach((item) => {
                const otherContent = item.querySelector('.accordion-content');
                const otherPlusIcon = item.querySelector('.accordion-icon-plus');
                const otherMinusIcon = item.querySelector('.accordion-icon-minus');
                if (item !== accordionItem) {
                    otherContent.style.maxHeight = '0';
                    item.classList.remove('active', 'active-shadow');
                    otherPlusIcon.classList.remove('hidden');
                    otherMinusIcon.classList.add('hidden');
                }
            });
            content.style.maxHeight = content.scrollHeight + 'px';
            accordionItem.classList.add('active', 'active-shadow');
        }
        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');
    });
});


document.getElementById("year").textContent = new Date().getFullYear();