import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="site-header">
        <h1>Reading List</h1>
        <p>Links worth coming back to</p>
      </header>
      <main className="site-main">{children}</main>
    </>
  )
}
