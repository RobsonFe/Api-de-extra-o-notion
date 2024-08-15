import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

async function NotionFindAll() {
    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const databaseId = process.env.ID_DO_BANCO;

        if (!databaseId) {
            throw new Error('ID_DO_BANCO não está definido.');
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
async function NotionFindById(id: string) {
    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const databaseId = process.env.ID_DO_BANCO;

        if (!databaseId) {
            throw new Error('ID do Banco não está definido.');
        }

        const filter = {
            database_id: databaseId,
            id: id,
        };

        const tasks = await notion.databases.query(filter);
        console.log('Consultando Dados no Notion');
        console.log(JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Erro ao consultar os dados:', error);
    }
}

async function NotionList() {
    try {
        const notion = new Client({ auth: process.env.NOTION_TOKEN });

        const databaseId = process.env.ID_DO_BANCO;

        if (!databaseId) {
            throw new Error('ID_DO_BANCO não está definido');
        }

        const filter = {
            database_id: databaseId,
        };

        const result = await notion.databases.query(filter);

        const tasks = result.results.map((page: any) => {
            return {
                id: page.id,
                titulo: page.properties.Tarefa.title[0].plain_text,
                status: page.properties.Status.status.name,
                prioridade: page.properties.Prioridade.select,
            };
        });

        console.log('Consultando Dados do Notion');
        console.log(tasks);
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
    }
}

async function NotionCreate() {
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

        const tasks = await notion.pages.create;
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
    }
}

export { NotionFindAll, NotionFindById, NotionList, NotionCreate };
