const hearts = document.querySelectorAll(".heart");
if (hearts.length > 0) {
    const buttons = document.querySelectorAll(".keypad button");
    const error = document.getElementById("error");
    const keypad = document.querySelector(".keypad");
    let passcode = "";
    const correctPasscode = "0407";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.dataset.value;
            if (value && passcode.length < 4) {
                passcode += value;
                updateHearts();
            }
        });
    });

    function updateHearts() {
        hearts.forEach((heart, index) => {
            if (index < passcode.length) {
                heart.textContent = "♥";
            } else {
                heart.textContent = "♡";
            }
        });
    }

    const deleteBtn = document.getElementById("delete");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
            passcode = passcode.slice(0, -1);
            updateHearts();
        });
    }

    const enterBtn = document.getElementById("enter");
    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            if (passcode === correctPasscode) {
                hearts.forEach(heart => {
                    heart.classList.add("correct");
                });
                const overlay = document.getElementById("overlay");
                if (overlay) overlay.style.opacity = "1";
                setTimeout(() => {
                    window.location.href = "birthday.html";
                }, 3000);
            } else {
                if (error) error.innerHTML = "Wrong passcode! Try again.<br>You forgot my fav??";
                if (keypad) {
                    keypad.classList.add("shake");
                    setTimeout(() => {
                        keypad.classList.remove("shake");
                    }, 400);
                }
                passcode = "";
                updateHearts();
            }
        });
    }
}

if (document.querySelector(".birthday-body")) {
    const intro = document.querySelector(".intro");
    const mainContent = document.querySelector(".main-content");
    const Song = document.getElementById("birthday-song");

    if (intro) {
        setTimeout(() => {
            intro.style.opacity = "0";
        }, 6000);

        setTimeout(() => {
            intro.style.display = "none";
            if (mainContent) mainContent.style.display = "block";
            if (Song) Song.play();
        }, 7500);
    }

    const clickme = document.getElementById("cake-button");
    const partyScene = document.querySelector(".party-scene");
    const flash = document.querySelector(".flash");
    const song2 = document.getElementById("birthday-song2");
    const giftPopup = document.querySelector(".gift-popup");

    if (clickme) {
        clickme.addEventListener("click", () => {
            if (flash) flash.style.opacity = "1";
            setTimeout(() => {
                if (mainContent) mainContent.style.display = "none";
                if (partyScene) partyScene.style.display = "block";
                if (flash) flash.style.opacity = "0";
                if (Song) Song.pause();
                if (song2) {
                    song2.currentTime = 0;
                    song2.play();
                }
            }, 1000);

            setTimeout(() => {
                if (flash) flash.style.opacity = "1";
                setTimeout(() => {
                    if (flash) flash.style.opacity = "0";
                    if (giftPopup) giftPopup.style.display = "block";
                }, 1000);
            }, 13000);
        });
    }

    const acceptButton = document.getElementById("accept-button");
    if (acceptButton) {
        acceptButton.addEventListener("click", () => {
            window.location.href = "gifts.html";
        });
    }

    const maybeLaterButton = document.getElementById("maybe-later-button");
    const please = document.querySelector(".please");
    const acceptButton2 = document.getElementById("accept-button2");

    if (maybeLaterButton) {
        maybeLaterButton.addEventListener("click", () => {
            if (giftPopup) giftPopup.style.display = "none";
            if (please) {
                please.style.display = "block";
                setTimeout(() => {
                    please.style.opacity = "1";
                }, 300);
            }
        });
    }

    if (acceptButton2) {
        acceptButton2.addEventListener("click", () => {
            window.location.href = "gifts.html";
        });
    }
}

