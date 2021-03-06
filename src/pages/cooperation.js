import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contract from "../docs/contract.pdf"
import "./styles/cooperation.scss"

const CooperationPage = () => (
  <Layout>
    <Seo title="Взаимодействие | Ведущий Алексей Горбунов. +7 985 644 64 89" />
    <div className="cooperation__text">
      <h1 className="cooperation__title">этапы подготовки</h1>
      <p>
        1. Мы встречаемся и знакомимся. Я рассказываю вам, как я обычно работаю,
        и, если вы приходите на встречу хотя бы с двумя-тремя фразами о том, как
        вы видите свой праздник, я сразу же предлагаю вам несколько интересных
        идей именно для вашего события. <br />
        Если мероприятие или ваши пожелания совсем неформатные, я возьму время
        на раздумья и пришлю вам несколько интересных ходов в течение суток.
        <br />
        Для меня это не сложно. Для вас это бесплатно.
      </p>
      <p>
        2. Оценив мой креатив, поддавшись моему обаянию и сравнив соотношение
        цена/качество, вы выбираете ведущим своего праздника именно меня.
        <br />В таком случае мы подписываем{" "}
        <a href={Contract} target="_blank" rel="noopener noreferrer">
          ДОГОВОР О СОТРУДНИЧЕСТВЕ
        </a>
      </p>
      <p>
        3. В течение суток я высылаю вам письмо, в котором будет указано, какая
        информация мне понадобится от вас для подготовки и для того, чтобы
        сделать сценарий к вашему празднику уникальным. Чтобы подготовить ее, у
        вас будет не меньше недели.
      </p>
      <p>
        4. После предоставления вами всей необходимой для подготовки информации
        я разрабатываю и согласовываю с вами окончательный сценарий вашего
        праздника. <br />
        За неделю до мероприятия мы встречаемся или созваниваемся и "утрясаем"
        детали.
      </p>
      <p>
        5. Дальше мы встречаемся на празднике. К моменту вашего приезда в зал
        все уже будет готово к его началу.
      </p>
      <p>
        6. Отойдя от праздника на расстояние хотя бы недели, вы пишете мне
        отзыв, и всем становится понятно, солгал ли я в этом и предыдущем тексте
        или нет.
      </p>
    </div>
  </Layout>
)

export default CooperationPage
