function getUrls() {
  return [
    {
      source: '/',
      has: [
        {
          type: 'cookie',
          key: 'postal_code',
          value: '(?<postal_code>.*)',
        },
      ],
      permanent: false,
      destination: `/auth?cp=:postal_code`,
    },
  ];
}

module.exports = {
  getUrls,
};
