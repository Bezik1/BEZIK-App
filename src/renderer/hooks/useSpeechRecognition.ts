import { useEffect, useState } from "react";

const useSpeechRecognition = () => {
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    const [text, setText] = useState("");
    const [listening, setListening] = useState(false);

    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const rec = new SpeechRecognition();
            rec.continuous = true;
            rec.lang = "pl-PL";
            setRecognition(rec);
        } else {
            console.warn('SpeechRecognition not supported');
        }
    }, []);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log("onresult: ", event);
            setText(event.results[0][0].transcript);
            recognition.stop();
            setListening(false);
        };
    }, [recognition]);

    const startListening = () => {
        if (!recognition) {
            console.error('Recognition not initialized');
            return;
        }
        setText("");
        setListening(true);
        console.log("Start")
        recognition.start();
    };

    const stopListening = () => {
        if (!recognition) {
            console.error('Recognition not initialized');
            return;
        }
        setListening(false);
        console.log("Stop")
        recognition.stop();
    };

    return { text, listening, startListening, stopListening, hasRecognition: !!recognition };
}

export { useSpeechRecognition };