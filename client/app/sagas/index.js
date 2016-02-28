import { getGithubData } from './getGithubData.saga';
import { getLoginData } from './loginData.saga'

export default [
    getGithubData,
    getLoginData
];
