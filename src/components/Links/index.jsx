import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Links ({url, name, img, alt}) {
    return(
        <Container>
            <a href={url} target="_blank"> {name && <span>{name}</span>} <img src={img} alt={alt}/> </a>
        </Container>
    )
}