const slugify = (text = ''): string => text.toLowerCase().replace(/[\s.]/g, '-')
export default slugify