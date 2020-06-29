const slugify = (text = ''): string => text ? text.toLowerCase().replace(/[\s.]/g, '-') : text
export default slugify