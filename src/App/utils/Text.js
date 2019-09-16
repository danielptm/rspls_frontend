const Text = {
    fitName: (text) => {
        if (text.length > 10) {
            return text.substring(0, 10) + '...';
        } else {
            return text;
        }
    }
};

export {Text};