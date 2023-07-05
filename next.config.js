module.exports = {
    experimental: {
      serverActions: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'drive.google.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  }