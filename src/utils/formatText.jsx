// Parses **text** markers and returns React nodes with <strong> for bold segments
export function formatText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: 'var(--text-1)', fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}
