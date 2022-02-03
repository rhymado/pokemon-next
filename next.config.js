module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  rewrites: async function () {
    return [
      {
        source: "/user", // url asal/url baru
        destination: "/profile", // url tujuan/url lama
      },
    ];
  },
};
