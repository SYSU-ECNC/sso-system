/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnauthenticatedImport } from './routes/_unauthenticated'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as UnauthenticatedAuthLoginImport } from './routes/_unauthenticated/auth/login'
import { Route as AuthenticatedDashboardLayoutImport } from './routes/_authenticated/dashboard/_layout'
import { Route as AuthenticatedDashboardLayoutIndexImport } from './routes/_authenticated/dashboard/_layout/index'

// Create Virtual Routes

const AuthenticatedDashboardImport = createFileRoute(
  '/_authenticated/dashboard',
)()

// Create/Update Routes

const UnauthenticatedRoute = UnauthenticatedImport.update({
  id: '/_unauthenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const UnauthenticatedAuthLoginRoute = UnauthenticatedAuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => UnauthenticatedRoute,
} as any)

const AuthenticatedDashboardLayoutRoute =
  AuthenticatedDashboardLayoutImport.update({
    id: '/_layout',
    getParentRoute: () => AuthenticatedDashboardRoute,
  } as any)

const AuthenticatedDashboardLayoutIndexRoute =
  AuthenticatedDashboardLayoutIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthenticatedDashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_unauthenticated': {
      id: '/_unauthenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof UnauthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/dashboard': {
      id: '/_authenticated/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/_layout': {
      id: '/_authenticated/dashboard/_layout'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutImport
      parentRoute: typeof AuthenticatedDashboardRoute
    }
    '/_unauthenticated/auth/login': {
      id: '/_unauthenticated/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof UnauthenticatedAuthLoginImport
      parentRoute: typeof UnauthenticatedImport
    }
    '/_authenticated/dashboard/_layout/': {
      id: '/_authenticated/dashboard/_layout/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof AuthenticatedDashboardLayoutIndexImport
      parentRoute: typeof AuthenticatedDashboardLayoutImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedDashboardLayoutRouteChildren {
  AuthenticatedDashboardLayoutIndexRoute: typeof AuthenticatedDashboardLayoutIndexRoute
}

const AuthenticatedDashboardLayoutRouteChildren: AuthenticatedDashboardLayoutRouteChildren =
  {
    AuthenticatedDashboardLayoutIndexRoute:
      AuthenticatedDashboardLayoutIndexRoute,
  }

const AuthenticatedDashboardLayoutRouteWithChildren =
  AuthenticatedDashboardLayoutRoute._addFileChildren(
    AuthenticatedDashboardLayoutRouteChildren,
  )

interface AuthenticatedDashboardRouteChildren {
  AuthenticatedDashboardLayoutRoute: typeof AuthenticatedDashboardLayoutRouteWithChildren
}

const AuthenticatedDashboardRouteChildren: AuthenticatedDashboardRouteChildren =
  {
    AuthenticatedDashboardLayoutRoute:
      AuthenticatedDashboardLayoutRouteWithChildren,
  }

const AuthenticatedDashboardRouteWithChildren =
  AuthenticatedDashboardRoute._addFileChildren(
    AuthenticatedDashboardRouteChildren,
  )

interface AuthenticatedRouteChildren {
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRouteWithChildren
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedDashboardRoute: AuthenticatedDashboardRouteWithChildren,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

interface UnauthenticatedRouteChildren {
  UnauthenticatedAuthLoginRoute: typeof UnauthenticatedAuthLoginRoute
}

const UnauthenticatedRouteChildren: UnauthenticatedRouteChildren = {
  UnauthenticatedAuthLoginRoute: UnauthenticatedAuthLoginRoute,
}

const UnauthenticatedRouteWithChildren = UnauthenticatedRoute._addFileChildren(
  UnauthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof UnauthenticatedRouteWithChildren
  '/dashboard': typeof AuthenticatedDashboardLayoutRouteWithChildren
  '/auth/login': typeof UnauthenticatedAuthLoginRoute
  '/dashboard/': typeof AuthenticatedDashboardLayoutIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof UnauthenticatedRouteWithChildren
  '/dashboard': typeof AuthenticatedDashboardLayoutIndexRoute
  '/auth/login': typeof UnauthenticatedAuthLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/_unauthenticated': typeof UnauthenticatedRouteWithChildren
  '/_authenticated/dashboard': typeof AuthenticatedDashboardRouteWithChildren
  '/_authenticated/dashboard/_layout': typeof AuthenticatedDashboardLayoutRouteWithChildren
  '/_unauthenticated/auth/login': typeof UnauthenticatedAuthLoginRoute
  '/_authenticated/dashboard/_layout/': typeof AuthenticatedDashboardLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/dashboard' | '/auth/login' | '/dashboard/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/dashboard' | '/auth/login'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/_unauthenticated'
    | '/_authenticated/dashboard'
    | '/_authenticated/dashboard/_layout'
    | '/_unauthenticated/auth/login'
    | '/_authenticated/dashboard/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  UnauthenticatedRoute: typeof UnauthenticatedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  UnauthenticatedRoute: UnauthenticatedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/_unauthenticated"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/dashboard"
      ]
    },
    "/_unauthenticated": {
      "filePath": "_unauthenticated.tsx",
      "children": [
        "/_unauthenticated/auth/login"
      ]
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/dashboard/_layout"
      ]
    },
    "/_authenticated/dashboard/_layout": {
      "filePath": "_authenticated/dashboard/_layout.tsx",
      "parent": "/_authenticated/dashboard",
      "children": [
        "/_authenticated/dashboard/_layout/"
      ]
    },
    "/_unauthenticated/auth/login": {
      "filePath": "_unauthenticated/auth/login.tsx",
      "parent": "/_unauthenticated"
    },
    "/_authenticated/dashboard/_layout/": {
      "filePath": "_authenticated/dashboard/_layout/index.tsx",
      "parent": "/_authenticated/dashboard/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
