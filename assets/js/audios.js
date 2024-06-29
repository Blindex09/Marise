function setAudioAndFocus(element) {
  var player = document.getElementById("audioPlayer");
  player.src = "../assets/audios" + element.dataset.audioUrl; // Atualiza o arquivo de áudio
  player.load(); // Carrega o novo áudio
  player.focus(); // Direciona o foco para o player
  player.play(); // Toca o áudio
}
