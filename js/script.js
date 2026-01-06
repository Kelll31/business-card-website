/**
 * @fileoverview Визитка пентестера без приватных полей
 * @version 3.0.5
 * @author kelll31
 * @license MIT
 */

'use strict';

// ============================================================================
// КОНСТАНТЫ И КОНФИГУРАЦИЯ
// ============================================================================

const SELECTORS = Object.freeze({
    SIDEBAR: '#sidebar',
    SIDEBAR_TOGGLE: '#sidebarToggle',
    NAV_ITEMS: '.nav-item',
    CONTENT_SECTIONS: '.content-section',
    MAIN_CONTENT: '.main-content',
    TYPED_TEXT: '#typedText',
    PARTICLES: '#particles',
    PROGRESS_BARS: '.progress-bar',
    CERTIFICATE_PREVIEW: '.certificate-preview',
    TERMINAL_TIME: '#terminal-time',
    CERTIFICATE_MODAL: '.certificate-modal',
    CERTIFICATE_MODAL_CLOSE: '.certificate-modal-close',
    NOTIFICATIONS: '#notifications',
    NOTIFICATION: '.notification',
    NOTIFICATION_CLOSE: '.notification-close',
    COPY_EMAIL: '.copy-email',
    SOCIAL_LINKS: '.social-link',
    LOADING_SCREEN: '#loadingScreen'
});

const ANIMATION_CONFIG = Object.freeze({
    TYPING_SPEED: 80,
    TYPING_PAUSE: 1500,
    PARTICLE_COUNT: 30,
    PARTICLE_SPEED: 0.5,
    TRANSITION_DURATION: 300,
    SCROLL_THROTTLE: 16,
    INTERSECTION_THRESHOLD: 0.2,
    DEBOUNCE_DELAY: 250,
    NOTIFICATION_DURATION: 4000
});

const TYPING_MESSAGES = Object.freeze([
    // === ПРОФЕССИОНАЛЬНЫЕ СООБЩЕНИЯ ===
    'Анализ сетевой безопасности...',
    'Тестирование беспроводных сетей...',
    'Поиск уязвимостей...',
    'Linux privilege escalation...',
    'Мониторинг трафика...',
    'Составление отчетов...',
    'Готов к новым вызовам!',
    'Сканирование портов с помощью Nmap...',
    'Анализ пакетов в Wireshark...',
    'Тестирование SQL-инъекций...',
    'Поиск XSS уязвимостей...',
    'Брутфорс SSH соединений...',
    'Анализ метаданных файлов...',
    'Исследование OSINT данных...',
    'Тестирование API на безопасность...',
    'Аудит конфигураций сервера...',
    'Проверка криптографических ключей...',
    'Анализ логов безопасности...',

    // === ХАКЕРСКИЕ ОТСЫЛКИ ===
    'We are Anonymous. We are Legion...',
    'Never gonna give you up, Never gonna let you down...',
    'Hello, Mr. Anderson...',
    'I know kung fu... показываю Metasploit...',
    'There is no spoon... только терминал.',
    'Follow the white rabbit... 🐰',
    'Welcome to the real world... of cybersecurity.',
    'Red pill or blue pill? Выбираю Kali Linux.',
    'The cake is a lie... но уязвимости реальны.',
    'All your base are belong to us!',
    'It\'s dangerous to go alone! Take this... 🛡️',

    // === IT-МЕМЫ И ШУТКИ ===
    'Compiling... пожалуйста, не выключайте Matrix.',
    'Исправляю баг... создаю три новых.',
    'Stack Overflow говорит это невозможно...',
    'Работает на моей машине... 🤷‍♂️',
    'Git commit -m "fix everything"',
    '99 little bugs in the code...',
    'Пытаюсь понять чужой код без комментариев...',
    'sudo rm -rf /* said nobody ever... я надеюсь.',
    'Turning coffee into code... ☕',
    'There are only 10 types of people...',

    // === ОТСЫЛКИ К ИЗВЕСТНЫМ УЯЗВИМОСТЯМ ===
    'Ищу Heartbleed в OpenSSL...',
    'Проверяю на Shellshock...',
    'Meltdown and Spectre detection...',
    'Log4Shell vulnerability scanning...',
    'BlueKeep RDP exploit search...',
    'EternalBlue SMB checking...',
    'Dirty COW privilege escalation...',
    'KRACK WPA2 testing...',

    // === ГИКОВСКИЕ ФРАЗЫ ===
    '01001000 01100001 01100011 01101011...',
    'IPv6 is the future... maybe someday.',
    'DNS is always the problem.',
    'Have you tried turning it off and on again?',
    'It\'s not a bug, it\'s a feature!',
    'Legacy code is not legacy, it\'s vintage.',
    'Cloud is just someone else\'s computer.',
    'There\'s an RFC for that...',

    // === КИБЕРПАНК СТИЛЬ ===
    'Jacking into the mainframe...',
    'Bypassing ICE protocols...',
    'Uploading virus to the Gibson...',
    'Hacking the planet... one packet at a time.',
    'Zero Cool was here... 🕶️',
    'Crash Override initiated...',
    'The Net is vast and infinite...',
    'Ghost in the Shell activated...',

    // === ФИЛОСОФСКИЕ IT-ЦИТАТЫ ===
    'Code is poetry... mine is more like abstract art.',
    'To err is human, to really foul up requires a computer.',
    'Any sufficiently advanced technology is indistinguishable from magic.',
    'First rule of programming: if it works, don\'t touch it.',
    'There are two hard things in computer science...',
    'Premature optimization is the root of all evil.',
    'Talk is cheap. Show me the code.',
    'It works on my machine ¯\_(ツ)_/¯',

    // === СПЕЦИАЛЬНЫЕ ПАСХАЛКИ ===
    'Konami Code activated: ↑↑↓↓←→←→BA',
    'Portal cake delivery in progress... 🍰',
    'Searching for Sarah Connor...',
    'Loading Half-Life 3... ERROR 404',
    'Deploying rubber duck debugging... 🦆',
    'Activating chaos monkey... 🐒',
    'Initializing skynet protocols... JUST KIDDING!',
    'Downloading more RAM... 💾',

    // === ВРЕМЕНА ГОДА И ПРАЗДНИКИ ===
    'Ho ho ho... hacking for Christmas! 🎄',
    'April Fools\' Day exploit deployed... 🃏',
    'Halloween special: BOO-lean logic! 👻',
    'New Year, new vulnerabilities... 🎆',
    'Valentine\'s Day: Love has no firewall... 💕',

    // === МОТИВАЦИОННЫЕ ===
    'Stay curious, stay secure! 🔐',
    'Every expert was once a beginner.',
    'Security is not a destination, it\'s a journey.',
    'Think like an attacker, defend like a guardian.',
    'The best defense is a good offense... ethically.',
    'Keep calm and pentest on... 🔍',
    'Making the digital world safer, one test at a time.',
    'Ethical hacking: breaking things to fix them! ⚡',

    // === RETRO ОТСЫЛКИ ===
    'Dial-up modem sounds intensify... 📞',
    'Floppy disk not found... please insert disk 47 of 50.',
    'Y2K bug still loading... please wait.',
    'Loading from cassette tape... be kind, rewind.',
    'Pinging 127.0.0.1... there\'s no place like home.',
    'BBS connection established... welcome to 1995!',
    'Playing on CRT monitor... *static noises*',

    // === СЕКРЕТНЫЕ РЕЖИМЫ ===
    'God mode enabled... with great power...',
    'Developer console opened... reality.exe stopped working.',
    'Cheat codes accepted... infinite ammo unlocked.',
    'Easter egg found! 🥚 You are the 1337th visitor!',
    'Secret area discovered... welcome to the matrix.',
    'Achievement unlocked: Professional Procrastinator! 🏆',
    'Boss key activated... definitely working, not gaming.',

    // === ФИНАЛЬНЫЕ СООБЩЕНИЯ ===
    'Mission accomplished... until next time! 🎯',
    'All systems green... we\'re go for launch! 🚀',
    'No vulnerabilities found... suspiciously clean... 🤔',
    'Threat neutralized... another day, another exploit.',
    'Ready for the next challenge! 💪',
    'Pwned responsibly... with style! 😎'
]);


