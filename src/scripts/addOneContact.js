import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
    try {


        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        const contacts = JSON.parse(data);


        const newContact = createFakeContact();


        const updatedContacts = [...contacts, newContact];

        
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), { encoding: 'utf8' });

        console.log('Successfully added one contact to the database.');
      } catch (error) {
        console.error('Error:', error);
      }
};



addOneContact();
