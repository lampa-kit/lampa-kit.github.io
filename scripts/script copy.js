const searchInput = document.getElementById('searchInput');
const cardGrid = document.getElementById('cardGrid');
const tabsContainer = document.getElementById('tabsContainer');
const overflowMobileDiv = document.getElementById('overflow-mobile');

// Переменная для хранения данных из articles.js
let articlesData = null;

// Элемент для отображения количества плагинов
const pluginCounter = document.createElement('div');
pluginCounter.className = 'plugin-counter';
pluginCounter.textContent = 'Количество плагинов: 0';

// Вставляем pluginCounter перед cardGrid, используя родителя cardGrid
const cardGridParent = cardGrid.parentNode; // Находим родителя cardGrid
cardGridParent.insertBefore(pluginCounter, cardGrid);

// Проверяет существование файла по URL с таймаутом и резервными методами
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

// Создает и добавляет элементы вкладок на основе JSON-данных
function generateTabs() {
    jsonData.tabs.forEach(tab => {
        const tabElement = createTabElement(tab);
        overflowMobileDiv.appendChild(tabElement);
    });
    tabsContainer.appendChild(overflowMobileDiv);
}

// Создает отдельный элемент вкладки
function createTabElement(tab) {
    const tabElement = document.createElement('div');
    tabElement.classList.add('tab');
    tabElement.textContent = tab.name;
    tabElement.setAttribute('data-category', tab.id);
    tabElement.onmousedown = () => switchTab(tab.id);
    if (tab.id === 'all') {
        tabElement.classList.add('active');
    }
    return tabElement;
}

// Создает и добавляет элементы карточек на основе JSON-данных
function generateCards() {
    jsonData.cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardGrid.appendChild(cardElement);
    });
    updatePluginCounter(); // Обновляем счетчик после генерации карточек
    setupTooltipEvents();
    setupModalEvents();
}

// Создает отдельный элемент карточки
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-category', card.categories.join(' '));
    cardElement.setAttribute('data-id', card.id); // Добавляем id для связи с articles.js

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

    // checkFileExists(card.link).then(exists => {
    //     isAlive.classList.add(exists ? 'green' : 'red');
    //     isAlive.title = exists ? 'Доступен' : 'Не доступен';
    // });

    return cardElement;
}

// Создает кнопку копирования для карточки
function createCopyButton(card) {
    const copyButton = document.createElement('span');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Адреса';
    copyButton.setAttribute('data-link', card.link);
    copyButton.setAttribute('data-link-hint', card.link_hint);
    return copyButton;
}

// Настраивает обработчики событий для отображения и копирования подсказок
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

// Создает элемент подсказки для кнопки
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

// Обрабатывает копирование текста в буфер обмена и показывает оверлей с текстом "Скопировано"
function handleCopy(element, originalText) {
    setTimeout(() => {
        document.execCommand("copy");
    }, 10);

    document.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", originalText);

            // Создаем оверлей с текстом "Скопировано"
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

            // Устанавливаем позицию relative для родителя и добавляем оверлей
            const wrapper = element;
            wrapper.style.position = 'relative';
            wrapper.appendChild(overlay);

            // Удаляем оверлей через 2 секунды
            setTimeout(() => {
                overlay.remove();
            }, 1200);
        }
    }, { once: true });
}

// Удаляет подсказку с задержкой
function removeTooltip(tooltip) {
    tooltip.classList.remove('show-tooltip');
    setTimeout(() => {
        if (tooltip) {
            tooltip.remove();
        }
    }, 500);
}

// Настраивает обработчики событий для модального окна
function setupModalEvents() {
    document.addEventListener('click', async (e) => {
        const card = e.target.closest('.card');
        const elemClassName = e.target.className;
        console.log(elemClassName)
        if (elemClassName === 'copy-button' || elemClassName.includes('tooltip')) return;
        if (!card) return;

        const cardId = card.getAttribute('data-id');
        if (!cardId) return;

        // Загружаем articles.js как скрипт только один раз
        if (!articlesData) {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = 'articles.js';
                script.onload = () => {
                    articlesData = articlesJson; // Доступ к объекту после загрузки
                    console.log('Загружено articles.js');
                    showExpandCardContent()
                    resolve();
                };
                script.onerror = () => {
                    console.error('Ошибка загрузки articles.js');
                    resolve();
                };
                document.body.appendChild(script);
            });
        }

        // Находим статью по id
        function showExpandCardContent(){
            const article = articlesData.article.find(item => item.id === cardId);
            if (!article) {
                console.error('Статья не найдена для id:', cardId);
                return;
            }

            // Создаем модальное окно
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

            // Закрытие модального окна
            closeDiv.onclick = () => modal.remove();
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
        }

        showExpandCardContent();
        
    });
}

// Настраивает поиск для фильтрации карточек
function setupSearch() {
    searchInput.addEventListener('input', () => {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab.getAttribute('data-category') !== 'all') {
            switchTab('all');
        }

        const query = searchInput.value.toLowerCase();
        Array.from(cardGrid.children).forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const link = card.querySelector('span').getAttribute('data-link');
            card.style.display = (title.includes(query) || description.includes(query) || link.includes(query)) 
                ? 'block' 
                : 'none';
        });
        updatePluginCounter(); // Обновляем счетчик при поиске
    });
}

// Переключает вкладки и фильтрует карточки
function switchTab(category) {
    if (category !== 'all') {
        searchInput.value = '';
    }

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    const selectedTab = document.querySelector(`.tab[data-category="${category}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    document.querySelectorAll('.card').forEach(card => {
        const cardCategories = card.getAttribute('data-category');
        card.style.display = (category === 'all' || (cardCategories && cardCategories.includes(category))) 
            ? 'block' 
            : 'none';
    });
    updatePluginCounter(); // Обновляем счетчик при переключении таба
}

// Обновляет счетчик количества видимых плагинов
function updatePluginCounter() {
    const visibleCards = Array.from(cardGrid.children).filter(card => 
        card.style.display !== 'none' && card.classList.contains('card')
    );
    pluginCounter.textContent = `Количество плагинов: ${visibleCards.length}`;
}

// Инициализирует приложение
function init() {
    generateTabs();
    generateCards();
    setupSearch();
    updatePluginCounter(); // Инициализируем счетчик
}

init();