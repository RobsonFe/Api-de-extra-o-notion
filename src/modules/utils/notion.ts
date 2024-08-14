import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

async function Notion() {
    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const databaseId = process.env.ID_DO_BANCO;

        if (!databaseId) {
            throw new Error(
                'ID_DO_BANCO não está definido nas variáveis de ambiente.',
            );
        }

        const filter = {
            database_id: databaseId,
        };

        const tasks = await notion.databases.query(filter);
        console.log('Consultando Dados do Notion');
        console.log(tasks);
        console.log(JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
    }
}

export { Notion };
