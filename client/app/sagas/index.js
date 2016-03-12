import { getGithubData } from './getGithubData.saga';
import { getLoginData } from './getAuthData.saga';
import { getBitsData } from './getBitsData.saga';
import { postBitData } from './postBitData.saga';
export default [
    getGithubData,
    getLoginData,
    getBitsData,
    postBitData
];

