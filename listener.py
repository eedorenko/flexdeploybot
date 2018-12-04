import speech_recognition as sr
import requests 
import subprocess
import time

URL = "http://localhost:8080/t/odaapp/sendtobotfn-trigger"

r = sr.Recognizer()
mic = sr.Microphone()

activatePhrase='calypso'
byePhrase='goodbye'
active = False

def say(text):
    subprocess.call(['say', text])


with mic as source:
    r.energy_threshold = 2000
    #r.adjust_for_ambient_noise(source)

print('ready')

while True:   
    try:
        with mic as source:  
            #r.adjust_for_ambient_noise(source)
            audio = r.listen(source, phrase_time_limit=5)            
            transcript = r.recognize_google(audio)
            print(transcript)
            if not active and transcript.lower() == activatePhrase:
                active = True
                say('Howdy, how can I help you?')
            if transcript.lower() == byePhrase:
                say('See you later')
                break                
            if active:
                requests.post(url = URL, data = transcript) 
                time.sleep(5)
            
    except sr.UnknownValueError:
        print("Sorry Eugene, I don't understand you")
        #time.sleep(3)
        #pass
    