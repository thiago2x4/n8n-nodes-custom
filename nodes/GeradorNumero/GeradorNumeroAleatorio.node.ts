import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    NodeOperationError,
} from 'n8n-workflow';

export class GeradorNumeroAleatorio implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Random',
        name: 'geradorAleatorio',
        icon: 'file://iconeNumeroAleatorio.svg',
        group: ['transform'],
        version: 1,
        description: 'Node customizado que gera um numero aleatorio atraves da API do Random.org',
        defaults: {
            name: 'Gerador de Numeros Aleatorios',
        },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'Operação',
                name: 'operacao',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'True Random Number Generator',
                        value: 'numeroAleatorio',
                        description: 'Gera um numero verdadeiramente aleatorio',
                        action: 'Gera um numero aleatorio',
                    },
                ],
                default: 'numeroAleatorio',
            },
            {
                displayName: 'Valor minimo',
                name: 'min',
                type: 'number',
                typeOptions: {
                    numberPrecision: 0,
                },
                default: 1,
                description: 'Valor minimo gerado',
                displayOptions: {
                    show: {
                        operacao: ['numeroAleatorio'],
                    },
                },
            },
            {
                displayName: 'Valor maximo',
                name: 'max',
                type: 'number',
                typeOptions: {
                    numberPrecision: 0,
                },
                default: 100,
                description: 'Valor maximo gerado',
                displayOptions: {
                    show: {
                        operacao: ['numeroAleatorio'],
                    },
                },
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();    
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
        try {
            const min = this.getNodeParameter('min', i) as number;
            const max = this.getNodeParameter('max', i) as number;

            // Valida se o min e max foram definidos e se são diferentes de + e -
            if (min == undefined || min.toString() == '+' || min.toString() == '-' || max == undefined || max.toString() == '+' || max.toString() == '-') {
                throw new NodeOperationError(
                    this.getNode(), 
                    'Os valores minimo e maximo devem ser numeros inteiros'
                );
            }
            
            // Valida se o min é menor que o max
            if (min >= max) {
                throw new NodeOperationError(
                    this.getNode(), 
                    `O valor mínimo (${min}) deve ser menor que o máximo (${max})`
                );
            }
            
            // URL random.org com parametros de min e max
            const apiUrl = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

            // Requisicao HTTP para a API
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: apiUrl,
            });

            // Converte a resposta para string removendo espacos em branco e então converte para inteiro decimal
            const Numero_Aleatorio = parseInt(response.toString().trim(), 10);

            returnData.push({
                json: {
                    Numero_Aleatorio
                },
            });

        } catch (error) {
            if (error instanceof Error) {
                throw new NodeOperationError(this.getNode(), error);
            }
            throw error;
        }
    }

    return [returnData];
    
    }  
}
