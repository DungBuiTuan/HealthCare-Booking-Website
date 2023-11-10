export const FormatDate = (date, config) => {
    const defaultOption = { day:'numeric', month:'long', year:'numeric' };
    const option = config ? config : defaultOption;

    return new Date(date).toLocaleDateString('en-US', option);
};