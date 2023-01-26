const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'1d139498-bc26-44a5-8a5d-9f8d5628a1f0'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
