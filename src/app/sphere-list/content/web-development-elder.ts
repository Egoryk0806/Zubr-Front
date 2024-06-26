import { Sphere } from '../interface/sphere'
import beDictionary from '../../../assets/i18n/be.json'
import ruDictionary from '../../../assets/i18n/ru.json'
import enDictionary from '../../../assets/i18n/en.json'

export class WEB_DEVELOPMENT_ELDER {
  private static nameSphere: string = 'web-development-elder'

  private static viewNameRU: string =
    ruDictionary.SPHERE['web-devolopment-elder'].viewName
  private static viewNameBE: string =
    beDictionary.SPHERE['web-devolopment-elder'].viewName
  private static viewNameEN: string =
    enDictionary.SPHERE['web-devolopment-elder'].viewName

  private static descriptionRU: string =
    ruDictionary.SPHERE['web-devolopment-elder'].description
  private static descriptionBE: string =
    beDictionary.SPHERE['web-devolopment-elder'].description
  private static descriptionEN: string =
    enDictionary.SPHERE['web-devolopment-elder'].description

  private static contentRU: string = `
      <ol>
          <li>ОБЩИЕ ПОЛОЖЕНИЯ</li>
      </ol>
      <p>Работа с веб-технологиями &ndash; это ключевой навык в мире, который все чаще ставит Интернет в центр
          современной
          цифровой платформы. Это также один из самых сложных и разнообразных навыков. Сильные дизайнерские и
          коммуникативные
          навыки в сочетании с пониманием целевой аудитории, рынков и тенденций &ndash; все это очень важно. В процессе
          разработки веб-дизайнеры и разработчики создают базы данных, создают программы, а также тестируют и отлаживают
          веб-сайты.</p>
      <ol start="2">
          <li>О СОРЕВНОВАНИИ</li>
      </ol>
      <p>В течение конкурса участники разрабатывают сайт с дизайном, соответствующим принципу единообразия в структуре страницы: единый размер элементов, одинаковая высота навигационных кнопок, одинаковое оформление заголовков, подзаголовков и основного текста, одинаковое оформление ссылок и изображений для всех страниц сайта. Ставится задача сверстать САЙТА.</p>
      <p>Советы не являются частью задания. Следуйте советам только в той мере, в которой они могут вам помочь.</p>
      <p>Верстка сайта может производится ТОЛЬКО в редакторе кода.</p>
      <p><strong>При выполнении конкурсного задания использование интернет-ресурсов запрещено. Нельзя использовать
              внешние
              библиотеки.</strong></p>
      <p>Вводные данные: предоставляются готовые скриншоты, показывающие как страницы выглядят при ширинах экрана 1920, 768 и 360px Контрольная точка различий между узким и широким экраном составляет 800px.</p>
      <p>Предоставляются файлы шрифтов и изображений страниц. Выходные данные: файлы index.html, p1.html, p2.html,
          p3.html,
          style.css, а также набор других необходимых для корректного отображения страницы в браузерах файлов.</p>
      <ol start="3">
          <li>ТРЕБОВАНИЯ К УЧАСТНИКУ</li>
      </ol>
      <p>Участник привозит самостоятельно:</p>
      <ul>
          <li>компьютер (ноутбук) с программным обеспечением, необходимым для выполнения конкурсного задания – 1 шт.</li>
          <li>USB-флеш-накопитель (емкостью не менее 4 ГБ) – 1 шт.</li>
          <li>сетевой фильтр (удлинитель) 5 м – 1 шт.</li>
      </ul>
      <ol start="4">
          <li>ТРЕБОВАНИЯ К ВЁРСТКЕ</li>
      </ol>
      <p>4.1. вёрстка валидная. Для проверки валидности верстки используйте сервис <a
              href="https://validator.w3.org">https://validator.w3.org</a></p>
      <p>4.2. вёрстка семантическая</p>
      <p>4.3. при написании кода рекомендуется следовать гайдлайну <a
              href="https://codeguide.academy/html-css.html">https://codeguide.academy/html-css.html</a></p>
      <p>4.4. контент размещается в блоке, который горизонтально центрируется на странице</p>
      <p>4.5. страница сайта должна корректно отображаться в браузере Google Chrom, Firefox и Яндекс последней версии
      </p>
      <p>4.6. в footer необходимо, год создания приложения.</p>
      <ol start="5">
          <li>КРИТЕРИИ ОЦЕНКИ</li>
      </ol>
      <p>Максимальный балл за задание +130</p>
      <p>5.1. верстка валидная +10</p>
      <p>Для проверки валидности вёрстки используйте сервис <a
              href="https://validator.w3.org">https://validator.w3.org</a>.
          Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком
          случае
          баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors,
          выставляем половину баллов за пункт требований</p>
      <p>5.2. верстка семантическая +20</p>
      <p>5.3. В коде странице присутствуют и используются по назначению следующие элементы:</p>
      <p>Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее
          типу
          элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется
          и на
          балл не влияет.</p>
      <p>5.3.1. header, main, footer +5</p>
      <p>5.3.2. элемент nav +5</p>
      <p>5.3.3. только один заголовок h1 +5</p>
      <p>5.3.4. заголовки h2 +5</p>
      <p>5.3.5. Footer со знаком авторского права - ©, с годом создания и его автором. +5</p>
      <p>5.3.6. для оформления сайта используются css-стили +10</p>
      <p>5.3.7. при уменьшении масштаба страницы браузера верстка размещается по центру по горизонтали, а не
          сдвигается в
          сторону +10</p>
      <p>5.3.8. на странице сайта есть изображение, пропорции изображения не искажены, у изображения есть атрибут alt
          +10</p>
      <p>5.3.9. навигация, контакты для связи и перечень навыков оформлены в виде списка ul &gt; li или ul &gt; li
          &gt; a +10<br>
          Также допускается использование нумерованого списка ol &gt; li или ol &gt; li &gt; a
      </p>
      <p>5.4. Соответствие CSS-оформления:</p>
      <p>5.4.1. самостоятельно нарисованное в вектором редакторе изображение +10</p>
      <p>5.4.2. обязательные элементы +10</p>
      <p>5.4.3. функциональные возможности при наведении, при нажатии +5</p>
      <p>5.4.4. при переходе страница открывается в новой вкладке +5</p>
      <p>5.5. Анимация + 5</p>
      <ol start="6">
          <li>ПОРЯДОК ПРОВЕДЕНИЯ СОРЕВНОВАНИЙ</li>
      </ol>
      <p>Во время проведения конкурса участник должен знать и строго соблюдать правила безопасного поведения учащихся
          на
          конкурсной площадке</p>
      <p>За грубые нарушения правила безопасного поведения учащихся, которые привели к порче оборудования, инструмента, травме или созданию аварийной ситуации, участник отстраняется от дальнейшего участия в конкурсе. Решение об отстранении принимает главный судья.</p>
      <ol start="7">
          <li>ПРАВИЛА ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЯ</li>
      </ol>
      <p>Участник, набравший наибольшее количество баллов за выполнение двух конкурсных заданий, считается
          победителем.</p>
      <p>В случае набора участниками одинакового количества баллов, победителем конкурса считается участник, набравший
          наибольшее количество баллов и выполнивший конкурсные задания за наименьшее время.</p>
      <p>В случае разногласий окончательное решение оценки конкурса принимает главный судья.</p>
    `
  private static contentBE: string = `<ol>
<li>АГУЛЬНЫЯ ПАЛАЖЭННІ</li>
</ol>
<p>Праца з вэб-тэхналогіямі - гэта ключавы навык у свеце, які ўсё часцей ставіць Інтэрнэт у цэнтр сучаснай лічбавай платформы. Гэта таксама адзін з самых складаных і разнастайных навыкаў. Моцныя дызайнерскія і камунікатыўныя навыкі ў спалучэнні з разуменнем мэтавай аўдыторыі, рынкаў і тэндэнцый - усё гэта вельмі важна. У працэсе распрацоўкі вэб-дызайнеры і распрацоўшчыкі ствараюць базы даных, ствараюць праграмы, а таксама тэсціруюць і адладжваюць вэб-сайты.</p>
<ol start="2">
<li>АБ СПАБОРНІЦТВЕ</li>
</ol>
<p>На працягу конкурса ўдзельнікі распрацоўваюць сайт з дызайнам, які адпавядае прынцыпу аднастайнасці ў структуры старонкі: адзіны памер элементаў, аднолькавая вышыня навігацыйных кнопак, аднолькавае афармленне загалоўкаў, падзагалоўкаў і асноўнага тэксту, аднолькавае афармленне спасылак і выяваў для ўсіх старонак сайта. Ставіцца задача звярстаць САЙТ.</p>
<p>Парады не з'яўляюцца часткай задання. Выконвайце парады толькі ў той меры, у якой яны могуць вам дапамагчы.</p>
<p>Вёрстка сайта можа выконвацца ТОЛЬКІ ў рэдактары кода.</p>
<p><strong>Пры выкананні конкурснага задання выкарыстанне інтэрнэт-рэсурсаў забаронена. Нельга выкарыстоўваць вонкавыя бібліятэкі.</strong></p>
<p>Уступныя дадзеныя: падаюцца гатовыя скрыншоты, якія паказваюць як старонкі выглядаюць пры шырыні экрана 1920, 768 і 360px Кантрольная кропка адрозненняў паміж вузкім і шырокім экранам складае 800px.</p>
<p>Прадстаўляюцца файлы шрыфтоў і малюнкаў старонак. Выходныя дадзеныя: файлы index.html, p1.html, p2.html, p3.html, style.css, а таксама набор іншых неабходных для карэктнага адлюстравання старонкі ў браўзерах файлаў.</p>
<ol start="3">
<li>ПАТРАБАВАННІ ДА ЎДЗЕЛЬНІКА</li>
</ol>
<p>Удзельнік прывозіць самастойна:</p>
<ul>
<li>камп'ютар (ноўтбук) з праграмным забеспячэннем, неабходным для выканання конкурснага задання - 1 шт.;</li>
<li>USB-флэш-назапашвальнік (ёмістасцю не менш за 4ГБ) - 1 шт.;</li>
<li>сеткавы фільтр (падаўжальнікам), 5 м - 1 шт.</li>
</ul>
<ol start="4">
<li>ПАТРАБАВАННІ ДА ВЕРСТКI</li>
</ol>
<p>4.1.&nbsp;Вёрстка валідная. Для праверкі валіднасці вёрсткі выкарыстоўвайце сэрвіс <a href="https://validator.w3.org">https://validator.w3.org</a></p>
<p>4.2. Вёрстка семантычная</p>
<p>4.3.&nbsp;Пры напісанні кода рэкамендуецца прытрымлівацца гайдлайну <a href="https://codeguide.academy/html-css.html">https://codeguide.academy/html-css.html</a></p>
<p>4.4. Кантэнт размяшчаецца ў блоку, які гарызантальна цэнтруецца на старонцы</p>
<p>4.5. Старонка сайта павінна карэктна адлюстроўвацца ў браўзары Google Chrom, Firefox і Яндэкс апошняй версіі</p>
<p>4.6. У footer неабходна год стварэння дадатка.</p>
<ol start="5">
<li>КРЫТЭРЫІ АДЗНАКІ</li>
</ol>
<p>Максімальны бал за заданне +130</p>
<p>5.1. Вёрстка валідная +10</p>
<p>Для праверкі валіднасці вёрсткі выкарыстоўвайце сэрвіс&nbsp;<a href="https://validator.w3.org">https://validator.w3.org</a>. Валіднай вёрстцы адпавядае надпіс "Document checking completed. No errors or warnings to show." У такім выпадку балы за пункт патрабаванняў выстаўляем поўнасцю. Калі ёсць папярэджанні - warnings, але няма памылак - errors, выстаўляем палову балаў за пункт патрабаванняў.</p>
<p>5.2. Вёрстка семантычная +20</p>
<p>5.3. У кодзе старонцы прысутнічаюць і выкарыстоўваюцца па прызначэнні наступныя элементы:</p>
<p>Пад "выкарыстоўваюцца па прызначэнні" маецца на ўвазе, што ў элементаў ёсць нейкі змест, які адпавядае тыпу элемента, а не дабаўленыя пустыя тэгі для атрымання балаў. Правільнасць выкарыстання элементаў не правяраецца і на бал не ўплывае.</p>
<p>5.3.1. header, main, footer +5</p>
<p>5.3.2. элемент nav +5</p>
<p>5.3.3. толькі адзін загаловак h1 +5</p>
<p>5.3.4. загалоўкі h2 +5</p>
<p>5.3.5. footer са знакам аўтарскага права - &copy;, з годам стварэння і яго аўтарам +5</p>
<p>5.3.6. для афармлення СV выкарыстоўваюцца css-стылі +10</p>
<p>5.3.7. пры памяншэнні маштабу старонкі браўзара вёрстка размяшчаецца па цэнтры па гарызанталі, а не зрушваецца ў бок +10</p>
<p>5.3.8. на старонцы сайта ёсць выява, прапорцыі выявы не скажоныя, у выявы ёсць атрыбут alt +10</p>
<p>5.3.9. рух, кантакты для сувязі і пералік навыкаў аформлены ў выглядзе спісу ul &gt; li ці ul &gt; li &gt; a +10<br />Таксама дапушчаецца выкарыстанне нумараванага спісу ol &gt; li ці ol &gt; li &gt; a</p>
<p>5.4. Адпаведнасць CSS-афармленні:</p>
<p>5.4.1. самастойна намаляваная ў вектарным рэдактары выява +10</p>
<p>5.4.2. абавязковыя элементы +10</p>
<p>5.4.3. функцыянальныя магчымасці пры навядзенні, пры націску +5</p>
<p>5.4.4. пры пераходзе старонка адкрываецца ў новай укладцы +5</p>
<p>5.5. Анімацыя + 5</p>
<ol start="6">
<li>ПАРАДАК ПРАВЯДЗЕННЯ СПАБОРНIЦТВАЎ</li>
</ol>
<p>У час правядзення конкурсу ўдзельнік павінен ведаць і строга выконваць правілы бяспечных паводзін вучняў на конкурснай пляцоўцы.</p>
<p>За грубыя парушэнні правіл бяспечных паводзін навучэнцаў, якія прывялі да псавання абсталявання, інструмента, траўмы або стварэння аварыйнай сітуацыі, удзельнік адхіляецца ад далейшага ўдзелу ў конкурсе. Рашэнне аб адхіленні прымае галоўны суддзя.</p>
<ol start="7">
<li>ПРАВІЛЫ ВЫЗНАЧЭННЯ ПЕРАМОЖЦЫ</li>
</ol>
<p>Удзельнік, які набраў найбольшую колькасць балаў за выкананне двух конкурсных заданняў, лічыцца пераможцам.</p>
<p>У выпадку набору ўдзельнікамі аднолькавай колькасці балаў, пераможцам конкурсу лічыцца ўдзельнік, які набраў найбольшую колькасць балаў і выканаў конкурсныя заданні за найменшы час.</p>
<p>У выпадку рознагалоссяў канчатковае рашэнне адзнакі конкурсу прымае галоўны суддзя.</p>`
  private static contentEN: string =
    'Information is temporarily unavailable. You can view details in Russian or Belarusian languages'

  static getItem(currentLang: string): Sphere {
    let competence

    if (currentLang == 'ru') {
      competence = this.ruTranslate
    } else if (currentLang == 'be') {
      competence = this.beTranslate
    } else {
      competence = this.enTranslate
    }

    return competence
  }

  private static ruTranslate: Sphere = {
    name: this.nameSphere,
    viewName: this.viewNameRU,
    description: this.descriptionRU,
    content: this.contentRU,
    viewNameRU: this.viewNameRU,
  }

  private static beTranslate: Sphere = {
    name: this.nameSphere,
    viewName: this.viewNameBE,
    description: this.descriptionBE,
    content: this.contentBE,
    viewNameRU: this.viewNameRU,
  }

  private static enTranslate: Sphere = {
    name: this.nameSphere,
    viewName: this.viewNameEN,
    description: this.descriptionEN,
    content: this.contentEN,
    viewNameRU: this.viewNameRU,
  }
}
