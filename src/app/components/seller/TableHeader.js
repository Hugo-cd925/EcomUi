export default function getTableHeader(header) {
    switch (header) {
        case ('id'):
            return 'ID';
        case ('name'):
            return 'Name';
        case ('description'):
            return 'Description';
        case ('img'):
            return 'Image';
        case('active'):
        return 'Active';
        case('price'):
        return 'Price';
    }
}