// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Someone's out there", time: 32 },
  { text: "Waiting for me", time: 36 },
  { text: "I have to find here", time: 40 },
  { text: "And tell her that I love her <3", time: 43 },
  { text: "Someone's out there", time: 48 },
  { text: "Waiting for me", time: 52 },
  { text: "I have to find here", time: 56 },
  { text: "And tell her that I love her...", time: 59 },
  { text: "You're a million miles away", time: 65 },
  { text: "The bridge between winter and summer", time: 72 },
  { text: "Seems like a bummer but it's worth the wait", time: 76 },
  { text: "And I know you'll shine the way", time: 81 },
  { text: "With your lava lamp", time: 87 },
  { text: "(Lava lamp)", time: 91 },
  { text: "In the middle of your room", time: 93 },
  { text: "From my window, I could see", time: 97 },
  { text: "Bright blue light was shining deep", time: 101 },
  { text: "Like the sea on New Year's Eve", time: 105 },
  { text: "Wishing you were next to me", time: 109 },
  { text: "Yesterday in LA", time: 113 },
  { text: "It was sunny but it rained", time: 117 },
  { text: "In my room", time: 121 },
  { text: "(In my room)", time: 123 },
  { text: "When I wrote a song for...", time: 125 },
  { text: "Someone's out there", time: 128 },
  { text: "Waiting for me", time: 132 },
  { text: "I have to find here", time: 136 },
  { text: "And tell her that I love her <3", time: 139 },
  { text: "Someone's out there", time: 144 },
  { text: "Waiting for me", time: 148 },
  { text: "I have to find here", time: 152 },
  { text: "And tell her that I love her...", time: 155 },
  { text: "If only", time: 161 },
  { text: "You'd hold me", time: 165 },
  { text: "And I wasn't", time: 169 },
  { text: "One billion miles away", time: 172 },
  { text: "If only", time: 177 },
  { text: "You'd hold me", time: 181 },
  { text: "And I wasn't", time: 184 },
  { text: "One billion miles away", time: 188 },
  { text: "If only", time: 193 },
  { text: "You'd hold me", time: 197 },
  { text: "And I wasn't", time: 201 },
  { text: "One billion miles away", time: 204 },
  { text: "If only", time: 209 },
  { text: "You'd hold me", time: 213 },
  { text: "And I wasn't", time: 216 },
  { text: "One billion miles away", time: 220 },
  { text: "Someone's out there", time: 226 },
  { text: "Waiting for me", time: 230 },
  { text: "I have to find her", time: 234 },
  { text: "And tell her that I love her <3", time: 238 },
  { text: "Someone's out there", time: 242 },
  { text: "Waiting for me", time: 246 },
  { text: "I have to find her", time: 250 },
  { text: "And tell her that I love her...", time: 254 },
  { text: "Someone's out there", time: 258 },
  { text: "Waiting for me", time: 262 },
  { text: "I have to find her", time: 266 },
  { text: "And tell her that I love her <3", time: 270 },
  { text: "Someone's out there", time: 274 },
  { text: "Waiting for me", time: 278 },
  { text: "I have to find her", time: 282 },
  { text: "And tell her that I love her...", time: 286 }
];

// Mostrar letras sin animación
function updateLyrics() {
  var time = Math.floor(audio.currentTime); // segundo actual de la canción

  // Buscar la línea actual en base al inicio y al siguiente inicio
  for (var i = 0; i < lyricsData.length; i++) {
    var start = lyricsData[i].time; // inicio de esta línea
    var end = (lyricsData[i + 1]) ? lyricsData[i + 1].time : audio.duration; 
    // fin = tiempo de la siguiente línea o duración total del audio si es la última

    if (time >= start && time < end) {
      lyrics.innerHTML = lyricsData[i].text; // mostrar texto directamente
      return;
    }
  }

  // Si no hay línea actual
  lyrics.innerHTML = "";
}

// Llama a updateLyrics cada 100ms (suficiente, no gasta tanta CPU)
setInterval(updateLyrics, 100);
