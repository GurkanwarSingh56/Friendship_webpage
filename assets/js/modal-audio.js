
document.addEventListener('DOMContentLoaded', function() {
  const audioElement = document.getElementById('modalAudio');
  
  const modal = document.getElementById('modal-1');
  
  if (modal && audioElement) {
    modal.addEventListener('shown.bs.modal', function() {
      audioElement.currentTime = 0;
      
     audioElement.play()
        .catch(error => {
          console.log('Audio playback failed:', error);
        });
    });
    
    modal.addEventListener('hidden.bs.modal', function() {
      audioElement.pause();
    });
  }
});
