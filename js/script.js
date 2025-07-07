/**
 * @fileoverview Визитка пентестера без приватных полей
 * @version 3.0.2
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
    SOCIAL_LINKS: '.social-link'
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
    'It works on my machine ¯\\_(ツ)_/¯',

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

        // Элементы DOM
        this.sidebar = null;
        this.toggleButton = null;
        this.navItems = [];
        this.contentSections = [];

        // Состояние навигации
        this.currentSection = null;
        this.isCollapsed = false;
        this.isExpanded = false;

        // Наблюдатели
        this.observer = null;
        this.resizeTimeout = null;

        // Привязка методов к контексту
        this.handleResize = this.handleResize.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleKeyNavigation = this.handleKeyNavigation.bind(this);
    }

    async setup() {
        try {
            // Инициализация элементов DOM
            await this.initializeElements();

            // Проверка наличия обязательных элементов
            if (!this.validateElements()) {
                console.warn('NavigationManager: Отсутствуют обязательные элементы DOM');
                return;
            }

            // Настройка компонентов
            this.setupIntersectionObserver();
            this.initializeState();
            this.loadActiveSection();

            console.log(`✅ NavigationManager: Инициализирован с ${this.navItems.length} элементами`);
        } catch (error) {
            console.error('NavigationManager setup error:', error);
            throw error;
        }
    }

    async initializeElements() {
        // Основные элементы
        this.sidebar = Utils.$(SELECTORS.SIDEBAR);
        this.toggleButton = Utils.$(SELECTORS.SIDEBAR_TOGGLE);

        // Навигационные элементы (исправленный селектор)
        const navItemElements = Utils.$$('.nav-item');
        this.navItems = Array.from(navItemElements).map(item => {
            const link = item.querySelector('a');
            return {
                element: item,
                link: link,
                section: link ? link.getAttribute('href')?.slice(1) : null,
                icon: link ? link.querySelector('i') : null,
                text: link ? link.querySelector('span, .nav-text') : null
            };
        }).filter(item => item.section);

        // Секции контента
        this.contentSections = Array.from(Utils.$$(SELECTORS.CONTENT_SECTIONS));

        // Время ожидания для загрузки DOM
        if (this.navItems.length === 0) {
            await Utils.sleep(100);
            await this.initializeElements();
        }
    }

    validateElements() {
        if (!this.sidebar) {
            console.warn('Sidebar элемент не найден');
            return false;
        }

        if (!this.toggleButton) {
            console.warn('Toggle кнопка не найдена');
        }

        if (this.navItems.length === 0) {
            console.warn('Навигационные элементы не найдены');
            return false;
        }

        if (this.contentSections.length === 0) {
            console.warn('Секции контента не найдены');
            return false;
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
        this.addEventHandler('keydown', this.handleKeyNavigation);
        this.addEventHandler('resize', Utils.debounce(this.handleResize, 250), window);

        // Клик вне sidebar на мобильных
        this.addEventHandler('click', this.handleOutsideClick);
    }

    initializeState() {
        // Загружаем сохраненное состояние
        const savedCollapsed = localStorage.getItem('sidebar-collapsed');

        if (window.innerWidth >= 1024) {
            // Десктопный режим
            this.isCollapsed = savedCollapsed === 'true';

            if (this.isCollapsed) {
                this.sidebar.classList.add('collapsed');
            }

            this.sidebar.classList.remove('expanded');
        } else {
            // Мобильный режим
            this.isCollapsed = false;
            this.isExpanded = false;

            this.sidebar.classList.remove('collapsed', 'expanded');
        }

        this.updateToggleIcon();
    }

    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) {
            return;
        }

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        this.updateActiveNavItem(entry.target.id);
                    }
                });
            },
            {
                threshold: [0.1, 0.5, 0.9],
                rootMargin: '-80px 0px -80px 0px'
            }
        );

        this.contentSections.forEach(section => {
            this.observer.observe(section);
        });
    }

    toggleSidebar() {
        if (!this.sidebar) return;

        if (window.innerWidth >= 1024) {
            // Десктопное поведение: переключение collapsed состояния
            this.isCollapsed = !this.isCollapsed;

            this.sidebar.classList.toggle('collapsed', this.isCollapsed);
            this.sidebar.classList.remove('expanded');

            // Сохраняем состояние
            localStorage.setItem('sidebar-collapsed', this.isCollapsed.toString());

            this.emit('sidebarToggled', {
                type: 'collapsed',
                isCollapsed: this.isCollapsed,
                isDesktop: true
            });
        } else {
            // Мобильное поведение: переключение expanded состояния
            this.isExpanded = !this.isExpanded;

            this.sidebar.classList.toggle('expanded', this.isExpanded);
            this.sidebar.classList.remove('collapsed');

            if (this.toggleButton) {
                this.toggleButton.setAttribute('aria-expanded', this.isExpanded.toString());
            }

            this.emit('sidebarToggled', {
                type: 'expanded',
                isExpanded: this.isExpanded,
                isDesktop: false
            });
        }

        this.updateToggleIcon();
    }

    updateToggleIcon() {
        const icon = this.toggleButton?.querySelector('i');
        if (!icon) return;

        if (window.innerWidth >= 1024) {
            // Десктопные иконки
            icon.className = this.isCollapsed
                ? 'fas fa-chevron-right'
                : 'fas fa-chevron-left';
        } else {
            // Мобильные иконки
            icon.className = this.isExpanded
                ? 'fas fa-times'
                : 'fas fa-bars';
        }
    }

    handleNavClick(event) {
        event.preventDefault();

        const link = event.currentTarget;
        const href = link.getAttribute('href');

        if (!href || !href.startsWith('#')) return;

        const sectionId = href.slice(1);

        if (sectionId && sectionId !== this.currentSection) {
            this.navigateToSection(sectionId);

            // Закрываем мобильное меню после навигации
            if (window.innerWidth < 1024 && this.isExpanded) {
                this.toggleSidebar();
            }
        }
    }

    navigateToSection(sectionId) {
        // Деактивируем все секции
        this.contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Активируем целевую секцию
        const targetSection = Utils.$(`#${sectionId}`);
        if (targetSection) {
            targetSection.classList.add('active');
            this.updateActiveNavItem(sectionId);

            // Обновляем URL
            if (history.replaceState) {
                history.replaceState(null, '', `#${sectionId}`);
            }

            // Скроллим к секции если нужно
            this.scrollToSection(targetSection);

            this.emit('navigationChanged', {
                section: sectionId,
                element: targetSection
            });
        }
    }

    scrollToSection(element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!isVisible) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    updateActiveNavItem(sectionId) {
        if (this.currentSection === sectionId) return;

        // Убираем активное состояние у всех элементов
        this.navItems.forEach(item => {
            item.element.classList.remove('active');
        });

        // Активируем нужный элемент
        const activeItem = this.navItems.find(item => item.section === sectionId);
        if (activeItem) {
            activeItem.element.classList.add('active');
        }

        this.currentSection = sectionId;

        this.emit('activeItemChanged', {
            section: sectionId,
            item: activeItem
        });
    }

    loadActiveSection() {
        const hash = window.location.hash.slice(1);
        const defaultSection = 'profile';
        const targetSection = hash || defaultSection;

        // Проверяем что секция существует
        const sectionExists = this.contentSections.some(section =>
            section.id === targetSection
        );

        if (sectionExists) {
            this.navigateToSection(targetSection);
        } else {
            this.navigateToSection(defaultSection);
        }
    }

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

        // Escape для закрытия мобильного меню
        if (event.key === 'Escape' && this.isExpanded && window.innerWidth < 1024) {
            this.toggleSidebar();
        }
    }

    handleOutsideClick(event) {
        // Закрываем мобильное меню при клике вне его
        if (window.innerWidth >= 1024 || !this.isExpanded) return;

        const isClickInsideSidebar = this.sidebar?.contains(event.target);
        const isClickOnToggle = this.toggleButton?.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle) {
            this.toggleSidebar();
        }
    }

    handleResize() {
        // Debounce resize события
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }

        this.resizeTimeout = setTimeout(() => {
            const wasDesktop = this.wasDesktop;
            const isDesktop = window.innerWidth >= 1024;
            this.wasDesktop = isDesktop;

            if (wasDesktop !== isDesktop) {
                // Переход между режимами
                this.handleModeChange(isDesktop);
            }

            this.updateToggleIcon();
        }, 100);
    }

    handleModeChange(isDesktop) {
        if (isDesktop) {
            // Переход в десктопный режим
            this.isExpanded = false;
            this.sidebar?.classList.remove('expanded');

            // Восстанавливаем сохраненное collapsed состояние
            const savedCollapsed = localStorage.getItem('sidebar-collapsed');
            if (savedCollapsed === 'true') {
                this.isCollapsed = true;
                this.sidebar?.classList.add('collapsed');
            } else {
                this.isCollapsed = false;
                this.sidebar?.classList.remove('collapsed');
            }
        } else {
            // Переход в мобильный режим
            this.isCollapsed = false;
            this.isExpanded = false;
            this.sidebar?.classList.remove('collapsed', 'expanded');
        }

        if (this.toggleButton) {
            this.toggleButton.setAttribute('aria-expanded', 'false');
        }
    }

    // Публичные методы для внешнего использования
    getCurrentSection() {
        return this.currentSection;
    }

    getNavigationState() {
        return {
            currentSection: this.currentSection,
            isCollapsed: this.isCollapsed,
            isExpanded: this.isExpanded,
            isDesktop: window.innerWidth >= 1024,
            navItemsCount: this.navItems.length
        };
    }

    programmaticNavigate(sectionId) {
        if (this.navItems.find(item => item.section === sectionId)) {
            this.navigateToSection(sectionId);
            return true;
        }
        return false;
    }

    collapse() {
        if (window.innerWidth >= 1024 && !this.isCollapsed) {
            this.toggleSidebar();
        }
    }

    expand() {
        if (window.innerWidth >= 1024 && this.isCollapsed) {
            this.toggleSidebar();
        } else if (window.innerWidth < 1024 && !this.isExpanded) {
            this.toggleSidebar();
        }
    }

    destroy() {
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

        // Очистка ссылок
        this.sidebar = null;
        this.toggleButton = null;
        this.navItems = [];
        this.contentSections = [];

        // Вызов родительского метода
        super.destroy();
    }
}


// ============================================================================
// АНИМАЦИЯ ПЕЧАТИ
// ============================================================================

class TypingAnimation extends BaseComponent {
    constructor() {
        super('TypingAnimation');
        this.textElement = null;
        this.isTyping = false;
        this.messageIndex = 0;
        this.isVisible = true;
    }

    async setup() {
        this.textElement = Utils.$(SELECTORS.TYPED_TEXT);
        if (!this.textElement) return;

        this.startTypingLoop();
    }

    bindEvents() {
        this.addEventHandler('visibilitychange', this.handleVisibilityChange);
    }

    async startTypingLoop() {
        while (this.textElement && this.isVisible) {
            if (!this.isTyping) {
                await this.typeMessage(TYPING_MESSAGES[this.messageIndex]);
                this.messageIndex = (this.messageIndex + 1) % TYPING_MESSAGES.length;
                await Utils.sleep(ANIMATION_CONFIG.TYPING_PAUSE);
            }
            await Utils.sleep(50);
        }
    }

    async typeMessage(message) {
        if (!this.textElement || !this.isVisible) return;

        this.isTyping = true;
        this.textElement.textContent = '';

        for (let i = 0; i <= message.length; i++) {
            if (!this.isTyping || !this.isVisible) break;

            this.textElement.textContent = message.slice(0, i);
            await Utils.sleep(ANIMATION_CONFIG.TYPING_SPEED);
        }

        await Utils.sleep(1000);

        for (let i = message.length; i >= 0; i--) {
            if (!this.isTyping || !this.isVisible) break;

            this.textElement.textContent = message.slice(0, i);
            await Utils.sleep(ANIMATION_CONFIG.TYPING_SPEED / 2);
        }

        this.isTyping = false;
    }

    handleVisibilityChange = () => {
        this.isVisible = !document.hidden;
        if (!this.isVisible) {
            this.isTyping = false;
        } else if (this.textElement) {
            this.startTypingLoop();
        }
    };

    stop() {
        this.isTyping = false;
        this.isVisible = false;
    }

    start() {
        this.isVisible = true;
        this.startTypingLoop();
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
        this.targetFPS = 60;
    }

    async setup() {
        const container = Utils.$(SELECTORS.PARTICLES);
        if (!container) return;

        this.createCanvas(container);
        this.initializeParticles();
        this.startAnimation();
    }

    bindEvents() {
        this.addEventHandler('resize', Utils.throttle(this.handleResize, 100), window);
        this.addEventHandler('visibilitychange', this.handleVisibilityChange);
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

        this.ctx = this.canvas.getContext('2d');
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
        const particleCount = Math.min(ANIMATION_CONFIG.PARTICLE_COUNT, Math.floor(window.innerWidth / 20));
        this.particles = Array.from({ length: particleCount },
            () => new Particle(window.innerWidth, window.innerHeight)
        );
    }

    startAnimation() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.lastFrameTime = performance.now();
        this.animate();
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

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.update(window.innerWidth, window.innerHeight);
            particle.draw(this.ctx);
        });

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
        this.setupIntersectionObserver();
    }

    bindEvents() {
        // Этот компонент работает только с Intersection Observer
    }

    setupIntersectionObserver() {
        if (!('IntersectionObserver' in window)) {
            this.progressBars.forEach(bar => this.animateProgressBar(bar));
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

        this.progressBars.forEach(bar => {
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
        this.progressBars.forEach(bar => {
            bar.style.width = '0%';
        });
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
        this.addEventHandler('visibilitychange', this.handleVisibilityChange);
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
        });

        this.addEventHandler('click', (event) => {
            if (event.target.classList.contains('certificate-modal')) {
                this.closeModal(event.target);
            }
        });

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
}

// ============================================================================
// ГЛАВНОЕ ПРИЛОЖЕНИЕ
// ============================================================================

class CyberCardApp extends EventEmitter {
    constructor() {
        super();
        this.components = new Map();
        this.initialized = false;
        this.version = '3.0.2';

        this.init().catch(error => {
            console.error('❌ Критическая ошибка инициализации:', error);
        });
    }

    async init() {
        if (this.initialized) return;

        try {
            await this.loadComponents();
            this.setupGlobalEventHandlers();
            this.initialized = true;

            console.info(`🚀 CyberCard v${this.version} инициализирован`);

            this.emit('initialized');
        } catch (error) {
            this.emit('error', error);
            throw error;
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

        // Последовательная инициализация компонентов
        for (const [name, component] of componentList) {
            try {
                if (!component.isInitialized) {
                    await new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => {
                            reject(new Error(`Timeout loading component ${name}`));
                        }, 10000); // Увеличили timeout до 10 секунд

                        component.once('initialized', () => {
                            clearTimeout(timeout);
                            resolve();
                        });

                        component.once('error', (error) => {
                            clearTimeout(timeout);
                            reject(error);
                        });
                    });
                }

                this.components.set(name, component);
                console.log(`✅ Компонент ${name} загружен`);
            } catch (error) {
                console.error(`❌ Ошибка загрузки компонента ${name}:`, error);
            }
        }

        const loaded = this.components.size;
        const failed = componentList.length - loaded;

        console.info(`📦 Загружено компонентов: ${loaded}/${componentList.length} (ошибок: ${failed})`);
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
                'Произошла неожиданная ошибка. Попробуйте обновить страницу.',
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
