/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		domains: ['api.selcdn.ru'],
	  },
	
};

module.exports = nextConfig;
