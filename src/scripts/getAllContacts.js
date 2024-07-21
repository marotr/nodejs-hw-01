import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {

        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        const contacts = JSON.parse(data);
        return contacts;
      } catch (error) {
        console.error('Error:', error);
        return [];
      }
    };

    

console.log(await getAllContacts());
