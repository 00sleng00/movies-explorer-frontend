import './AboutProject.css'
import SectionTitle from '../SectionTitle/SectionTitle'

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <SectionTitle title="О проекте" />
            <div className="about-project__content">
                <article className="about-project__column">
                    <h3 className="about-project__column-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__column-text">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </article>
                <article className="about-project__column">
                    <h3 className="about-project__column-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__column-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </article>
            </div>
            <div className="about-project__duration-line">
                <div className="about-project__duration-line-item about-project__backend-line">
                    1 неделя
                </div>
                <div className="about-project__duration-line-item about-project__fronend-line">
                    4 недели
                </div>
                <div className="about-project__duration-line-item about-project__backend-title">
                    Back-end
                </div>
                <div className="about-project__duration-line-item about-project__frontend-title">
                    Front-end
                </div>
            </div>
        </section>
    )
}

export default AboutProject
