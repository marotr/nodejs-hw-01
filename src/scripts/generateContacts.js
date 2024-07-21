import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';


async function generateContacts(count) {
  try {

    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(data);


    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }


    const updatedContacts = [...contacts, ...newContacts];


    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), { encoding: 'utf8' });

    console.log(`Successfully added ${count} contacts to the database.`);
  } catch (error) {
    console.error('Error:', error);
  }
}
const count = process.argv[2] ? parseInt(process.argv[2], 10) : 5;
generateContacts(count);
