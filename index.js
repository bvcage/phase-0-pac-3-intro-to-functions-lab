function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let roomieResponse;
    switch (string) {
        case whisper(string):
            roomieResponse = "I can\'t hear you!";
            break;
        case shout(string):
            roomieResponse = "YES INDEED!";
            break;
        case "Let\'s have dinner together!":
            roomieResponse = "I would love to!";
            break;
    }
    return roomieResponse;
}