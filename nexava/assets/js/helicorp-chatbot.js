(function () {
    'use strict';

    var widget = document.querySelector('.chatbot-widget');
    if (!widget) return;

    var toggle = widget.querySelector('.chatbot-toggle');
    var panel = widget.querySelector('.chatbot-panel');
    var close = widget.querySelector('.chatbot-close');
    var messages = widget.querySelector('.chatbot-messages');
    var form = widget.querySelector('.chatbot-form');
    var input = widget.querySelector('#chatbot-input');
    var suggestions = widget.querySelectorAll('[data-chatbot-question]');
    var hasOpened = false;

    var answers = [
        {
            keys: ['product', 'products', 'device', 'devices', 'support', 'brand', 'brands'],
            text: 'HELICORP supports smart pet care products such as connected feeders, hygiene devices, pet health products, accessories and partner brands including PETKIT, NEAKASA, PETREE, Dr.VET, HELIPET and Max Clean.'
        },
        {
            keys: ['contact', 'phone', 'hotline', 'email', 'call'],
            text: 'Purchase consultation: +84 (0) 862 258 929. Warranty center: +84 (0) 965 255 227. Email: info@helicorp.vn.'
        },
        {
            keys: ['warranty', 'repair', 'service', 'after-sale', 'after sales'],
            text: 'For warranty support, call +84 (0) 965 255 227 during working hours: 8:30 AM - 6:00 PM (GMT +7).'
        },
        {
            keys: ['location', 'address', 'office', 'where', 'warehouse'],
            text: 'Ho Chi Minh City Headquarters: R54, Street 15, Quarter 5, Dong Hung Thuan Ward, Ho Chi Minh City. HELIPET Cat Litter Warehouse: 25.2ha Area, Son Dong, Hanoi.'
        },
        {
            keys: ['distribution', 'province', 'provinces', 'network', 'vietnam'],
            text: 'HELICORP operates a nationwide distribution network across 34 provinces and cities in Vietnam for pet care technology brands.'
        }
    ];

    function addMessage(text, type) {
        var item = document.createElement('div');
        item.className = 'chatbot-message ' + type;
        item.textContent = text;
        messages.appendChild(item);
        messages.scrollTop = messages.scrollHeight;
    }

    function reply(question) {
        var q = question.toLowerCase();
        var found = answers.find(function (item) {
            return item.keys.some(function (key) {
                return q.indexOf(key) !== -1;
            });
        });

        return found ? found.text : 'I can help with HELICORP products, contact information, warranty, locations and distribution. You can also use the contact form below for detailed consultation.';
    }

    function openChat() {
        panel.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close chatbot');

        if (!hasOpened) {
            addMessage('Hi, I am the HELICORP Assistant. Ask me about products, warranty, contact or locations.', 'bot');
            hasOpened = true;
        }

        setTimeout(function () {
            input.focus();
        }, 0);
    }

    function closeChat() {
        panel.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open chatbot');
        toggle.focus();
    }

    toggle.addEventListener('click', function () {
        if (panel.hidden) openChat();
        else closeChat();
    });

    close.addEventListener('click', closeChat);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var question = input.value.trim();
        if (!question) return;

        addMessage(question, 'user');
        input.value = '';
        setTimeout(function () {
            addMessage(reply(question), 'bot');
        }, 180);
    });

    suggestions.forEach(function (button) {
        button.addEventListener('click', function () {
            var question = button.getAttribute('data-chatbot-question');
            openChat();
            addMessage(question, 'user');
            setTimeout(function () {
                addMessage(reply(question), 'bot');
            }, 180);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !panel.hidden) closeChat();
    });
}());
