import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
    NodeOperationError,
} from 'n8n-workflow';

export class GeradorNumeroAleatorio implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Random Generator',
        name: 'randomGenerator',
        icon: 'fa:iconeNumeroAleatorio.svg',
        group: ['transform'],
        version: 1,
        description: 'Generate random numbers using Random.org API',
        defaults: {
            name: 'Random Generator',
        },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Generate Random Number',
                        value: 'generateRandom',
                        description: 'Generate a true random number',
                        action: 'Generate a true random number',
                    },
                ],
                default: 'generateRandom',
            },
            {
                displayName: 'Minimum Value',
                name: 'min',
                type: 'number',
                default: 1,
                description: 'Minimum value (inclusive)',
                displayOptions: {
                    show: {
                        operation: ['generateRandom'],
                    },
                },
            },
            {
                displayName: 'Maximum Value',
                name: 'max',
                type: 'number',
                default: 100,
                description: 'Maximum value (inclusive)',
                displayOptions: {
                    show: {
                        operation: ['generateRandom'],
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
            
            // URL simples para teste
            const apiUrl = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

            // Usar o helper HTTP do n8n
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: apiUrl,
            });

            const randomNumber = parseInt(response.toString().trim(), 10);

            returnData.push({
                json: {
                    randomNumber,
                    min,
                    max,
                    timestamp: new Date().toISOString(),
                },
                pairedItem: { item: i },
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
