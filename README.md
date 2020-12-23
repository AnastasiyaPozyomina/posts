<h2>React Redux</h2>
   <p>  &#10004; Создание приложения с нуля </p>
   <p>  &#10004; Работа с формами</p>
   <p>  &#10004; Загрузка данных с сервера</p>
   <p>  &#10004; Работа с DevTools</p>
   <p>  &#10004; Работа с Redux Store</p>


 React  
   <ul>
<li> yarn install create-react-app </li>
<li> подключение bootstrap </li>
<li> создаем компонент PostForm на классе </li>
<li> создаем компоненты Posts, Post, FetchedPosts  на функциях </li>
<li> передаём параметр в компонент-функцию </li>
<li> проверка на передачу пустого массива в компонент</li>
<li> event.preventDefault в форме (для отмены действия в браузере </li>
<li> добавляем динамики в форму </li>
<li> универсальный обработчик для всех input в форме (changeInputHandler в PostForm.js) </li>
<li> setState с ф-цией работающая с предыдущим состоянием </li>
<li> динамически определяем по какому ключу в state необходиму поменять значение </li>
<li> используем предыдущее состояние state </li>
<li> event.persist() </li>
<li> формируем новый объект поста </li>
<li>  очищаем поле input после submit </li>
<li>  взаимодействие между компонентами формы и постов </li>

Redux
<li> установка redux </li>
<li> подключение redux к проекту </li>
<li> создаём store (createStore()) </li>
<li> rootReducer </li>
<li> combineReducers() </li>
<li> создание reducer </li>
<li>initialState</li>
<li>Provider (связываем react и redux)</li>
<li>redux devtools extension</li>
<li>compose()</li>
<li>функционал добавления синхронного поста</li>
<li>функция высокого порядка - connect() и умный компонент-функция</li>
<li>mapStateToProps:преобразовываем необходимые поля state в нужные props для компонента</li>
<li>создаем логику изменения состояния в reducer</li>
<li>types для actions</li>
<li>action creator</li>
<li>dispatch action в компоненте</li>
<li>connect() и компонент-класс</li>
<li>mapDispatchToProps</li>
<li>асинхронные посты:redux-thunk (доп. пакет для работы с асинхронностью) является middleware</li>
<li>applyMiddleware</li>
<li>работа со множеством reducer'ов</li>
<li>Pure Functions (Чистые функции)</li>
<li>action с асинхронным кодом</li>
<li>связь функционального компонента со стором через хуки</li>
<li>useDispatch()</li>
<li>useSelector()</li>
<li>индикация лоадинга, reducer для разных нужд приложения</li>
<li>добавляем лоадинг в компонет</li>
<li>отдельный компонент лоадинг</li>
<li>action для отображения/скрытия лоадера</li>
<li>имитация задержки ответа сервера (setTimeout)</li>
<li>создаём сообщения с warning</li>
<li>состояние для warning в state</li>
<li>types (типы) для warning</li>
<li>обрабатываем types в reducer</li>
<li>action для warning</li>
<li>обработка ошибок с сервера try...catch</li>
<li>фильтруем слова при вводе заголовка поста</li>
   </ul