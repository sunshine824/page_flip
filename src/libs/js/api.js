import {post, get} from './fetch'

export function getLogo() {
    const result = post('/api/logo')
    return result;
}