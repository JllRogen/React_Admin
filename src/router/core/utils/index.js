
export function getPathBlocks(path) {
    if (!path) return null
    return path.split('/').filter(p => p)
} 