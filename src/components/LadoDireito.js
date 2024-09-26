import { Container } from "react-bootstrap";

const LadoDireito = (props) => {
    return(
        <Container className="mt-5">
            <input className="input" id="dark-mode" type="checkbox" name="darkmode" onClick={props.passDarkMode}/>
            <label className="label mt-5 ms-4" for="dark-mode">
                <span class="circulo"></span>
            </label>
        </Container>
    )
}

export default LadoDireito;