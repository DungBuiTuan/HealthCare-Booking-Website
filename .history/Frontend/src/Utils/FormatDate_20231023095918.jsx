export const FormatDate = (date, config) => {
    const defaultOption = { day:'numeric', month:'shỏt', year:'numeric' };
    const option = config ? config : defaultOption;

    return new Date(date).toLocaleDateString('en-US', option);
};