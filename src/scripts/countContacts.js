import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        const contacts = JSON.parse(data);
        return contacts.length;

    } catch (error) {
        console.error('Error:', error);
        return 0;

    }
};

console.log(await countContacts());
