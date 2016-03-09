import { getGithubData } from './getGithubData.saga';
import { getLoginData } from './getAuthData.saga';

export default [
    getGithubData,
    getLoginData
];

