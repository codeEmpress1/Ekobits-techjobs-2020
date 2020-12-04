function palindrome(str) {
    const alphabetsOnly = str.toLowerCase().match(/[a-z0-9]/g);
    return alphabetsOnly.join('') === alphabetsOnly.reverse().join('');
}