const hint = document.getElementById('hint');
window.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');
  if(bgMusic){
    bgMusic.volume = 0.5;
    bgMusic.muted = true;
    bgMusic.play().catch(()=>{});
    bgMusic.addEventListener('error', (e) => {
      console.error('трек не загружен', bgMusic.error?.message);
    });
    bgMusic.addEventListener('canplay', () => {
      console.log('трек готов');
    });
    let musicPlaying = false;
    document.addEventListener('click', () => {
      if (!musicPlaying) {
        try{
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          if(audioContext.state === 'suspended'){
            audioContext.resume().then(() => {
              console.log('audioContext активирован');
            });
          }
        }catch(e){}
        bgMusic.muted = false;
        hint.textContent = 'click to stop audio';
        bgMusic.play().catch(()=>{});
        musicPlaying = true;
      } else {
        bgMusic.pause();
        hint.textContent = 'click to play audio';
        musicPlaying = false;
      }
    });
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typewriter');
  if(!el) return;
  const lyrics = [
    { text: "I have more", start: 8, end: 11 },
    { text: "To live for", start: 13, end: 16 },
    { text: "There's a note in a bottle", start: 18, end: 22 },
    { text: "Washed ashore", start: 23, end: 26 },
    { text: "I hear waves", start: 28, end: 31 },
    { text: "Sing my name", start: 33, end: 37 },
    { text: "Saying no matter how hard", start: 38, end: 42 },
    { text: "There's a way", start: 43, end: 46 },
    { text: "Though I cry", start: 48, end: 51 },
    { text: "All the time", start: 53, end: 56 },
    { text: "And struggle out of bed", start: 59, end: 62 },
    { text: "I'm alive", start: 63, end: 66 },
    { text: "And I'll live", start: 68, end: 72 },
    { text: "For myself", start: 73, end: 77 },
    { text: "For the ones that I love", start: 78, end: 82 },
    { text: "For the ones that I lost", start: 83, end: 89 },
    { text: "Dragging my foot forward", start: 91, end: 94 },
    { text: "Laced with scars and wounds that still hurt", start: 94, end: 100 },
    { text: "It's so unfair that I'm still here", start: 100, end: 109 },
    { text: "But I know you'd tell me if you were here", start: 109, end: 113 },
    { text: "To get up and start moving, what do you fear", start: 114, end: 118 },
    { text: "Everything is as you left it", start: 119, end: 123 },
    { text: "Brush off the dust, make a wish", start: 124, end: 129 },
    { text: "Though I cry", start: 131, end: 134 },
    { text: "All the time", start: 136, end: 138 },
    { text: "And struggle out of bed", start: 141, end: 146 },
    { text: "I'm alive", start: 151, end: 154 },
    { text: "I'm alive", start: 156, end: 159 },
    { text: "I'm alive", start: 161, end: 165 },
    { text: "I'm alive", start: 166, end: 168 },
    { text: "And I'll live (as you left it— you left it)", start: 171, end: 175 },
    { text: "For myself (everything is as you left it— you left it)", start: 176, end: 180 },
    { text: "For the ones that I love (everything is as you left it— you left it)", start: 181, end: 186 },
    { text: "For the ones that I lost (brush off the dust, make a wish)", start: 186, end: 192 }
  ];
  const fadeOutDuration = 400;
  const showBufferMs = 200; // дополнительный буфер для мобильных
  
  el.style.transition = `opacity ${fadeOutDuration}ms ease-out`;

  function typeLine(line, cb) {
    const text = typeof line === 'string' ? line : line.text;
    const duration = typeof line === 'object' ? (line.end - line.start) * 1000 : 3000;
    
    el.textContent = text;
    el.style.opacity = '1';
    
    const showDuration = duration - fadeOutDuration - showBufferMs;
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(cb, fadeOutDuration);
    }, Math.max(showDuration, 100));
  }

  function eraseLine(cb) {
    setTimeout(() => {
      el.textContent = '';
      el.style.opacity = '1';
      cb();
    }, 100);
  }
  function runLyrics(idx = 0) {
    if (idx >= lyrics.length) {
      typeLine("i'm alive", ()=>{});
      return;
    }
    typeLine(lyrics[idx], () => {
      eraseLine(() => runLyrics(idx + 1));
    });
  }
  setTimeout(() => runLyrics(0), 600);
});
window.addEventListener('DOMContentLoaded', () => {
  const lyrics = [
    { text: "I have more", start: 8, end: 11 },
    { text: "To live for", start: 13, end: 16 },
    { text: "There's a note in a bottle", start: 18, end: 22 },
    { text: "Washed ashore", start: 23, end: 26 },
    { text: "I hear waves", start: 28, end: 31 },
    { text: "Sing my name", start: 33, end: 37 },
    { text: "Saying no matter how hard", start: 38, end: 42 },
    { text: "There's a way", start: 43, end: 46 },
    { text: "Though I cry", start: 48, end: 51 },
    { text: "All the time", start: 53, end: 56 },
    { text: "And struggle out of bed", start: 59, end: 62 },
    { text: "I'm alive", start: 63, end: 66 },
    { text: "And I'll live", start: 68, end: 72 },
    { text: "For myself", start: 73, end: 77 },
    { text: "For the ones that I love", start: 78, end: 82 },
    { text: "For the ones that I lost", start: 83, end: 89 },
    { text: "Dragging my foot forward", start: 91, end: 94 },
    { text: "Laced with scars and wounds that still hurt", start: 94, end: 100 },
    { text: "It's so unfair that I'm still here", start: 100, end: 109 },
    { text: "But I know you'd tell me if you were here", start: 109, end: 113 },
    { text: "To get up and start moving, what do you fear", start: 114, end: 118 },
    { text: "Everything is as you left it", start: 119, end: 123 },
    { text: "Brush off the dust, make a wish", start: 124, end: 129 },
    { text: "Though I cry", start: 131, end: 134 },
    { text: "All the time", start: 136, end: 138 },
    { text: "And struggle out of bed", start: 141, end: 146 },
    { text: "I'm alive", start: 151, end: 154 },
    { text: "I'm alive", start: 156, end: 159 },
    { text: "I'm alive", start: 161, end: 165 },
    { text: "I'm alive", start: 166, end: 168 },
    { text: "And I'll live (as you left it— you left it)", start: 171, end: 175 },
    { text: "For myself (everything is as you left it— you left it)", start: 176, end: 180 },
    { text: "For the ones that I love (everything is as you left it— you left it)", start: 181, end: 186 },
    { text: "For the ones that I lost (brush off the dust, make a wish)", start: 186, end: 192 }
  ];
  const randomZone = document.getElementById('lyricsRandomized');
  if(!randomZone) return;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=,.<>/?|[]{}~';
  let idx = 0;
  let currentLine = lyrics[0];
  let animInterval = null;
  let lineInterval = null;
  const maxLen = Math.max(...lyrics.map(l => l.text.length));
  function getObfuscated(str) {
    let padded = str.padEnd(maxLen, ' ');
    return padded.split('').map((ch, i) => {
      if (' (),.—\''.includes(ch)) return ch;
      if (i >= str.length) return ' ';
      if (Math.random() < 0.7) return chars[Math.floor(Math.random() * chars.length)];
      return ch;
    }).join('');
  }
  function startObfuscation(line) {
    if (animInterval) clearInterval(animInterval);
    const lineText = typeof line === 'object' ? line.text : line;
    animInterval = setInterval(() => {
      randomZone.textContent = getObfuscated(lineText);
    }, 60);
  }
  function nextLine() {
    currentLine = lyrics[idx];
    idx = (idx + 1) % lyrics.length;
    startObfuscation(currentLine);
  }
  nextLine();
  if (lineInterval) clearInterval(lineInterval);
  lineInterval = setInterval(nextLine, 2000);
});
(function animateTitle() {
  const base = "XDXDXD";
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=,.<>/?|[]{}~';
  let visible = true;
  setInterval(() => {
    let out = '';
    for (let i = 0; i < base.length; ++i) {
      out += Math.random() < 0.7 ? chars[Math.floor(Math.random() * chars.length)] : base[i];
    }
    document.title = out;
  }, 90);
})();
