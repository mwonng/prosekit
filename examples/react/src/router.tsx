import slugify from '@sindresorhus/slugify'
import { Suspense, lazy, useEffect, useState } from 'react'

import { stories } from './stories'

const routes = stories.map(([name, factory]) => ({
  name,
  path: slugify(name),
  Component: lazy(async () => ({ default: (await factory()).App })),
}))

function usePath() {
  const [path, setPath] = useState(slugify(window.location.hash))

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent) => {
      setPath(slugify(new URL(event.newURL).hash))
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return path
}

export function Router() {
  const path = usePath()
  const currentRoute = routes.find((route) => route.path === path) || routes[0]

  return (
    <div>
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <a href={`#${route.path}`}>
                {route.path === currentRoute.path ? (
                  <mark>{route.name}</mark>
                ) : (
                  <span>{route.name}</span>
                )}
              </a>
            </li>
          )
        })}
      </ul>
      <Suspense>
        <currentRoute.Component />
      </Suspense>
    </div>
  )
}