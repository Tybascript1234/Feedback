    window.addEventListener("load", function () {
        setTimeout(() => {
            if (!window.alertOpen) {
                initializeWaveButtons();
            }
        }, 100);

        function initializeWaveButtons() {
            const elements = document.querySelectorAll('.wave-button');

            elements.forEach(element => {
                let isRippleActive = false;

                function createRipple(e) {
                    if (isRippleActive) return;

                    isRippleActive = true;

                    const ripple = document.createElement('span');
                    const rect = element.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);

                    // هنا نجعلها دائمًا في المنتصف
                    const x = rect.width / 2 - size / 2;
                    const y = rect.height / 2 - size / 2;

                    ripple.style.width = ripple.style.height = `${size}px`;
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    ripple.classList.add('ripple');

                    element.appendChild(ripple);

                    setTimeout(() => {
                        ripple.remove();
                        isRippleActive = false;
                    }, 600);
                }

                element.addEventListener('mousedown', createRipple);
                element.addEventListener('touchstart', createRipple);
            });
        }
    });