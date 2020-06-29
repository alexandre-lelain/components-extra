const isAnchor = (link: string): boolean => !!link && !link.includes('http')
export default isAnchor