// ============================================================================
// УТИЛИТЫ
// ============================================================================

const Utils = Object.freeze({
    getRandomElement: (array) => array[Math.floor(Math.random() * array.length)],
    clamp: (value, min, max) => Math.max(min, Math.min(max, Number(value))),
    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

    debounce: (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    },

    throttle: (fn, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    $: (selector) => document.querySelector(selector),
    $$: (selector) => document.querySelectorAll(selector),

    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            return success;
        }
    },

    randomBetween: (min, max) => Math.random() * (max - min) + min,

    flashClass: (element, className, duration = 300) => {
        element.classList.add(className);
        setTimeout(() => element.classList.remove(className), duration);
    },

    isValidUrl: (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
});

// ============================================================================
// МЕНЕДЖЕР ЗАГРУЗОЧНОГО ЭКРАНА
// ============================================================================

class LoadingScreenManager {
    constructor() {
        this.loadingScreen = Utils.$(SELECTORS.LOADING_SCREEN);
    }

    hideLoadingScreen() {
        if (!this.loadingScreen) return;

        // Добавляем класс для плавной анимации исчезновения
        this.loadingScreen.classList.add('fade-out');

        // Удаляем элемент через 500ms после начала анимации
        setTimeout(() => {
            if (this.loadingScreen && this.loadingScreen.parentNode) {
                this.loadingScreen.parentNode.removeChild(this.loadingScreen);
                console.log('✅ Loading screen скрыт');
            }
        }, 500);
    }
}

// ============================================================================
// СИСТЕМА СОБЫТИЙ
// ============================================================================

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(event, listener) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event).add(listener);
    }

    once(event, listener) {
        const onceWrapper = (...args) => {
            this.off(event, onceWrapper);
            listener(...args);
        };
        this.on(event, onceWrapper);
    }

    off(event, listener) {
        const listeners = this.events.get(event);
        if (listeners) {
            listeners.delete(listener);
        }
    }

    emit(event, ...args) {
        const listeners = this.events.get(event);
        if (listeners) {
            listeners.forEach(listener => {
                try {
                    listener(...args);
                } catch (error) {
                    console.error(`Ошибка в обработчике события ${event}:`, error);
                }
            });
        }
    }

    removeAllListeners(event) {
        if (event) {
            this.events.delete(event);
        } else {
            this.events.clear();
        }
    }
}

// ============================================================================
// БАЗОВЫЙ КОМПОНЕНТ
// ============================================================================

class BaseComponent extends EventEmitter {
    constructor(name) {
        super();
        this.componentName = name;
        this.initialized = false;
        this.abortController = new AbortController();

        // Запускаем инициализацию асинхронно
        setTimeout(() => {
            this.init().catch(error => {
                console.error(`Ошибка инициализации ${this.componentName}:`, error);
                this.emit('error', error);
            });
        }, 0);
    }

    async init() {
        if (this.initialized) return;

        try {
            await this.setup();
            this.bindEvents();
            this.initialized = true;
            this.emit('initialized');
        } catch (error) {
            this.emit('error', error);
            throw error;
        }
    }

    async setup() {
        throw new Error(`Метод setup должен быть реализован в ${this.componentName}`);
    }

    bindEvents() {
        throw new Error(`Метод bindEvents должен быть реализован в ${this.componentName}`);
    }

    addEventHandler(event, handler, element = document) {
        const boundHandler = handler.bind(this);
        element.addEventListener(event, boundHandler, {
            signal: this.abortController.signal
        });
    }

    get isInitialized() {
        return this.initialized;
    }

    get name() {
        return this.componentName;
    }

    destroy() {
        this.abortController.abort();
        this.removeAllListeners();
        this.initialized = false;
        this.emit('destroyed');
    }
}

/**
 * Менеджер навигации с поддержкой мобильного и десктопного режимов
 * Включает свернутое меню с иконками для десктопа
 */