if (document.querySelector(".gifts-body")) {
    const openedGifts = { gift1: false, gift2: false, gift3: false };

    function checkGiftsProgress() {
        if (openedGifts.gift1 && openedGifts.gift2 && openedGifts.gift3) {
            if (finalQuestionTrigger) {
                finalQuestionTrigger.style.setProperty("display", "block", "important");
            }
        }
    }

    const giftButtons = document.querySelectorAll(".gifts-container button");

    giftButtons.forEach(button => {
        button.addEventListener("click", () => {
            const img = button.querySelector("img");
            if (img) {
                img.classList.add("opening");
                setTimeout(() => {
                    img.style.transform = "translateY(-30px) scale(1.2)";
                }, 400);
            }
        });
    });

    const firstGift = document.getElementById("open-gifts-button1");
    const secondGift = document.getElementById("open-gifts-button2"); 
    const thirdGift = document.getElementById("open-gifts-button3");
    const giftsContainer = document.querySelector(".gifts-container");
    const fadeScreen = document.querySelector(".fade-screen");
    const letterScene = document.querySelector(".letter-scene");
    const typingText = document.getElementById("typing-text");
    
    const hugScene = document.querySelector(".hug-scene");
    const closeHugBtn = document.querySelector(".close-hug-button");
    const voiceScene = document.querySelector(".voice-scene");
    const closeVoiceBtn = document.querySelector(".close-voice-button");

    const voiceAudio = document.getElementById("love-voice-note");
    const customPlayBtn = document.getElementById("custom-play-btn");
    const playIcon = document.querySelector(".play-icon");
    const progressFill = document.getElementById("progress-fill");
    const progressContainer = document.getElementById("progress-container");
    const timeDisplay = document.getElementById("audio-time");

    const backButton = document.querySelector(".back-button");
    const finalQuestionTrigger = document.getElementById("final-question-trigger");
    const proposalPopup = document.getElementById("proposal-popup");
    const cryingCatPopup = document.getElementById("crying-cat-popup");
    const loveYesBtn = document.getElementById("love-yes-btn");
    const loveNoBtn = document.getElementById("love-no-btn");
    const tryAgainBtn = document.getElementById("try-again-btn");

    const message = `Hello, Iffu ❤️\nHow are you? I hope you are doing good and great.\nYou know what?\nRecently I discovered that I love you more than I know.\nI just want to say thank you for being with me, for loving me and understanding me.\nLet me take more pictures of you from this year\nUmaaaahhhh I Love you jaan!💋\nHappiest Birthday Iffu 🎉🎂`;

    let index = 0;

    if (firstGift) {
        firstGift.addEventListener("click", () => {
            openedGifts.gift1 = true;
            if (fadeScreen) fadeScreen.style.opacity = "1";
            setTimeout(() => {
                if (giftsContainer) giftsContainer.style.display = "none";
                if (letterScene) letterScene.style.display = "flex";
                if (fadeScreen) fadeScreen.style.opacity = "0";
                startTyping();
            }, 1000);
        });
    }

    if (secondGift && hugScene) {
        secondGift.addEventListener("click", () => {
            openedGifts.gift2 = true;
            if (fadeScreen) fadeScreen.style.opacity = "1";
            setTimeout(() => {
                hugScene.style.display = "flex";
                if (fadeScreen) fadeScreen.style.opacity = "0";
            }, 1000);
        });
    }

    if (closeHugBtn && hugScene) {
        closeHugBtn.addEventListener("click", () => {
            hugScene.style.display = "none";
            checkGiftsProgress();
        });
    }

    if (thirdGift && voiceScene) {
        thirdGift.addEventListener("click", () => {
            openedGifts.gift3 = true;
            if (fadeScreen) fadeScreen.style.opacity = "1";
            setTimeout(() => {
                voiceScene.style.display = "flex";
                if (fadeScreen) fadeScreen.style.opacity = "0";
            }, 1000);
        });
    }

    if (voiceAudio && customPlayBtn && playIcon) {
        function formatTime(secs) {
            if (isNaN(secs)) return "0:00";
            const minutes = Math.floor(secs / 60);
            const seconds = Math.floor(secs % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        voiceAudio.addEventListener("loadedmetadata", () => {
            if (timeDisplay) timeDisplay.textContent = `0:00 / ${formatTime(voiceAudio.duration)}`;
        });

        customPlayBtn.addEventListener("click", () => {
            if (voiceAudio.paused) {
                voiceAudio.play();
                customPlayBtn.classList.add("playing");
                playIcon.textContent = "⏸"; 
            } else {
                voiceAudio.pause();
                customPlayBtn.classList.remove("playing");
                playIcon.textContent = "▶"; 
            }
        });

        voiceAudio.addEventListener("timeupdate", () => {
            const percentage = (voiceAudio.currentTime / voiceAudio.duration) * 100;
            if (progressFill) progressFill.style.width = `${percentage}%`;
            if (timeDisplay) timeDisplay.textContent = `${formatTime(voiceAudio.currentTime)} / ${formatTime(voiceAudio.duration)}`;
        });

        if (progressContainer) {
            progressContainer.addEventListener("click", (e) => {
                const clickX = e.offsetX;
                const width = progressContainer.clientWidth;
                voiceAudio.currentTime = (clickX / width) * voiceAudio.duration;
            });
        }

        voiceAudio.addEventListener("ended", () => {
            customPlayBtn.classList.remove("playing");
            playIcon.textContent = "▶";
            if (progressFill) progressFill.style.width = "0%";
            if (timeDisplay) timeDisplay.textContent = `0:00 / ${formatTime(voiceAudio.duration)}`;
        });
    }

    if (closeVoiceBtn && voiceScene) {
        closeVoiceBtn.addEventListener("click", () => {
            voiceScene.style.display = "none";
            if (voiceAudio) {
                voiceAudio.pause();
                if (customPlayBtn && playIcon) {
                    customPlayBtn.classList.remove("playing");
                    playIcon.textContent = "▶";
                }
            }
            checkGiftsProgress();
        });
    }

    if (finalQuestionTrigger) {
        finalQuestionTrigger.addEventListener("click", () => {
            if (proposalPopup) proposalPopup.style.display = "flex";
            finalQuestionTrigger.style.setProperty("display", "none", "important");
            resetNoButton();
        });
    }

    function resetNoButton() {
        if (loveNoBtn) {
            loveNoBtn.style.position = "static";
            loveNoBtn.style.top = "auto";
            loveNoBtn.style.left = "auto";
        }
    }

    if (loveNoBtn) {
        loveNoBtn.addEventListener("mouseover", () => {
            if (window.matchMedia("(pointer: coarse)").matches) return;
            
            const card = loveNoBtn.closest('.proposal-card');
            if (card) {
                const cardRect = card.getBoundingClientRect();
                const btnRect = loveNoBtn.getBoundingClientRect();
                
                const maxX = cardRect.width - btnRect.width - 20;
                const maxY = cardRect.height - btnRect.height - 20;
                
                const randomX = Math.max(10, Math.floor(Math.random() * maxX));
                const randomY = Math.max(10, Math.floor(Math.random() * maxY));
                
                loveNoBtn.style.position = "absolute";
                loveNoBtn.style.left = `${randomX}px`;
                loveNoBtn.style.top = `${randomY}px`;
            }
        });

        loveNoBtn.addEventListener("click", (e) => {
            if (window.matchMedia("(pointer: coarse)").matches) {
                e.preventDefault();
                loveNoBtn.style.position = "static";
            }
            
            const proposalPopup = document.getElementById("proposal-popup");
            if (proposalPopup) proposalPopup.style.display = "none";
            if (cryingCatPopup) cryingCatPopup.style.display = "flex";
        });
    }

    if (tryAgainBtn) {
        tryAgainBtn.addEventListener("click", () => {
            if (cryingCatPopup) cryingCatPopup.style.display = "none";
            const proposalPopup = document.getElementById("proposal-popup");
            if (proposalPopup) {
                proposalPopup.style.display = "flex";
                if (loveNoBtn) {
                    loveNoBtn.style.position = "static";
                }
            }
        });
    }

    if (loveYesBtn) {
        loveYesBtn.addEventListener("click", () => {
            window.location.href = "memory.html";
        });
    }

    function startTyping() {
        if (typingText && index < message.length) {
            typingText.innerHTML += message.charAt(index);
            index++;
            setTimeout(startTyping, 50);
        }
    }

    if (backButton) {
        backButton.addEventListener("click", () => {
            if (letterScene) letterScene.style.display = "none";
            if (giftsContainer) giftsContainer.style.display = "block";
            if (typingText) typingText.innerHTML = "";
            index = 0;
            checkGiftsProgress();
        });
    }
}

if (document.querySelector(".memory-body")) {
    const wheel = document.getElementById('wheel');
    const cards = document.querySelectorAll('.polaroid');
    const popup = document.getElementById('memory-popup');
    const popupContent = document.getElementById('popup-polaroid-content');
    const popupText = document.getElementById('popup-text-msg');
    const closePopup = document.getElementById('close-memory-popup');

    const bgMusic = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle-btn");
    const lightsString = document.getElementById("lights-string");
    const lightsToggle = document.getElementById("lights-toggle-btn");

    const totalCards = cards.length;

    let radiusX = window.innerWidth < 480 ? 180 : 520; 
    let radiusY = window.innerWidth < 480 ? 40 : 80;   
    let currentAngle = 0; 
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let autoSpinSpeed = 0.003; 

function updateCarousel() {
        if (!isDragging) {
            currentAngle -= (velocity * 0.04 + autoSpinSpeed);
            velocity *= 0.95; 
        }

        
        const time = Date.now() * 0.0007; 

        cards.forEach((card, i) => {
            const cardAngle = (i * (Math.PI * 2 / totalCards)) + currentAngle;
            
            const x = Math.sin(cardAngle) * radiusX;
            let y = Math.cos(cardAngle) * radiusY;
            
            const horseOffset = Math.sin(time + (i * 1.5)) * 18;
            
            y += horseOffset;

            const depthFactor = (Math.cos(cardAngle) + 1) / 2; 
            const scale = 0.75 + (depthFactor * 0.25);
            
            const responsiveScale = window.innerWidth < 600 ? scale * 0.6 : scale;

            const opacity = 0.45 + (depthFactor * 0.55);
            const brightness = 0.6 + (depthFactor * 0.4);
            const zIndex = Math.round(depthFactor * 100);

            card.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${responsiveScale})`;
            card.style.opacity = opacity;
            card.style.filter = `brightness(${brightness})`;
            card.style.zIndex = zIndex;

            if (depthFactor > 0.3) {
                card.style.pointerEvents = 'auto';
            } else {
                card.style.pointerEvents = 'none'; 
            }
        });

        requestAnimationFrame(updateCarousel);
    }

    if (lightsToggle && lightsString) {
        lightsToggle.addEventListener("click", () => {
            lightsString.classList.toggle("lights-off");
            if (lightsString.classList.contains("lights-off")) {
                lightsToggle.textContent = " Lights: ON";
                memorybody.style.backgroundImage =
                    "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('./Images/night_bg.png')";
                memorybody.style.backgroundSize = "cover";
                memorybody.style.backgroundPosition = "center";
                memorybody.style.backgroundRepeat = "no-repeat";
                memorybody.style.backgroundAttachment = "fixed";
                document.querySelector(".star").classList.add("active");
                lightsToggle.classList.remove("active");
            } else {
                lightsToggle.textContent = " Lights: OFF";
                memorybody.style.background = "radial-gradient(circle, #fff3f6 0%, #ffd1dc 100%)"
                document.querySelector(".star").classList.remove("active");
                lightsToggle.classList.add("active");
            }
        });
    }

    if (musicToggle && bgMusic) {
        musicToggle.addEventListener("click", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(err => console.log("Audio awaiting active confirmation trigger..."));
                musicToggle.textContent = "⏸ Pause Music";
                musicToggle.classList.add("active");
            } else {
                bgMusic.pause();
                musicToggle.textContent = "🎵 Play Music";
                musicToggle.classList.remove("active");
            }
        });
    }

    window.addEventListener('mousedown', (e) => {
        if (e.target.closest('.popup-card') || e.target.closest('#close-memory-popup') || e.target.closest('.control-btn')) return;
        isDragging = true;
        startX = e.pageX;
        lastX = e.pageX;
        lastTime = Date.now();
        velocity = 0;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.pageX;
        const deltaX = currentX - lastX;
        
        currentAngle += deltaX * 0.005; 
        
        const now = Date.now();
        const timeDelta = now - lastTime;
        if (timeDelta > 0) {
            velocity = (deltaX / timeDelta) * 5;
            velocity = Math.max(-15, Math.min(15, velocity));
        }
        
        lastX = currentX;
        lastTime = now;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    window.addEventListener('touchstart', (e) => {
        if (e.target.closest('.popup-card') || e.target.closest('#close-memory-popup') || e.target.closest('.control-btn')) return;
        isDragging = true;
        startX = e.touches[0].pageX;
        lastX = startX;
        lastTime = Date.now();
        velocity = 0;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].pageX;
        const deltaX = currentX - lastX;
        
        currentAngle -= deltaX * 0.005;
        
        const now = Date.now();
        const timeDelta = now - lastTime;
        if (timeDelta > 0) {
            velocity = (deltaX / timeDelta) * 5;
            velocity = Math.max(-15, Math.min(15, velocity));
        }
        
        lastX = currentX;
        lastTime = now;
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (Math.abs(velocity) > 0.8) return; 
            const msg = card.getAttribute('data-message');
            popupContent.innerHTML = card.outerHTML;
            
            const internalCard = popupContent.querySelector('.polaroid');
            if (internalCard) {
                internalCard.style.setProperty("position", "static", "important");
                internalCard.style.setProperty("transform", "none", "important");
                internalCard.style.setProperty("left", "auto", "important");
                internalCard.style.setProperty("top", "auto", "important");
                internalCard.style.setProperty("margin", "0 auto 15px auto", "important");
                internalCard.style.opacity = '1';
                internalCard.style.filter = 'none';
            }
            
            popupText.textContent = msg;
            popup.style.display = 'flex';
        });
    });

    window.addEventListener('resize', () => {
    radiusX = window.innerWidth < 480 ? 180 : 560;
    radiusY = window.innerWidth < 480 ? 40 : 110;
});
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    

    updateCarousel();
    
}
(function() {
    document.addEventListener("DOMContentLoaded", () => {
        const finalStageBtn = document.getElementById("final-stage-trigger-btn");
        const finalStageScreen = document.getElementById("final-stage-screen");
        const closeFinalBtn = document.getElementById("close-final-stage");
        const sendWishBtn = document.getElementById("send-wish-btn");
        const wishInput = document.getElementById("heart-wish-input");
        const wishBoxContainer = document.getElementById("wish-box-container");
        const wishSuccessMsg = document.getElementById("wish-success-message");

        if (!finalStageBtn) return; 

        const proposeAcceptBtn = document.getElementById("close-memory-popup"); 
        if (proposeAcceptBtn) {
            proposeAcceptBtn.addEventListener("click", () => {
                setTimeout(() => {
                    finalStageBtn.style.display = "block";
                }, 1000);
            });
        } else {
            setTimeout(() => {
                finalStageBtn.style.display = "block";
            }, 10000);
        }

        const anniversaryStartDate = new Date(2022, 6, 7, 0, 0, 0); 

        function updateJourneyClock() {
            const now = new Date();
            let diffMs = now - anniversaryStartDate;
            if (diffMs < 0) diffMs = 0;

            const totalSeconds = Math.floor(diffMs / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);

            let yearsCount = now.getFullYear() - anniversaryStartDate.getFullYear();
            let monthsCount = now.getMonth() - anniversaryStartDate.getMonth();
            let daysCount = now.getDate() - anniversaryStartDate.getDate();

            if (daysCount < 0) {
                monthsCount--;
                const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
                daysCount += previousMonth;
            }
            if (monthsCount < 0) {
                yearsCount--;
                monthsCount += 12;
            }

            if (document.getElementById("years")) {
                document.getElementById("years").textContent = yearsCount.toString().padStart(2, '0');
                document.getElementById("months").textContent = monthsCount.toString().padStart(2, '0');
                document.getElementById("days").textContent = daysCount.toString().padStart(2, '0');
                document.getElementById("hours").textContent = (totalHours % 24).toString().padStart(2, '0');
                document.getElementById("minutes").textContent = (totalMinutes % 60).toString().padStart(2, '0');
                document.getElementById("seconds").textContent = (totalSeconds % 60).toString().padStart(2, '0');
            }
        }

        setInterval(updateJourneyClock, 1000);

        finalStageBtn.addEventListener("click", () => {
            finalStageScreen.style.display = "flex";
            updateJourneyClock();
        });

        closeFinalBtn.addEventListener("click", () => {
            finalStageScreen.style.display = "none";
        });

        function spawnFlyingHearts() {
            for (let i = 0; i < 40; i++) {
                setTimeout(() => {
                    const heart = document.createElement("div");
                    heart.classList.add("falling-heart");
                    heart.innerHTML = ["❤️", "💖", "💝", "🌸", "✨"][Math.floor(Math.random() * 5)];
                    heart.style.left = Math.random() * 100 + "vw";
                    heart.style.fontSize = (Math.random() * 1.5 + 1) + "rem";
                    const speed = Math.random() * 2 + 2;
                    heart.style.animationDuration = speed + "s";
                    document.body.appendChild(heart);
                    setTimeout(() => { heart.remove(); }, speed * 1000);
                }, i * 80);
            }
        }

        if (sendWishBtn) {
            sendWishBtn.addEventListener("click", () => {
                const secretWishText = wishInput.value.trim();

                if (secretWishText === "") {
                    wishInput.style.borderColor = "#ff4d6d";
                    return;
                }
                
                sendWishBtn.innerText = "Sending to My Heart... ✨";
                sendWishBtn.style.opacity = "0.7";
                sendWishBtn.disabled = true;

                
                const SERVICE_ID = "service_52gfbee"; 
                const TEMPLATE_ID = "template_fthpqtn";

                emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    message: secretWishText,
                    date: new Date().toLocaleString()
                })
                .then(() => {
                    spawnFlyingHearts();
                    if (wishBoxContainer && wishSuccessMsg) {
                        wishBoxContainer.style.display = "none";
                        wishSuccessMsg.style.display = "block";
                    }
                })
                .catch((error) => {
                    console.error("Email API tracking failed:", error);
                    spawnFlyingHearts();
                    if (wishBoxContainer && wishSuccessMsg) {
                        wishBoxContainer.style.display = "none";
                        wishSuccessMsg.style.display = "block";
                    }
                });
            });
        }
    });
})();
