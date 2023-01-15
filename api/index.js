require('dotenv').config()
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
	urlEndpoint: process.env.NUXT_IMAGEKIT_URL_ENDPOINT,
	publicKey: process.env.NUXT_IMAGEKIT_PUBLIC_KEY,
	privateKey: process.env.NUXT_IMAGEKIT_PRIVATE_KEY
});

export default function index(req, res) {
	const result = imagekit.getAuthenticationParameters();
	res.send(result);
}