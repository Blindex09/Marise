const audioFilesCaixeiras = [
    'audioscaixeiras/aimeudeus',
    'audioscaixeiras/ajoelheimeudeus',
    'audioscaixeiras/serenodamadrugada',
    'audioscaixeiras/quandodeusandounomundo',
    'audioscaixeiras/soumdeus',
    'audioscaixeiras/santoantoniodelisboa',
    'audioscaixeiras/aieuvoubeberaguadoceu',
    'audioscaixeiras/severa',
    'audioscaixeiras/epapaimiranda',
    'audioscaixeiras/vamossalvarosbrasileiros',
    'audioscaixeiras/ea',
    'audioscaixeiras/bomjesusdacanaverde',
    'audioscaixeiras/divinoespiritosantodobrado',
    'audioscaixeiras/areiaareia',
    'audioscaixeiras/alvoradaalcantara',
    'audioscaixeiras/alvoradanova',
    'audioscaixeiras/prisao',
    'audioscaixeiras/prisaodopassarinhoalvorada',
    'audioscaixeiras/orapronobis',
    'audioscaixeiras/naosaiosemmebenzer',
    'audioscaixeiras/nobaterdaminhacaixa',
    'audioscaixeiras/auroracombandeirinhascorrecaodasbandeirinhas',
    'audioscaixeiras/aeavemariaaeavemaria',
    'audioscaixeiras/arreiaacaixanochao'
];

const audioNamesCaixeiras = [
    'Ai meu Deus',
    'Ajoelhei meu Deus',
    'Sereno da madrugada',
    'Quando Deus andou no mundo',
    'Sou um Deus',
    'Santo Antônio de Lisboa',
    'Ai eu vou beber água do céu',
    'Severa',
    'E papai Miranda',
    'Vamos salvar os brasileiros',
    'Ea',
    'Bom Jesus da Cana Verde',
    'Divino Espírito Santo dobrado',
    'Areia areia',
    'Alvorada Alcântara',
    'Alvorada nova',
    'Prisão',
    'Prisão do passarinho alvorada',
    'Ora pro nobis',
    'Não saio sem me benzer',
    'No bater da minha caixa',
    'Aurora com bandeirinhas, correção das bandeirinhas',
    'Aê a Ave Maria, aê a Ave Maria',
    'Arreia a caixa no chão'
];

let currentIndex = 0;

function setAudioAndFocus(index) {
    if (index >= 0 && index < audioFilesCaixeiras.length) {
        currentIndex = index;
        const player = document.getElementById('audioPlayer');
        player.src = `${audioFilesCaixeiras[currentIndex]}.mp3`; // Atualiza o arquivo de áudio
        player.load(); // Carrega o novo áudio
        player.classList.add('visible');
        document.querySelector('.nav-buttons').classList.add('visible');

        // Feedback para o leitor de telas
        document.getElementById('audioFeedback').innerText = `Áudio selecionado: ${audioNamesCaixeiras[currentIndex]}`;

        // Foca no player após o carregamento do áudio
        player.addEventListener('loadeddata', () => {
            player.focus(); // Define o foco no player
        }, { once: true });
    } else {
        console.error("Índice fora dos limites.");
    }
}

function previousAudio() {
    if (currentIndex > 0) {
        setAudioAndFocus(currentIndex - 1);
    }
}

function nextAudio() {
    if (currentIndex < audioFilesCaixeiras.length - 1) {
        setAudioAndFocus(currentIndex + 1);
    }
}
