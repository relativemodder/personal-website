const getAge = (date: Date | undefined = undefined) : number => {
    const now = new Date();
    const birthday = date === undefined ? new Date(2006, 10, 23) : date;

    // @ts-expect-error FUCK YOU ESLINT
    const difference = now - birthday;
    const yearsOfDifference = Math.floor(difference / 1000 / 60 / 60 / 24 / 365);

    return yearsOfDifference;
}


export { getAge }