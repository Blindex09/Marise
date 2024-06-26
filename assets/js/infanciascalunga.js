const audioFilesInfanciaScalunga = [
  "audiosinfanciascalunga/Oreiesuasfilhashistoria",
  "audiosinfanciascalunga/JulianaeDomJorge",
  "audiosinfanciascalunga/RolaRola",
  "audiosinfanciascalunga/Cundungueiro",
  "audiosinfanciascalunga/Fortina",
  "audiosinfanciascalunga/BrancadeNeverecriada",
  "audiosinfanciascalunga/BoiAzeitao",
  "audiosinfanciascalunga/ChapeuzinhoVermelhorecriada",
  "audiosinfanciascalunga/SiaisiaizagariaeaeessemungandonumebomfiaisJabotieocuei",
  "audiosinfanciascalunga/Nadandonaenchente",
  "audiosinfanciascalunga/serradordeIaia",
  "audiosinfanciascalunga/RezapraSJose",
  "audiosinfanciascalunga/Boile",
  "audiosinfanciascalunga/Piranha",
  "audiosinfanciascalunga/Jovina",
  "audiosinfanciascalunga/Rondacarangueijonumepeixe",
  "audiosinfanciascalunga/Passeinopedelaranja",
  "audiosinfanciascalunga/candarimdesinha",
  "audiosinfanciascalunga/barbuletapreta",
  "audiosinfanciascalunga/Meninonaomaltrataessanega",
  "audiosinfanciascalunga/sodadedoejerce",
  "audiosinfanciascalunga/castelomalassombrado",
  "audiosinfanciascalunga/Mariquinhadabeiradorio",
  "audiosinfanciascalunga/Tataira",
  "audiosinfanciascalunga/Chicochico",
  "audiosinfanciascalunga/BenditodoEspiritoSanto",
  "audiosinfanciascalunga/Bencaodepapaidemamaedevovo",
];

const audioNamesInfanciaScalunga = [
  "O rei e suas filhas - história",
  "Juliana e Dom Jorge",
  "Rola Rola",
  "Cundungueiro",
  "Fortina",
  "Branca de Neve - recriada",
  "Boi Azeitão",
  "Chapeuzinho Vermelho - recriada",
  "Si ai si ai zagariaêaê, esse mungando num é bom fiais - Jaboti e o cuêi",
  "Nadando na enchente",
  "Serrador de Iaiá",
  "Reza pra S. José",
  "Boilé",
  "Piranha",
  "Jovina",
  "Ronda - carangueijo num é peixe",
  "Passei no pé de laranja",
  "Candarim de sinhá",
  "Barbuleta preta",
  "Menino não maltrata essa nega",
  "Sodade do ejerce",
  "Castelo mal assombrado",
  "Mariquinha da beira do rio",
  "Tataíra",
  "Chico chico",
  "Bendito do Espírito Santo",
  "Benção de papai, de mamãe, de vovó",
];

let currentIndex = 0;

function setAudioAndFocus(index) {
  if (index >= 0 && index < audioFilesInfanciaScalunga.length) {
    currentIndex = index;
    const player = document.getElementById("audioPlayer");
    player.src = `${audioFilesInfanciaScalunga[currentIndex]}.mp3`; // Atualiza o arquivo de áudio
    player.load(); // Carrega o novo áudio
    player.classList.add("visible");
    document.querySelector(".nav-buttons").classList.add("visible");

    // Feedback para o leitor de telas
    document.getElementById(
      "audioFeedback"
    ).innerText = `Áudio selecionado: ${audioNamesInfanciaScalunga[currentIndex]}`;

    // Foca no player após o carregamento do áudio
    player.addEventListener(
      "loadeddata",
      () => {
        player.focus(); // Define o foco no player
      },
      { once: true }
    );
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
  if (currentIndex < audioFilesInfanciaScalunga.length - 1) {
    setAudioAndFocus(currentIndex + 1);
  }
}
