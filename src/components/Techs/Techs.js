import './Techs.css'
import SectionTitle from '../SectionTitle/SectionTitle'

function Techs() {
    return (
        <section className="technology" id="technology">
            <SectionTitle title="Технологии" />
            <div className="technology__content">
                <h2 className="technology__title">7 технологий</h2>
                <p className="technology__subtitle">
                    На курсе веб-разработки мы освоили технологии, которые
                    применили в дипломном проекте.
                </p>
                <ul className="lechnology__list">
                    <li className="technology__list-item">HTML</li>
                    <li className="technology__list-item">CSS</li>
                    <li className="technology__list-item">JS</li>
                    <li className="technology__list-item">React</li>
                    <li className="technology__list-item">Git</li>
                    <li className="technology__list-item">Express.js</li>
                    <li className="technology__list-item">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs
