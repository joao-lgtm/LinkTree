import { Contact, Container } from "./styles";
import { Links } from './../../components/Links';
import Linkedin from "../../assets/icons8-linkedin.svg";
import Whatsapp from "../../assets/icons8-whatsapp.svg";
import Github from "../../assets/icons8-github.svg";
import Instagram from "../../assets/icons8-instagram.svg";
import Discord from "../../assets/icons8-discord.svg";

export function Home() {
    return (
        <>
            <Container>
                <img src="https://github.com/joao-lgtm.png" alt="Foto do usuario" />
                <h1> João Paulo Cassatti</h1>
                <h2>Desenvolvedor Jr. full stack</h2>

                <Links url="https://www.linkedin.com/in/joao-paulo-283a551a2/" name="Linkedin" img={Linkedin} alt="Linkedin Svg" />
                <Links url="https://github.com/joao-lgtm" name="GitHub" img={Github} alt="Github Svg" />
                <Links url="https://www.instagram.com/joao.cassatti/" name="Instagram" img={Instagram} alt="Instagram Svg" />
                <Links url="https://discord.gg/aV7ubw8Q" name="Discord" img={Discord} alt="Discord Svg" />
                <Links name="Portifolio is coming..."/>
            </Container>

            <Contact>
                <Links url="https://wa.me//5516988703910?text=Olá, vim através do seu linktree" img={Whatsapp} alt="Whatsapp Svg" />
            </Contact>
        </>
    )
}
