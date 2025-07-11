const searchInput = document.getElementById('searchInput');
        const cardGrid = document.getElementById('cardGrid');
        const tabsContainer = document.getElementById('tabsContainer');
        const overflowMobileDiv = document.getElementById('overflow-mobile');
        const swiperWrapper = overflowMobileDiv.querySelector('.swiper-wrapper');

        let articlesData = null;
        let currentFilter = 'all';

        const pluginCounter = document.createElement('div');
        pluginCounter.className = 'plugin-counter';
        pluginCounter.textContent = 'Плагинов: 0';
        const cardGridParent = cardGrid.parentNode;
        cardGridParent.insertBefore(pluginCounter, cardGrid);

        async function checkFileExists(url) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 5000);

            const tryRequest = async (method, mode = 'cors', signal) => {
                try {
                    const response = await fetch(url, { method, mode, signal });
                    clearTimeout(timeout);
                    return response.ok;
                } catch (err) {
                    return false;
                }
            };

            let exists = await tryRequest('HEAD', 'cors', controller.signal);
            if (exists) return true;
            exists = await tryRequest('HEAD', 'no-cors');
            if (exists) return true;
            exists = await tryRequest('GET', 'cors', controller.signal);
            if (exists) return true;

            return false;
        }

        function updatePlaceholder() {
            if (currentFilter === 'all') {
                searchInput.placeholder = 'Поиск по плагинам';
            } else if (currentFilter === 'developers') {
                searchInput.placeholder = 'Поиск по плагинам от разработчиков';
            } else if (currentFilter === 'uncensored') {
                searchInput.placeholder = 'Поиск по плагинам UNCENSORED';
            }
        }

        function generateTabs() {
            let isFirst = true;
            jsonData.tabs.forEach(tab => {
                const tabElement = createTabElement(tab, isFirst);
                const swiperSlide = document.createElement('div');
                swiperSlide.className = 'swiper-slide';
                swiperSlide.appendChild(tabElement);
                swiperWrapper.appendChild(swiperSlide);
                isFirst = false;
            });

            new Swiper('.swiper', {
                slidesPerView: 'auto',
                spaceBetween: 10,
                freeMode: true,
                freeModeSticky: true,
                grabCursor: true,
                resistanceRatio: 0.8,
                mousewheel: {
                    forceToAxis: true,
                    sensitivity: 0.5
                },
                touchRatio: 1.5,
                speed: 400
            });

            updatePlaceholder(); // Set initial placeholder
        }

        function createTabElement(tab, isFirst) {
            const tabElement = document.createElement('div');
            if(isFirst == true){
                tabElement.className = 'tab first-tab';
            }else{
                tabElement.classList.add('tab');
            }
            tabElement.classList.add('tab');
            tabElement.setAttribute('data-category', tab.id);

            if (tab.id === 'all') {
                const tabContent = document.createElement('div');
                tabContent.className = 'tab-content';
                const tabText = document.createElement('span');
                tabText.textContent = tab.name;
                tabContent.appendChild(tabText);

                const dropdownArrow = document.createElement('span');
                dropdownArrow.className = 'dropdown-arrow';
                dropdownArrow.innerHTML = '▼';
                tabContent.appendChild(dropdownArrow);

                const dropdownMenu = document.createElement('div');
                dropdownMenu.className = 'dropdown-menu';
                dropdownMenu.style.display = 'none';

                const options = [
                    { value: 'all', label: 'Все' },
                    { value: 'developers', label: 'От разработчиков' },
                    { value: 'uncensored', label: 'Uncensored' }
                ];

                options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'dropdown-option';
                    optionElement.textContent = option.label;
                    optionElement.onclick = (e) => {
                        e.stopPropagation();
                        currentFilter = option.value;
                        tabText.textContent = option.label;
                        dropdownMenu.style.display = 'none';
                        switchTab('all');
                        updatePlaceholder(); // Update placeholder when filter changes
                    };
                    dropdownMenu.appendChild(optionElement);
                });

                dropdownArrow.onclick = (e) => {
                    e.stopPropagation();
                    const isMenuVisible = dropdownMenu.style.display === 'block';
                    dropdownMenu.style.display = isMenuVisible ? 'none' : 'block';
                };

                tabElement.appendChild(tabContent);
                tabElement.appendChild(dropdownMenu);
                tabElement.classList.add('active');
                tabElement.onclick = () => switchTab(tab.id);
            } else {
                tabElement.textContent = tab.name;
                tabElement.onclick = () => switchTab(tab.id);
            }

            return tabElement;
        }

        

        function generateCards() {
            jsonData.cards.forEach(card => {
                const cardElement = createCardElement(card);
                cardGrid.appendChild(cardElement);
            });
            updatePluginCounter();
            setupTooltipEvents();
            setupModalEvents();

            document.addEventListener('click', (e) => {
                const dropdownMenus = document.querySelectorAll('.dropdown-menu');
                dropdownMenus.forEach(menu => {
                    if (!menu.contains(e.target) && !e.target.classList.contains('dropdown-arrow')) {
                        menu.style.display = 'none';
                    }
                });
            });
        }

        function createCardElement(card) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.setAttribute('data-category', card.categories.join(' '));
            cardElement.setAttribute('data-id', card.id);

            const linkHints = Array.isArray(card.link_hint) ? card.link_hint : (card.link_hint ? [card.link_hint] : []);
            cardElement.setAttribute('data-link-hint', linkHints.join(','));

            const titleElement = document.createElement('h3');
            titleElement.textContent = card.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = card.description;

            const actionsElement = document.createElement('div');
            actionsElement.classList.add('actions');

            const isAlive = document.createElement('div');
            isAlive.className = 'isAlive';

            const copyButton = createCopyButton(card);
            actionsElement.appendChild(copyButton);
            cardElement.appendChild(titleElement);
            cardElement.appendChild(descriptionElement);
            cardElement.appendChild(actionsElement);
            cardElement.appendChild(isAlive);

            return cardElement;
        }

        function createCopyButton(card) {
            const copyButton = document.createElement('span');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Адреса';
            copyButton.setAttribute('data-link', Array.isArray(card.link) ? card.link.join(',') : card.link || '');
            copyButton.setAttribute('data-link-hint', Array.isArray(card.link_hint) ? card.link_hint.join(',') : card.link_hint || '');
            return copyButton;
        }

        function setupTooltipEvents() {
            let customTooltip = null;

            document.addEventListener('click', (e) => {
                if (e.target.matches('.actions span')) {
                    customTooltip = createTooltip(e.target);
                    e.target.appendChild(customTooltip);
                }

                if (e.target.matches('.actions .tooltip-span')) {
                    const originalText = e.target.textContent;
                    handleCopy(e.target, originalText);
                }
            });

            document.addEventListener('mouseout', (e) => {
                if (customTooltip && customTooltip.classList.contains('show-tooltip') && 
                    !customTooltip.contains(e.relatedTarget) && !e.target.closest('.actions span')) {
                    removeTooltip(customTooltip);
                }
            });
        }

        function createTooltip(button) {
            const tooltip = document.createElement('div');
            tooltip.id = 'customTooltip';
            tooltip.className = 'tooltip';

            const links = button.getAttribute('data-link').split(',');
            const linkHints = button.getAttribute('data-link-hint').split(',');

            links.forEach((link, i) => {
                const hint = linkHints[i] && linkHints[i] !== 'undefined' ? linkHints[i] : '';
                tooltip.innerHTML += `<div class="tooltip-span-wrapper"><div class="tooltip-span">${link}</div> ${hint}</div>\n`;
            });

            const rect = button.getBoundingClientRect();
            tooltip.style.left = '0';
            tooltip.style.top = '38px';
            tooltip.classList.add('show-tooltip');

            return tooltip;
        }

        function handleCopy(element, originalText) {
            setTimeout(() => {
                document.execCommand("copy");
            }, 10);

            document.addEventListener("copy", function(event) {
                event.preventDefault();
                if (event.clipboardData) {
                    event.clipboardData.setData("text/plain", originalText);

                    const overlay = document.createElement('span');
                    overlay.className = 'tooltip-span-overlay';
                    overlay.textContent = 'Скопировано';
                    overlay.style.position = 'absolute';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.right = '0';
                    overlay.style.bottom = '0';
                    overlay.style.display = 'flex';
                    overlay.style.alignItems = 'center';
                    overlay.style.justifyContent = 'center';
                    overlay.style.background = '#2a2a2a';
                    overlay.style.border = 'none';
                    overlay.style.zIndex = '1';

                    const wrapper = element;
                    wrapper.style.position = 'relative';
                    wrapper.appendChild(overlay);

                    setTimeout(() => {
                        overlay.remove();
                    }, 1200);
                }
            }, { once: true });
        }

        function removeTooltip(tooltip) {
            tooltip.classList.remove('show-tooltip');
            setTimeout(() => {
                if (tooltip) {
                    tooltip.remove();
                }
            }, 500);
        }

        function setupModalEvents() {
            document.addEventListener('click', async (e) => {
                const card = e.target.closest('.card');
                const elemClassName = e.target.className;
                if (elemClassName === 'copy-button' || elemClassName.includes('tooltip')) return;
                if (!card) return;

                const cardId = card.getAttribute('data-id');
                if (!cardId) return;

                if (!articlesData) {
                    return new Promise((resolve) => {
                        const script = document.createElement('script');
                        script.src = 'articles.js';
                        script.onload = () => {
                            articlesData = articlesJson;
                            console.log('Загружено articles.js');
                            console.log(articlesData)
                            showExpandCardContent();
                            resolve();
                        };
                        script.onerror = () => {
                            console.error('Ошибка загрузки articles.js');
                            resolve();
                        };
                        document.body.appendChild(script);
                    });
                }

                function showExpandCardContent() {
                    const article = articlesData.article.find(item => item.id === cardId);
                    if (!article) {
                        console.error('Статья не найдена для id:', cardId);
                        return;
                    }

                    const modal = document.createElement('div');
                    modal.className = 'modal';

                    const modalContent = document.createElement('div');
                    modalContent.className = 'modal-content';

                    const closeButton = document.createElement('span');
                    closeButton.className = 'modal-close';
                    closeButton.innerHTML = '×';

                    const closeDiv = document.createElement('div');
                    closeDiv.className = 'modal-close-div';

                    const content = document.createElement('div');
                    content.className = 'modal-body';
                    content.innerHTML = article.text;

                    closeDiv.appendChild(closeButton);
                    modalContent.appendChild(closeDiv);
                    modalContent.appendChild(content);
                    modal.appendChild(modalContent);
                    document.body.appendChild(modal);

                    closeDiv.onclick = () => modal.remove();
                    modal.onclick = (e) => {
                        if (e.target === modal) modal.remove();
                    };
                }

                showExpandCardContent();
            });
        }

        function setupSearch() {
            searchInput.addEventListener('input', () => {
                const activeTab = document.querySelector('.tab.active');
                const currentCategory = activeTab ? activeTab.getAttribute('data-category') : 'all';

                const query = searchInput.value.toLowerCase();
                Array.from(cardGrid.children).forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    const link = card.querySelector('span').getAttribute('data-link');
                    const cardCategories = card.getAttribute('data-category');
                    const linkHint = card.getAttribute('data-link-hint') || '';

                    const matchesQuery = title.includes(query) || description.includes(query) || link.includes(query);
                    const matchesCategory = currentCategory === 'all' || (cardCategories && cardCategories.includes(currentCategory));

                    let matchesFilter = false;
                    if (currentFilter === 'all') {
                        matchesFilter = true;
                    } else if (currentFilter === 'developers') {
                        matchesFilter = linkHint.includes('(Lampa от разработчиков)');
                    } else if (currentFilter === 'uncensored') {
                        matchesFilter = linkHint.includes('(Lampa UNCENSORED)');
                    }

                    card.style.display = matchesQuery && matchesCategory && matchesFilter ? 'block' : 'none';
                });

                updatePluginCounter();
            });
        }

        function switchTab(category) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            const selectedTab = document.querySelector(`.tab[data-category="${category}"]`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }

            document.querySelectorAll('.card').forEach(card => {
                const cardCategories = card.getAttribute('data-category');
                const linkHint = card.getAttribute('data-link-hint') || '';

                let shouldDisplay = false;
                const matchesCategory = category === 'all' || (cardCategories && cardCategories.includes(category));

                let matchesFilter = false;
                if (currentFilter === 'all') {
                    matchesFilter = true;
                } else if (currentFilter === 'developers') {
                    matchesFilter = linkHint.includes('(Lampa от разработчиков)');
                } else if (currentFilter === 'uncensored') {
                    matchesFilter = linkHint.includes('(Lampa UNCENSORED)');
                }

                shouldDisplay = matchesCategory && matchesFilter;
                card.style.display = shouldDisplay ? 'block' : 'none';
            });

            updatePluginCounter();
            updatePlaceholder(); // Update placeholder when switching tabs
        }

        function updatePluginCounter() {
            const visibleCards = Array.from(cardGrid.children).filter(card => 
                card.style.display !== 'none' && card.classList.contains('card')
            );
            pluginCounter.textContent = `Плагинов: ${visibleCards.length}`;
        }

        function init() {
            generateTabs();
            generateCards();
            setupSearch();
            updatePluginCounter();
        }

        init();