import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), { encoding: 'utf8' });

    console.log('All contacts have been removed from the database.');

    } catch (error) {
        console.error('Error:', error);

    }
};

removeAllContacts();
