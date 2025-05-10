const jsonData = {
    tabs: [
        { id: 'all', name: 'Все' },
        { id: 'interface', name: 'Интерфейс' },
        { id: 'control', name: 'Управление' },
        { id: 'online', name: 'Онлайн-просмотр' },
        { id: 'torrent', name: 'Торрент-просмотр' },
        { id: 'tv', name: 'TV' },
        { id: 'radio', name: 'Радио' },
        { id: 'strawberry', name: 'Клубничка' },
    ],
    cards: [
        // ------------------------ Интерфейс ----------------------
        {
            id: 'tmdb_proxy',
            title: 'TMDB Proxy',
            description: 'Если Вы видите надпись «Здесь пусто» или в постерах название без картинок, то этот плагин для Вас.',
            link: ['https://plugin.rootu.top/tmdb.js', 'https://cub.red/plugin/tmdb-proxy', 'https://bylampa.github.io/tmdb-proxy.js'],
            link_hint: ['(для любой Lampa)', '(Lampa от разработчиков)', '(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'priyatnye_melochi',
            title: 'Приятные мелочи',
            description: 'В настройках добавляет пункт Tweak & Tricks. Там можно добавлять категории в левом меню и немого менять интерфейс Lampa. Что-то работает, что-то глючит. На любителя.',
            link: ['https://skaztv.online/js/tricks.js', 'https://andreyurl54.github.io/diesel5/tricks.js'],
            link_hint: ['(Lampa от разработчиков)', '(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'reiting_kinopoisk_i_imdb',
            title: 'Рейтинг КиноПоиск и IMDB',
            description: 'В карточке фильма добавляет рейтинги. Если рейтинга TMDB недостаточно, можно установить. Не рекомендуем ставить если стоит плагин MODs и на устройствах, где оперативной памяти 2 гигабайта и меньше.',
            link: 'https://nb557.github.io/plugins/rating.js',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'staryy_stil_punktov',
            title: 'Старый стиль пунктов',
            description: 'В последних версиях Lampa пункты Закладки, Нравятся, Позже и т.д. были перенесены в Избранное. Данный плагин возвращает старый стиль, перенося эти пункты в левое меню.',
            link: 'http://github.freebie.tom.ru/want.js',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'sbros_nastroek_subtitrov',
            title: 'Сброс настроек субтитров',
            description: 'Если Вы меняли настройки субтитров в плеере Лампа и запутались в них, то данный пункт сбрасывает их «по умолчанию».',
            link: 'https://nb557.github.io/plugins/reset_subs.js',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'multfilmy',
            title: 'Мультфильмы',
            description: 'В левом меню заменяет пункт Аниме на Мульт.',
            link: 'http://193.233.134.21/plugins/mult.js',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'kollektsii',
            title: 'Коллекции',
            description: 'Добавляет в левое меню пункт Коллекции. От себя скажу, подборки не плохие. Рекомендую, если памяти на вашем устройстве достаточно.',
            link: 'https://cub.red/plugin/collections',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'pogoda',
            title: 'Погода',
            description: 'На месте часов, время от времени будет показываться погода.',
            link: 'https://bylampa.github.io/weather.js',
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'cub_off',
            title: 'Cub Off',
            description: 'Плагин убирает элементы, предлагающие оформить CUB Premium.',
            link: 'https://bylampa.github.io/cub_off.js',
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'stilnyy_interfeis',
            title: 'Стильный интерфейс',
            description: 'Плагин делает интерфейс Lampa похожий на КиноПоиск и Netflix.',
            link: ['http://cub.red/plugin/cardify', 'https://bylampa.github.io/interface.js'],
            link_hint: ['(Lampa от разработчиков)', '(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'dopolnitelnye_kategorii',
            title: 'Дополнительные категории',
            description: 'После установки плагина в меню настроек появится новый пункт меню Добавить категории. Зайдите в него и выберите нужные дополнительные категории: TV Show стриминги, LME Collections, Мультфильмы, Документалки.',
            link: ['https://lampame.github.io/main/nc/nc.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'dopolnitelnye_istochniki',
            title: 'Дополнительные источники',
            description: 'Зайдите в Настройки (шестерёнка), выберите Остальное (в самом низу), затем Основной Источник. У вас появится 2 дополнительных источника KP (КиноПоиск) и FILMIX. Даже CUB вроде начинает работать.',
            link: ['https://bylampa.github.io/source.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'start',
            title: 'Start',
            description: 'Если нет постеров в Lampa, то пробуйте данный плагин. Альтернатива плагина TMDB Proxy. Вроде как, плагин позволяет заходить на заблокированные карточки.',
            link: ['https://bylampa.github.io/start.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'zolotaya_tema',
            title: 'Золотая тема',
            description: 'Плагин должен включить какую-то золотую тему. Лично у меня просто появился жёлто-коричневый оттенок фона.',
            link: ['https://bazzzilius.github.io/scripts/gold_theme.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'poisk_kontsertov',
            title: 'Поиск концертов',
            description: 'Добавляет в левом меню пункт Concert Search. Плагин требует установки торрента и рабочего адреса Jakett. Работает со сбоями.',
            link: ['https://lampame.github.io/main/cts.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'kommentariy_ot_rezka',
            title: 'Комментарий от Rezka',
            description: 'На момент тестирования не работает.',
            link: ['https://BDVBurik.github.io/rezkacommentwo.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'lme_shikimori',
            title: 'LME Shikimori',
            description: 'Отображает информацию по Аниме с ресурса Shikimori. Также пытается найти по оригинальному названию на TMDB. Если найдено множество результатов, то покажет меню с выбором.',
            link: ['https://lampame.github.io/main/shikimori.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'remove_ts_1',
            title: 'Remove TS',
            description: 'Убирает с главного экрана постеры (карточки) с качеством TS (экранки).',
            link: ['http://193.233.134.21/plugins/nots'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'remove_ts_2',
            title: 'Remove TS',
            description: 'Убирает с главного экрана постеры (карточки) с качеством TS (экранки).',
            link: ['http://193.233.134.21/plugins/nots'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'russkie_novinki',
            title: 'Русские новинки',
            description: 'Добавляет в левом меню пункт Русское в котором будут Русские фильмы, Русские сериалы, Русские мультфильмы. Также можно увидеть подборки сервисов Start, Premier, KION, ИВИ, Okko, КиноПоиск, Wink, TV СТС, TV ТНТ.',
            link: ['https://bylampa.github.io/rus_movie.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'podborki',
            title: 'Подборки',
            description: 'После этого плагина Вам не нужно будет заходить в другие онлайн-кинотеатры. Теперь прямо в Lampa можно смотреть подборки таких сервисов как: Okko, Кинопоиск, ИВИ, Wink, KION, Start, Netflix. Кроме этого добавлены такие пункты как Русские, В качестве, Дорамы (про последнее я не знаю что это, но там что-то азиатское).',
            link: ['https://lampaplugins.github.io/store/p.js'],
            link_hint: ['(Lampa от разработчиков)'],
            categories: ['all', 'interface']
        },
        {
            id: 'v_kachestve',
            title: 'В качестве',
            description: 'В левое меню добавляет пункт В качестве, в котором будут отображаться новые фильмы и с качеством 4K (UltraHD). Рекомендую обладателям телевизоров с поддержкой HDR.',
            link: ['https://bylampa.github.io/in_quality.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'sneg',
            title: 'Снег',
            description: 'Анимация падающего снега. Включить и выключить можно зайдя в Настройки и выбрать пункт Интерфейс.',
            link: ['https://bylampa.github.io/snow.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'logo_vmesto_nazvaniya',
            title: 'Лого Вместо Названия',
            description: 'В карточке фильма показывает Логотип (фирменное написание) вместо буквенного написания. Смотрится неплохо. Если оперативки достаточно, устанавливайте.',
            link: ['https://lampaplugins.github.io/store/logo.js', 'https://bylampa.github.io/logo_title.js'],
            link_hint: ['(Lampa от разработчиков)', '(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'trakttv',
            title: 'TraktTV',
            description: 'Добавляет в меню Настройки пункт Trakt.TV (сервис по подбору фильмов). Не могу дать рекомендацию, поскольку не пользуюсь данным сервисом. Если кто-то пользуется и сумел настроить, напишите в комментариях.',
            link: ['https://lampame.github.io/main/trakttv.js'],
            link_hint: ['(Lampa от разработчиков)'],
            categories: ['all', 'interface']
        },
        {
            id: 'nastroika_shapki',
            title: 'Настройка шапки',
            description: 'После установки плагина нужно зайти в меню Настройки, затем Интерфейс. Там появится пункт Шапка. В нём можно включать и отключать отображение значков Поиск, Настройки, Премиум, Профиль, Новости, Уведомления и т.д.',
            link: ['https://and7ey.github.io/lampa/head_filter.js', 'https://lampaplugins.github.io/store/logo.js'],
            link_hint: ['(для любой Lampa)', '(Lampa от разработчиков)'],
            categories: ['all', 'interface']
        },
        {
            id: 'cardify',
            title: 'Cardify',
            description: 'Изменяет внешний вид карточек. Больше внимания на постер. В последней версии перестал работать.',
            link: ['https://bylampa.github.io/cardify.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'menu_vykhod',
            title: 'Меню выход',
            description: 'Плагин подменяет меню выход на своё. Можно включить или выключить в настройках, раздел Остальное, пункт меню Выход.',
            link: ['https://bylampa.github.io/backmenu.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'moi_temy',
            title: 'Мои темы',
            description: 'Изменяет палитру приложения Lampa. Зайдите в Настройки, раздел Интерфейс, найдите пункт Мои темы. Чтобы вернуть стандарты интерфейс, удалите любую из тем.',
            link: ['https://bylampa.github.io/themes.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'zarubezhnye_podborki',
            title: 'Зарубежные подборки',
            description: 'Добавляет в левом (главном) меню пункт Зарубежное.',
            link: ['https://bylampa.github.io/inter_movie.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'reiting_lampa',
            title: 'Рейтинг Lampa',
            description: 'В карточке фильма добавляет рейтинг пользователей Lampa.',
            link: ['https://bylampa.github.io/rate_lampa.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'reiting_cub_v_kartochke_filma',
            title: 'Рейтинг CUB в карточке фильма',
            description: 'В интерфейсе карточек появляется рейтинг от сервиса CUB.',
            link: ['https://plugin.rootu.top/cub-rating.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'status_na_staroy_kartochke',
            title: 'Статус на старой карточке',
            description: 'Плагин для тех, кто пользуется старым интерфейсом (в настройках пункт Интерфейс карточек). Добавляет статус видео. В новом интерфейсе ничего не изменится.',
            link: ['https://bylampa.github.io/old_card_status.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'sostoyanie_seriala',
            title: 'Состояние Сериала',
            description: 'Отображает текущее состояние сериала в карточке. Сезон и серия. Отключить и включить можно в настройках Интерфейса.',
            link: ['https://bylampa.github.io/seas_and_eps.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'anime',
            title: 'Аниме',
            description: 'Добавляет в левое меню пункт Аниме. Это подборки от TMDB.',
            link: ['https://bylampa.github.io/anime.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'moi_zakladki',
            title: 'Мои закладки',
            description: 'Плагин позволяет создавать свои папки в Закладках.',
            link: ['https://bylampa.github.io/my_bookmarks.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'tsvetnye_otsenki',
            title: 'Цветные оценки',
            description: 'Оценки на постерах. Красный — фигня полная. Жёлтый — можно разок глянуть. Синий — стоит посмотреть. Зелёный — шедевры.',
            link: ['https://bylampa.github.io/color_vote.js'],
            link_hint: ['(Lampa UNCENSORED)'],
            categories: ['all', 'interface']
        },
        {
            id: 'treilery_itunes',
            title: 'Трейлеры Itunes',
            description: 'Позволяет из карточки смотреть трейлеры из Itunes.',
            link: ['https://plugin.rootu.top/trailers.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'aviamovie_surs',
            title: 'Aviamovie Surs',
            description: 'Вы получите уникальные подборки фильмов. После установки плагина, зайдите в Настройки (шестерёнка), найдите пункт Подборки AVIAMOVIE и добавьте нужную подборку в боковое меню.',
            link: ['https://aviamovie.github.io/surs.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'fiksirovannyy_razmer',
            title: 'Фиксированный размер',
            description: 'Интерфейс Lampa станет крупнее. Если у Вас маленький телевизор или плохое зрение — самое оно!',
            link: ['https://nb557.github.io/plugins/fix_size.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'statistika_1',
            title: 'Статистика',
            description: 'После установки плагина в Настройках (шестерёнка) появится пункт Статистика. Требуется время для формирования статистики (просто пользуйтесь Лампой как обычно в течение некоторого времени). Итоги года доступны с 14 декабря по 15 января.',
            link: ['https://and7ey.github.io/lampa/stats.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        {
            id: 'statistika_2',
            title: 'Статистика',
            description: 'После установки плагина в Настройках (шестерёнка) появится пункт Статистика. Требуется время для формирования статистики (просто пользуйтесь Лампой как обычно в течение некоторого времени). Итоги года доступны с 14 декабря по 15 января.',
            link: ['https://and7ey.github.io/lampa/stats.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'interface']
        },
        // ------------------------ Управление ----------------------
        {
            id: 'vykhod',
            title: 'Выход',
            description: 'Добавляет в главное меню пункт Выход.',
            link: 'https://tsynik.github.io/lampa/e.js',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'control']
        },
        {
            id: 'goryachie_knopki',
            title: 'Горячие кнопки',
            description: 'Плагин вызывает меню плеера лампы по кнопкам пульта: 5 плейлист, 8 аудио дорожки, 0 субтитры, +/— следующий/предыдущий файл в плейлисте.',
            link: 'https://nnmdd.github.io/lampa_hotkeys/hotkeys.js',
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'control']
        },
        {
            id: 'dlna_tizen_orsay',
            title: 'DLNA (Tizen, Orsay)',
            description: 'В правом меню появляется пункт DLNA. Плагин позволяет смотреть медиаконтент по локальной сети.',
            link: 'http://cub.red/plugin/dlna',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'tip_upravleniya',
            title: 'Тип управления',
            description: '1.Пульт без мышки. 2.Мышь / Пульт с мышью 3.Тачскрин. Зайти в Настройки, затем в Остальное. В самом низу появится пункт Сбросить тип управления.',
            link: 'https://nemiroff.github.io/lampa/select_weapon.js',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'vyklyuchenie_tacha',
            title: 'Выключение Тача',
            description: 'Плагин позволяет выключить сенсорное управление, если по ошибке Вы его включили.',
            link: 'https://nb557.github.io/plugins/not_mobile.js',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'wsoff',
            title: 'Wsoff',
            description: 'Плагин отключает ошибки Request was denied for security на старых версиях Android. Если ошибки нет, устанавливать не нужно.',
            link: 'http://plugin.rootu.top/wsoff.js',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'smena_servera',
            title: 'Смена Сервера',
            description: 'В меню Настройки появится новый пункт Смена Сервера. Иногда основной адрес lampa.mx перестаёт работать. Вы можете установить альтернативные адреса, например:khuyampa.best | http и https cf.lampa.mx | https bylampa.online  | https lampa.stream | https lampa.byskaz.ru | https',
            link: ['https://reyohoho.serv00.net/redirect.js', 'https://bylampa.github.io/redirect.js'],
            link_hint: ['(для любой Lampa)', '(Lampa UNCENSORED)'],
            categories: ['all', 'control']
        },
        {
            id: 'dostup_k_nastroikam',
            title: 'Доступ к настройкам',
            description: 'Если у Вас есть дети или устройством пользуются пожилые, которые вечно что-то путают и наживают куда попало, то этот плагин для Вас.',
            link: 'http://193.233.134.21/plugins/setprotect',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'sortirovka_glavnogo_menu',
            title: 'Сортировка главного меню',
            description: 'Позволяет скрыть или перемещать пункты главного меню. Работает только на сенсорных устройствах.',
            link: 'http://193.233.134.21/plugins/menusort',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'bind_knopok',
            title: 'Бинд кнопок',
            description: 'Позволяет использовать цветные кнопки на пульте вашего телевизора в карточке онлайн или торрентов.',
            link: 'https://apxubatop.github.io/lmpPlugs/tvbuttontst.js',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'akkaunt',
            title: 'Аккаунт',
            description: 'Позволяет синхронизировать свои данные между устройствами через телеграмм-бота, без участия CUB.',
            link: 'https://bylampa.github.io/account.js',
            link_hint: [],
            categories: ['all', 'control']
        },
        {
            id: 'infuse_save',
            title: 'Infuse save',
            description: 'Плагин для сохранения торрентов, через Torrserver в Infuse. Поставляется как есть, настроек нет. Вызывается долгим тапом в списке файлов.',
            link: 'https://lampame.github.io/main/infuseSave.js',
            link_hint: [],
            categories: ['all', 'control']
        },
        // ------------------------ Онлайн-просмотр ----------------------
        {
            id: 'online_mod',
            title: 'Online_Mod',
            description: 'Один из самых популярных плагинов для Lampa. Позволяет смотреть кино в реальном времени. Содержит балансеры: Lumex, HDrezka, Collaps (DASH), Filmix, FanCDN, FanSerials, RedHeadSound, CDNVideoHub, AniLibria, AniLibria.top, AnimeLib, Kodik',
            link: ['https://nb557.github.io/plugins/online_mod.js', 'http://nb557.surge.sh/online_mod.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'online_prestige',
            title: 'Онлайн Prestige',
            description: 'Плагин от разработчика приложения Lampa с новым интерфейсом для просмотра фильмов и сериалов в реальном времени. Требует авторизации на сайте: https://filmix.my/consoles',
            link: ['https://bwa.to/plugins/prestige.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'online_cinema',
            title: 'Онлайн Cinema',
            description: 'Ещё один плагин для просмотра онлайн. Источники: Cineteca, Louxor, Digiplex, Bijou, Urania, Alamo, Lucerna, Tivoli, Mirage, Aurora, Arena, International, Chef, Archipelago.',
            link: ['https://bylampa.github.io/cinema.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'bwajs',
            title: 'BwaJS',
            description: 'Довольно известный онлайн-плагин для Lampa. Источники: Rezka, JinxEM, Mirage, VideoCDN, HDVB, IRemux, Kinotochka, RHS, Filmix, VideoHUB.',
            link: ['https://bwa.to/o'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'online_bwa_cloud',
            title: 'Онлайн BWA Cloud',
            description: 'Данный плагин онлайн менее капризный для работы на старых устройствах, в отличии от Online BWA. Источники: VideoCDN, Filmix, JinxEM, Mirage, HDVB, IRemux, Kinotochka, Rezka, RHS, VideoHUB, Collaps, KinoPub.',
            link: ['http://bwa.to/cloud.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'bwarc',
            title: 'BwaRC',
            description: 'Ещё одна разновидность BWA. Плагин должен работать на самых старых устройствах. Источники: VideoCDN, Filmix, JinxEM, ManGO, Videoseed, Mirage, HDVB, IRemux, HDFilm, Kinotochka, RHS, VideoHUB, Collaps, Rezka.',
            link: ['http://bwa.to/co', 'http://bwa.to/rc'],
            link_hint: undefined,
            categories: ['all', 'online']
        },
        {
            id: 'showy',
            title: 'Showy',
            description: 'Плагин необходимо авторизировать через телеграмм-бота @showybot и подписаться на 2 канала. Источники: Filmix (RC), VideoCDN, Filmix, HDVB, Kinotochka, VideoDB, Redheadsound.',
            link: ['http://showwwy.com/m.js', 'http://showy.online/m.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'showy_bez_registratsii_1080p',
            title: 'Showy без регистрации 1080p',
            description: 'Новый БЕСПЛАТНЫЙ плагин для просмотра видео! ✔️Вы сможете насладиться видео в Full HD качестве.Разрешение 1080p будет доступно вам совершенно бесплатно, без каких-либо ограничений!',
            link: ['http://smotret24.ru/online.js', 'http://smotret24.com/online.js'],
            link_hint: [' - если РФ ближе', ' - если Нидерланды ближе'],
            categories: ['all', 'online']
        },
        {
            id: 'mods_platnyy',
            title: 'MODS’s (платный)',
            description: 'Плагин для тех, кто готов платить за онлайн просмотр. По всей видимости от разработчиков Lampa.',
            link: ['http://lampa.stream/modss'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'online_stream',
            title: 'Онлайн Stream',
            description: 'Очередной плагин для бесплатного онлайн-просмотра. Включает в себя источники: Filmix, IRemux, Collaps, FanCDN, Redheadsound, HDVB.',
            link: ['http://arkmv.ru/vod'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'videocdn',
            title: 'VideoCDN',
            description: 'Для онлайн просмотра плагин включает в себя только 2 источника (VideoCDN и Videoseed). Зато они полностью бесплатные и показывают в отличном качестве FullHD-1080p видео. Стоит внимания!',
            link: ['https://lampaplugins.github.io/store/vcdn.js', 'http://skaz.tv/vcdn.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        {
            id: 'onlyskaz_platnyy',
            title: 'Onlyskaz (платный)',
            description: 'Для работы плагина нужно авторизоваться в приложении Lampa, то есть добавить новое устройство по ссылке cub.red/add',
            link: ['http://skaz.tv/tv.js', 'http://skaz.tv/onlines.js'],
            link_hint: ['(ТВ+Онлайн 4к)', '(Онлайн 4к)'],
            categories: ['all', 'online']
        },
        {
            id: 'online_filmix',
            title: 'Онлайн Filmix',
            description: 'Чтобы использовать плагин для просмотра онлайн, нужно добавить устройство по адресу: https://filmix.my/consoles .Бесплатно до 2-х устройств и максимальное качество 1080р.',
            link: ['https://immisterio.github.io/bwa/fx.js'],
            link_hint: [],
            categories: ['all', 'online']
        },
        // ------------------------ Торрент-просмотр ----------------------
        {
            id: 'punkt_parser_v_menu',
            title: 'Пункт «Парсер» в меню',
            description: 'Плагин для смарт-телевизоров, на которых Lampa установлена через официальные магазины приложений, например LG Store или Tizen App Store. Добавляет пункт Парсер. Если есть эти пункты меню, устанавливать не нужно.',
            link: ['http://cub.red/plugin/etor'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'pereklyuchenie_parserov',
            title: 'Переключение парсеров',
            description: 'Парсер — это сервер, на котором установлена программа для сбора информации о расположении торрент-файлов. Данный плагин позволяет выбирать такие серверы и показывает их работоспособность. Для выбора парсера зайдите в Настройки (шестерёнка), затем выберите пункт Парсер и Выбрать парсер.',
            link: ['https://bylampa.github.io/jackett.js', 'https://lampame.github.io/main/pubtorr.js'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'tracks',
            title: 'Tracks',
            description: 'Плагин позволяет выбрать Аудиодорожку и Субтитры, если в скачиваемом видеофайле их несколько. Работает только в торрентах.',
            link: ['http://cub.red/plugin/tracks'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'poisk_lokalnogo_torrservera',
            title: 'Поиск Локального TorrServera',
            description: 'Для тех, кто устанавливает TorrServer на другое устройство в локальной сети и не знает какой адрес вводить. Плагин произведёт поиск и правильно заполнит строчку адреса.',
            link: ['http://193.233.134.21/plugins/checker.js'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'zakachka_torrentov',
            title: 'Закачка Торрентов',
            description: 'Плагин добавляет подключение торрент-клиентов. Таких как qBittornet и Transmission, с последующей возможностью загрузки торрента через него для локального просмотра.',
            link: ['https://lampame.github.io/main/torrentmanager/torrentmanager.js'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'vtoraya_knopka_torrenty',
            title: 'Вторая Кнопка Торренты',
            description: 'Добавляет вторую кнопку Торренты … Если в первой будет парсер по умолчанию, то во второй можно выбирать парсер.',
            link: ['https://github.freebie.tom.ru/torrents.js'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'free_torrserver',
            title: 'Free Torrserver',
            description: 'Если на Ваше устройство нет возможности установить Torrserver или в нём мало оперативной памяти. Также невозможно установить Torrserver на устройство в локальной сети. Тогда этот плагин будет очень полезен.',
            link: ['https://bylampa.github.io/freetorr.js'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        {
            id: 'vizualizatsiya_zagruzki_ts',
            title: 'Визуализация Загрузки TS',
            description: 'Плагин показывает визуальную загрузку перед запуском видео с торрентов.',
            link: ['https://plugin.rootu.top/ts-preload.js'],
            link_hint: [],
            categories: ['all', 'torrent']
        },
        // ---------------------------- TV --------------------------------
        {
            id: 'dizel_tv',
            title: 'Дизель ТВ',
            description: 'После установки в левом меню появляется пункт Дизель ТВ. Плагин для бесплатного просмотра телеканалов и коммерческих плейлистов с телепрограммой и записью архива.',
            link: ['https://andreyurl54.github.io/diesel5/diesel.js'],
            link_hint: [],
            categories: ['all', 'tv']
        },
        {
            id: 'kulik_tv',
            title: 'Кулик TV',
            description: 'Плагин начинает работать только через активацию Telegram-бота @kuliktv_bot. В нём вы можете выбрать сервер вещания (Россия, Германия, Австрия) и стиль. Более того Вы должны быть авторизованы на официальном сервере Lampa: https://cub.red/add',
            link: ['http://cdn.kulik.uz/cors', 'http://tv.kulik.top'],
            link_hint: [],
            categories: ['all', 'tv']
        },
        {
            id: 'iptv',
            title: 'IPTV',
            description: 'Плагин для просмотра IPTV-каналов. Сортировка каналов по группам и возможность добавлять каналы в Избранное. Своих каналов нет. Необходимо добавлять собственные плейлисты в меню или на сайте https://cub.red/iptv/',
            link: ['http://cub.red/plugin/iptv'],
            link_hint: [],
            categories: ['all', 'tv']
        },
        {
            id: 'hack_tv',
            title: 'Hack TV',
            description: 'Плагин для просмотра IPTV-каналов. Каналы второго эшелона, зачастую в плохом качестве. Но, для бесплатного просмотра пойдёт.',
            link: ['https://bylampa.github.io/tv.js'],
            link_hint: [],
            categories: ['all', 'tv']
        },
        // ----------------------------RADIO--------------------------------
        {
            id: 'radio_record',
            title: 'Радио Record',
            description: 'После установки плагина перезагрузите Lampa. В левом меню появится пункт Радиостанция. Подборка включает в себя более 100 популярных радио.',
            link: ['http://cub.red/plugin/radio'],
            link_hint: [],
            categories: ['all', 'radio']
        },
        {
            id: 'radio_record_mod',
            title: 'Радио Record Mod',
            description: 'Плагин предлагает другую подборку популярных радиостанций и в другом стиле. Количество названий более 100.',
            link: ['https://lampame.github.io/main/rradio.js'],
            link_hint: ['(Lampa от разработчиков)'],
            categories: ['all', 'radio']
        },
        {
            id: 'radio_somafm',
            title: 'Радио SomaFM',
            description: 'Этот плагин подойдёт любителям андеграунда и альтернативной музыки. Насчитывает более 40 уникальных радиостанций со всего мира. Без рекламы.',
            link: ['https://tsynik.github.io/lampa/soma.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'radio']
        },
        {
            id: 'radio_record_mod_plagina',
            title: 'Радио Record (мод плагина)',
            description: 'Радио Рекорд (мод плагина от @Tw1cker).',
            link: ['https://lampaplugins.github.io/store/record.js'],
            link_hint: ['(Lampa от разработчиков)'],
            categories: ['all', 'radio']
        },
        // ------------------------ Клубничка ----------------------
        {
            id: 'klubnichka',
            title: 'Клубничка',
            description: 'После установки плагина в левом меню появляется пункт Клубничка. Можно просматривать контент с ресурсов Pornhub, Xvideos, Xhamster, Ebalovo, Hqporner, Spankbang, Eporner, Porntrex, Xnxx, Chaturbate.',
            link: ['https://bwa.to/s'],
            link_hint: ['(Lampa от разработчиков)'],
            categories: ['all', 'strawberry']
        },
        {
            id: 'klubnichka_bwa_cloud',
            title: 'Клубничка (Bwa Cloud)',
            description: 'Если у Вас не заработал предыдущий плагин, то попробуйте этот. Он практические не чем не отличается, только работает на старых устройствах.',
            link: ['http://bwa-cloud.cfhttp.top/sisi.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'strawberry']
        },
        {
            id: 'klubnichka_durex',
            title: 'Клубничка Durex',
            description: 'Очередная версия клубники, различия минимальны.',
            link: ['http://durex.monster/sisi.js'],
            link_hint: ['(для любой Lampa)'],
            categories: ['all', 'strawberry']
        },
    ]
};