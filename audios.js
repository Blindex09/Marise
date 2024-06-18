function setAudioAndFocus(audioFile) {
    var player = document.getElementById('audioPlayer');
    player.src = audioFile; // Atualiza o arquivo de áudio
    player.load(); // Carrega o novo áudio
    player.focus(); // Direciona o foco para o player
}