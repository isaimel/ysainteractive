document.addEventListener("DOMContentLoaded", () => {
const corrText = [
    "title",
    "written",
    "produced",
    "funded",
    "partnership",
    "special",
    "catered",
    "dedicated",
    "memoriam",
    "composed",
    "authored",
    "contribution"
];
    let totalClicks = 0;

    var arrayLength = corrText.length;
    for (let i = 0; i < arrayLength; i++) {
        const label = document.getElementById(corrText[i][0]);
        label.addEventListener("click", () => {
            var offOrOn = corrText[i][2];
            const songLabel = document.getElementById("songChoice");
            for (let j = 0; j < arrayLength; j++) {
                const otherLabel = document.getElementById(corrText[j][0]);
                otherLabel.innerText = "Love";
                corrText[j][2] = "Off";
                songLabel.innerText = "";
            }
            if (offOrOn == "Off") {
                label.innerText = corrText[i][1];
                corrText[i][2] = "On";
                const def = document.getElementById("headerDef");
                def.innerText = corrText[i][3];
                songLabel.innerText = corrText[i][4];
            } else {
                label.innerText = "Love";
                corrText[i][2] = "Off";
                const def = document.getElementById("headerDef");
                def.innerText = "Love: an intense feeling of deep affection.";
                
            }
        });
    }
});