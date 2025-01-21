import type { INodeProperties } from 'n8n-workflow';

export const mainProperties: INodeProperties[] = [
	{
		displayName: 'Bearer Token',
		name: 'token',
		type: 'string',
		default: '',
		placeholder: 'Token',
		description: 'The JWT Token used for subscriptions',
		required: true,
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		placeholder: 'http://example.com',
		description: 'The URL to receive the SSE from',
		required: true,
	},
];
