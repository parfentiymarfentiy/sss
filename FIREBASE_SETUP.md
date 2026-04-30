# 🔥 Инструкция подключения Firebase (5 минут)

## Шаг 1 — Создать проект Firebase

1. Зайди на https://console.firebase.google.com
2. Нажми **"Add project"** (Создать проект)
3. Название: **sportex** → Continue
4. Google Analytics — можно отключить → **Create project**
5. Жди ~30 секунд пока создастся

---

## Шаг 2 — Создать базу данных Firestore

1. В левом меню: **Build → Firestore Database**
2. Нажми **"Create database"**
3. Выбери **"Start in test mode"** → Next
4. Выбери регион: **europe-west3 (Frankfurt)** → **Enable**
5. База создана ✅

---

## Шаг 3 — Получить конфиг для сайта

1. Вверху страницы нажми на **шестерёнку ⚙** → **Project settings**
2. Прокрути вниз до раздела **"Your apps"**
3. Нажми иконку **</>** (Web)
4. Название приложения: **sportex-web** → **Register app**
5. Скопируй блок `firebaseConfig` — он выглядит так:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "sportex-12345.firebaseapp.com",
  projectId: "sportex-12345",
  storageBucket: "sportex-12345.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

## Шаг 4 — Вставить конфиг в сайт

1. Открой файл **index.html** в любом редакторе (VS Code, Notepad++)
2. Найди строку (Ctrl+F): `ВСТАВЬ_СЮДА`
3. Замени все значения своими данными из шага 3:

```javascript
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",        // ← твоё значение
  authDomain:        "sportex-12345.firebaseapp.com",
  projectId:         "sportex-12345",
  storageBucket:     "sportex-12345.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef"
};
```

4. Сохрани файл

---

## Шаг 5 — Загрузить на хостинг

Загрузи все файлы сайта на хостинг. При первом открытии сайта:
- Товары из **products.json** автоматически загрузятся в Firebase
- Все последующие изменения через админку → сразу в Firebase → видят все посетители

---

## ✅ Как проверить что всё работает

1. Открой сайт в браузере
2. Открой консоль (F12) — должно быть: `✅ Firebase подключён`
3. Зайди в админку (⚙ кнопка в футере, пароль: `sportex2024`)
4. Добавь тестовый товар → открой сайт в другом браузере → товар виден сразу!

---

## 🔒 Безопасность (для продакшена)

После запуска сайта зайди в Firebase Console → Firestore → Rules и замени правила:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Товары — читать всем, писать никому (только через Admin SDK)
    match /products/{doc} {
      allow read: if true;
      allow write: if false; // ← потом настроишь авторизацию
    }
    // Заказы — создавать всем, читать никому
    match /orders/{doc} {
      allow create: if true;
      allow read, write: if false;
    }
  }
}
```

Пока сайт в разработке — оставь **test mode** (позволяет всё).
