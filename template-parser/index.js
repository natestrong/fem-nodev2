

import {readFile, writeFile} from 'fs/promises';

function processTemplates(template, templateData) {
    for (const [key, value] of Object.entries(templateData)) {
        template = template.replace(new RegExp(`{${key}}`, 'g'), value)
    }
    return template;
}

async function readAndWriteTemplateUpdate(templatePath, templateData, writePath) {
    const template = await readFile(templatePath, 'utf-8');
    const updatedTemplate = processTemplates(template, templateData);
    await writeFile(writePath, updatedTemplate);
}

const TEMPLATE_PATH = new URL('template.html', import.meta.url);
const WRITE_PATH = new URL('index.html', import.meta.url);
const TEMPLATE_DATA = {
    title: 'Hello Cool Guys',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ut!'
};

readAndWriteTemplateUpdate(TEMPLATE_PATH, TEMPLATE_DATA, WRITE_PATH)
    .then(() => console.log('much success!'))
    .catch(e => console.warn('oops!\n', e));


