import {Sphere} from "../interface/sphere";

export const LINE: Sphere = {
  name: "line",
  viewName: "Следование по линии",
  description: "Участникам конкурса «Следование по линии» необходимо подготовить робота, способного автономно передвигаться по трассе. Задача роботов – проехать по трассе как можно быстрее. Трек состоит из черной линии на белом синтетическом поле.",
  content: `<h2>СЛЕДОВАНИЕ ПО ЛИНИИ</h2>
<ol>
<li>ОБЩИЕ ПОЛОЖЕНИЯ</li>
</ol>
<p>Участникам конкурса &laquo;Следование по линии&raquo; необходимо подготовить робота, способного автономно передвигаться по трассе. Задача роботов &ndash; проехать по трассе как можно быстрее. Трек состоит из черной линии на белом синтетическом поле.</p>
<ol start="2">
<li>О СОРЕВНОВАНИИ СЛЕДОВАНИЕ ПО ЛИНИИ</li>
</ol>
<p>2.1. &laquo;Следование по линии&raquo; &ndash; это соревнование автономных роботов на скорость по заданной траектории (трассе).</p>
<p>2.2. Прохождение трассы &ndash; это движение робота по линии таким образом, чтобы в любой момент времени проекция робота находилась на линии.</p>
<p>2.3. Задача роботов &ndash; за минимальное время пройти трассу от места старта до места финиша.</p>
<p>2.4. Время прохождения трассы &ndash; это время между пересечением роботом линии старта до момента пересечения линии финиша.</p>
<p>2.5. На соревнованиях робота представляет команда, которая состоит из тренера и участников.</p>
<p>2.6. Команды могут классифицироваться по категориям.</p>
<ol start="3">
<li>ТРЕБОВАНИЯ К РОБОТАМ</li>
</ol>
<p>3.1. Робот должен быть выполнен только из деталей компании LEGO&reg; и его аналогов.</p>
<p>3.2. Робот должен быть полностью автономным, т.е. действовать самостоятельно, без участия человека или компьютера.</p>
<p>3.3. Использование дистанционного управления роботом во время движения по трассе запрещено за исключением запуска и остановки робота.</p>
<p>3.4. Максимальная ширина робота 30 см, длина - 30 см.</p>
<p>3.5. Высота робота не ограничена.</p>
<p>3.6. Масса робота не более 1кг.</p>
<p>3.7. В конструкции роботов запрещено использование активных устройств для улучшения сцепления с трассой, таких как вентиляторы, импеллеры и т.п.</p>
<p>3.8. Робот не должен загрязнять и/или повреждать трассу.</p>
<p>3.9. Робот должен преодолеть стартовую линию в течение 1 (одной) секунды.</p>
<ol start="4">
<li>ПАРАМЕТРЫ ТРАССЫ</li>
</ol>
<p>4.1. Трасса &ndash; замкнутая черная линия на белом поле.</p>
<p>4.2. Поле &ndash; прямоугольная плоская поверхность из белого материала.</p>
<p>4.3. Ширина черной линии &ndash; 15мм.</p>
<p>4.4. Длина линии от 10 до 15м.</p>
<p>4.5. Линия не имеет разрывов, самопересечений, развилок, а также препятствий.</p>
<p>4.6. Расстояние между участками соседних линии не менее 200мм.</p>
<p>4.7. Расстояние от центра линии до края поля не менее 150мм.</p>
<p>4.8. Радиус кривизны линии не менее 100 мм.</p>
<p>4.9. Старт и финиш совмещены и выделены с помощью поперечных линий.</p>
<p>4.10. Примерный вид трассы представлен в Приложении к настоящему Регламенту.</p>
<ol start="5">
<li>ПОРЯДОК ПРОВЕДЕНИЯ СОРЕВНОВАНИЙ</li>
</ol>
<p>5.1. Перед началом соревнований роботы проходят техническую инспекцию на соответствие требованиям настоящего Регламента.</p>
<p>5.2. Время прохождения трассы измеряется системой электронного хронометража или судьей вручную с помощью секундомера.</p>
<p>5.3. Процедура старта: участник устанавливает робота перед стартовой линией. Робот должен находиться на поверхности трассы и оставаться неподвижным. Робот стартует по команде судьи.</p>
<p>5.4. Время прохождения трассы не более 1 минуты.</p>
<p>5.5. Попытка прохождения трассы считается завершенной если:</p>
<ul>
<li>робот полностью прошел трассу;</li>
<li>закончилось время, отведенное на прохождение трассы;</li>
</ul>
<p>5.6. Условия дисквалификации:</p>
<ul>
<li>робот действует не автономно;</li>
<li>во время прохождения трассы участник команды коснулся робота;</li>
<li>робот сошел с трассы (никакая часть робота или его проекции не находятся на линии);</li>
<li>робот загрязняет и/или повреждает трассу.</li>
</ul>
<ol start="6">
<li>ПРАВИЛА ОТБОРА ПОБЕДИТЕЛЯ</li>
</ol>
<p>6.1. На прохождение трассы каждой команде дается три попытки. В зачет принимается время лучшей попытки.</p>
<p>6.2. Победителем объявляется команда, потратившая на прохождение трассы наименьшее время.</p>
<p>6.3. Победитель может объявляться отдельно в каждой категории.</p>
<img src="../../../assets/sphere/p-2.png" alt="">
<p><em>Рис 1. Примерный вид трассы</em></p>
<p>А = 15мм</p>
<p>B &ge; 200мм</p>
<p>С &ge; 150мм</p>
<p>D &ge; 100мм</p>
<p>Длина трассы 12,5м</p>
<p>В случае разногласий окончательное решение оценки конкурса принимает главный судья.</p>`
}
