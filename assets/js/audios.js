function setAudioAndFocus(element) {
  var player = document.getElementById("audioPlayer");
  player.src = "../assets/audios" + element.dataset.audioUrl; // Atualiza o arquivo de áudio
  player.load(); // Carrega o novo áudio
  player.focus(); // Direciona o foco para o player
  
  $('#user-feedback').remove();
  $(
    '<p id="user-feedback" role="alert"> Áudio selecionado: '
    +element.dataset.audioName
    +'</p>'
  ).appendTo(document.body);
}

function nextPreviousAudio(action) {
  var player = document.getElementById("audioPlayer");
  var audios = document.getElementsByClassName("list-group-item");

  var currentAudio = player.getAttribute("src") || audios[0].dataset.audioUrl;
  var currentAudioIndex = Array.from(audios).findIndex((audio) =>
    currentAudio.includes(audio.dataset.audioUrl)
  );

  var nextAudioIndex =
    action == "next" ? currentAudioIndex + 1 : currentAudioIndex - 1;

  var nextAudio = audios[nextAudioIndex];
  if (nextAudio) {
    setAudioAndFocus(nextAudio);
  }
}
