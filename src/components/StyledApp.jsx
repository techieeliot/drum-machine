import styled from "styled-components"

const StyledApp = styled.main `
    @import url('https://fonts.googleapis.com/css2?family=Catamaran&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Boogaloo&display=swap');

    main {
        margin: 0 auto;
    }

    header {
        text-align: center;
        color: #E0E1E3;
        font-family: 'Catamaran', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        -webkit-text-fill-color: #1DB5C2;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: #E0E1E3;
        filter: drop-shadow(0 0 1rem #383F5B);
    }
    #display {
        width: calc(80% - 1em);
        height: 30vh;
        background-color: #74849B;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #1DB5C2;
        -webkit-text-fill-color: #E0E1E3;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: #1DB5C2;
        padding: 0 5vw;
        font-size: xxx-large;
        font-family: 'Catamaran', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        filter: drop-shadow(0 0 2rem #383F5B);
        border-radius: 1em;
    }
    #drum-machine {
        margin: 0 auto;
        width: 90vw;
        height: 80vh;
        background-color: #383F5B;   
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;  
        border-radius: 1em; 
    } 

    #drum-pads {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 3em 3em;
        grid-template-areas: ". . ." ". . ." ". . .";
    }

    .drum-pad {
        color: #74849B;
        background-color: #E0E1E3;
        width: calc(50% - 10px);
        height: calc(5vh + 1em);
        text-align: center;
        border-radius: 0.5em;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        font-size: x-large;
        filter: drop-shadow(0 0 0.75rem #1DB5C2);
        font-family: 'Boogaloo', cursive;
    }

    .flexbox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    }
`

export default StyledApp