/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: "mongodb+srv://ashritha:Ashritha22@cluster0.ern3std.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
