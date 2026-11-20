type BookmarkCardProps = {
  title: string
  url: string
  tags: string[]
}

export function BookmarkCard({ title, url, tags }: BookmarkCardProps) {
  return (
    <article className="bookmark-card">
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}
