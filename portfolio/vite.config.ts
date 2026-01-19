import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env variables (including unprefixed ones)
  const env = loadEnv(mode, process.cwd(), '')

  /**
   * GitHub Pages base path handling
   *
   * - Project pages: https://<user>.github.io/<repo>/  → base = "/<repo>/"
   * - User/org pages: https://<user>.github.io/        → base = "/"
   *
   * Priority:
   * 1. VITE_BASE (if explicitly set)
   * 2. Derived from GITHUB_REPOSITORY in CI
   * 3. "/" for local development
   */
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

  const derivedBase =
    repoName && repoName.endsWith('.github.io')
      ? '/'
      : repoName
      ? `/${repoName}/`
      : '/'

  const base = env.VITE_BASE || derivedBase

  // Ensure define values are always strings
  const geminiApiKey = env.GEMINI_API_KEY || ''

  return {
    plugins: [react()],
    base,

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    define: {
      'process.env.API_KEY': JSON.stringify(geminiApiKey),
      'process.env.GEMINI_API_KEY': JSON.stringify(geminiApiKey),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  }
})
