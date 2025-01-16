export const formatDate = (date: Date) => {
    date = new Date(date);

    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}