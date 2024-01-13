import * as api from './api';

export const endpoints = {
    example: '/ex/register',
};

export const joinOrganization = async (password: string) => {
    return api.post(endpoints.example, { password });
};
