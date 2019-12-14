var config = {
  botToken: "",
  whitelistChats: [],
  playSoundOnRecieve: "sound1.mp3",
  showVideos: true,
  playVideoAudio: false,
  imageFolder: "images",
  fullscreen: true,
  fadeTime: 0,
  interval: 10 * 2000,
  imageCount: 30,
  // automatically delete images when they are thrown out of the slideshow?
  autoDeleteImages: true,
  newPhotoMessage: "Neues Bild von",
  newVideoMessage: "Neues Video von",
  showSender: true,
  showCaption: true,
  toggleMonitor: true,
  turnOnHour: 7,
  turnOffHour: 22,
  rebootHour: 0,
  // show confirm message before delete an image
  confirmDeleteImage: true,
  deleteMessage: "Wirklich löschen?",
  deleteConfirmText: "Löschen",
  deleteCancelText: "Abbrechen",
  // show confirm message before shutdown
  confirmShutdown: true,
  shutdownMessage: "Wirklich herunterfahren?",
  shutdownConfirmText: "Herunterfahren",
  shutdownCancelText: "Abbrechen",
  // show confirm message before reboot
  confirmReboot: true,
  rebootMessage: "Wirklich neu starten?",
  rebootConfirmText: "Neu starten",
  rebootCancelText: "Abbrechen",
  touchBar: {
    height: "75px",
    // timout to automatically hide the touchbar.
    // To disable auto hide set value to 0
    autoHideTimeout: 30 * 1000,
    elements: [
      "previousImage",
      "playPause",
      "nextImage",
      "deleteImage",
      "mute",
      "shutdown",
      "reboot"
    ]
  },
  keys: {
    next: "right",
    previous: "left",
    play: "l",
    pause: "k"
  },
  voiceReply: {
    key: "a",
    maxRecordTime: 60*1000,
    recordingMessageTitle: "Voice Message",
    recordingPreMessage: "Recording for",
    recordingPostMessage: "in progress...",
    recordingDone: "Voice message sent sucessfully!",
    recordingError: "Voice message has failed!"
  }
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
