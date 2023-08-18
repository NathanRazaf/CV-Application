import github from '../../assets/github.svg';
import '../../styles/Header.css';
function Header(props) {
    return (
        <header>
            <h1>ResumeReady</h1>
            <a href={props.link}><img src={github} alt="github"/></a>
            <p>Fill out the forms below and your CV will be generated automatically!</p>
        </header>
    )
}

export default Header