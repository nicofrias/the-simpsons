import styled from "styled-components";

export default function Character(props) {
    const {dataCharacter} = props;
    const { Nombre , Imagen , Historia } = dataCharacter
    console.log(Imagen)
    
    return (
        <ContentCharacter>
            <Title>{Nombre}</Title>
            <ContainerImage>
                <Image src={Imagen} alt={Nombre}/>
            </ContainerImage>
            <PhraseText>{Historia}</PhraseText>
        </ContentCharacter>
    )
}

const ContentCharacter = styled.div `
    padding: 20px;
    border: 1px solid #2a9d8f;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    margin: 10px;

    &:hover {
        filter: brightness(40%);
    }
`

const Title = styled.h2`
    color: #264653;
    height: 40px;
    justify-content: center;
    display: flex;
`

const ContainerImage = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 130px;
    heigth: auto;
`

const PhraseText = styled.p`
    color: #2a9d8f;
`