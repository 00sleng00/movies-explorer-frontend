import './AboutMe.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import photo from '../../images/profile-photo.jpg'
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <SectionTitle title="Студент" />
      <div className="about-me__content">
        <article className="about-me__article">
          <div className="about-me__article-content">
            <h2 className="about-me__article-title">Роман</h2>
            <p className="about-me__article-subtitle">
              Фронтенд-разработчик, 36 лет
            </p>
            <p className="about-me__article-text">
              Я родился и живу в Санкт-Петербурге, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2020 года работал в компании «ооо Мавис». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about-me__article-links">
              <li className="about-me__article-link">
                <a
                  className="about-me__article-link about-me__article-link-vk"
                  href="https://instagram.com/roman_morshikoff"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="about-me__article-link">
                <a
                  className="about-me__article-link about-me__article-link-gh"
                  href="https://github.com/00sleng00"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="about-me__article-photo">
            <img
              className="about-me__article-pfoto-img"
              src={photo}
              alt="мое фото"
            ></img>
          </div>
        </article>
        <Portfolio />
      </div>
    </section>
  )
}

export default AboutMe
