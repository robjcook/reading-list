import { BookmarkCard } from './components/BookmarkCard'
import { Layout } from './components/Layout'
import './App.css'

const bookmarks = [
  {
    title: 'Learn React',
    url: 'https://react.dev/learn',
    tags: ['react', 'docs'],
  },
  {
    title: 'You Might Not Need an Effect',
    url: 'https://react.dev/learn/you-might-not-need-an-effect',
    tags: ['react', 'hooks'],
  },
  {
    title: 'Vite Guide',
    url: 'https://vite.dev/guide/',
    tags: ['tooling', 'docs'],
  },
  {
    title: 'TanStack Query',
    url: 'https://tanstack.com/query/latest',
    tags: ['react', 'data-fetching'],
  },
  {
    title: 'React Testing Library: Guiding Principles',
    url: 'https://testing-library.com/docs/guiding-principles',
    tags: ['testing', 'react'],
  },
]

function App() {
  return (
    <Layout>
      <div className="bookmark-list">
        {bookmarks.map((bookmark) => (
          <BookmarkCard
            key={bookmark.url}
            title={bookmark.title}
            url={bookmark.url}
            tags={bookmark.tags}
          />
        ))}
      </div>
    </Layout>
  )
}

export default App
