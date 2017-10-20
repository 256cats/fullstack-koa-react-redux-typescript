import { 
  API_ROUTE_PREFIX,
  API_VERSION
} from './constants'

export function getApiRoutePrefix() {
  return `/${API_ROUTE_PREFIX}/v${API_VERSION}`
}