class NavigationManager extends BaseComponent {
    constructor() {
        super('NavigationManager');

        // DOM элементы
        this.sidebar = null;
        this.toggleButton = null;
        this.navItems = [];
        this.contentSections = [];
        this.mainContent = null;

        // Состояние
        this.currentSection = null;
        this.isCollapsed = true;

        // Наблюдатели и таймеры
        this.observer = null;
        this.resizeTimeout = null;
        this.initTimeout = null;

        // Привязка методов
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleKeyNavigation = this.handleKeyNavigation.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    async setup() {
        try {
            // Инициализация элементов с жестким таймаутом
            await this.initializeElements();

            // Валидация
            if (!this.validateElements()) {
                console.warn('NavigationManager: Критические элементы не найдены, работаем с тем что есть');
                // Не выходим, пытаемся продолжить с тем, что есть
            }

            // Настройка компонентов
            this.setupIntersectionObserver();
            this.initializeState();
            this.loadActiveSection();
            this.updateLayout();

            console.log(`✅ NavigationManager: Инициализирован (${this.navItems.length} элементов)`);
        } catch (error) {
            console.error('NavigationManager setup error:', error);
            throw error;
        }
    }

    async initializeElements() {
        // Основные элементы - загружаем сразу
        this.sidebar = Utils.$(SELECTORS.SIDEBAR);
        this.toggleButton = Utils.$(SELECTORS.SIDEBAR_TOGGLE);
        this.mainContent = Utils.$(SELECTORS.MAIN_CONTENT);

        // Получаем навигационные элементы - с таймаутом макс 1 сек
        const startTime = performance.now();
        const timeout = 1000;

        while (performance.now() - startTime < timeout) {
            const navItemElements = Utils.$$('.nav-item');
            
            if (navItemElements && navItemElements.length > 0) {
                this.navItems = Array.from(navItemElements).map(item => {
                    const link = item.querySelector('a');
                    return {
                        element: item,
                        link: link,
                        section: link ? link.getAttribute('href')?.slice(1) : null,
                        icon: link ? link.querySelector('i') : null,
                        text: link ? link.querySelector('span, .nav-text') : null
                    };
                }).filter(item => item.section && item.link);

                if (this.navItems.length > 0) {
                    break;
                }
            }

            // Ждем 50ms перед повтором
            await Utils.sleep(50);
        }

        // Секции контента
        const contentSectionElements = Utils.$$(SELECTORS.CONTENT_SECTIONS);
        this.contentSections = contentSectionElements ? Array.from(contentSectionElements) : [];

        console.log(`📍 Инициализация: ${this.navItems.length} nav items, ${this.contentSections.length} sections`);
    }

    validateElements() {
        const errors = [];

        if (!this.sidebar) errors.push('Sidebar не найден');
        if (!this.toggleButton) errors.push('Toggle кнопка не найдена');
        if (this.navItems.length === 0) errors.push('Навигационные элементы не найдены');
        if (this.contentSections.length === 0) errors.push('Секции контента не найдены');

        if (errors.length > 0) {
            console.warn('NavigationManager validation warnings:', errors);
            return errors.length < 3; // Критично если потеряны секции или навигация
        }

        return true;
    }

    bindEvents() {
        // Toggle кнопка
        if (this.toggleButton) {
            this.addEventHandler('click', this.toggleSidebar, this.toggleButton);
        }

        // Навигационные элементы
        this.navItems.forEach(item => {
            if (item.link) {
                this.addEventHandler('click', this.handleNavClick, item.link);
            }
        });

        // Глобальные события
        this.addEventHandler('keydown', this.handleKeyNavigation, document);
        this.addEventHandler('resize', Utils.debounce(this.handleResize, 250), window);
        this.addEventHandler('click', this.handleOutsideClick, document);

        // Hashchange для поддержки браузерной навигации
        this.addEventHandler('hashchange', this.handleHashChange, window);
    }

    initializeState() {
        // Принудительно collapsed для ПК версии
        if (window.innerWidth >= 1024) {
            this.isCollapsed = true;
        } else {
            // Загружаем сохраненное состояние только для мобильных устройств
            const savedCollapsed = localStorage.getItem('sidebar-collapsed');
            this.isCollapsed = savedCollapsed === 'true';
        }

        // Применяем состояние
        if (this.sidebar) {
            if (this.isCollapsed) {
                this.sidebar.classList.add('collapsed');
            } else {
                this.sidebar.classList.remove('collapsed');
            }
        }

        // Обновляем иконку
        this.updateToggleIcon();
        this.updateLayout();

        console.log(`🔧 Начальное состояние: collapsed=${this.isCollapsed}`);
    }


    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window) || this.contentSections.length === 0) {
            console.warn('IntersectionObserver недоступен или нет секций');
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                let mostVisible = null;
                let maxRatio = 0;

                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        mostVisible = entry.target;
                    }
                });

                if (mostVisible && maxRatio > 0.3) {
                    this.updateActiveNavItem(mostVisible.id);
                }
            },
            {
                threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
                rootMargin: '-80px 0px -80px 0px'
            }
        );

        this.contentSections.forEach(section => {
            this.observer.observe(section);
        });
    }

    toggleSidebar() {
        if (!this.sidebar) return;

        // Для ПК версии не разрешаем разворачивание
        if (window.innerWidth >= 1024) {
            console.log('🔒 Sidebar заблокирован в collapsed состоянии для ПК');
            return;
        }

        // Переключаем состояние только для мобильных устройств
        this.isCollapsed = !this.isCollapsed;

        // Применяем классы
        this.sidebar.classList.toggle('collapsed', this.isCollapsed);

        // Сохраняем состояние
        localStorage.setItem('sidebar-collapsed', this.isCollapsed.toString());

        // Обновляем UI
        this.updateToggleIcon();
        this.updateLayout();

        // Уведомляем о изменении
        this.emit('sidebarToggled', {
            isCollapsed: this.isCollapsed,
            width: this.isCollapsed ? 64 : 280
        });

        console.log(`🔄 Sidebar ${this.isCollapsed ? 'свернут' : 'развернут'}`);
    }


    updateToggleIcon() {
        const icon = this.toggleButton?.querySelector('i');
        if (!icon) return;

        // Обновляем иконку в зависимости от состояния
        icon.className = this.isCollapsed
            ? 'fas fa-chevron-right'
            : 'fas fa-chevron-left';

        // Обновляем aria-label для доступности
        this.toggleButton.setAttribute('aria-label',
            this.isCollapsed ? 'Развернуть навигацию' : 'Свернуть навигацию'
        );
    }

    updateLayout() {
        if (!this.mainContent) return;

        // Обновляем отступ основного контента
        const marginLeft = this.isCollapsed ? '64px' : '280px';
        this.mainContent.style.marginLeft = marginLeft;

        // Добавляем класс для CSS анимаций
        this.mainContent.classList.toggle('sidebar-collapsed', this.isCollapsed);
    }

    handleNavClick(event) {
        event.preventDefault();

        const link = event.currentTarget;
        const href = link.getAttribute('href');

        if (!href?.startsWith('#')) return;

        const sectionId = href.slice(1);

        if (sectionId && sectionId !== this.currentSection) {
            this.navigateToSection(sectionId);
        }
    }

    navigateToSection(sectionId) {
        // Проверяем существование секции
        const targetSection = Utils.$(`#${sectionId}`);
        if (!targetSection) {
            console.warn(`Секция ${sectionId} не найдена`);
            return;
        }

        // Деактивируем все секции
        this.contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Активируем целевую секцию
        targetSection.classList.add('active');

        // Обновляем навигацию
        this.updateActiveNavItem(sectionId);

        // Обновляем URL
        this.updateURL(sectionId);

        // Скроллим если нужно
        this.scrollToSection(targetSection);

        // Уведомляем о изменении
        this.emit('navigationChanged', {
            section: sectionId,
            element: targetSection
        });

        console.log(`📍 Навигация к секции: ${sectionId}`);
    }

    updateActiveNavItem(sectionId) {
        if (this.currentSection === sectionId) return;

        // Убираем активный класс у всех элементов
        this.navItems.forEach(item => {
            item.element.classList.remove('active');
        });

        // Активируем нужный элемент
        const activeItem = this.navItems.find(item => item.section === sectionId);
        if (activeItem) {
            activeItem.element.classList.add('active');

            // Добавляем специальные эффекты для свернутого состояния
            if (this.isCollapsed && activeItem.icon) {
                activeItem.icon.classList.add('active-icon');
                setTimeout(() => {
                    activeItem.icon?.classList.remove('active-icon');
                }, 1000);
            }
        }

        this.currentSection = sectionId;

        this.emit('activeItemChanged', {
            section: sectionId,
            item: activeItem
        });
    }

    updateURL(sectionId) {
        if (history.replaceState) {
            history.replaceState(null, '', `#${sectionId}`);
        } else {
            window.location.hash = sectionId;
        }
    }

    scrollToSection(element) {
        // Проверяем видимость элемента
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!isVisible) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }

    loadActiveSection() {
        const hash = window.location.hash.slice(1);
        const defaultSection = 'profile';
        const targetSection = hash || defaultSection;

        // Проверяем существование секции
        const sectionExists = this.contentSections.some(section =>
            section.id === targetSection
        );

        if (sectionExists) {
            this.navigateToSection(targetSection);
        } else {
            console.warn(`Секция ${targetSection} не найдена, переход к ${defaultSection}`);
            this.navigateToSection(defaultSection);
        }
    }

    handleHashChange = () => {
        const sectionId = window.location.hash.slice(1);
        if (sectionId && sectionId !== this.currentSection) {
            this.navigateToSection(sectionId);
        }
    };

    handleKeyNavigation(event) {
        // Горячие клавиши Alt + цифра
        if (event.altKey && !event.ctrlKey && !event.shiftKey) {
            const keyMap = {
                '1': 'profile',
                '2': 'skills',
                '3': 'tools',
                '4': 'experience',
                '5': 'certificates',
                '6': 'contact'
            };

            const sectionId = keyMap[event.key];
            if (sectionId) {
                event.preventDefault();
                this.navigateToSection(sectionId);
            }
        }

        // Ctrl + B для переключения sidebar
        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
            this.toggleSidebar();
        }
    }

    handleOutsideClick(event) {
        // Для десктопа не нужно, но оставляем для совместимости
        return;
    }

    handleResize() {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }

        this.resizeTimeout = setTimeout(() => {
            // Принудительно collapsed для ПК версии
            if (window.innerWidth >= 1024) {
                this.isCollapsed = true;
                this.sidebar?.classList.add('collapsed');
                this.updateToggleIcon();
            }

            // Обновляем layout при изменении размера
            this.updateLayout();
            console.log(`📐 Resize: ${window.innerWidth}x${window.innerHeight}`);
        }, 100);
    }


    // Публичные методы API
    getCurrentSection() {
        return this.currentSection;
    }

    getNavigationState() {
        return {
            currentSection: this.currentSection,
            isCollapsed: this.isCollapsed,
            navItemsCount: this.navItems.length,
            timestamp: Date.now()
        };
    }

    programmaticNavigate(sectionId) {
        const validSection = this.navItems.find(item => item.section === sectionId);
        if (validSection) {
            this.navigateToSection(sectionId);
            return true;
        }
        console.warn(`Невозможна навигация к несуществующей секции: ${sectionId}`);
        return false;
    }

    collapse() {
        if (!this.isCollapsed) {
            this.toggleSidebar();
        }
    }

    expand() {
        if (this.isCollapsed) {
            this.toggleSidebar();
        }
    }

    setCollapsed(collapsed) {
        if (this.isCollapsed !== collapsed) {
            this.toggleSidebar();
        }
    }

    getAvailableSections() {
        return this.navItems.map(item => ({
            id: item.section,
            title: item.tooltip || item.text?.textContent || item.section,
            element: item.element
        }));
    }

    refreshNavigation() {
        // Переинициализация навигации
        this.loadActiveSection();
        this.updateLayout();
        console.log('🔄 Навигация обновлена');
    }

    destroy() {
        console.log('🗑️ Уничтожение NavigationManager...');

        // Очистка наблюдателей
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }

        // Очистка таймеров
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
        }

        if (this.initTimeout) {
            clearTimeout(this.initTimeout);
            this.initTimeout = null;
        }

        // Сброс layout
        if (this.mainContent) {
            this.mainContent.style.marginLeft = '';
            this.mainContent.classList.remove('sidebar-collapsed');
        }

        // Очистка ссылок
        this.sidebar = null;
        this.toggleButton = null;
        this.mainContent = null;
        this.navItems.length = 0;
        this.contentSections.length = 0;

        // Вызов родительского метода
        super.destroy();
    }

    // Методы для отладки
    debug() {
        return {
            sidebar: !!this.sidebar,
            toggleButton: !!this.toggleButton,
            navItems: this.navItems.length,
            contentSections: this.contentSections.length,
            currentSection: this.currentSection,
            isCollapsed: this.isCollapsed,
            observer: !!this.observer
        };
    }

    logState() {
        console.group('🔍 NavigationManager State');
        console.log('Current Section:', this.currentSection);
        console.log('Is Collapsed:', this.isCollapsed);
        console.log('Nav Items:', this.navItems.map(item => item.section));
        console.log('Content Sections:', this.contentSections.map(section => section.id));
        console.groupEnd();
    }
}



