export const formatL_F_PATRONYMIC = (lastname, firstname, patronymic, spaceSymbol = ".") => {
    return `${firstname[0].toUpperCase()}${spaceSymbol}${patronymic[0].toUpperCase()}${spaceSymbol} ${lastname[0].toUpperCase()}${lastname.substr(1, lastname.length)}`;
}