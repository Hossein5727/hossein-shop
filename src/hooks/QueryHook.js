import { useLocation } from 'react-router-dom'

export function useQuary() {
    return new URLSearchParams(useLocation().search)
}