// ============================================================================
// АНИМАЦИЯ ПЕЧАТИ (ИСПРАВЛЕНО)
// ============================================================================

class TypingAnimation extends BaseComponent {
    constructor() {
        super('TypingAnimation');
        this.textElement = null;
        this.isTyping = false;
        this.messageIndex = 0;
        this.isVisible = true;
        this.shouldStop = false;
        this.typingTimeoutId = null;
    }

    async setup() {
        this.textElement = Utils.$(SELECTORS.TYPED_TEXT);
        if (!this.textElement) {
            console.warn('TypingAnimation: текстовый элемент не найден');
            return;
        }

        this.isVisible = !document.hidden;
        this.startTypingCycle();
    }

    bindEvents() {
        this.addEventHandler('visibilitychange', this.handleVisibilityChange, document);
    }

    startTypingCycle() {
        if (this.shouldStop || !this.isVisible) return;
        
        if (this.typingTimeoutId) {
            clearTimeout(this.typingTimeoutId);
        }

        this.typingTimeoutId = setTimeout(async () => {
            try {
                if (!this.shouldStop && this.isVisible && this.textElement) {
                    const message = TYPING_MESSAGES[this.messageIndex];
                    await this.typeMessage(message);
                    this.messageIndex = (this.messageIndex + 1) % TYPING_MESSAGES.length;
                    
                    // Начинаем следующий цикл
                    if (!this.shouldStop && this.isVisible) {
                        this.startTypingCycle();
                    }
                }
            } catch (error) {
                console.error('TypingAnimation error:', error);
                if (!this.shouldStop && this.isVisible) {
                    this.startTypingCycle();
                }
            }
        }, ANIMATION_CONFIG.TYPING_PAUSE);
    }

