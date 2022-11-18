# Hearthstone card search

---

![logo](src/assets/images/logo.png)

## Требования к функциональности:

### 1 уровень:

#### React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты.
- Есть рендеринг списков [CardsInfo](./src/components/CardsInfo/CardsInfo.tsx), [MainPage](./src/pages/Main/MainPage.tsx), [History](./src/pages/History/HistoryPage.tsx)
- Реализована хотя бы одна форма [Form](./src//components/Form/Form.tsx)
- Есть применение Контекст API [ThemeProvider](./src/services/ThemeProvider.tsx)
- Есть применение предохранителя - библиотека react-error-boundary + [ErrorPage](.src/../src/pages/Error/ErrorPage.tsx)
- Есть хотя бы один кастомный хук [useAuth](.src/../src/hooks/useAuth.ts), [useDebounce](./src/hooks/debounce.ts)
- Хотя бы несколько компонентов используют PropTypes [CardItem](.src/../src/components/Card/CardItem.tsx) [SingleCard](./src/pages/SingleCard/SingleCardPage.tsx)
- Поиск не должен триггерить много запросов к серверу [MainPage](./src/pages/Main/MainPage.tsx)
- Есть применение lazy + Suspense [App](.src/../src/App.tsx), [MainPage](./src/pages/Main/MainPage.tsx), [Header](.src/../src/components/Header/Header.tsx)

#### Redux

- Используем Modern Redux with Redux Toolkit [Store](src./../src/redux/store.ts)
- Используем слайсы [authSlice](./src/redux/slices/authSlice.ts), [favouriteSlice](./src/redux/slices/favouriteSlice.ts), [historySlice](./src/redux/slices/historySlice.ts),[userSlice](./src/redux/slices/userSlice.ts)
- Есть хотя бы одна кастомная мидлвара [Logger](./src/redux/LoggerMiddleware.ts)
- Используется RTK Query [cardsApi](./src/redux/cardsApi.ts)
- Используется Transforming Responses [cardsApi](./src/redux/cardsApi.ts)

### 2 уровень:

- Typescript
