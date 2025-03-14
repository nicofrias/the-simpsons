import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
    const { characters, reqApi } = props;
    return(
        <>
        <CharacterContainerStyled>
            {characters.map((character, index) => (
                <Character dataCharacter={character} key={index} />
        ))}
        </CharacterContainerStyled>
        <ContainerButton>
            <Button onClick={reqApi}>Recargar Personajes</Button>
        </ContainerButton>
        </>
    )
}

const CharacterContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
`

const ContainerButton = styled.div`
    width: 100%;
    text-align: center;
`

const Button = styled.button`
    width: 250px;
    background-color: #e76f51;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2s ease-out;

    &:hover {
        cursor: pointer;
        background-color: #1c09:
    }
`