    async typeMessage(message) {
        if (!this.textElement || !this.isVisible || this.shouldStop) return;

        this.isTyping = true;
        this.textElement.textContent = '';

        // Печать текста
        for (let i = 0; i <= message.length && this.isVisible && !this.shouldStop; i++) {
            this.textElement.textContent = message.slice(0, i);
            await Utils.sleep(ANIMATION_CONFIG.TYPING_SPEED);
        }

        if (!this.isVisible || this.shouldStop) {
            this.isTyping = false;
            return;
        }

        await Utils.sleep(1000);

        // Удаление текста
        for (let i = message.length; i >= 0 && this.isVisible && !this.shouldStop; i--) {
            this.textElement.textContent = message.slice(0, i);
            await Utils.sleep(ANIMATION_CONFIG.TYPING_SPEED / 2);
        }

        this.isTyping = false;
    }

    handleVisibilityChange = () => {
        this.isVisible = !document.hidden;
        
        if (this.isVisible && this.textElement && !this.shouldStop) {
            // Возобновляем анимацию
            this.startTypingCycle();
        } else if (!this.isVisible) {
            // Останавливаем текущую анимацию
            this.isTyping = false;
            if (this.typingTimeoutId) {
                clearTimeout(this.typingTimeoutId);
            }
        }
    };

    stop() {
        this.shouldStop = true;
        this.isTyping = false;
        this.isVisible = false;
        if (this.typingTimeoutId) {
            clearTimeout(this.typingTimeoutId);
            this.typingTimeoutId = null;
        }
        if (this.textElement) {
            this.textElement.textContent = '';
        }
    }

    start() {
        this.shouldStop = false;
        this.isVisible = true;
        this.startTypingCycle();
    }

    destroy() {
        this.stop();
        this.textElement = null;
        super.destroy();
    }
}

// ============================================================================
// СИСТЕМА ЧАСТИЦ
// ============================================================================

class Particle {
    constructor(canvasWidth, canvasHeight) {
        this.reset(canvasWidth, canvasHeight);
    }

    reset(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = Utils.randomBetween(-ANIMATION_CONFIG.PARTICLE_SPEED, ANIMATION_CONFIG.PARTICLE_SPEED);
        this.vy = Utils.randomBetween(-ANIMATION_CONFIG.PARTICLE_SPEED, ANIMATION_CONFIG.PARTICLE_SPEED);
        this.alpha = Utils.randomBetween(0.3, 0.8);
        this.size = Utils.randomBetween(1, 3);
        this.life = 1.0;
        this.decay = Utils.randomBetween(0.005, 0.02);
    }

    update(canvasWidth, canvasHeight) {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;

        if (this.life <= 0 || this.x < 0 || this.x > canvasWidth || this.y < 0 || this.y > canvasHeight) {
            this.reset(canvasWidth, canvasHeight);
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha * this.life;
        ctx.fillStyle = `hsl(${120 + (this.life * 60)}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

class ParticleSystem extends BaseComponent {
    constructor() {
        super('ParticleSystem');
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = 0;
        this.isAnimating = false;
        this.lastFrameTime = 0;
        this.targetFPS = 30;
    }

    async setup() {
        const container = Utils.$(SELECTORS.PARTICLES);
        if (!container) {
            console.warn('ParticleSystem: контейнер не найден');
            return;
        }

        this.createCanvas(container);
        this.initializeParticles();
        this.startAnimation();
    }

    bindEvents() {
        this.addEventHandler('resize', Utils.throttle(() => this.handleResize(), 250), window);
        this.addEventHandler('visibilitychange', this.handleVisibilityChange, document);
    }

    createCanvas(container) {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    `;

        this.ctx = this.canvas.getContext('2d', { alpha: true });
        this.resizeCanvas();
        container.appendChild(this.canvas);
    }

    resizeCanvas() {
        if (!this.canvas) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.canvas.style.width = `${window.innerWidth}px`;
        this.canvas.style.height = `${window.innerHeight}px`;

        if (this.ctx) {
            this.ctx.scale(dpr, dpr);
        }
    }

    initializeParticles() {
        const particleCount = Math.min(
            ANIMATION_CONFIG.PARTICLE_COUNT,
            Math.floor(window.innerWidth / 20)
        );
        this.particles = Array.from({ length: particleCount },
            () => new Particle(window.innerWidth, window.innerHeight)
        );
    }

    startAnimation() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.lastFrameTime = performance.now();
        this.animationId = requestAnimationFrame(this.animate);
    }

    animate = (currentTime) => {
        if (!this.isAnimating || !this.ctx || !this.canvas) return;

        const deltaTime = currentTime - this.lastFrameTime;
        const targetFrameTime = 1000 / this.targetFPS;

        if (deltaTime < targetFrameTime) {
            this.animationId = requestAnimationFrame(this.animate);
            return;
        }

        this.lastFrameTime = currentTime;

        try {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.particles.forEach(particle => {
                particle.update(window.innerWidth, window.innerHeight);
                particle.draw(this.ctx);
            });
        } catch (error) {
            console.error('ParticleSystem animation error:', error);
            this.stopAnimation();
            return;
        }

        this.animationId = requestAnimationFrame(this.animate);
    };

    handleResize = () => {
        this.resizeCanvas();
        this.initializeParticles();
    };

    handleVisibilityChange = () => {
        if (document.hidden) {
            this.stopAnimation();
        } else {
            this.startAnimation();
        }
    };

    stopAnimation() {
        this.isAnimating = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = 0;
        }
    }

    destroy() {
        this.stopAnimation();
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        super.destroy();
    }
}

// ============================================================================
// МЕНЕДЖЕР ПРОГРЕСС-БАРОВ
// ============================================================================

class ProgressManager extends BaseComponent {
    constructor() {
        super('ProgressManager');
        this.progressBars = null;
        this.observer = null;
        this.animatedBars = new Set();
    }

    async setup() {
        this.progressBars = Utils.$$(SELECTORS.PROGRESS_BARS);
        if (!this.progressBars || this.progressBars.length === 0) {
            console.warn('ProgressManager: прогресс-бары не найдены');
            return;
        }
        this.setupIntersectionObserver();
    }

