import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    mkcert(),
    {
      // Handles Chrome's Private Network Access (PNA) preflight.
      // Chrome sends OPTIONS + Access-Control-Request-Private-Network: true
      // before allowing a public HTTPS page to fetch from localhost.
      name: 'private-network-access',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', '*')
          res.setHeader('Access-Control-Allow-Private-Network', 'true')

          if (req.method === 'OPTIONS') {
            res.statusCode = 204
            res.end()
            return
          }
          next()
        })
      },
    },
  ],
  server: {
    port: 5173,
  },
})
