import crypto from "crypto"

export function generatePassword(length = 12, options = {}) {
    const defaultOptions = {
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
    };

    const settings = { ...defaultOptions, ...options };

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';

    if (settings.lowercase) characterPool += lowercaseChars;
    if (settings.uppercase) characterPool += uppercaseChars;
    if (settings.numbers) characterPool += numberChars;
    if (settings.symbols) characterPool += symbolChars;

    if (!characterPool) {
        throw new Error('At least one character type must be enabled');
    }

    const password = Array.from({ length }, () => {
        const index = crypto.randomInt(0, characterPool.length);
        return characterPool[index];
    }).join('');

    return password;
}