    bindEvents() {
        // Этот компонент работает только с Intersection Observer
    }

    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) {
            this.progressBars?.forEach(bar => this.animateProgressBar(bar));
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.animatedBars.has(entry.target)) {
                        this.animateProgressBar(entry.target);
                        this.animatedBars.add(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        this.progressBars?.forEach(bar => {
            this.observer.observe(bar);
        });
    }

    animateProgressBar(progressBar) {
        const progress = parseInt(progressBar.dataset.progress || '0');
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progressPercent = Math.min(elapsed / duration, 1);

            const easeOutCubic = 1 - Math.pow(1 - progressPercent, 3);
            const currentProgress = Math.floor(progress * easeOutCubic);

            progressBar.style.width = `${currentProgress}%`;

            if (progressPercent < 1) {
                requestAnimationFrame(animate);
            } else {
                this.emit('progressCompleted', progressBar);
            }
        };

        requestAnimationFrame(animate);
    }

    resetAnimations() {
        this.animatedBars.clear();
        this.progressBars?.forEach(bar => {
            bar.style.width = '0%';
        });
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        this.progressBars = null;
        this.animatedBars.clear();
        super.destroy();
    }
}

// ============================================================================
// МЕНЕДЖЕР УВЕДОМЛЕНИЙ
// ============================================================================

class NotificationManager extends BaseComponent {
    constructor() {
        super('NotificationManager');
        this.container = null;
        this.notifications = new Map();
        this.maxNotifications = 3;
    }

    async setup() {
        this.container = Utils.$(SELECTORS.NOTIFICATIONS);
        if (!this.container) {
            this.createNotificationContainer();
        }
    }

    bindEvents() {
        // События обрабатываются в методах
    }

    createNotificationContainer() {
        this.container = document.createElement('div');
        this.container.id = 'notifications';
        this.container.className = 'notifications-container';
        this.container.setAttribute('role', 'region');
        this.container.setAttribute('aria-label', 'Уведомления');
        document.body.appendChild(this.container);
    }

    async show(message, type = 'info', duration = ANIMATION_CONFIG.NOTIFICATION_DURATION) {
        if (this.notifications.size >= this.maxNotifications) {
            const oldestId = this.notifications.keys().next().value;
            this.remove(oldestId);
        }

        const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const notification = this.createNotificationElement(message, type, id);

        this.notifications.set(id, notification);
        this.container?.appendChild(notification);

        await Utils.sleep(10);
        notification.classList.add('show');

        if (duration > 0) {
            setTimeout(() => this.remove(id), duration);
        }

        this.emit('notificationShown', { id, message, type });
        return id;
    }

    createNotificationElement(message, type, id) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.dataset.id = id;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');

        notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Закрыть уведомление">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    `;

        const closeBtn = notification.querySelector('.notification-close');
        closeBtn?.addEventListener('click', () => this.remove(id));

        return notification;
    }

    async remove(id) {
        const notification = this.notifications.get(id);
        if (!notification) return;

        notification.classList.remove('show');
        notification.classList.add('hide');

        await Utils.sleep(300);

        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }

        this.notifications.delete(id);
        this.emit('notificationRemoved', id);
    }

    clear() {
        const ids = Array.from(this.notifications.keys());
        ids.forEach(id => this.remove(id));
    }

    getCount() {
        return this.notifications.size;
    }
}

// ============================================================================
// МЕНЕДЖЕР КОНТАКТОВ
// ============================================================================

class ContactManager extends BaseComponent {
    constructor(notificationManager) {
        super('ContactManager');
        this.notificationManager = notificationManager;
    }

    async setup() {
        // Настройка компонента
    }

    bindEvents() {
        const copyButtons = Utils.$$(SELECTORS.COPY_EMAIL);
        copyButtons.forEach(button => {
            this.addEventHandler('click', this.handleCopyEmail, button);
        });

        const socialLinks = Utils.$$(SELECTORS.SOCIAL_LINKS);
        socialLinks.forEach(link => {
            this.addEventHandler('click', this.handleSocialClick, link);
        });
    }

    handleCopyEmail = async (event) => {
        event.preventDefault();

        const email = 'kuprikov.kelll31@gmail.com';
        const button = event.currentTarget;
        const textSpan = button.querySelector('#copy-text') || button.querySelector('span');

        try {
            const success = await Utils.copyToClipboard(email);

            if (success) {
                await this.notificationManager.show('Email скопирован в буфер обмена!', 'success');

                if (textSpan) {
                    const originalText = textSpan.textContent;
                    textSpan.textContent = 'Скопировано!';
                    Utils.flashClass(button, 'copied', 2000);

                    setTimeout(() => {
                        textSpan.textContent = originalText;
                    }, 2000);
                }

                this.emit('emailCopied', email);
            } else {
                throw new Error('Clipboard API failed');
            }
        } catch (error) {
            console.error('Ошибка копирования:', error);
            await this.notificationManager.show('Ошибка копирования email', 'error');
        }
    };

    handleSocialClick = (event) => {
        const link = event.currentTarget;
        const href = link.href;

        if (Utils.isValidUrl(href)) {
            this.emit('socialLinkClicked', { href, platform: link.className });
        }
    };
}

// ============================================================================
// МЕНЕДЖЕР ВРЕМЕНИ
// ============================================================================

class TimeManager extends BaseComponent {
    constructor() {
        super('TimeManager');
        this.timeElement = null;
        this.intervalId = 0;
    }

    async setup() {
        this.timeElement = Utils.$(SELECTORS.TERMINAL_TIME);
        if (this.timeElement) {
            this.startClock();
        }
    }

    bindEvents() {
        this.addEventHandler('visibilitychange', this.handleVisibilityChange, document);
    }

    startClock() {
        this.updateTime();
        this.intervalId = setInterval(this.updateTime, 1000);
    }

    updateTime = () => {
        if (!this.timeElement) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        this.timeElement.textContent = timeString;
    };

    handleVisibilityChange = () => {
        if (document.hidden) {
            clearInterval(this.intervalId);
        } else {
            this.startClock();
        }
    };

    destroy() {
        clearInterval(this.intervalId);
        this.timeElement = null;
        super.destroy();
    }
}

// ============================================================================
// МЕНЕДЖЕР МОДАЛЬНЫХ ОКОН ДЛЯ СЕРТИФИКАТОВ
// ============================================================================

class CertificateModalManager extends BaseComponent {
    constructor() {
        super('CertificateModalManager');
        this.activeModals = new Map();
    }

    async setup() {
        // Настройка компонента
    }

