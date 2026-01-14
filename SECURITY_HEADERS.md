# Security Headers Configuration for Deployment

# For Netlify: Add this to netlify.toml in project root
# [[headers]]
#   for = "/*"
#   [headers.values]
#     X-Frame-Options = "DENY"
#     X-Content-Type-Options = "nosniff"
#     Referrer-Policy = "strict-origin-when-cross-origin"
#     Permissions-Policy = "camera=(), microphone=(), geolocation=()"

# For Vercel: Add this to vercel.json in project root
# {
#   "headers": [
#     {
#       "source": "/(.*)",
#       "headers": [
#         { "key": "X-Frame-Options", "value": "DENY" },
#         { "key": "X-Content-Type-Options", "value": "nosniff" },
#         { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
#         { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
#       ]
#     }
#   ]
# }

# For Cloudflare Pages: Add _headers file to public folder with:
# /*
#   X-Frame-Options: DENY
#   X-Content-Type-Options: nosniff
#   Referrer-Policy: strict-origin-when-cross-origin
#   Permissions-Policy: camera=(), microphone=(), geolocation=()
