import { Api } from '../../generated-api/Api';
const api = new Api({baseUrl: 'https://api.banz-ai.ru'});
const sendMail = api.sendMail.sendMail
async function runParsing () {
    const resp = await Promise.all(
        [
        api.runScrape.runScrapeList(),
        api.runRss.runRssList()
        ]);
    return resp
}
type SitePage = {
    title: string
    icon?: string
} & (
    { to: { name: string} } | { href: string }
);
export interface RunAction {
    label: string;
    runFunction?: ()=>Promise<any>;
}
export interface SitePageGroup {
    title: string;
    icon: string;
    runAction?: RunAction;
    items: SitePage[]
}
type Sitemap = SitePageGroup[];
export const sitemap: Sitemap = [ {
        title: 'Парсинг',
        icon: 'mdi-spider',
        runAction: {
            label: 'Запустить парсинг',
            runFunction: runParsing
            //runUrl: 'http://45.133.178.134:35474/run_rss?token=your_secret_token'
        },
        items: [
            {
                title: 'Источники',
                to: {name: '/data_sources'}
            },
            {
                title: 'LLM-Парсер',
                to: {name: '/llm_parser'}
            },
            {
                title: 'Временной срез',
                to: {name: '/time_boundaries'}
            }
        ],
    },
    {
        title: 'Ранжирование',
        icon:'mdi-podium-gold',
        runAction: {
            label: 'Ранжировать',
            runFunction: api.runGrade.runGradeList
            //runUrl: 'http://45.133.178.134:35474/progress/run_grade?token=your_secret_token'
        },
        items: [
            {
                title: 'Ранжированные новости',
                to: {name: '/ranked_table'}
            },
            {
                title: 'Настройки LLM',
                to: {name: '/ranking_llm_settings'}
            },
            {
                title: 'Порог ранжирования',
                to: {name: '/ranking_limit'}
            }
        ]
    },
    {
        title: 'Саммаризация',
        icon: 'mdi-sigma',
        runAction: {
            label: 'Саммаризировать',
            runFunction: api.runSummarization.runSummarizationList
        },
        items: [
            {
                title: 'Саммаризованные новости',
                to: {name: '/summarized_news'},
            },
            {
                title: 'Настройки LLM',
                to: {name: '/summarization_llm_settings'}
            },
            {
                title: 'Ограничения по символам',
                to: {name: '/summarization_limits'}
            }
        ]
    },
    {
        title: 'Дайджест',
        icon: 'mdi-file-outline',
        runAction: {
            label: 'Сформировать дайджест',
            runFunction: api.runDigestGeneration.runDigestGenerationList
        },
        items: [
            {
                title: 'Предпросмотр дайджеста',
                to: {name: '/digest_preview'}
            },
        ]
    },
    {
        title: 'Рассылка',
        icon: 'mdi-email-multiple',
        runAction: {
            label: 'Отправить письмо',
            runFunction: sendMail
        },
        items: [
            {
                title: 'Настройки рассылки',
                to: {name: '/subscription_settings'}
            }
        ]
    }
    ]