    bindEvents() {
        this.addEventHandler('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closeAllModals();
            }
        }, document);

        this.addEventHandler('click', (event) => {
            if (event.target.classList.contains('certificate-modal')) {
                this.closeModal(event.target);
            }
        }, document);

        const previews = Utils.$$(SELECTORS.CERTIFICATE_PREVIEW);
        previews.forEach(preview => {
            this.addEventHandler('click', this.handleCertificateClick, preview);
        });
    }

    handleCertificateClick = (event) => {
        event.preventDefault();
        const img = event.currentTarget;
        const imagePath = img.src;
        const title = img.alt || 'Сертификат';

        this.showCertificateModal(imagePath, title);
    };

    showCertificateModal(imagePath, title = 'Сертификат') {
        this.closeAllModals();

        const modalId = `certificate-modal-${Date.now()}`;
        const modal = this.createCertificateModal(modalId, imagePath, title);

        document.body.appendChild(modal);
        this.activeModals.set(modalId, modal);

        requestAnimationFrame(() => {
            modal.classList.add('show');
        });

        document.body.style.overflow = 'hidden';

        this.emit('modalOpened', modalId);
        return modalId;
    }

    createCertificateModal(modalId, imagePath, title) {
        const modal = document.createElement('div');
        modal.className = 'certificate-modal';
        modal.id = modalId;
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', `${modalId}-title`);
        modal.setAttribute('aria-modal', 'true');

        modal.innerHTML = `
      <div class="certificate-modal-content">
        <div class="certificate-modal-header">
          <h2 id="${modalId}-title" class="certificate-modal-title">${title}</h2>
          <button class="certificate-modal-close" 
                  aria-label="Закрыть модальное окно"
                  data-modal-id="${modalId}">
            <i class="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="certificate-modal-body">
          <img src="${imagePath}" 
               alt="${title}" 
               class="certificate-full"
               draggable="false">
        </div>
        <div class="certificate-modal-footer">
          <button class="certificate-download-btn" data-image="${imagePath}" data-title="${title}">
            <i class="fas fa-download" aria-hidden="true"></i>
            Скачать сертификат
          </button>
        </div>
      </div>
    `;

        const closeBtn = modal.querySelector('.certificate-modal-close');
        const downloadBtn = modal.querySelector('.certificate-download-btn');

        closeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            this.closeModal(modal);
        });

        downloadBtn.addEventListener('click', (event) => {
            this.downloadCertificate(event.target.dataset.image, event.target.dataset.title);
        });

        return modal;
    }

    downloadCertificate(imagePath, title) {
        const link = document.createElement('a');
        link.href = imagePath;
        link.download = `${title.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    closeModal(modalOrId) {
        let modal;
        let modalId;

        if (typeof modalOrId === 'string') {
            modalId = modalOrId;
            modal = this.activeModals.get(modalId);
        } else {
            modal = modalOrId;
            modalId = modal.id;
        }

        if (!modal) return;

        modal.classList.remove('show');
        modal.classList.add('hide');

        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }

            if (modalId) {
                this.activeModals.delete(modalId);
            }

            if (this.activeModals.size === 0) {
                document.body.style.overflow = '';
            }

            this.emit('modalClosed', modalId);
        }, 300);
    }

    closeAllModals() {
        for (const modal of this.activeModals.values()) {
            this.closeModal(modal);
        }
    }

    hasOpenModals() {
        return this.activeModals.size > 0;
    }

    destroy() {
        this.closeAllModals();
        this.activeModals.clear();
        super.destroy();
    }
}

// ============================================================================
// ГЛАВНОЕ ПРИЛОЖЕНИЕ
// ============================================================================

class CyberCardApp extends EventEmitter {
    constructor() {
        super();
        this.components = new Map();
        this.initialized = false;
        this.version = '3.0.5';
        this.loadingScreenManager = new LoadingScreenManager();

        this.init().catch(error => {
            console.error('❌ Критическая ошибка инициализации:', error);
            this.loadingScreenManager.hideLoadingScreen();
        });
    }

    async init() {
        if (this.initialized) return;

        try {
            await this.loadComponents();
            this.setupGlobalEventHandlers();
            this.initialized = true;

            console.info(`🚀 CyberCard v${this.version} инициализирован`);
            
            // Скрываем loading screen
            this.loadingScreenManager.hideLoadingScreen();

            this.emit('initialized');
        } catch (error) {
            console.error('App initialization failed:', error);
            this.emit('error', error);
            this.loadingScreenManager.hideLoadingScreen();
        }
    }

    async loadComponents() {
        const notificationManager = new NotificationManager();
        const certificateModalManager = new CertificateModalManager();
        const contactManager = new ContactManager(notificationManager);

        const componentList = [
            ['notifications', notificationManager],
            ['certificateModal', certificateModalManager],
            ['navigation', new NavigationManager()],
            ['typing', new TypingAnimation()],
            ['particles', new ParticleSystem()],
            ['progress', new ProgressManager()],
            ['contact', contactManager],
            ['time', new TimeManager()]
        ];

        // Обновляем статус загрузки
        const loadingStatus = document.getElementById('loadingStatus');

        // Загружаем критические компоненты с timeout
        const criticalComponents = ['notifications', 'navigation', 'typing'];
        const optionalComponents = ['particles', 'progress', 'contact', 'time', 'certificateModal'];

        // Загружаем критические компоненты
        for (const [name, component] of componentList) {
            if (!criticalComponents.includes(name)) continue;

            try {
                if (loadingStatus) {
                    loadingStatus.textContent = `Загрузка ${name}...`;
                }

                await this.initializeComponent(name, component, 5000);
                this.components.set(name, component);
                console.log(`✅ ${name} загружен`);
            } catch (error) {
                console.error(`❌ Ошибка загрузки критического компонента ${name}:`, error);
                // Для критических компонентов пробуем дальше
            }
        }

        // Загружаем опциональные компоненты
        for (const [name, component] of componentList) {
            if (!optionalComponents.includes(name)) continue;

            try {
                if (loadingStatus) {
                    loadingStatus.textContent = `Инициализация ${name}...`;
                }

                await this.initializeComponent(name, component, 3000);
                this.components.set(name, component);
                console.log(`✅ ${name} загружен`);
            } catch (error) {
                console.warn(`⚠️ Опциональный компонент ${name} не загружен:`, error.message);
                // Опциональные компоненты не блокируют загрузку
            }
        }

        const loaded = this.components.size;
        const failed = componentList.length - loaded;

        console.info(`📦 Загружено компонентов: ${loaded}/${componentList.length} (ошибок: ${failed})`);
    }

    async initializeComponent(name, component, timeout) {
        if (component.isInitialized) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            let timeoutId = setTimeout(() => {
                reject(new Error(`Timeout loading component ${name} (${timeout}ms)`));
            }, timeout);

            const cleanup = () => {
                clearTimeout(timeoutId);
                component.off('initialized', onInitialized);
                component.off('error', onError);
            };

            const onInitialized = () => {
                cleanup();
                resolve();
            };

            const onError = (error) => {
                cleanup();
                reject(error);
            };

            component.once('initialized', onInitialized);
            component.once('error', onError);
        });
    }

    setupGlobalEventHandlers() {
        window.addEventListener('error', this.handleGlobalError);
        window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        document.addEventListener('keydown', this.handleGlobalKeydown);
    }

    handleGlobalError = (event) => {
        console.error('🚨 Глобальная ошибка:', event.error);

        const notificationManager = this.components.get('notifications');
        if (notificationManager) {
            notificationManager.show(
                'Произошла неожиданная ошибка.',
                'error',
                7000
            );
        }

        this.emit('globalError', event.error);
    };

    handleUnhandledRejection = (event) => {
        console.error('🚨 Необработанное отклонение Promise:', event.reason);
        this.emit('unhandledRejection', event.reason);
    };

    handleVisibilityChange = () => {
        if (document.hidden) {
            this.emit('appHidden');
        } else {
            this.emit('appVisible');
        }
    };

    handleGlobalKeydown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            console.info('🔍 Поиск (будет реализован в будущих версиях)');
        }

        if (event.key === 'F1') {
            event.preventDefault();
            this.showHelp();
        }
    };

    showHelp() {
        const notificationManager = this.components.get('notifications');
        if (notificationManager) {
            notificationManager.show(
                'Используйте Alt + 1-6 для быстрой навигации между разделами',
                'info',
                5000
            );
        }
    }

    getComponent(name) {
        return this.components.get(name);
    }

    getComponentNames() {
        return Array.from(this.components.keys());
    }

    getVersion() {
        return this.version;
    }

    isInitialized() {
        return this.initialized;
    }

    destroy() {
        this.components.forEach(component => {
            try {
                component.destroy();
            } catch (error) {
                console.error('Ошибка при уничтожении компонента:', error);
            }
        });

        this.components.clear();
        this.removeAllListeners();
        this.initialized = false;

        window.removeEventListener('error', this.handleGlobalError);
        window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        document.removeEventListener('keydown', this.handleGlobalKeydown);

        console.info('🛑 CyberCard уничтожен');
        this.emit('destroyed');
    }
}

/**
 * Менеджер мобильного меню
 */
class MobileMenuManager {
    constructor() {
        this.menuToggle = document.getElementById('mobileMenuToggle');
        this.menuOverlay = document.getElementById('mobileMenuOverlay');
        this.menuClose = document.getElementById('mobileMenuClose');
        this.menuItems = document.querySelectorAll('.mobile-menu-item a');
        this.isOpen = false;
        this.activeSection = 'profile';

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateActiveItem();
    }

    bindEvents() {
        // Открытие меню
        this.menuToggle?.addEventListener('click', () => this.toggleMenu());

        // Закрытие меню
        this.menuClose?.addEventListener('click', () => this.closeMenu());

        // Навигация по элементам
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });

        // Закрытие при клике вне меню
        this.menuOverlay?.addEventListener('click', (e) => {
            if (e.target === this.menuOverlay) {
                this.closeMenu();
            }
        });

        // Отслеживание изменения секций
        this.observeSections();
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isOpen = true;
        this.menuToggle?.classList.add('active');
        this.menuOverlay?.classList.add('active');
        this.menuToggle?.setAttribute('aria-expanded', 'true');

        // Блокируем скролл
        document.body.style.overflow = 'hidden';

        // Фокус на первый элемент меню
        setTimeout(() => {
            this.menuItems[0]?.focus();
        }, 300);
    }

    closeMenu() {
        this.isOpen = false;
        this.menuToggle?.classList.remove('active');
        this.menuOverlay?.classList.remove('active');
        this.menuToggle?.setAttribute('aria-expanded', 'false');

        // Восстанавливаем скролл
        document.body.style.overflow = '';

        // Возвращаем фокус на кнопку
        this.menuToggle?.focus();
    }

    handleNavigation(event) {
        event.preventDefault();

        const link = event.currentTarget;
        const section = link.getAttribute('data-section');

        if (section) {
            this.navigateToSection(section);
            this.closeMenu();
        }
    }

    navigateToSection(sectionId) {
        // Скрываем все секции
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Показываем целевую секцию
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.activeSection = sectionId;
            this.updateActiveItem();

            // Обновляем URL
            window.location.hash = sectionId;

            // Плавный скролл к началу секции
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    updateActiveItem() {
        // Убираем активное состояние со всех элементов
        document.querySelectorAll('.mobile-menu-item').forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем активное состояние к текущему
        const activeItem = document.querySelector(
            `.mobile-menu-item a[data-section="${this.activeSection}"]`
        )?.parentElement;

        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    observeSections() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    this.activeSection = entry.target.id;
                    this.updateActiveItem();
                }
            });
        }, {
            threshold: [0.1, 0.5, 0.9],
            rootMargin: '-100px 0px -100px 0px'
        });

        document.querySelectorAll('.content-section').forEach(section => {
            observer.observe(section);
        });
    }
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 1023) {
        new MobileMenuManager();
    }
});

// Реинициализация при изменении размера окна
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1023 && !window.mobileMenuManager) {
        window.mobileMenuManager = new MobileMenuManager();
    }
});


// ============================================================================
// ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ СОВМЕСТИМОСТИ
// ============================================================================

window.copyEmail = async function () {
    const email = 'kuprikov.kelll31@gmail.com';

    try {
        const success = await Utils.copyToClipboard(email);
        if (success && window.app) {
            const notificationManager = window.app.getComponent('notifications');
            if (notificationManager) {
                notificationManager.show('Email скопирован!', 'success');
            }
        }
    } catch (error) {
        console.error('Ошибка копирования email:', error);
    }
};

window.showCertificate = function (imagePath, title = 'Сертификат') {
    if (window.app) {
        const modalManager = window.app.getComponent('certificateModal');
        if (modalManager) {
            modalManager.showCertificateModal(imagePath, title);
        }
    }
};

window.downloadCertificate = function (imagePath, title = 'certificate') {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// ============================================================================
// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ============================================================================

function initializeApp() {
    if (!window.Promise || !window.fetch || !document.querySelector) {
        console.error('❌ Браузер не поддерживает необходимые функции');
        return;
    }

    const app = new CyberCardApp();

    window.app = app;
    window.CyberCardApp = CyberCardApp;
    window.Utils = Utils;

    app.on('initialized', () => {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('🔧 Режим разработки');
            console.log('📊 Компоненты:', app.getComponentNames());

            window.debugApp = {
                getComponents: () => app.getComponentNames(),
                destroy: () => app.destroy(),
                version: app.getVersion()
            };
        }
    });

    return app;
}

// Запуск приложения
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// ============================================================================
// ЭКСПОРТ ДЛЯ МОДУЛЕЙ
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CyberCardApp,
        Utils,
        BaseComponent,
        EventEmitter
    };
}