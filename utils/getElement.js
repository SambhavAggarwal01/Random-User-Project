const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;

    throw new Error('No Element Selected');
}

export default getElement;