const faqData = [
    {
      section: "Установка и настройка Lampa",
      items: [
        {
          id: "install-lampa-on-tv",
          question: "Как установить Lampa на телевизор (Samsung, LG, Haier, Яндекс ТВ и др.)?",
          answer: `
            <p><strong>Ответ:</strong> Lampa устанавливается через магазин приложений или APK-файл. Для корректной работы избегайте установки через Media Station X (MSX).</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Скачайте APK с официального сайта: <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>.</li>
              <li>Для телевизоров Samsung: найдите Lampa в Samsung Apps (раздел «Образование»).</li>
              <li>Для WebOS, VIDAA, Яндекс ТВ: следуйте инструкции <a href="https://telegra.ph/USTANOVKA-i-zapusk-na-Lg-Samsung-Hisense-Vidaa-MCX-01-02" target="_blank">telegra.ph/USTANOVKA</a>.</li>
              <li>Убедитесь, что установка выполнена не через MSX.</li>
            </ol>
          `
        },
        {
          id: "setup-lampa-from-scratch",
          question: "Как настроить Lampa с нуля?",
          answer: `
            <p><strong>Ответ:</strong> Настройка Lampa требует установки приложения, добавления плагинов и настройки синхронизации.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Установите Lampa как самостоятельное приложение (APK) с <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>.</li>
              <li>Добавьте актуальные плагины из закреплённого сообщения: <a href="https://t.me/lampa_plugins/393018" target="_blank">t.me/lampa_plugins</a>.</li>
              <li>Настройте парсер, например, <a href="http://jacred.xyz" target="_blank">jacred.xyz</a>.</li>
              <li>Используйте <a href="http://cub.rip" target="_blank">cub.rip</a> для синхронизации настроек.</li>
              <li>Следуйте подробной инструкции: <a href="https://telegra.ph/Nastraivaem-Lampu-s-nulya-06-13" target="_blank">telegra.ph/Nastraivaem-Lampu</a>.</li>
            </ol>
          `
        },
        {
          id: "lampa-wifi-issue",
          question: "Почему Lampa не работает через домашний Wi-Fi, но работает через мобильный интернет?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с блокировкой провайдером.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Установите плагин TMDB-прокси: <a href="http://skaz.tv/t.js" target="_blank">skaz.tv/t.js</a>.</li>
              <li>Смените DNS на 1.1.1.1 (инструкция: <a href="https://1.1.1.1/dns/" target="_blank">1.1.1.1/dns</a>).</li>
              <li>Или используйте VPN-сервис.</li>
            </ol>
          `
        },
        {
          id: "lampa-settings-reset",
          question: "Почему настройки Lampa сбрасываются?",
          answer: `
            <p><strong>Ответ:</strong> Сброс настроек происходит из-за очистки кэша или сброса данных приложения.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Настройте Lampa заново по инструкции: <a href="https://telegra.ph/Nastraivaem-Lampu-s-nulya-06-13" target="_blank">telegra.ph/Nastraivaem-Lampu</a>.</li>
              <li>Используйте <a href="http://cub.rip" target="_blank">cub.rip</a> для создания резервной копии настроек.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с загрузкой контента и отображением",
      items: [
        {
          id: "empty-list-issue",
          question: "Почему Lampa показывает 'пустой список' при нажатии на карточку фильма или при поиске?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с устаревшими плагинами, установкой через MSX или блокировкой TMDB.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Установите Lampa как отдельное приложение (APK) с <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>, а не через MSX.</li>
              <li>Удалите все плагины TMDB Proxy в меню <em>Настройки → Расширения</em>.</li>
              <li>Добавьте актуальный плагин, например: <a href="http://skaz.tv/t.js" target="_blank">skaz.tv/t.js</a> или <a href="https://plugin.rootu.top/tmdb.js" target="_blank">plugin.rootu.top/tmdb.js</a>.</li>
              <li>Проверьте настройки TMDB: <em>Настройки → Остальное → Основной источник → TMDB</em>.</li>
              <li>Используйте VPN или смените DNS на 1.1.1.1 (<a href="https://1.1.1.1/dns/" target="_blank">инструкция</a>).</li>
            </ol>
          `
        },
        {
          id: "posters-not-loading",
          question: "Почему постеры фильмов не отображаются или серые?",
          answer: `
            <p><strong>Ответ:</strong> Проблема вызвана блокировкой TMDB или Cloudflare провайдером.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Настройте TMDB Proxy: <em>Настройки → Расширения → TMDB Proxy</em>, добавьте <a href="http://skaz.tv/t.js" target="_blank">skaz.tv/t.js</a> или <a href="https://plugin.rootu.top/tmdb.js" target="_blank">plugin.rootu.top/tmdb.js</a>.</li>
              <li>Смените источник на FILMIX или отключите TMDB Proxy.</li>
              <li>Проверьте интернет-соединение, используйте VPN или DNS 1.1.1.1 (<a href="https://1.1.1.1/dns/" target="_blank">инструкция</a>).</li>
            </ol>
          `
        },
        {
          id: "lampa-slow-loading",
          question: "Почему Lampa долго грузится или показывает вечную загрузку?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с блокировкой провайдером, устаревшими плагинами или неправильной настройкой.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Смените DNS на 1.1.1.1 (<a href="https://1.1.1.1/dns/" target="_blank">инструкция</a>) или используйте VPN.</li>
              <li>Переустановите Lampa с <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>.</li>
              <li>Удалите лишние плагины и добавьте актуальные из <a href="https://t.me/lampa_plugins/393018" target="_blank">t.me/lampa_plugins</a>.</li>
              <li>Проверьте адрес сервера: <a href="http://lampa.mx" target="_blank">lampa.mx</a> или <a href="http://lampa.byskaz.ru" target="_blank">lampa.byskaz.ru</a>.</li>
            </ol>
          `
        },
        {
          id: "lampa-old-address",
          question: "Почему Lampa возвращается к старому адресу (bayskaz)?",
          answer: `
            <p><strong>Ответ:</strong> Проблема в использовании неофициальных адресов.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Установите официальный адрес: <a href="http://lampa.mx" target="_blank">lampa.mx</a>.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с воспроизведением видео",
      items: [
        {
          id: "video-not-playing",
          question: "Почему видео не воспроизводится, показывает 'видео не найдено' или 'не удалось декодировать'?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с устаревшими плагинами, несовместимостью плеера или блокировкой.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Установите внешний плеер: Vimu, Just или VLC.</li>
              <li>Обновите плагины из <a href="https://t.me/lampa_plugins/393018" target="_blank">t.me/lampa_plugins</a>.</li>
              <li>Переустановите Lampa без MSX с <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>.</li>
              <li>Проверьте интернет и DNS (1.1.1.1, <a href="https://1.1.1.1/dns/" target="_blank">инструкция</a>).</li>
            </ol>
          `
        },
        {
          id: "english-only-playback",
          question: "Почему фильмы воспроизводятся только на английском?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с плагинами или настройками.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Очистите кэш Lampa и перезапустите приложение.</li>
              <li>Установите плагины с русскими дорожками: BwaRC (<a href="http://bwa.to/rc" target="_blank">bwa.to/rc</a>), Онлайн Мод (<a href="https://nb557.github.io/plugins/online_mod.js" target="_blank">nb557.github.io/plugins</a>).</li>
              <li>Смените плеер на Vimu или Just.</li>
              <li>Убедитесь, что Lampa установлена без MSX.</li>
            </ol>
          `
        },
        {
          id: "4k-video-issues",
          question: "Почему видео в 4K не воспроизводится или показывает зелёный экран?",
          answer: `
            <p><strong>Ответ:</strong> Проблема вызвана слабым устройством, плеером или низкой скоростью интернета.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте внешний плеер: Vimu, Just или VLC.</li>
              <li>Настройте TorrServer для торрентов: <a href="https://telegra.ph/Ustanovka-Servera-na-vneshnee-ustrojstvo-01-24" target="_blank">telegra.ph/Ustanovka-Servera</a>.</li>
              <li>Проверьте скорость интернета (рекомендуется 80 Мб/с+ для 4K).</li>
              <li>Перезагрузите устройство.</li>
            </ol>
          `
        },
        {
          id: "torrent-loading-issues",
          question: "Почему торренты зависают или долго грузятся?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с платформой, слабой раздачей или настройками TorrServer.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Настройте TorrServer на внешнем устройстве или VPS.</li>
              <li>Проверьте количество сидов в веб-интерфейсе TorrServer.</li>
              <li>Для платформы VIDAA используйте Android TV-бокс.</li>
            </ol>
          `
        },
        {
          id: "ad-freeze-issue",
          question: "Почему Lampa зависает на рекламе или показывает белый экран?",
          answer: `
            <p><strong>Ответ:</strong> Проблема вызвана рекламой или плагинами.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Подпишитесь на премиум-версию плагина.</li>
              <li>Используйте внешний плеер: Vimu или Just.</li>
              <li>Переключитесь на другой плагин из <a href="https://t.me/lampa_plugins/393018" target="_blank">t.me/lampa_plugins</a>.</li>
              <li>Перезагрузите устройство.</li>
            </ol>
          `
        },
        {
          id: "trailers-only",
          question: "Почему Lampa воспроизводит только трейлеры?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с настройками или плагинами.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Настройте Lampa по инструкции: <a href="https://telegra.ph/Nastraivaem-Lampu-s-nulya-06-13" target="_blank">telegra.ph/Nastraivaem-Lampu</a>.</li>
              <li>Установите актуальные плагины из <a href="https://t.me/lampa_plugins/393018" target="_blank">t.me/lampa_plugins</a>.</li>
            </ol>
          `
        },
        {
          id: "audiocontext-error",
          question: "Почему возникает ошибка 'AudioContext ERROR line 7642'?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с плеером или плагином.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Смените плеер на Vimu, Just или VLC.</li>
              <li>Переустановите Lampa и проверьте плагины.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с плагинами",
      items: [
        {
          id: "plugins-not-working",
          question: "Почему плагины не работают, выдают ошибки (404, 'видео не найдено', 'источник не отвечает')?",
          answer: `
            <p><strong>Ответ:</strong> Проблема вызвана устаревшими или несовместимыми плагинами.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Удалите неработающие плагины в <em>Настройки → Расширения</em>.</li>
              <li>Установите актуальные плагины: BwaRC (<a href="http://bwa.to/rc" target="_blank">bwa.to/rc</a>), Онлайн Мод (<a href="https://nb557.github.io/plugins/online_mod.js" target="_blank">nb557.github.io/plugins</a>).</li>
              <li>Проверьте интернет и DNS (1.1.1.1, <a href="https://1.1.1.1/dns/" target="_blank">инструкция</a>).</li>
              <li>Переустановите Lampa без MSX с <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>.</li>
            </ol>
          `
        },
        {
          id: "find-plugins",
          question: "Где найти актуальные плагины?",
          answer: `
            <p><strong>Ответ:</strong> Актуальные плагины доступны в закреплённых сообщениях Telegram-канала.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Перейдите по ссылке: <a href="https://t.me/lampa_plugins/200270" target="_blank">t.me/lampa_plugins</a>.</li>
              <li>Примеры плагинов:
                <ul>
                  <li>Онлайн Stream: <a href="http://arkmv.ru/vod" target="_blank">arkmv.ru/vod</a></li>
                  <li>BwaRC: <a href="http://bwa.to/rc" target="_blank">bwa.to/rc</a></li>
                  <li>Онлисказ 4K: <a href="http://skaz.tv/onlines.js" target="_blank">skaz.tv/onlines.js</a></li>
                </ul>
              </li>
            </ol>
          `
        },
        {
          id: "showy-plugin-error",
          question: "Почему плагин Showy не работает или вызывает ошибки?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с настройками или демо-подпиской.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Удалите плагин Showy в <em>Настройки → Расширения</em>.</li>
              <li>Перезагрузите устройство.</li>
              <li>Обратитесь в чат поддержки Showy.</li>
              <li>Переустановите Lampa без MSX с <a href="https://github.com/lampa-app/LAMPA/releases/" target="_blank">github.com/lampa-app/LAMPA/releases</a>.</li>
            </ol>
          `
        },
        {
          id: "ratings-plugin-missing",
          question: "Почему плагин с оценками ('палец вверх/блевота') пропал?",
          answer: `
            <p><strong>Ответ:</strong> Функция оценок встроена в Lampa или зависит от плагина.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Проверьте настройки интерфейса Lampa.</li>
              <li>Обновите Lampa до последней версии.</li>
              <li>Проверьте закреплённые сообщения для аналогов: <a href="https://t.me/lampa_plugins/200270" target="_blank">t.me/lampa_plugins</a>.</li>
            </ol>
          `
        },
        {
          id: "rezka-comments-issue",
          question: "Почему комментарии с Rezka не отображаются?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с блокировкой прокси.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Удалите плагин или настройте новый прокси из <a href="https://t.me/lampa_plugins/393018" target="_blank">t.me/lampa_plugins</a>.</li>
              <li>Используйте комментарии от Lampa.</li>
            </ol>
          `
        },
        {
          id: "bwarc-plugin-unstable",
          question: "Почему плагин BwaRC то появляется, то исчезает?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с настройками сети или версией Lampa.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Убедитесь, что плагин BwaRC (<a href="http://bwa.to/rc" target="_blank">bwa.to/rc</a>) установлен.</li>
              <li>Проверьте интернет-соединение и настройки сети.</li>
              <li>Обновите Lampa до последней версии.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы со звуком",
      items: [
        {
          id: "no-sound-issue",
          question: "Почему нет звука или он пропадает при воспроизведении?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с кодеками, плеером или установкой через MSX.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Установите внешний плеер: VLC, Vimu или Just.</li>
              <li>Проверьте настройки звука в плеере.</li>
              <li>Убедитесь, что Lampa установлена без MSX.</li>
            </ol>
          `
        },
        {
          id: "sound-volume-issue",
          question: "Почему звук стал тихим или скачет (громко/тихо)?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с плеером или источником контента.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Проверьте настройки громкости в плеере (Vimu, VLC).</li>
              <li>Смените плеер или источник контента.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с торрентами и TorrServer",
      items: [
        {
          id: "setup-torrserver",
          question: "Как настроить TorrServer в Lampa?",
          answer: `
            <p><strong>Ответ:</strong> Настройка TorrServer требует указания правильного адреса и плагина.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Укажите адрес 127.0.0.1 для локального TorrServer.</li>
              <li>Используйте плагин <a href="http://cub.red/plugin/etor" target="_blank">cub.red/plugin/etor</a>.</li>
              <li>Настройте внешний сервер или VPS (например, Tsarea).</li>
              <li>Отключите встроенный клиент TorrServer в настройках.</li>
            </ol>
          `
        },
        {
          id: "torrent-download-issues",
          question: "Почему торренты не загружаются или выдают ошибки?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с настройками TorrServer или блокировкой P2P.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Проверьте, активен ли TorrServer, и введите правильный IP.</li>
              <li>Следуйте инструкции: <a href="https://telegra.ph/Ustanovka-Servera-na-vneshnee-ustrojstvo-01-24" target="_blank">telegra.ph/Ustanovka-Servera</a>.</li>
              <li>Отключите встроенный клиент TorrServer.</li>
              <li>Используйте VPN при блокировке P2P.</li>
            </ol>
          `
        },
        {
          id: "torrent-visualization-issue",
          question: "Почему плагин визуализации загрузки торрентов не работает?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с настройками или провайдером.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте внешний клиент TorrServer Matrix и плеер (Vimu, Just).</li>
              <li>Отключите встроенный клиент TorrServer.</li>
              <li>Проверьте веб-интерфейс TorrServer.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с интерфейсом и функционалом",
      items: [
        {
          id: "google-tv-widget",
          question: "Как настроить виджет Lampa на главном экране Google TV?",
          answer: `
            <p><strong>Ответ:</strong> Для настройки виджета требуется сторонний лаунчер.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте Projectivy Launcher для настройки главного экрана.</li>
              <li>Проверьте настройки виджета в Lampa.</li>
            </ol>
          `
        },
        {
          id: "clear-history",
          question: "Как удалить выборочно просмотренный контент из истории?",
          answer: `
            <p><strong>Ответ:</strong> Lampa позволяет выборочно удалять элементы из истории.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Зайдите в раздел истории.</li>
              <li>Выполните долгий тап на карточке контента.</li>
              <li>Выберите «Очистить».</li>
            </ol>
          `
        },
        {
          id: "restore-sorting",
          question: "Как восстановить сортировку по новинкам в фильтрах?",
          answer: `
            <p><strong>Ответ:</strong> Сортировка настраивается в настройках фильтров.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Проверьте настройки: <em>Настройки → Фильтры → Сортировка</em>.</li>
              <li>Добавьте плагин из закрепа через <a href="http://cub.rip" target="_blank">cub.rip</a>.</li>
            </ol>
          `
        },
        {
          id: "num-start-page",
          question: "Можно ли сделать NUM стартовой страницей?",
          answer: `
            <p><strong>Ответ:</strong> В Lampa такой функции нет, но она доступна в Lampac.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Рассмотрите использование Lampac для этой функции.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с субтитрами и языковыми дорожками",
      items: [
        {
          id: "subtitles-not-working",
          question: "Почему субтитры, особенно принудительные, не работают?",
          answer: `
            <p><strong>Ответ:</strong> П問題 связана с контентом или плеером.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Убедитесь, что субтитры встроены в контент.</li>
              <li>Используйте внешний плеер: VLC или MX Player.</li>
              <li>Проверьте настройки субтитров в Lampa.</li>
            </ol>
          `
        },
        {
          id: "language-track-issue",
          question: "Почему смена языка дорожки (русский/английский) не работает на TorrServer?",
          answer: `
            <p><strong>Ответ:</strong> Проблема связана с настройками плеера или TorrServer.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Проверьте настройки плеера (Vimu, Just).</li>
              <li>Обратитесь в чат <a href="https://t.me/TorrServe" target="_blank">@TorrServe</a>.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Проблемы с рекламой",
      items: [
        {
          id: "remove-ads",
          question: "Как устранить рекламу (например, 1xBet) внутри фильмов?",
          answer: `
            <p><strong>Ответ:</strong> Реклама встроена в пиратский контент.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте лицензионные сервисы: Filmix, Showy.</li>
              <li>Подпишитесь на CUB Premium.</li>
              <li>Выбирайте торренты с проверенными источниками.</li>
            </ol>
          `
        }
      ]
    },
    {
      section: "Прочее",
      items: [
        {
          id: "copy-plugins",
          question: "Как скопировать плагины с одного устройства на другое?",
          answer: `
            <p><strong>Ответ:</strong> Плагины можно перенести через синхронизацию или бэкап.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте синхронизацию через <a href="http://cub.rip" target="_blank">cub.rip</a>.</li>
              <li>Или сделайте резервную копию настроек.</li>
            </ol>
          `
        },
        {
          id: "download-movie",
          question: "Как скачать фильм в Lampa для оффлайн-просмотра?",
          answer: `
            <p><strong>Ответ:</strong> Lampa не поддерживает скачивание фильмов.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте TorrServer для загрузки торрентов.</li>
            </ol>
          `
        },
        {
          id: "ukrainian-channels",
          question: "Как настроить просмотр украинских телеканалов?",
          answer: `
            <p><strong>Ответ:</strong> Для просмотра украинских каналов нужны специальные плагины.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте плагины из чата <a href="https://t.me/lampaiptv/30886" target="_blank">@lampaiptv</a>.</li>
            </ol>
          `
        },
        {
          id: "imdb-rating-plugin",
          question: "Есть ли плагин для сортировки по рейтингу IMDb?",
          answer: `
            <p><strong>Ответ:</strong> Прямого плагина для сортировки по IMDb нет.</p>
            <p><strong>Решение:</strong></p>
            <ol>
              <li>Используйте встроенные фильтры Lampa.</li>
              <li>Проверьте закреплённые сообщения для аналогов: <a href="https://t.me/lampa_plugins/200270" target="_blank">t.me/lampa_plugins</a>.</li>
            </ol>
          `
        }
      ]
    }
  ];