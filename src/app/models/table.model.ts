export interface UsersTable {
    results : {
        gender: string;
        phone: number;
        nat: string;
        name: {
            first: string;
            last: string;
        }
        location: {
            country: string;
        }
        picture: {
            large: string;
        }
    }
}

